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
        app_header: () => import("./views/pc/KwbPcHeader.vue"),
        panel: () => import("./views/pc/KwbPanel.vue")
      }
    },
    {
      path: "/pc",
      name: "PcMode2",
      components: {
        app_header: () => import("./views/pc/KwbPcHeader.vue"),
        panel: () => import("./views/pc/KwbPanel.vue")
      },
      children: [
        {
          path: "overview",
          components: {
            pc_contents: () => import("./views/pc/KwbOverview.vue")
          }
        },
        {
          path: "obslist",
          components: {
            pc_contents: () => import("./views/pc/KwbObslist.vue")
          }
        },
        {
          path: "riverwarn",
          components: {
            pc_contents: () => import("./views/pc/KwbRiverwarn.vue")
          }
        },
        {
          path: "radar",
          components: {
            pc_contents: () => import("./views/pc/KwbRadar.vue")
          }
        },
        {
          path: "floodview",
          components: {
            pc_contents: () => import("./views/pc/KwbFloodview.vue")
          }
        },
        {
          path: "viewconfig",
          components: {
            pc_contents: () => import("./views/pc/KwbViewconfig.vue")
          }
        }
      ]
    }
  ]
});
