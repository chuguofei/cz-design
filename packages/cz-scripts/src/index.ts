#!/usr/bin/env node
import path from 'path'
import fs from 'fs-extra'
import { Command } from 'commander'
import { ServerDev, IconGenerateComponent, buildProd } from './scripts'

const program = new Command()

const packageContent = fs.readFileSync(path.resolve(__dirname, '../package.json'), 'utf8')

const packageData: any = JSON.parse(packageContent)

program.version(packageData.version).usage('command [options]')

program
  .command('server:dev')
  .description('本地服务')
  .action(async () => {
    await ServerDev()
  })

program
  .command('build')
  .description('打包')
  .action(async () => {
    await buildProd()
  })

program
  .command('icon:generate')
  .description('生成图标库')
  .action(async () => {
    // generate component
    await IconGenerateComponent()
  })

program.parse(process.argv)
