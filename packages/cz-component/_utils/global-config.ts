import { getCurrentInstance, inject, App } from 'vue'
import { configProviderInjectionKey } from '../config-provider/context'
import { CzOptions } from './types'

// 组件名称前缀
const COMPONENT_PREFIX = 'cz'
// css 类名前缀
const CLASS_PREFIX = 'cz'
const GLOBAL_CONFIG_NAME = '$cz'

// 获取组件名称前缀
export const getComponentPrefix = (options?: CzOptions) => {
  return options?.componentPrefix ?? COMPONENT_PREFIX
}

export const setGlobalConfig = (app: App, options?: CzOptions) => {
  if (options && options.classPrefix) {
    app.config.globalProperties[GLOBAL_CONFIG_NAME] = {
      ...(app.config.globalProperties[GLOBAL_CONFIG_NAME] ?? {}),
      classPrefix: options.classPrefix,
    }
  }
}

// 获取类名前缀
export const getPrefixCls = (componentName?: string): string => {
  const instance = getCurrentInstance()
  const configProvider = inject(configProviderInjectionKey, undefined)

  // 先去看 app provider 中有没有实现，没有在去组件的instance 中查看，最后看是否传入
  const prefix =
    configProvider?.prefixCls ??
    instance?.appContext.config.globalProperties[GLOBAL_CONFIG_NAME]?.classPrefix ??
    CLASS_PREFIX
  if (componentName) {
    return `${prefix}-${componentName}`
  }
  return prefix
}
