<template>
  <div id="kwb-map-frame" class="box-one container-col">
    <router-view name="map_header"></router-view>
    <kwb-em-info-telop></kwb-em-info-telop>
    <div id="kwb-map-view" class="box-one">
      <l-map v-if="disp" :zoom="zoom" :center="center" :options="mapOptions">
        <l-tile-layer :url="tileUrl"></l-tile-layer>
        <smpl-obs-layer></smpl-obs-layer>
        <!-- 予警報着色レイヤー -->
        <kwb-map-riverwarn-layer></kwb-map-riverwarn-layer>
      </l-map>
    </div>
    <!-- 凡例アイコン -->
    <img src="/img/legend.png" class="legend_btn">
    <!-- モード切り替えアイコン -->
    <img
      v-if="modeSize || modeUrl == 'pc'"
      src="/img/mode.png"
      class="mode_btn"
      @click="clickModeChange"
    >
    <!-- ズームレベル（全国）アイコン -->
    <!-- ズームレベル（地方）アイコン -->
    <!-- ズームレベル（都道府県）アイコン -->
    <!-- ズームレベル（市町村）アイコン -->
    <!-- 任意情報アイコン -->
    <!-- 現在位置アイコン（スマホメニューボタン）-->
    <!-- レーダアイコン（スマホメニューボタン）-->
    <!-- 観測所一覧アイコン（スマホメニューボタン）-->
    <!-- 河川予警報一覧アイコン（スマホメニューボタン）-->
    <!-- 浸水想定アイコン（スマホメニューボタン）-->
  </div>
</template>

<script>
//import L, { LatLngExpression } from "leaflet";
// import { LMap, LTileLayer, LPolygon } from "vue2-leaflet";
import { LMap, LTileLayer } from "vue2-leaflet";
import SmplObsLayer from "./SmplObsLayer";
import KwbMapRiverwarnLayer from "./KwbMapRiverwarnLayer";
import KwbEmInfoTelop from "./KwbEmInfoTelop";
import { triggerEvent } from "../lib/util.js";

export default {
  name: "kwb-map",
  components: {
    LMap,
    LTileLayer,
    // LPolygon,
    SmplObsLayer,
    KwbMapRiverwarnLayer,
    KwbEmInfoTelop
  },
  data() {
    return {
      disp: false,
      mapOptions: {
        zoomControl: false,
        attributionControl: false
      }
    };
  },
  computed: {
    modeUrl: {
      get() {
        return this.$store.state.app.screenMode;
      }
    },
    modeSize: {
      get() {
        return this.$store.state.app.isPcMode;
      }
    },
    zoom: {
      get() {
        return this.$store.state.map.zoom;
      },
      set(z) {
        this.$store.commit("setZoom", z);
      }
    },
    center: {
      get() {
        return this.$store.state.map.center;
      },
      set(c) {
        this.$store.commit("setCenter", c);
      }
    },
    tileUrl: {
      get() {
        return this.$store.state.map.tileUrl;
      },
      set(url) {
        this.$store.commit("setTileUrl", url);
      }
    }
  },
  methods: {
    clickModeChange() {
      if (location.pathname.indexOf("pc") == 1) {
        this.$router.push("/mb");
      } else if (location.pathname.indexOf("mb") == 1) {
        this.$router.push("/pc");
      }

      setTimeout(() => {
        triggerEvent(document.body, "resize");
      }, 200);
    }
  },
  mounted() {
    window.setTimeout(() => {
      this.disp = true;
      triggerEvent(document.body, "resize");
    }, 100);
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/properties.scss";

#kwb-map-frame {
  background-color: $bk_color;
  /*min-height: 600px;*/
  /*min-width: 450px;*/
}

img.legend_btn {
  position: absolute;
  bottom: 8px;
  left: 8px;
  width: 24px;
  height: 24px;
  z-index: 3000;
  cursor: pointer;
}
img.mode_btn {
  position: absolute;
  bottom: 8px;
  left: 40px;
  width: 24px;
  height: 24px;
  z-index: 3000;
  cursor: pointer;
}
</style>

