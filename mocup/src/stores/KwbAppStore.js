import { AppTime } from "../lib/util";

export default {
  namespaced: true,
  state: {
    //画面時間
    appTime: new AppTime(),
    //モバイルモードのメニューボタン表示・非表示フラグ
    mbMenuShow: true,
    //モバイルモードのサイドメニュー表示・非表示フラグ
    mbSideMenuShow: false
  },
  mutations: {
    renewTime(state) {
      state.appTime = new AppTime();
    },
    setMbMenuShow(state, val) {
      state.mbMenuShow = val;
    },
    openSideMenu(state) {
      state.mbSideMenuShow = true;
    },
    closeSideMenu(state) {
      state.mbSideMenuShow = false;
    }
  },
  actions: {},
  getters: {}
};
