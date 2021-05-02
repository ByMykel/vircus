<template>
    <div id="app">
        <Home />
    </div>
</template>

<script>
import Home from './views/Home.vue';

export default {
    name: "App",

    components: {
        Home,
    },
};
</script>

<style>
* {
    font-family: Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    background: #121212;
}
</style>
