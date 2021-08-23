<template>
    <div class="container-buttons">
        <button
            :class="{ 'button-selected': selected === 1 }"
            class="button-icon"
            @click="$parent.$emit('selected', 1)"
        >
            <!-- heroicons: user -->
            <svg
                :class="{ 'icon-selected': selected === 1 }"
                xmlns="http://www.w3.org/2000/svg"
                class="icon"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                />
            </svg>
        </button>
        <button
            :class="{ 'button-selected': selected === 2 }"
            class="button-icon"
            @click="$parent.$emit('selected', 2)"
        >
            <!-- heroicons: music-note -->
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon"
                :class="{ 'icon-selected': selected === 2 }"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                    d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z"
                />
            </svg>
        </button>
        <button
            :class="{ 'button-selected': selected === 3 }"
            class="button-icon"
            @click="$parent.$emit('selected', 3)"
        >
            <!-- heroicons: collection -->
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon"
                :class="{ 'icon-selected': selected === 3 }"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path
                    d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"
                />
            </svg>
        </button>
        <button
            :class="{ 'button-selected': selected === 4 }"
            class="button-icon"
            @click="$parent.$emit('selected', 4)"
        >
            <!-- heroicons: heart -->
            <svg
                class="icon"
                :class="{ 'icon-selected': selected === 4 }"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill-rule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clip-rule="evenodd"
                ></path>
            </svg>
        </button>
    </div>
</template>

<script>
export default {
    name: "SearchOptions",

    props: {
        selected: Number,
    },
};
</script>

<style scoped>
.container-buttons {
    display: flex;
    position: absolute;
    justify-content: center;
    align-items: center;
    top: 10px;
    right: 5px;
}

.button-icon {
    background: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2px;
    padding: 5px 5px;
    border-width: 0;
    border-radius: 9999px;
    cursor: pointer;
}

.button-icon:hover {
    background: #535353;
}

.button-selected {
    background: #212121;
}

.icon {
    display: block;
    color: #b3b3b3;
    width: 15px;
    height: 15px;
}

.icon-selected {
    color: #1db954;
}
</style>
