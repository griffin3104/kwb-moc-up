import { AppTime } from "../lib/util";

export default {
  namespaced: true,
  state: {
    //画面時間
    appTime: new AppTime(),
    //モバイルモードのメニューボタン表示・非表示フラグ
    mbMenuShow: true,
    //モバイルモードのサイドメニュー表示・非表示フラグ
    mbSideMenuShow: false,
    //ウィンドウサイズ（0:width,1:height)
    screenSize: [0, 0],
    //PCモード可否
    isPcMode: true,
    //画面モード（"pc","mb","obs"）
    screenMode: "pc"
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
    },
    setScreenSize(state, val) {
      state.screenSize[0] = val.size[0];
      state.screenSize[1] = val.size[1];
      if (val.size[0] < 1000 || val.size[1] < 660) {
        state.isPcMode = false;
      } else {
        state.isPcMode = true;
      }
    },
    setScreenMode(state, val) {
      state.screenMode = val;
    }
  },
  actions: {},
  getters: {}
};
