import path from 'path'
import chalk from 'chalk'
import { consola } from 'consola'
import { emptyDir, ensureDir } from 'fs-extra'
import { findWorkspaceDir } from '@pnpm/find-workspace-dir'
import { findWorkspacePackages } from '@pnpm/find-workspace-packages'
import glob from 'fast-glob'
import fs from 'fs'
import { type BuiltInParserName, format } from 'prettier'
import { pathComponent } from './utils'

const toPascalCase = (string: string): string => {
  return string
    .replace(/^./, (match) => match.toLocaleUpperCase())
    .replace(/-(.)/g, (match, p1: string) => {
      return p1.toLocaleUpperCase()
    })
}

const getSvgFiles = async () => {
  const pkgs = await findWorkspacePackages((await findWorkspaceDir(process.cwd()))!)
  const pkg = pkgs.find((pkg: any) => pkg.manifest.name === '@cz-design/icon')!
  return glob('*.svg', { cwd: pkg.dir + '/svg', absolute: true })
}

const getName = (file: string) => {
  const filename = path.basename(file).replace('.svg', '')
  const componentName = toPascalCase(filename)
  return {
    filename,
    componentName,
  }
}
const formatCode = (code: string, parser: BuiltInParserName = 'typescript') =>
  format(code, {
    parser,
    semi: false,
    singleQuote: true,
  })

const transformToVueComponent = async (file: string) => {
  const content = await fs.readFileSync(file, 'utf-8')
  const { filename, componentName } = getName(file)
  const vue = formatCode(
    `
<template>
${content}
</template>
<script lang="ts">
import type { DefineComponent } from 'vue'
export default ({
  name: "${componentName}",
}) as DefineComponent
</script>`,
    'vue',
  )
  fs.writeFileSync(path.resolve(pathComponent, `${filename}.vue`), await vue)
}

const generateEntry = async (files: string[]) => {
  const code = formatCode(
    files
      .map((file) => {
        const { filename, componentName } = getName(file)
        return `export { default as ${componentName} } from './${filename}.vue'`
      })
      .join('\n'),
  )
  fs.writeFileSync(path.resolve(pathComponent, 'index.ts'), await code)
}

async function main() {
  consola.log(chalk.blue('开始生成icon vue component'))

  await ensureDir(pathComponent)
  await emptyDir(pathComponent)
  const files = await getSvgFiles()
  consola.info(chalk.blue('开始生成vue file'))
  await Promise.all(files.map((file) => transformToVueComponent(file)))

  consola.info(chalk.blue('开始生成 icon export'))
  await generateEntry(files)

  consola.info(chalk.green('任务执行成功'))
}

export default main
