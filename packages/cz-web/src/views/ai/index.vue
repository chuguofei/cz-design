<template>
  <div class="ai-warpper">
    <Header />
    <main class="ai-container hidden sm:flex">
      <AiSiderBar />
      <div class="p-4 w-full">
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
  border: 1px red solid;
}
</style>
