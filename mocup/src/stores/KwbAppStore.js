
export default {
  namespaced: true,
  state: {
    //メニューボタン表示・非表示フラグ
    mbMenuShow: true,
    mbSideMenuShow: false
  },
  mutations: {
    setMbMenuShow(state, val) {
      state.mbMenuShow = val;
    },
    openSideMenu(state){
      state.mbSideMenuShow = true;
    },
    closeSideMenu(state){
      state.mbSideMenuShow = false;
    }
  },
  actions: {},
  getters: {}
};
