#!/usr/bin/env node
import path from 'path'
import fs from 'fs-extra'
import { Command } from 'commander'

const program = new Command()

const packageContent = fs.readFileSync(path.resolve(__dirname, '../package.json'), 'utf8')

const packageData: any = JSON.parse(packageContent)

program.version(packageData.version).name('cz-scripts').usage('command [options]')

program
  .command('dev:component')
  .description('项目启动')
  .action(async () => {
    console.log('========')
  })

program.parse(process.argv)
