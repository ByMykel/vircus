<template>
    <div class="album-container">
        <div class="album-container-header">
            <div>
                <div
                    v-show="showSkeletonImage"
                    class="album-image-skeleton"
                ></div>
                <img
                    v-show="!showSkeletonImage"
                    :src="image()"
                    :alt="album.name"
                    class="album-image"
                    @load="showSkeletonImage = false"
                />
            </div>
            <div class="album-details">
                <div>
                    <div>
                        <a
                            :href="album.external_urls.spotify"
                            target="_blank"
                            class="album-name"
                            v-text="album.name"
                        ></a>
                    </div>
                    <span class="album-info" v-text="albumArtists"></span>
                    <span class="album-info" v-text="albumInfo"></span>
                </div>
                <div class="icon-arrow-container">
                    <div v-if="loading" class="lds-circle"><div></div></div>
                    <div
                        v-else
                        class="icon-arrow-background"
                        @click="loadAlbumData()"
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
            <div v-show="show" class="album-container-body">
                <div v-if="noDataMessage" class="message">No data</div>
                <card-track-small
                    v-for="track in tracks.items"
                    :key="track.id"
                    :track="track"
                ></card-track-small>
            </div>
        </transition>
    </div>
</template>

<script>
import Spotify from "../Spotify";
import CardTrackSmall from "./CardTrackSmall.vue";

export default {
    name: "AlbumCard",

    components: {
        CardTrackSmall,
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
            showSkeletonImage: true,
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
            if (!this.fetchedData) {
                this.loading = true;

                await Spotify.getAlbum(this.album.id)
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

        image() {
            if (this.album.images.length > 0) {
                return this.album.images[0].url;
            }

            return " ";
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
    overflow: hidden;
    background: #535353;
    transition: 0.4s ease;
}

.album-image {
    width: 82px;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
}

.album-image-skeleton {
    width: 82px;
    height: 100%;
    background: #535353;
    border-radius: 5px;
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
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

.icon-arrow-down {
    transform: rotate(0deg);
    transition: transform 0.2s linear;
}

.icon-arrow-up {
    transform: rotate(-180deg);
    transition: transform 0.2s linear;
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
    .album-container {
        border-radius: 5px;
    }

    .album-container-header {
        height: 160px;
    }

    .album-image {
        width: 152px;
    }

    .album-image-skeleton {
        width: 152px;
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

    .lds-circle > div {
        width: 30px;
        height: 30px;
    }
}
</style>