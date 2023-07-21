<template>
    <div class="inner">
        <span class="logo">创作助手</span>
        <ul class="navbar-list">
            <li class="current">首页</li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.inner {
    display: flex;
    align-items: center;
    padding: 0 6px;
    height: 100%;

    .logo {
        margin-right: 10px;
        font-weight: bold;
    }

    .navbar-list {
        display: flex;
        align-items: center;
        li {
            cursor: pointer;
            user-select: none;
            font-size: 14px;
            height: 30px;
            line-height: 30px;
            padding: 4px 15px;
            border-radius: 4px;
            &.current {
                font-weight: bold;
                background-color: #f5f7fd;
            }
            &:hover {
                background-color: #f5f7fd;
            }
        }
    }
}
.navbar-list {
    display: flex;
    align-items: center;
    li {
        cursor: pointer;
        user-select: none;
        font-size: 14px;
        height: 30px;
        line-height: 30px;
        padding: 4px 15px;
        border-radius: 4px;
        &.current {
            font-weight: bold;
            background-color: #f5f7fd;
        }
        &:hover {
            background-color: #f5f7fd;
        }
    }
}
</style>
