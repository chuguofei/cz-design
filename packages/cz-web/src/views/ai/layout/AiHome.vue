<template>
  <div class="ai-warpper">
    <Header style="height: 64px" />
    <main class="ai-container flex">
      <AiSiderBar
        class="absolute left-[-200%] top-[64px] bottom-0 sm:left-0 transition-[left] duration-150"
      />
      <div class="px-2 py-2 w-[calc(100vw)] sm:ml-[12rem] sm:w-[calc(100vw-theme('spacing.48'))]">
        <RouterView />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { Header, AiSiderBar } from '@/components/ai'
</script>

<style lang="scss">
.ai-container {
  height: calc(100vh - 64px);
}
</style>
