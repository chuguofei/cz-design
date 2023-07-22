<template>
  <i class="cz-icon" :style="style" v-bind="$attrs"></i>
</template>

<script lang="ts" setup>
import { computed, PropType } from 'vue'
import { isUndefined, addUnit } from '@cz-design/utils'

defineOptions({
  name: 'CzIcon',
  inheritAttrs: false,
})

const props = defineProps({
  size: {
    type: [String, Number] as PropType<string | number>,
  },
  color: {
    type: String as PropType<string>,
  },
})

const style = computed(() => {
  const { size, color } = props
  if (!size && !color) return
  return {
    fontSize: isUndefined(size) ? undefined : addUnit(size),
    '--color': color,
  }
})
</script>
