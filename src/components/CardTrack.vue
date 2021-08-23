<template>
    <div :class="{ 'track-container-small': small }" class="track-container">
        <span v-if="track.explicit" title="Explicit content">
            <!-- heroicons: information-circle -->
            <svg
                class="icon-explicit"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clip-rule="evenodd"
                ></path>
            </svg>
        </span>
        <div>
            <div
                v-show="showSkeletonImage"
                :class="[
                    small
                        ? 'track-image-small-skeleton'
                        : 'track-image-skeleton',
                ]"
            ></div>
            <img
                v-show="!showSkeletonImage"
                :class="{ 'track-image-small': small }"
                :src="image()"
                :alt="track.name"
                class="track-image"
                @load="showSkeletonImage = false"
            />
        </div>
        <div class="track-details">
            <div>
                <div>
                    <a
                        :href="track.external_urls.spotify"
                        target="_blank"
                        :class="{ 'track-name-small': small }"
                        class="track-name"
                        v-text="track.name"
                    ></a>
                </div>
                <div
                    :class="{ 'track-artists-small': small }"
                    class="track-artists"
                    v-text="artists"
                ></div>
            </div>
            <div class="track-actions">
                <div v-if="track.preview_url">
                    <span v-if="!playing" @click="play()">
                        <!-- heroicons: play -->
                        <svg
                            class="icon icon-green"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </span>
                    <span v-else @click="stop()">
                        <!-- heroicons: stop -->
                        <svg
                            class="icon icon-red"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8 7a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V8a1 1 0 00-1-1H8z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </span>
                </div>
                <div v-else>
                    <span class="icon-container">
                        <!-- heroicons: play -->
                        <svg
                            class="icon-disable"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </span>
                </div>
                <div @click="toggleFavorite(track)">
                    <span v-if="has(track.id)" class="icon-container">
                        <svg
                            class="icon-heart icon-green"
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
                    </span>
                    <span v-else class="icon-container">
                        <svg
                            class="icon-heart icon-gray"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            ></path>
                        </svg>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    name: "CardTrack",

    props: {
        track: Object,
        small: Boolean,
    },

    data() {
        return {
            audio: new Audio(this.track.preview_url),
            playing: false,
            showSkeletonImage: true,
        };
    },

    computed: {
        ...mapGetters("favorites", ["has"]),

        artists() {
            return this.track.artists.map((artist) => artist.name).join(" · ");
        },
    },

    methods: {
        ...mapActions("favorites", ["toggle"]),

        play() {
            this.playing = true;
            this.audio.volume = 0.1;
            this.audio.play();
            this.audio.addEventListener("ended", () => {
                this.playing = false;
            });
        },

        stop() {
            this.playing = false;
            this.audio.pause();
        },

        image() {
            if (this.track.album.images.length > 0) {
                return this.track.album.images[0].url;
            }

            return " ";
        },

        toggleFavorite(track) {
            this.toggle({ id: track.id, name: track.name });
        },
    },
};
</script>

<style scoped>
.track-container {
    position: relative;
    display: flex;
    background: #212121;
    margin-top: 10px;
    height: 90px;
    overflow: hidden;
    padding: 4px;
    width: 100%;
}

.track-container-small {
    height: 60px;
    margin: 6px 6px;
    border-radius: 5px;
    width: auto;
}

.track-image {
    width: 82px;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
}

.track-image-skeleton {
    width: 82px;
    height: 100%;
    background: #535353;
    border-radius: 5px;
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.track-image-small {
    width: 52px;
}

.track-image-small-skeleton {
    width: 52px;
    height: 100%;
    background: #535353;
    border-radius: 5px;
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.track-name {
    color: white;
    font-size: 13px;
    text-decoration: none;
}

.track-name:hover {
    color: #1db954;
}

.track-name-small {
    font-size: 12px;
}

.track-artists {
    color: #b3b3b3;
    font-size: 10px;
}

.track-artists-small {
    font-size: 9px;
}

.track-details {
    width: 100%;
    margin-left: 10px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    align-items: center;
}

.track-actions {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.icon {
    display: flex;
    width: 32px;
    height: 32px;
    cursor: pointer;
    margin-right: 10px;
}

.icon-heart {
    display: flex;
    width: 18px;
    height: 18px;
    cursor: pointer;
    margin-right: 10px;
    margin-top: 2px;
}

.icon-gray {
    color: #b3b3b3;
}

.icon-green {
    color: #1db954;
}

.icon-red {
    color: #e61e32;
}

.icon-explicit {
    position: absolute;
    right: 4px;
    top: 4px;
    width: 12px;
    height: 12px;
    color: #b3b3b3;
}

.icon-disable {
    width: 32px;
    height: 32px;
    cursor: not-allowed;
    margin: 0 10px 0 0;
    color: #b3b3b3;
    opacity: 0.4;
}

.icon-container {
    display: flex;
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
    .track-container {
        border-radius: 5px;
    }

    .track-container {
        height: 160px;
    }

    .track-container-small {
        height: 100px;
    }

    .track-details {
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
    }

    .track-actions {
        display: flex;
        align-items: center;
        flex-direction: row;
    }

    .track-image {
        width: 152px;
    }

    .track-image-skeleton {
        width: 152px;
    }

    .track-image-small {
        width: 92px;
    }

    .track-image-small-skeleton {
        width: 92px;
    }

    .track-name {
        font-size: 19px;
    }

    .track-name-small {
        font-size: 16px;
    }

    .track-artists {
        font-size: 16px;
    }

    .track-artists-small {
        font-size: 13px;
    }

    .icon-explicit {
        width: 20px;
        height: 20px;
    }

    .icon-heart {
        margin-top: 0;
    }
}
</style>