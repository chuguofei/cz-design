<template>
  <div class="search-banner">
    <div class="search-banner__content">
      <BannerSearchInput />
      <ul class="search-tools">
        <li v-for="item in searchTypeList" :key="item.link" class="search-tools__item">
          <SearchNav :item="item" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import SearchNav from './SearchNav.vue'
import BannerSearchInput from './BannerSearchInput.vue'

const searchTypeList = ref([
  {
    icon: '',
    link: '',
    label: '稿定AI',
  },
  {
    icon: '',
    label: '公众号',
  },
  {
    icon: '',
    label: '小红书',
    link: '/recommend/xiaohongshu',
  },
  {
    icon: '',
    label: '金融保险',
  },
  {
    icon: '',
    label: '电商',
  },
  {
    icon: '',
    label: '海报设计',
  },
  {
    icon: '',
    label: 'PPT',
  },
  {
    icon: '',
    label: '查看更多',
  },
])
</script>

<style lang="scss">
@import './SearchBanner.scss';
</style>
