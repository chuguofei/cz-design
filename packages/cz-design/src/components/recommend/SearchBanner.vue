<template>
  <div class="search-banner">
    <picture class="banner-bg">
      <source
        type="image/webp"
        srcset="
          https://st0.dancf.com/market-operations/side/content-assembly/1681701092686.png?x-oss-process=image/resize,h_198/crop,w_768,g_center,type_6/interlace,1/format,webp,
          https://st0.dancf.com/market-operations/side/content-assembly/1681701092686.png?x-oss-process=image/resize,h_396/crop,w_1536,g_center,type_6/interlace,1/format,webp 2x
        "
        media="(max-width: 1080px)" />
      <source
        type="image/webp"
        srcset="
          https://st0.dancf.com/market-operations/side/content-assembly/1681701092686.png?x-oss-process=image/resize,h_198/crop,w_1128,g_center,type_6/interlace,1/format,webp,
          https://st0.dancf.com/market-operations/side/content-assembly/1681701092686.png?x-oss-process=image/resize,h_396/crop,w_2256,g_center,type_6/interlace,1/format,webp 2x
        "
        media="(max-width: 1440px)" />
      <source
        type="image/webp"
        srcset="
          https://st0.dancf.com/market-operations/side/content-assembly/1681701092686.png?x-oss-process=image/resize,h_198/crop,w_1608,g_center,type_6/interlace,1/format,webp,
          https://st0.dancf.com/market-operations/side/content-assembly/1681701092686.png?x-oss-process=image/resize,h_396/crop,w_3216,g_center,type_6/interlace,1/format,webp 2x
        "
        media="(max-width: 1920px)" />
      <source
        type="image/webp"
        srcset="
          https://st0.dancf.com/market-operations/side/content-assembly/1681701092686.png?x-oss-process=image/resize,h_198/crop,w_2248,g_center,type_6/interlace,1/format,webp,
          https://st0.dancf.com/market-operations/side/content-assembly/1681701092686.png?x-oss-process=image/resize,h_396/crop,w_4496,g_center,type_6/interlace,1/format,webp 2x
        "
        media="(max-width: 2560px)" />
      <img
        class="banner-bg__img"
        src="https://st0.dancf.com/market-operations/side/content-assembly/1681701092686.png"
    /></picture>
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
