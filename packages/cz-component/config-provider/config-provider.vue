<template>
  <slot></slot>
</template>

<script lang="ts">
import { defineComponent, PropType, getCurrentInstance, reactive, toRefs, provide } from 'vue'
import { Size } from '../_utils/constant'
import { configProviderInjectionKey } from './context'
export default defineComponent({
  name: 'ConfigProvider',
  props: {
    prefixCls: {
      type: String,
      default: 'cz',
    },
    // 组件大小
    size: {
      type: String as PropType<Size>,
    },
    global: {
      type: Boolean,
      default: false,
    },
    scrollToClose: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { slots }) {
    const { prefixCls, size, scrollToClose } = toRefs(props)

    const config = reactive({
      slots,
      prefixCls,
      size,
      scrollToClose,
    })
    if (props.global) {
      const instance = getCurrentInstance()
      if (instance) {
        instance.appContext.app.provide(configProviderInjectionKey, config)
      }
    } else {
      provide(configProviderInjectionKey, config)
    }
  },
})
</script>
