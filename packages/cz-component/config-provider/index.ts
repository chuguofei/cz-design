import type { App } from 'vue'

import _ConfigProvider from './config-provider.vue'
import { getComponentPrefix, setGlobalConfig } from '../_utils/global-config'
import { CzOptions } from '../_utils/types'

export const ConfigProvider = Object.assign(_ConfigProvider, {
  install: (app: App, options?: CzOptions) => {
    setGlobalConfig(app, options)
    const componentPrefix = getComponentPrefix(options)
    // <CzConfigProvider><CzConfigProvider>
    app.component(componentPrefix + _ConfigProvider.name, _ConfigProvider)
  },
})

export default ConfigProvider
