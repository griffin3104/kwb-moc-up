import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "PcMode1",
      components: {
        header: () => import("./components/pc/KwbPcHeader.vue"),
        panel: () => import("./components/pc/KwbPcPanel.vue")
      }
    },
    {
      path: "/pc",
      name: "PcMode2",
      components: {
        header: () => import("./components/pc/KwbPcHeader.vue"),
        panel: () => import("./components/pc/KwbPcPanel.vue")
      },
      children: [
        {
          path: "overview",
          components: {
            pc_contents: () => import("./components/pc/panel/KwbPcOverview.vue")
          }
        },
        {
          path: "obslist",
          components: {
            pc_contents: () => import("./components/pc/panel/KwbPcObslist.vue")
          }
        },
        {
          path: "riverwarn",
          components: {
            pc_contents: () =>
              import("./components/pc/panel/KwbPcRiverwarn.vue")
          }
        },
        {
          path: "radar",
          components: {
            pc_contents: () => import("./components/pc/panel/KwbPcRadar.vue")
          }
        },
        {
          path: "floodview",
          components: {
            pc_contents: () =>
              import("./components/pc/panel/KwbPcFloodview.vue")
          }
        },
        {
          path: "viewconfig",
          components: {
            pc_contents: () =>
              import("./components/pc/panel/KwbPcViewconfig.vue")
          }
        },
        {
          path: "obsview",
          components: {
            pc_contents: () => import("./components/pc/panel/KwbPcObsview.vue")
          }
        }
      ]
    },
    {
      path: "/mb",
      name: "MbMode",
      components: {
        header: () => import("./components/mb/KwbMbHeader.vue"),
        panel: () => import("./components/mb/KwbMbPanel.vue")
      }
    }
  ]
});
