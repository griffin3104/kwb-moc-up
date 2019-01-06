<template>
  <div id="main" class="container-col">
    <router-view name="header"/>
    <section id="main-section" class="box-one container-row">
      <kwb-map></kwb-map>
      <router-view name="panel"/>
    </section>
    <kwb-msg-box></kwb-msg-box>
  </div>
</template>

<script>
//川防地図コンポーネント
import KwbMap from "./components/KwbMap.vue";
import KwbMsgBox from "./components/KwbMsgBox.vue"

/**
 * Applicationメインコンポーネント
 */
export default {
  name: "app",
  components: {
    KwbMap, KwbMsgBox
  },
  methods: {
    resize() {
      if (window.innerWidth < 1000 || window.innerHeight < 660) {
        this.$router.push("/mb");
      }
    }
  },
  created: function () {
    //設定情報サーバリクエスト
    this.$store.dispatch("loadConfig");
    //画面サイズが規定に見たいない場合はモバイルモードに変更
    if (location.pathname.indexOf("mb") <= 0) {
      if (window.innerWidth < 1000 || window.innerHeight < 660) {
        this.$router.push("/mb");
      }
    }
  },
  /**
   * ライフサイクルフック mounted
   */
  mounted: function () {
    //リサイズイベントを登録
    window.addEventListener("resize", this.resize);
  },
  destroyed() {
    window.removeEventListener("resize", this.resize);
  },
  watch: {
    $route: function (toRoute) {
      if (toRoute.path === "/") {
        this.$router.push("/pc/overview");
        return;
      }
    }
  }
};
</script>

<style lang="scss">
@import "~leaflet/dist/leaflet.css";
@import "./scss/reset.scss";
@import "./scss/kwb.scss";
@import "./scss/properties.scss";

html {
  height: 100%;
  overflow: hidden;
  font-family: ‘Avenir’, ‘Helvetica Neue’, ‘Helvetica’, ‘Arial’,
    ‘Hiragino Maru Gothic ProN’, ‘Hiragino Kaku Gothic ProN’, ‘YuGothic’,
    ‘メイリオ’, ‘Meiryo’, ‘Yu Gothic’, ‘ＭＳ Ｐゴシック’, ‘MS PGothic’;
}
body {
  background-color: $base;
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
