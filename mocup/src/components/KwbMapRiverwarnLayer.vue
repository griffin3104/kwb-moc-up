<template>
  <div>
    <div v-if="isFillRiverLine">
      <!-- 洪水予報の影響河川 -->
      <l-geo-json
        v-for="riverLine in riverLines"
        v-bind:key="riverLine.id"
        :geojson="riverLine.geojson"
        :optionsStyle="riverLine.optionsstyle"
      ></l-geo-json>
    </div>
    <div v-if="isFillTwn">
      <!-- ダム放流警報の影響市町村 -->
      <l-polygon
        v-for="townPolygon in townPolygons"
        v-bind:key="townPolygon.twnCd"
        :lat-lngs="townPolygon.latlngs"
        :color="townPolygon.color"
        :fillColor="townPolygon.fillColor"
        :fillOpacity="townPolygon.fillOpacity"
        :opacity="townPolygon.opacity"
        :weight="townPolygon.weight"
      ></l-polygon>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { L, LGeoJson, LPolygon } from "vue2-leaflet";
// import axios from "axios";

export default Vue.extend({
  name: "kwb-map-riverwarn-layer",
  components: {
    LGeoJson,
    LPolygon
  },
  data() {
    return {
      // townPolygon: {
      //   latlngs: [
      //     // [35.857428, 139.648933],
      //     // [35.605058, 140.123308],
      //     // [35.689521, 139.691704],
      //     // [35.447753, 139.642514],
      //     // [35.857428, 139.648933]
      //     [36.800654865, 139.99326],
      //     [36.741107586, 140.066612892],
      //     [36.681071694, 140.030085032],
      //     [36.666666667, 139.953066589],
      //     [36.720294613, 139.933383061],
      //     [36.747196802, 139.962362698],
      //     [36.769320694, 139.983343891],
      //     [36.800654865, 139.99326]
      //   ],
      //   // Path class options
      //   color: "#dddd00",
      //   fillColor: "#ffff80",
      //   fillOpacity: 0.8,
      //   opacity: 0.8,
      //   weight: 3
      // }
    };
  },

  computed: {
    riverLines: {
      get() {
        return this.$store.state.mapRiverwarn.riverLines;
      }
    },
    townPolygons: {
      get() {
        return this.$store.state.mapRiverwarn.townPolygons;
      }
    },
    isFillRiverLine: {
      get() {
        return this.$store.state.mapRiverwarn.isFillRiverLine;
      }
    },
    isFillTwn: {
      get() {
        return this.$store.state.mapRiverwarn.isFillTwn;
      }
    }
  },
  methods: {},
  created() {}
});
</script>

