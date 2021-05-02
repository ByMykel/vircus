import axios from "axios";

const CLIENT_ID = process.env.VUE_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.VUE_APP_CLIENT_SECRET;

async function getToken() {
    const data = await axios({
        baseURL: 'https://accounts.spotify.com/api/token',
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + btoa(CLIENT_ID + ':' + CLIENT_SECRET)
        },
        data: 'grant_type=client_credentials',
    });

    return await data.data.access_token;
}

export default {
    async getAlbums(name) {
        const token = await getToken();

        const data = await axios({
            baseURL: 'https://api.spotify.com/v1/search',
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token
            },
            params: {
                q: name,
                type: 'album'
            }
        });

        return await data.data.albums;
    },

    async getArtists(name) {
        const token = await getToken();

        const data = await axios({
            baseURL: 'https://api.spotify.com/v1/search',
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token
            },
            params: {
                q: name,
                type: 'artist'
            }
        });

        return await data.data.artists;
    },

    async getTracks(name) {
        const token = await getToken();

        const data = await axios({
            baseURL: 'https://api.spotify.com/v1/search',
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token
            },
            params: {
                q: name,
                type: 'track'
            }
        });

        return await data.data.tracks;
    },

    async getArtistsTopTracks(id) {
        const token = await getToken();

        const data = await axios({
            baseURL: 'https://api.spotify.com/v1/artists/' + id + '/top-tracks',
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token
            },
            params: {
                market: 'US',
            }
        });

        return await data.data.tracks;
    },

    async getAlbum(id) {
        const token = await getToken();

        const data = await axios({
            baseURL: 'https://api.spotify.com/v1/albums/' + id,
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token
            },
            params: {
                market: 'US',
            }
        });

        return await data.data.tracks;
    },

    async getMoreData(url) {
        const token = await getToken();

        const data = await axios({
            baseURL: url,
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + token
            },
        });

        return await data.data;
    },
}