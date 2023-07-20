<template>
    <div class="zs-dashboard">
        <div class="zs-header">
            <Header />
        </div>
        <main class="zs-container">
            <SiderBar />
        </main>
    </div>
</template>

<script lang="ts" setup>
import { Header, SiderBar } from '@/components/dashboard'
</script>

<style lang="scss">
@import url('@/styles/dashboard.scss');
</style>
