import _Icon from './src/icon.vue'
import type { App } from 'vue'
import { getComponentPrefix, setGlobalConfig } from '../_utils/global-config'
import { type CzOptions } from '../_utils/types'

export const Icon = Object.assign(_Icon, {
  install: (app: App, options?: CzOptions) => {
    setGlobalConfig(app, options)
    const componentPrefix = getComponentPrefix(options)
    app.component(componentPrefix + _Icon.name, _Icon)
  },
})
export default Icon
