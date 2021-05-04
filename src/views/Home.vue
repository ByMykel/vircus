<template>
    <div class="container">
        <img
            src="../assets/Spotify_logo_with_text.svg"
            class="logo-spotify"
            alt="logo-spotify"
        />

        <search-bar
            :selected="selected"
            @search-artist="query = $event"
            @selected="changeSelected($event)"
        ></search-bar>

        <div v-if="selected === 1">
            <transition-group name="list-items">
                <card-artist
                    v-for="artist in items.items"
                    :key="artist.id"
                    :artist="artist"
                ></card-artist>
            </transition-group>
        </div>

        <div v-else-if="selected === 2">
            <transition-group name="list-items">
                <card-track
                    v-for="track in items.items"
                    :key="track.id"
                    :track="track"
                ></card-track>
            </transition-group>
        </div>

        <div v-else-if="selected === 3">
            <transition-group name="list-items">
                <card-album
                    v-for="album in items.items"
                    :key="album.id"
                    :album="album"
                ></card-album>
            </transition-group>
        </div>
    </div>
</template>

<script>
import Spotify from "../Spotify";
import SearchBar from "../components/SearchBar.vue";
import CardArtist from "../components/CardArtist.vue";
import CardTrack from "../components/CardTrack.vue";
import CardAlbum from "../components/CardAlbum.vue";

export default {
    name: "Home",

    components: {
        SearchBar,
        CardArtist,
        CardTrack,
        CardAlbum,
    },

    data() {
        return {
            items: [],
            selected: 1,
            query: "",
        };
    },

    watch: {
        query: "fetchData",
    },

    mounted() {
        window.addEventListener("scroll", () => {
            let bottomOfWindow =
                document.documentElement.scrollTop + window.innerHeight >
                document.documentElement.offsetHeight - 1;

            if (bottomOfWindow) {
                this.getMoreData(this.items.next);
            }
        });
    },

    methods: {
        changeSelected(selected) {
            if (this.selected === selected) return;

            this.selected = selected;
            this.items = [];
            this.fetchData(this.query);
        },

        async fetchData() {
            if (this.query === "") {
                this.items = [];
                return;
            }

            let data = [];

            switch (this.selected) {
                case 1:
                    data = await Spotify.getArtists(this.query);
                    break;
                case 2:
                    data = await Spotify.getTracks(this.query);
                    break;
                case 3:
                    data = await Spotify.getAlbums(this.query);
                    break;
            }

            this.items = data;
        },

        async getMoreData(url) {
            if (this.items.next === null) return;

            let data = [];

            switch (this.selected) {
                case 1:
                    data = (await Spotify.getMoreData(url)).artists;
                    break;
                case 2:
                    data = (await Spotify.getMoreData(url)).tracks;
                    break;
                case 3:
                    data = (await Spotify.getMoreData(url)).albums;
                    break;
            }

            this.items = {
                ...data,
                items: [...this.items.items, ...data.items],
            };
        },
    },
};
</script>

<style scoped>
.container {
    margin: 0 auto;
    width: 100%;
    height: 100%;
    padding-bottom: 20px;
    position: relative;
}

.logo-spotify {
    display: block;
    margin: 0 auto;
    padding: 30px 0;
    width: 150px;
}

.list-items-enter-active,
.list-items-leave-active {
    transition: opacity 0.5s;
}

.list-items-enter,
.list-items-leave-to {
    opacity: 0;
}

.list-items-move {
    transition: transform 0.5s;
}

.list-items-item {
    transition: opacity 0s;
}

.list-items-enter,
.list-items-leave-to {
    opacity: 0;
}

.list-items-leave-active {
    position: absolute;
}

@media (min-width: 640px) {
    .container {
        width: 95%;
    }
}

@media (min-width: 768px) {
    .container {
        width: 90%;
    }
}

@media (min-width: 1024px) {
    .container {
        max-width: 64rem;
    }
}
</style>
