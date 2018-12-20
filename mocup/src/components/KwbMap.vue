<template>
  <div id="kwb-map-frame" class="box-one container-col">
    <div id="kwb-map-header" class="container-row">
      <div id="kwb-map-addr" class="box-one">東京都立川市周辺</div>
      <div id="kwb-map-date">2018/12/31</div>
      <div id="kwb-map-time">23:59</div>
      <div id="kwb-map-reload">
        <img src="/img/renew_s.png">
      </div>
    </div>
    <div id="kwb-map-view" class="box-one">
      <l-map v-if="disp" :zoom="zoom" :center="center" :options="mapOptions">
        <l-tile-layer :url="tileUrl"></l-tile-layer>
      </l-map>
    </div>
  </div>
</template>

<script>
//import L, { LatLngExpression } from "leaflet";
import { LMap, LTileLayer } from "vue2-leaflet";
export default {
  name: "kwb-map",
  components: {
    LMap,
    LTileLayer
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
  mounted() {
    window.setTimeout(() => {
      this.disp = true;
    }, 100);
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/properties.scss";

#kwb-map-frame {
  background-color: $bk_color;
  min-height: 600px;
  min-width: 450px;
}

#kwb-map-header {
  align-items: flex-end;
}

#kwb-map-addr {
  font-size: 0.8rem;
  color: #fff;
  padding: 4px;
  box-sizing: border-box;
}

#kwb-map-date {
  font-size: 0.8rem;
  color: #fff;
  padding: 4px 2px 4px 0px;
  box-sizing: border-box;
}
#kwb-map-time {
  font-size: 1.2rem;
  color: #fff;
  padding: 4px 2px 4px 2px;
  box-sizing: border-box;
}
#kwb-map-reload {
  padding: 4px 4px 2px 4px;
  img {
    width: 22px;
    height: 22px;
  }
}
</style>
 
 