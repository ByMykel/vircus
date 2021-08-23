export const namespaced = true;

export const state = {
    favorites: [],
};

export const getters = {
    all: (state) => {
        return state.favorites;
    },

    has: (state) => (id) => {
        return state.favorites.find((el) => el.id == id) !== undefined;
    },

    filter: (state) => (search) => {
        return state.favorites.filter((el) => el.id === search);
    },
};

export const mutations = {
    addFavorite(state, obj) {
        state.favorites.push(obj);
    },

    setFavorites(state, arr) {
        state.favorites = arr;
    },
};

export const actions = {
    toggle({ commit, dispatch, getters }, obj) {
        if (getters.has(obj.id)) {
            dispatch("remove", obj);
            return false;
        }

        commit("addFavorite", obj);
        return true;
    },

    remove({ getters, commit }, obj) {
        commit(
            "setFavorites",
            getters.all.filter((el) => el.id !== obj.id)
        );
    },

    setFavorites({ commit }, obj) {
        commit("setFavorites", obj);
    },
};
