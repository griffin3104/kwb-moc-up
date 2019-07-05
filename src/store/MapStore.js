export default {
  namespaced: true,
  state: {
    zoom: 4,
    minZoom: 4,
    maxZoom: 4,
    tileUrl: "",
    center: [0, 0]
  },
  mutations: {
    setZoom(state, zm) {
      state.zoom = zm;
    },
    setTileUrl(state, url) {
      state.tileUrl = url;
    },
    setCenter(state, ct) {
      state.center = ct;
    },
    init(state, config) {
      state.center = config.center;
      state.zoom = config.zoom;
      state.minZoom = config.minZoom;
      state.maxZoom = config.maxZoom;
      state.tileUrl = config.tileUrl;
    }
  },
  actions: {}
};
