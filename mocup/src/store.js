import Vue from "vue";
import Vuex from "vuex";
import axiosBase from "axios";
import KwbMapStore from "./stores/KwbMapStore";
import KwbAppStore from "./stores/KwbAppStore";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    app: KwbAppStore,
    map: KwbMapStore
  },
  actions: {
    loadConfig({ commit }) {
      const axios = axiosBase.create({
        baseURL: "/",
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest"
        },
        responseType: "json"
      });

      axios
        .get("api/config")
        .then(res => {
          commit("map/loadMapConfig", res.data.web.map);
        })
        .catch(res => {
          console.log(res);
        });
    }
  }
});
