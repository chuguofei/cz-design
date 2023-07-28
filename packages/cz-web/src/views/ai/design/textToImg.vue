<template>
  <div class="txt-to-img">
    <section class="flex flex-col space-y-2 rounded-md p-4 bg-gray-5">
      <div class="text-xs">文本描述</div>
      <div
        class="group w-full border border-gray-400 rounded-md overflow-hidden bg-white px-p12 pt-p10 pb-1 hover:border-primary-default transition-border"
      >
        <textarea v-model="prompt" class="textarea" :maxlength="maxLength"></textarea>
        <div class="flex justify-between items-center">
          <div></div>
          <div class="flex items-center">
            <span class="text-px12 text-gray-500 mr-p8"
              >{{ getSurplusLength }}/{{ maxLength }}</span
            >
            <span
              @click="hanldeClear"
              class="w-0 opacity-0 group-hover:w-p16 group-hover:!opacity-100 transition-all cursor-pointer"
            >
              <Icon size="16px" color="#9f9c9c">
                <CircleClose />
              </Icon>
            </span>
          </div>
        </div>
      </div>
    </section>
    <section>
      <button
        class="w-full bg-primary-500 text-center rounded-md text-white text-md py-2 hover:bg-primary-default transition duration-[200ms]"
      >
        生 成
      </button>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { Icon } from '@cz-design/component'
import { CircleClose } from '@cz-design/icon'

const props = defineProps({
  maxLength: {
    type: Number,
    default: 1000,
  },
})

const prompt = ref('')

const getSurplusLength = computed(() => {
  return prompt.value.length
})

const hanldeClear = () => {
  prompt.value = ''
}
</script>

<style lang="scss" scoped>
.textarea {
  width: 100%;
  height: 120px;
  resize: none;
  border-style: none;
  outline: 2px solid transparent;
  outline-offset: 2px;
  font-size: 14px;
  color: #1b2337;

  &::-webkit-scrollbar {
    width: 3px;
    height: 55px;
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    --tw-bg-opacity: 1;
    background-color: rgba(197, 200, 206, var(--tw-bg-opacity));
  }
}
</style>
