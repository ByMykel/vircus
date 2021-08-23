import Vue from "vue";
import Vuex from "vuex";

import PersistentStore from "../../PersistentStore";

import * as favorites from "./modules/favorites";

Vue.use(Vuex);

export default new Vuex.Store({
    strict: true,
    modules: {
        favorites,
    },
    plugins: [
        PersistentStore({
            moduleName: "favorites",
            localStorageName: "favorites",
        }),
    ],
});
