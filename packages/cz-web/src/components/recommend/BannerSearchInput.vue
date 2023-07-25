<template>
  <cz-input v-model="search" size="mini" placeholder="111" allowClear />
  <cz-input v-model="search" size="small" placeholder="111" allowClear />
  <cz-input v-model="search" size="medium" placeholder="111" allowClear />
  <cz-input v-model="search" size="large" placeholder="111" allowClear />
  <div class="banner-search-warpper">
    <!-- <input v-model="search" class="search-input" /> -->
    <!-- <span class="search-close icon">
      <cz-icon>
        <CircleClose />
      </cz-icon>
    </span> -->
  </div>
</template>

<script name="BannerSearchInput" setup lang="ts">
import { ref } from 'vue'
import { CircleClose } from '@cz-design/icon'
// import { Icon, Input } from '@cz-design/component'

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
