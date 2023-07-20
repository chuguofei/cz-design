<template>
  <a class="search-nav" @click="toPath(item.link)">
    <img
      class="search-nav__icon"
      src="https://st-gdx.dancf.com/gaodingx/4888/configs/system/20220707-161757-425e.svg"
    />
    <img
      class="search-nav__icon active"
      src="https://st0.dancf.com/market-operations/side/content-assembly/1680574776092.png?x-oss-process=image/resize,w_48/interlace,1/format,webp"
    />
  </a>
  <span class="search-label" v-text="item.label"></span>
</template>

<script setup lang="ts" name="SearchNav">
import { PropType } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

type ItemType = {
  icon?: string
  label: string
  link?: string
}

defineProps({
  item: {
    type: Object as PropType<ItemType>,
    required: true,
  },
})

const toPath = (route?: string) => {
  if (!route) return
  router.push(route)
}
</script>

<style lang="scss">
.search-label {
  font-size: 12px;
  line-height: 18px;
  text-shadow: 0 1px 13px rgba(0, 34, 155, 0.2);
  white-space: nowrap;
}
.search-nav {
  display: grid;
  box-sizing: content-box;
  grid: 'content' auto / auto;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  padding-bottom: 8px;
  cursor: pointer;

  &::before {
    content: '';
    display: block;
    grid-area: content;
    width: inherit;
    height: inherit;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 50%;
    transition: background 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
    backdrop-filter: blur(10px);
  }

  &__icon {
    z-index: 1;
    box-sizing: content-box;
    grid-area: content;
    width: 24px;
    height: 24px;
    padding: 10px;
    object-fit: contain;
    vertical-align: middle;
    border-style: none;
    opacity: 1;

    &.active {
      opacity: 0;
    }
  }

  &:hover {
    &::before {
      background: #fff;
    }
    .search-nav__icon {
      opacity: 0;
      &.active {
        opacity: 1;
      }
    }
  }
}
</style>
