import consola from 'consola'
import chalk from 'chalk'
import { build, type Format, type BuildOptions } from 'esbuild'
import path from 'path'
import vue from 'unplugin-vue/esbuild'
import { emptyDir } from 'fs-extra'

const outPath = path.resolve('dist')
const srcPath = path.resolve('src')

const buildBundle = () => {
  const getBuildOptions = (format: Format) => {
    const options: BuildOptions = {
      entryPoints: [path.resolve(srcPath, 'index.ts'), path.resolve(srcPath, 'global.ts')],
      target: 'es2018',
      platform: 'neutral',
      format,
      // 压缩
      // minify: true,
      bundle: true,
      banner: {
        js: `/*! CzDesign Icons Vue v */\n`,
      },
      external: ['vue'],
      plugins: [
        vue({
          isProduction: true,
          sourceMap: false,
        }),
      ],
      outdir: outPath,
    }
    return options
  }

  const startBuild = async (minify: boolean) => {
    await Promise.all([
      // es6
      build({
        ...getBuildOptions('esm'),
        entryNames: `[name]${minify ? '.min' : ''}`,
        minify,
      }),
      // common js
      build({
        ...getBuildOptions('cjs'),
        entryNames: `[name]${minify ? '.min' : ''}`,
        outExtension: { '.js': '.cjs' },
        minify,
      }),
    ])
  }

  return Promise.all([startBuild(false)])
}

consola.info(chalk.red('start build icon===>'))
await emptyDir(outPath)
await buildBundle()
