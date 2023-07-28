<template>
  <div class="ai-warpper">
    <Header style="height: 64px" />
    <main class="ai-container">
      <section class="flex bg-white-1 w-full lg:w-[500px]">
        <ul class="flex flex-col w-28 space-y-4 pt-6 scrollbar-none border-r border-gray-5">
          <li
            class="w-16 h-16 flex flex-col flex-none items-center justify-center mx-auto text-center rounded-md cursor-pointer hover:bg-gray-50 transition-bg"
            :class="[{ ['!bg-gray-200 font-bold']: item.key === currentType.key }]"
            v-for="item in typeListData"
            :key="item.key"
            @click="handleSwitchType(item)"
          >
            <span class="text-xs">{{ item.label }}</span>
          </li>
        </ul>
        <div class="w-full py-2 px-4">
          <component :is="currentType.component" />
          <!-- 组件 -->
        </div>
      </section>
      <section class="relative w-full h-full flex-1 p-4 bg-[#F8F8FB]">das</section>
    </main>
  </div>
</template>

<script setup lang="ts" name="AiDesign">
import { ref, type Component } from 'vue'
import { Header } from '@/components/ai'
import textToImg from '@/views/ai/design/textToImg.vue'
import imgToImg from '@/views/ai/design/imgToImg.vue'

type TypeList = {
  key: string
  label: string
  component: Component
}

const typeListData = ref<TypeList[]>([
  {
    key: 'txtToImg',
    label: '文生图',
    component: textToImg,
  },
  {
    key: 'imgToImg',
    label: '图生图',
    component: imgToImg,
  },
])

const currentType = ref(typeListData.value[0])

const handleSwitchType = (item: TypeList) => {
  currentType.value = item
}
</script>

<style lang="scss">
.ai-container {
  display: flex;
  width: 100%;
  height: calc(100vh - 64px);
  overflow: hidden;
  border-top-width: 1px;
  flex-grow: 1;
}
</style>
