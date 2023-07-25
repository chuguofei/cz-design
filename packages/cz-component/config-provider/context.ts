import { InjectionKey, Slots } from 'vue'
import { Size } from '../_utils/constant'

export interface ConfigProvider {
  slots: Slots
  prefixCls?: string
  size?: Size
  updateAtScroll?: boolean
  scrollToClose?: boolean
}

export const configProviderInjectionKey: InjectionKey<ConfigProvider> = Symbol('CzConfigProvider')
