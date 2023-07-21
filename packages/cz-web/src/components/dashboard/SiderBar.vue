<template>
  <aside class="zs-dashboad__siderbar">
    <ul class="navbar-tool">
      <li v-for="(item, index) in toolList" :key="index" class="navbar-item">
        <p v-if="item.title" v-text="item.title" class="sider-title"></p>
        <RouterLink
          v-for="child in item.children"
          :key="child.link"
          :to="child.link"
          class="navbar-item__link"
          :class="{ current: child.link === current }"
        >
          <span v-text="child.title"></span>
        </RouterLink>
      </li>
    </ul>
  </aside>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()

const current = ref(route.path)

watch(
  () => route.path,
  (newRoute) => {
    current.value = newRoute
  },
)

const toolList = ref([
  {
    children: [
      {
        title: '为你推荐',
        link: '/recommend',
      },
      {
        title: '模板中心',
        link: '/template',
      },
      {
        title: '素材中心',
        link: '/material',
      },
    ],
  },
  {
    title: '个人空间',
    children: [
      {
        title: '创建设计',
        link: 'design',
      },
    ],
  },
])
</script>

<style lang="scss" scoped>
$sider: 'zs-dashboad';
.#{$sider}__siderbar {
  width: 240px;
  min-width: 240px;
  height: 100%;
  background-color: #fff;
  margin: 0;
  box-sizing: border-box;

  .navbar-tool {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 10px 0;

    .navbar-item {
      display: flex;
      flex-direction: column;
      width: 80%;
      font-size: 14px;

      .sider-title {
        margin-bottom: 15px;
        padding: 0;
        font-size: 12px;
        color: #8693ab;
      }

      &__link {
        display: inline-flex;
        width: 100%;
        padding: 10px 0;
        border-radius: 4px;
        text-decoration: none;
        color: #1b2337;
        font-weight: 500;
        font-size: 14px;
        cursor: pointer;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

        &:not(:last-child) {
          margin-bottom: 5px;
        }

        span {
          display: inline-block;
          margin-left: 14px;
        }
        &:hover {
          background-color: #f5f7fd;
        }
        &.current {
          background-color: #f5f7fd;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
