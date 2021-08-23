import axios from "axios";

const CLIENT_ID = process.env.VUE_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.VUE_APP_CLIENT_SECRET;

async function getToken() {
    const data = await axios({
        baseURL: "https://accounts.spotify.com/api/token",
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: "Basic " + btoa(CLIENT_ID + ":" + CLIENT_SECRET),
        },
        data: "grant_type=client_credentials",
    });

    return await data.data.access_token;
}

function getFavoritesLocalStorage(name, page) {
    const data = localStorage.getItem("favorites");

    if (data !== null) {
        const favorites = JSON.parse(data)
            .favorites.sort((a, b) => a.id.localeCompare(b.id))
            .filter((track) =>
                track.name.toLowerCase().includes(name.toLowerCase())
            );

        return favorites.slice((page - 1) * 20, page * 20);
    }

    return [];
}

export default {
    async getAlbums(name) {
        const token = await getToken();

        const data = await axios({
            baseURL: "https://api.spotify.com/v1/search",
            method: "GET",
            headers: {
                Authorization: "Bearer " + token,
            },
            params: {
                q: name,
                type: "album",
            },
        });

        return await data.data.albums;
    },

    async getArtists(name) {
        const token = await getToken();

        const data = await axios({
            baseURL: "https://api.spotify.com/v1/search",
            method: "GET",
            headers: {
                Authorization: "Bearer " + token,
            },
            params: {
                q: name,
                type: "artist",
            },
        });

        return await data.data.artists;
    },

    async getTracks(name) {
        const token = await getToken();

        const data = await axios({
            baseURL: "https://api.spotify.com/v1/search",
            method: "GET",
            headers: {
                Authorization: "Bearer " + token,
            },
            params: {
                q: name,
                type: "track",
            },
        });

        return await data.data.tracks;
    },

    async getTrackById(id) {
        const token = await getToken();

        const data = await axios({
            baseURL: "https://api.spotify.com/v1/tracks/" + id,
            method: "GET",
            headers: {
                Authorization: "Bearer " + token,
            },
        });

        return await data.data;
    },

    async getArtistsTopTracks(id) {
        const token = await getToken();

        const data = await axios({
            baseURL: "https://api.spotify.com/v1/artists/" + id + "/top-tracks",
            method: "GET",
            headers: {
                Authorization: "Bearer " + token,
            },
            params: {
                market: "US",
            },
        });

        return await data.data.tracks;
    },

    async getAlbum(id) {
        const token = await getToken();

        const data = await axios({
            baseURL: "https://api.spotify.com/v1/albums/" + id,
            method: "GET",
            headers: {
                Authorization: "Bearer " + token,
            },
            params: {
                market: "US",
            },
        });

        return await data.data.tracks;
    },

    async getMoreData(url) {
        const token = await getToken();

        const data = await axios({
            baseURL: url,
            method: "GET",
            headers: {
                Authorization: "Bearer " + token,
            },
        });

        return await data.data;
    },

    async getFavorites(name, page = 1) {
        const favorites = getFavoritesLocalStorage(name, page);
        
        if (!favorites.length) return { items: [], next: null };

        let tracks = [];

        for (let track of favorites) {
            // await this.getTrackById(track.id).then((data) => {
            //     tracks.push(data);
            // });

            tracks.push(await this.getTrackById(track.id));
        }

        return { items: tracks, next: page + 1 };
    },
};
