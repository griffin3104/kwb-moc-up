export default {
  namespaced: true,
  state: {
    show: false,
    warn: false,
    caption: "caption",
    msg: "message"
  },
  mutations: {
    close(state) {
      state.show = false;
    },
    showInfo(state, payload) {
      state.warn = false;
      state.caption = payload.caption;
      state.msg = payload.msg;
      state.show = true;
    },
    showWarn(state, payload) {
      state.warn = true;
      state.caption = payload.caption;
      state.msg = payload.msg;
      state.show = true;
    }
  }
};
