import Vue from "vue";
import Vuetify from "vuetify/lib";
import "vuetify/src/stylus/app.styl";

Vue.use(Vuetify, {
  iconfont: "md",
  theme: {
    primary: "#3041a5",
    secondary: "#b0bec5",
    accent: "#ff7700",
    error: "#b71c1c",
    warning: "#9c27b0",
    info: "#03a9f4",
    success: "#3f51b5"
  }
});
