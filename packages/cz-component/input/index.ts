import { App } from 'vue'
import { CzOptions } from '../_utils/types'
import _Input from './src/input'
import { getComponentPrefix, setGlobalConfig } from '../_utils/global-config'

export const Input = Object.assign(_Input, {
  install: (app: App, options?: CzOptions) => {
    setGlobalConfig(app, options)
    const componentPrefix = getComponentPrefix(options)
    app.component(componentPrefix + _Input.name, _Input)
  },
})

export default Input
