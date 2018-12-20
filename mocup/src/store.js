import Vue from "vue";
import Vuex from "vuex";
import axiosBase from "axios";
import KwbMapStore from "./stores/KwbMapStore";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    map: KwbMapStore
  },
  actions: {
    loadConfig({ commit }) {
      const axios = axiosBase.create({
        baseURL: "http://localhost:8080", // バックエンドB のURL:port を指定する
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
