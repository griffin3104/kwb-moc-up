<template>
  <v-layout column="true" class="k_map_frame">
    <div class="map_header secondary"></div>
    <v-flex class="map">
      <l-map
        :zoom="zoom"
        :min-zoom="minZoom"
        :max-zoom="maxZoom"
        :center="center"
        :options="mapOptions"
      >
        <l-tile-layer :url="tileUrl"></l-tile-layer>
      </l-map>
    </v-flex>
    <div class="map_footer secondary"></div>
  </v-layout>
</template>

<script>
import { LMap, LTileLayer } from "vue2-leaflet";

export default {
  name: "kwb-map",
  data() {
    return {
      mapOptions: {
        zoomControl: false,
        attributionControl: false
      }
    };
  },
  components: { LMap, LTileLayer },
  computed: {
    zoom: {
      get() {
        return this.$store.state.map.zoom;
      }
    },
    minZoom: {
      get() {
        return this.$store.state.map.minZoom;
      }
    },
    maxZoom: {
      get() {
        return this.$store.state.map.maxZoom;
      }
    },
    center: {
      get() {
        return this.$store.state.map.center;
      }
    },
    tileUrl: {
      get() {
        return this.$store.state.map.tileUrl;
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.k_map_frame{
  height: 100%;
}
.map_header{
  z-index: 3000;
  height: 40px;
  box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
}
.map_footer{
  height: 32px;
}
</style>
