<template>
    <div class="album-container">
        <div class="album-container-header">
            <div>
                <img :src="image()" :alt="album.name" class="album-image" />
            </div>

            <div class="album-details">
                <div>
                    <div>
                        <a
                            :href="album.external_urls.spotify"
                            class="album-name"
                            v-text="album.name"
                        ></a>
                    </div>

                    <span class="album-info" v-text="albumArtists"></span>

                    <span class="album-info" v-text="albumInfo"></span>
                </div>

                <div class="icon-arrow-container">
                    <div class="icon-arrow-background" @click="loadAlbumData()">
                        <!-- heroicons: chevron-down -->
                        <svg
                            v-if="!show"
                            class="icon-arrow"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 9l-7 7-7-7"
                            ></path>
                        </svg>

                        <!-- heroicons: chevron-up -->
                        <svg
                            v-else
                            class="icon-arrow"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 15l7-7 7 7"
                            ></path>
                        </svg>
                    </div>
                </div>
            </div>
        </div>

        <div v-show="show" class="album-container-body">
            <div v-if="loading" class="message">Loading...</div>

            <div v-if="noDataMessage" class="message">No data</div>

            <track-album-card
                v-for="track in tracks.items"
                :key="track.id"
                :track="track"
            ></track-album-card>
        </div>
    </div>
</template>

<script>
import Spotify from "../Spotify";
import TrackAlbumCard from "./TrackAlbumCard.vue";

export default {
    name: "AlbumCard",

    components: {
        TrackAlbumCard,
    },

    props: {
        album: Object,
    },

    data() {
        return {
            show: false,
            fetchedData: false,
            tracks: [],
            loading: false,
        };
    },

    computed: {
        albumArtists() {
            return this.album.artists.map((artist) => artist.name).join(" · ");
        },

        albumInfo() {
            return (
                " · " +
                this.album.release_date +
                " · " +
                this.album.total_tracks +
                " total tracks"
            );
        },

        noDataMessage() {
            return (
                !this.loading && this.fetchedData && this.tracks.length === 0
            );
        },
    },

    methods: {
        async loadAlbumData() {
            this.show = !this.show;

            if (this.fetchedData) return;

            this.fetchedData = true;

            this.loading = true;
            this.tracks = await Spotify.getAlbum(this.album.id);
            this.loading = false;
        },

        image() {
            if (this.album.images.length > 0) {
                return this.album.images[0].url;
            }

            return " ";
        },
    },
};
</script>

<style scoped>
.album-container {
    margin-top: 10px;
    overflow: hidden;
    width: 100%;
}

.album-container-header {
    display: flex;
    background: #212121;
    height: 90px;
    padding: 4px;
}

.album-container-body {
    border-top: 1px solid #535353;
    background: #535353;
    padding: 0 10px 10px 10px;
}

.album-image {
    width: 82px;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
}

.album-details {
    width: 100%;
    margin-left: 10px;
    display: flex;
    justify-content: space-between;
}

.album-name {
    color: #ffffff;
    font-size: 13px;
    text-decoration: none;
}

.album-name:hover {
    color: #1db954;
}

.album-info {
    color: #b3b3b3;
    font-size: 10px;
}

.icon-arrow-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 15px;
}

.icon-arrow-background {
    display: flex;
    color: #b3b3b3;
    background: #535353;
    border-radius: 9999px;
}

.icon-arrow {
    width: 20px;
    height: 20px;
    cursor: pointer;
}

.message {
    color: #ffffff;
    text-align: center;
    padding-top: 10px;
}

@media (min-width: 640px) {
    .album-container {
        border-radius: 5px;
    }

    .album-container-header {
        height: 160px;
    }

    .album-image {
        width: 152px;
        height: 100%;
    }

    .album-name {
        font-size: 19px;
    }

    .album-info {
        font-size: 16px;
    }

    .icon-arrow {
        width: 30px;
        height: 30px;
    }
}
</style>