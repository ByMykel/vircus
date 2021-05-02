<template>
    <div class="artist-container">
        <div class="artist-container-header">
            <div>
                <img
                    v-if="image"
                    :src="image"
                    :alt="artist.name"
                    class="artist-image"
                />

                <div v-else class="artist-image-default">
                    <!-- heroicons: user -->
                    <svg
                        class="icon-user"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        ></path>
                    </svg>
                </div>
            </div>

            <div class="artist-details">
                <div>
                    <div>
                        <a
                            :href="artist.external_urls.spotify"
                            class="artist-name"
                            v-text="artist.name"
                        ></a>

                        <span
                            :title="popularityCircle"
                            :class="circleColor"
                            class="popularity-circle"
                        >
                        </span>
                    </div>

                    <div class="artist-followers" v-text="totalFollowers"></div>
                </div>

                <div class="icon-arrow-container">
                    <div
                        class="icon-arrow-background"
                        @click="loadArtistData()"
                    >
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

        <div v-show="show" class="artist-container-body">
            <div v-if="loading" class="message">Loading...</div>

            <div v-if="noDataMessage" class="message">No data</div>

            <track-card
                v-for="track in tracks"
                :key="track.id"
                :track="track"
                small
            ></track-card>
        </div>
    </div>
</template>

<script>
import Spotify from "../Spotify";
import TrackCard from "./TrackCard.vue";

export default {
    name: "ArtistCard",

    components: {
        TrackCard,
    },

    props: {
        artist: Object,
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
        popularityCircle() {
            return "Popularity " + this.artist.popularity;
        },

        circleColor() {
            if (this.artist.popularity >= 70) {
                return "popularity-circle-green";
            }

            if (this.artist.popularity >= 40) {
                return "popularity-circle-orange";
            }

            return "popularity-circle-red";
        },

        totalFollowers() {
            return this.artist.followers.total + " followers";
        },

        noDataMessage() {
            return (
                !this.loading && this.fetchedData && this.tracks.length === 0
            );
        },

        image() {
            if (this.artist.images.length > 0) {
                return this.artist.images[0].url;
            }

            return "";
        },
    },

    methods: {
        async loadArtistData() {
            this.show = !this.show;

            if (this.fetchedData) return;

            this.fetchedData = true;

            this.loading = true;
            this.tracks = await Spotify.getArtistsTopTracks(this.artist.id);
            this.loading = false;
        },
    },
};
</script>

<style scoped>
.artist-container {
    margin-top: 10px;
    overflow: hidden;
}

.artist-container-header {
    display: flex;
    background: #212121;
    height: 90px;
    padding: 4px;
}

.artist-container-body {
    border-top: 1px solid #535353;
    background: #535353;
    padding: 0 10px 10px 10px;
}

.artist-image {
    width: 82px;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
}

.artist-image-default {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 82px;
    height: 100%;
    background: #121212;
    border-radius: 5px;
}

.artist-details {
    width: 100%;
    margin-left: 10px;
    display: flex;
    justify-content: space-between;
}

.artist-name {
    color: #ffffff;
    font-size: 13px;
    text-decoration: none;
}

.artist-name:hover {
    color: #1db954;
}

.artist-followers {
    color: #b3b3b3;
    font-size: 10px;
}

.popularity-circle {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 9999px;
    margin-left: 5px;
}

.popularity-circle-green {
    background: #1db954;
}

.popularity-circle-orange {
    background: #f59b23;
}

.popularity-circle-red {
    background: #e61e32;
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

.icon-user {
    width: 30px;
    height: 30px;
    color: #535353;
}

.message {
    color: #ffffff;
    text-align: center;
    padding-top: 10px;
}

@media (min-width: 640px) {
    .artist-container {
        border-radius: 5px;
    }

    .artist-container-header {
        height: 160px;
    }

    .artist-image {
        width: 152px;
    }

    .artist-image-default {
        width: 152px;
    }

    .artist-name {
        font-size: 19px;
    }

    .artist-followers {
        font-size: 16px;
    }

    .popularity-circle {
        width: 10px;
        height: 10px;
    }

    .icon-arrow {
        width: 30px;
        height: 30px;
    }

    .icon-user {
        width: 60px;
        height: 60px;
    }
}
</style>