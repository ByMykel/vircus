<template>
    <div class="search-container">
        <input
            :placeholder="placeholder"
            class="search-bar"
            type="text"
            v-model="text"
            @keyup="$emit('search-artist', text)"
        />
        <search-options :selected="selected"></search-options>
        <!-- heroicons: search -->
        <svg
            class="search-icon"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
            ></path>
        </svg>
    </div>
</template>

<script>
import SearchOptions from "./SearchOptions.vue";

export default {
    name: "SearchBar",

    components: {
        SearchOptions,
    },

    props: {
        selected: Number,
    },

    data() {
        return {
            text: "",
            focus: false,
        };
    },

    computed: {
        placeholder() {
            return (
                "Search " +
                { 1: "artists", 2: "tracks", 3: "albums", 4: "favorites" }[
                    this.selected
                ]
            );
        },
    },
};
</script>

<style scoped>
.search-container {
    position: relative;
    width: 100%;
    height: 100%;
    margin-top: 10px;
}

.search-bar {
    position: relative;
    margin: 0 auto;
    width: 100%;
    font-size: 18px;
    padding: 12px 100px 12px 48px;
    margin-bottom: 20px;
    border: 0;
}

.search-icon {
    position: absolute;
    top: 7px;
    left: 0;
    padding-left: 12px;
    width: 35px;
    height: 35px;
    color: gray;
}

@media (min-width: 640px) {
    .search-bar {
        border-radius: 5px;
    }
}
</style>