import consola from 'consola'
import chalk from 'chalk'
import { build } from 'esbuild'
import path from 'path'
import { pathCzIcon } from './utils'
import vue from 'unplugin-vue/esbuild'

async function main() {
  consola.info(chalk.red('start build icon===>'))
  build({
    entryPoints: [
      path.resolve(pathCzIcon, 'src', 'index.ts'),
      path.resolve(pathCzIcon, 'src', 'global.ts'),
    ],
    target: 'es2018',
    entryNames: `[name]`,
    platform: 'neutral',
    format: 'esm',
    // 压缩
    minify: true,
    bundle: true,
    banner: {
      js: `/*! Element Plus Icons Vue v */\n`,
    },
    external: ['vue'],
    plugins: [
      vue({
        isProduction: true,
        sourceMap: false,
      }),
    ],
    outdir: path.resolve(pathCzIcon, 'dist'),
  })
}

export default main
