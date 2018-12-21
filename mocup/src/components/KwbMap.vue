<template>
  <div id="kwb-map-frame" class="box-one container-col">
    <router-view name="map_header"></router-view>
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
  /*min-height: 600px;*/
  /*min-width: 450px;*/
}
</style>
 
 