<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<style lang="less">
    * {
        margin: 0;
        padding: 0;
    }
    #app {
        width: 1200px;
        height: 800px;
        margin: 30px auto;
        font-family: Roboto, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-style: normal;
        text-align: center;
    }
</style>
