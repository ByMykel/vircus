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
            <img
                :class="{ 'track-image-small': small }"
                :src="image()"
                :alt="track.name"
                class="track-image"
            />
        </div>

        <div class="track-details">
            <div>
                <div>
                    <a
                        :href="track.external_urls.spotify"
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
        </div>
    </div>
</template>

<script>
export default {
    name: "TrackCard",

    props: {
        track: Object,
        small: Boolean,
    },

    data() {
        return {
            audio: new Audio(this.track.preview_url),
            playing: false,
        };
    },

    computed: {
        artists() {
            return this.track.artists.map((artist) => artist.name).join(" · ");
        },
    },

    methods: {
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
}

.track-container-small {
    height: 60px;
    margin-top: 8px;
    border-radius: 5px;
}

.track-image {
    width: 82px;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
}

.track-image-small {
    width: 52px;
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

.icon {
    width: 32px;
    height: 32px;
    cursor: pointer;
    margin-right: 10px;
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

    .track-image {
        width: 152px;
    }

    .track-image-small {
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
}
</style>