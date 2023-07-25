<template>
  <ConfigProvider v-bind="config">
    <RouterView />
  </ConfigProvider>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { ConfigProvider } from '@cz-design/component'

const config = reactive({ global: true })
</script>
