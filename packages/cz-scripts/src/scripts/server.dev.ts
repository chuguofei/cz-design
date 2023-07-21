import { createServer, defineConfig, InlineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import setupExtend from 'vite-plugin-vue-setup-extend'
import consola from 'consola'
import chalk from 'chalk'

const root = process.cwd()

const config = defineConfig({
  plugins: [vue(), setupExtend()],
  mode: 'development',
  server: {
    port: 3000,
    fs: {
      strict: true,
      allow: ['..'],
    },
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(root, '../cz-design/src'),
      },
    ],
  },
}) as InlineConfig

async function run() {
  consola.log(chalk.red('server start ...'))
  const server = await createServer(config)
  await server.listen()
}

export default run
