<template>
    <div class="artist-container">
        <div class="artist-container-header">
            <div>
                <div
                    v-show="image && showSkeletonImage"
                    class="artist-image-skeleton"
                ></div>
                <img
                    v-show="image && !showSkeletonImage"
                    :src="image"
                    :alt="artist.name"
                    class="artist-image"
                    @load="showSkeletonImage = false"
                />
                <div v-if="!image" class="artist-image-default">
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
                            target="_blank"
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
                    <div v-if="loading" class="lds-circle"><div></div></div>
                    <div
                        v-else
                        class="icon-arrow-background"
                        @click="loadArtistData()"
                    >
                        <!-- heroicons: chevron-down -->
                        <svg
                            :class="[
                                show ? 'icon-arrow-down' : 'icon-arrow-up',
                            ]"
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
                    </div>
                </div>
            </div>
        </div>
        <transition
            @before-enter="setHeightToCero"
            @enter="setHeightToMax"
            @after-enter="setHeightToMax"
            @before-leave="setHeightToMax"
            @leave="setHeightToCero"
        >
            <div v-show="show" class="artist-container-body">
                <div v-if="noDataMessage" class="message">No data</div>
                <card-track
                    v-for="track in tracks"
                    :key="track.id"
                    :track="track"
                    small
                ></card-track>
            </div>
        </transition>
    </div>
</template>

<script>
import Spotify from "../Spotify";
import CardTrack from "./CardTrack.vue";

export default {
    name: "ArtistCard",

    components: {
        CardTrack,
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
            showSkeletonImage: true,
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
            if (!this.fetchedData) {
                this.loading = true;

                await Spotify.getArtistsTopTracks(this.artist.id)
                    .then((data) => {
                        this.tracks = data;
                    })
                    .finally(() => {
                        this.fetchedData = true;
                        this.loading = false;
                    });
            }

            this.show = !this.show;
        },

        setHeightToCero(el) {
            el.style.height = "0";
        },

        setHeightToMax(el) {
            el.style.height = el.scrollHeight + "px";
        },
    },
};
</script>

<style scoped>
.artist-container {
    margin-top: 10px;
    overflow: hidden;
    width: 100%;
}

.artist-container-header {
    display: flex;
    background: #212121;
    height: 90px;
    padding: 4px;
}

.artist-container-body {
    overflow: hidden;
    background: #535353;
    transition: 0.4s ease;
}

.artist-image {
    width: 82px;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
}

.artist-image-skeleton {
    width: 82px;
    height: 100%;
    background: #535353;
    border-radius: 5px;
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
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

.icon-arrow-down {
    transform: rotate(0deg);
    transition: transform 0.2s linear;
}

.icon-arrow-up {
    transform: rotate(-180deg);
    transition: transform 0.2s linear;
}

.icon-user {
    width: 30px;
    height: 30px;
    color: #535353;
}

.message {
    color: #ffffff;
    text-align: center;
    padding: 10px 0;
}

.lds-circle {
    display: inline-block;
    transform: translateZ(1px);
}

.lds-circle > div {
    display: inline-block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #535353;
    animation: lds-circle 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}

@keyframes lds-circle {
    0%,
    100% {
        animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
    }
    0% {
        transform: rotateY(0deg);
    }
    50% {
        transform: rotateY(1800deg);
        animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
    }
    100% {
        transform: rotateY(3600deg);
    }
}

@keyframes pulse {
    0%,
    100% {
        opacity: 1;
    }
    50% {
        opacity: 0.5;
    }
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

    .artist-image-skeleton {
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

    .lds-circle > div {
        width: 30px;
        height: 30px;
    }
}
</style>