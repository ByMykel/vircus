<template>
    <div id="app">
        <Home />
    </div>
</template>

<script>
import Home from "./views/Home.vue";

export default {
    name: "App",

    components: {
        Home,
    },
};
</script>

<style>
* {
    font-family: "Inter", sans-serif !important;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    background: #121212;
}

::-webkit-scrollbar {
    width: 6px;
    height: 6px;
}

/* Track */
::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    -webkit-border-radius: 6px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 6px;
}

/* Handle */
::-webkit-scrollbar-thumb {
    -webkit-border-radius: 6px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
    border-radius: 6px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
    background: #b3b3b3;
}

::-webkit-scrollbar-thumb:window-inactive {
    background: #b3b3b3;
}
</style>
