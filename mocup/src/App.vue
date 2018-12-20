<template>
  <div id="main" class="container-col">
    <router-view name="header"/>
    <section id="main-section" class="box-one container-row">
      <kwb-map></kwb-map>
      <router-view name="panel"/>
    </section>
  </div>
</template>

<script>
//川防地図コンポーネント
import KwbMap from "./components/KwbMap.vue";

/**
 * Applicationメインコンポーネント
 */
export default {
  name: "app",
  components: {
    KwbMap
  },
  methods: {
    resize() {
      console.log("hoge?", window.innerWidth, window.innerHeight);
    }
  },
  created: function() {
    this.$store.dispatch("loadConfig");
  },
  mounted: function() {
    window.addEventListener("resize", this.resize);
    console.log("1:", location.href);
    console.log("2:", location.hostname);
    console.log("3:", location.pathname);
    console.log("4:", location.search);
    console.log("5:", location.protocol);
  },
  destroyed() {
    window.removeEventListener("resize", this.resize);
  }
};
</script>

<style lang="scss">
@import "~leaflet/dist/leaflet.css";
@import "./scss/reset.scss";
@import "./scss/kwb.scss";

html {
  height: 100%;
  overflow: hidden;
  font-family: ‘Avenir’, ‘Helvetica Neue’, ‘Helvetica’, ‘Arial’,
    ‘Hiragino Maru Gothic ProN’, ‘Hiragino Kaku Gothic ProN’, ‘YuGothic’,
    ‘メイリオ’, ‘Meiryo’, ‘Yu Gothic’, ‘ＭＳ Ｐゴシック’, ‘MS PGothic’;
}
body {
  background-color: #2070a0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: fixed;
}

#main {
  height: 100%;
  width: 100%;
}

#main-section {
  position: relative;
  padding: 0px;
  margin: 0px;
  overflow: auto;
}
</style>
