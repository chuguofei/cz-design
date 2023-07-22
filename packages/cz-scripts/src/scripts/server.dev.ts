import { createServer, defineConfig, InlineConfig, resolveConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import setupExtend from 'vite-plugin-vue-setup-extend'
import consola from 'consola'
import chalk from 'chalk'
import { printServerUrls } from './utils/logger'

const root = process.cwd()

const config = defineConfig({
  plugins: [vue(), vueJsx(), setupExtend()],
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
        replacement: path.resolve(root, '../cz-web/src'),
      },
    ],
  },
}) as InlineConfig

async function run() {
  const { server: serverConfig } = await resolveConfig(config, 'serve')
  const server = await createServer(config)
  await server.listen()
  consola.log(chalk.green(`root: ${root} ${path.resolve(root, '../cz-web/src')}`))
  consola.log(chalk.bgGreen(`server start ================================\n`))
  printServerUrls(server.resolvedUrls!, serverConfig.host)
  consola.log(chalk.bgGreen(`\nserver start ================================\n`))
}

export default run
