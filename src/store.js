import Vue from "vue";
import Vuex from "vuex";
import MapStore from "./store/MapStore";
import RiverWarnStore from "./store/RiverWarnStore";
import axiosBase from "axios";

Vue.use(Vuex);
const INIT_API_URL = "api/init.json";

export default new Vuex.Store({
  modules: {
    map: MapStore,
    riverWarn: RiverWarnStore
  },
  state: {
    axios: null
  },
  mutations: {
    setAxios(state, baseUrl = "/") {
      state.axios = axiosBase.create({
        baseURL: baseUrl,
        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest"
        },
        responseType: "json"
      });
    }
  },
  actions: {
    initApplication({ state, commit }) {
      commit("setAxios");
      state.axios
        .get(INIT_API_URL)
        .then(res => {
          commit("map/init", res.data.configApi.map);
          commit("riverWarn/init", res.data.configApi.riverWarn);
        })
        .catch(res => {
          console.log(res);
        });
    }
  }
});
