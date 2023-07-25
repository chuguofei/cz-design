import type { App, Plugin } from 'vue'
import { CzOptions } from './_utils/types'
import ConfigProvider from './config-provider'
import Icon from './icon'
import Input from './input'

const components: Record<string, Plugin> = {
  Icon,
  Input,
  ConfigProvider,
}

const install = (app: App, options?: CzOptions) => {
  for (const key of Object.keys(components)) {
    app.use(components[key], options)
  }
}

export default {
  install,
}
