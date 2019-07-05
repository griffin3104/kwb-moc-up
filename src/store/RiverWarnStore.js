export default {
  namespaced: true,
  state: {
    overviewUrl: "",
    overviewLevel: 80,
    overviewState: [
      {
        code: 81,
        state: 0
      },
      {
        code: 82,
        state: 0
      },
      {
        code: 83,
        state: 3
      },
      {
        code: 84,
        state: 0
      },
      {
        code: 85,
        state: 0
      },
      {
        code: 86,
        state: 0
      },
      {
        code: 87,
        state: 0
      },
      {
        code: 88,
        state: 0
      },
      {
        code: 89,
        state: 0
      },
      {
        code: 90,
        state: 0
      }
    ]
  },
  mutations: {
    init(state, config) {
      state.overviewUrl = config.overviewUrl;
    }
  },
  actions: {}
};
