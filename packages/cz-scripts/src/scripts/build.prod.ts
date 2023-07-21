import { build, InlineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import setupExtend from 'vite-plugin-vue-setup-extend'

const root = process.cwd()

const config: InlineConfig = {
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(root, '../cz-web/src'),
      },
    ],
  },
  // @ts-ignore vite内部类型错误
  plugins: [vue(), setupExtend()],
}

async function main() {
  await build(config)
}

export default main
