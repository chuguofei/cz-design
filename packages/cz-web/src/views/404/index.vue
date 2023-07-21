<template>
    <div class="page-notfound">
        <div>页面没有找到</div>
        <button class="to-home">
            <a href="/"> 返回首页 </a>
        </button>
    </div>
</template>

<style lang="scss">
.page-notfound {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .to-home {
        border: 0;
        display: block;
        width: 200px;
        height: 48px;
        background: #0773fc;
        border-radius: 32px;
        font-size: 18px;
        text-align: center;
        line-height: 48px;
        color: #fff;
        cursor: pointer;

        a {
            color: inherit;
        }
        &:hover {
            background-color: #0668e3;
        }
    }
}
</style>
