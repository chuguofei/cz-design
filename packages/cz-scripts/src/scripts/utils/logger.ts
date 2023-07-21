import { type ResolvedServerUrls } from 'vite'
import consola from 'consola'
import chalk from 'chalk'

export function printServerUrls(
  urls: ResolvedServerUrls,
  optionsHost: string | boolean | undefined,
): void {
  const colorUrl = (url: string) =>
    chalk.cyan(url.replace(/:(\d+)\//, (_, port) => `:${chalk.bold(port)}/`))
  for (const url of urls.local) {
    consola.info(`  ${chalk.green('➜')}  ${chalk.bold('Local')}:   ${colorUrl(url)}`)
  }
  for (const url of urls.network) {
    consola.info(`  ${chalk.green('➜')}  ${chalk.bold('Network')}: ${colorUrl(url)}`)
  }
  if (urls.network.length === 0 && optionsHost === undefined) {
    consola.info(
      chalk.dim(`  ${chalk.green('➜')}  ${chalk.bold('Network')}: use `) +
        chalk.bold('--host') +
        chalk.dim(' to expose'),
    )
  }
}
