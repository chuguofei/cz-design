<template>
  <div class="banner-search-warpper">
    <input v-model="search" class="search-input" />
    <span class="search-close icon">
      <CloseIcon color="red" />
    </span>
  </div>
</template>

<script name="BannerSearchInput" setup lang="ts">
import { ref } from 'vue'
import CloseIcon from '@/icon/close.vue'

const search = ref('')
</script>

<style lang="scss">
.banner-search-warpper {
  padding: 0;
  margin: 0 20px;
  padding: 0 20px;
  background-color: #fff;
  border-radius: 4px;
  height: 40px;

  .search-input {
    width: 100%;
    height: inherit;
    line-height: 30px;
    user-select: none;
    border: 0;
    box-sizing: border-box;
    outline: none;
    background-color: #fff;
  }
}
</style>
