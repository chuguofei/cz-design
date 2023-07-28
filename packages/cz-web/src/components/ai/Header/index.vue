<template>
  <header :class="cls" class="w-full flex items-center px-4 bg-white">
    <span @click="handleRouterTo('/ai')" class="logo text-lg font-bold mr-2 cursor-pointer">
      AI助手
    </span>
    <span class="mx-2 h-6 w-0.5 bg-gray-300"></span>
    <span class="plaza text-sm">广场</span>
  </header>
</template>

<script name="AIHeader" lang="ts" setup>
import { getPrefixCls } from '@cz-design/component/_utils/global-config'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const prefixCls = getPrefixCls('ai-header')

const cls = computed(() => [prefixCls])

const handleRouterTo = (path: string) => {
  router.push(path)
}
</script>
