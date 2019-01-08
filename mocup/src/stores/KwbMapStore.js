export default {
  namespaced: true,
  state: {
    zoom: 4,
    center: [0, 0],
    tileUrl: "",
    address: "東京都立川市"
  },
  mutations: {
    loadMapConfig(state, mapConfig) {
      state.zoom = mapConfig.zoom;
      state.center = mapConfig.center;
      state.tileUrl = mapConfig.tileUrl;
    },
    /**
     * ズームレベル設定.
     *
     * @param {object} state ストアのstate
     * @param {object} param1 セットする値
     */
    setZoom(state, zoom) {
      state.zoom = zoom;
    },
    /**
     * 中心緯度経度設定
     *
     * @param {object} state ストアのstate
     * @param {object} param1 セットする値
     */
    setCenter(state, center) {
      state.center = center;
    }
  },
  actions: {},
  getters: {}
};
