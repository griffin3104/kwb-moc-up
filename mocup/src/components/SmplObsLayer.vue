<template>
  <div>
    <l-geo-json :geojson="icon.geojson" :options="options"/>
  </div>
</template>

<script>
import Vue from "vue";
import { L, LGeoJson } from "vue2-leaflet";
import axios from "axios";

const waterIcon = L.icon({
  iconUrl: require("../../public/img/obs_icons/obs_water.png"),
  iconSize: [32, 37],
  iconAnchor: [16, 37]
});

const rainIcon = L.icon({
  iconUrl: require("../../public/img/obs_icons/obs_rain.png"),
  iconSize: [32, 37],
  iconAnchor: [16, 37]
});

const qualityIcon = L.icon({
  iconUrl: require("../../public/img/obs_icons/obs_quality.png"),
  iconSize: [32, 37],
  iconAnchor: [16, 37]
});

const damIcon = L.icon({
  iconUrl: require("../../public/img/obs_icons/obs_dam.png"),
  iconSize: [32, 37],
  iconAnchor: [16, 37]
});

const seaIcon = L.icon({
  iconUrl: require("../../public/img/obs_icons/obs_sea.png"),
  iconSize: [32, 37],
  iconAnchor: [16, 37]
});

const snowIcon = L.icon({
  iconUrl: require("../../public/img/obs_icons/obs_snow.png"),
  iconSize: [32, 37],
  iconAnchor: [16, 37]
});

const swinWaterIcon = L.icon({
  iconUrl: require("../../public/img/obs_icons/obs_swin_water.png"),
  iconSize: [32, 37],
  iconAnchor: [16, 37]
});

const raderAvgIcon = L.icon({
  iconUrl: require("../../public/img/obs_icons/obs_rader_av_rain.png"),
  iconSize: [32, 37],
  iconAnchor: [16, 37]
});

const tmAvgIcon = L.icon({
  iconUrl: require("../../public/img/obs_icons/obs_tm_av_rain.png"),
  iconSize: [32, 37],
  iconAnchor: [16, 37]
});

const cameraIcon = L.icon({
  iconUrl: require("../../public/img/obs_icons/obs_camera.png"),
  iconSize: [32, 37],
  iconAnchor: [16, 37]
});

const swinCameraIcon = L.icon({
  iconUrl: require("../../public/img/obs_icons/obs_swin_camera.png"),
  iconSize: [32, 37],
  iconAnchor: [16, 37]
});

export default Vue.extend({
  name: "ObsLayer",
  components: {
    LGeoJson
  },
  data() {
    return {
      url: "http://localhost:8080/99999.json",
      icon: {
        geojson: null,
        options: {
          // pointToLayer(feature: any, latlng: any) {
          //   const obsType = feature.properties.obsType;
          //   console.log('★', obsType);
          //   return L.marker(latlng, { icon: obsIcon });
          // },
        }
      }
    };
  },

  computed: {
    options() {
      return {
        pointToLayer: (feature, latlng) => {
          const itmkndCd = feature.properties.itmkndCd;
          // アイコンの種類
          let ic = null;
          switch (itmkndCd) {
            // 水位
            case 4:
              ic = waterIcon;
              break;
            // 雨量
            case 1:
              ic = rainIcon;
              break;
            // 水質
            case 6:
              ic = qualityIcon;
              break;
            // ダム
            case 7:
              ic = damIcon;
              break;
            // 海岸
            case 12:
              ic = seaIcon;
              break;
            // 積雪
            case 3:
              ic = snowIcon;
              break;
            // 流域平均雨量
            case 2:
              ic = tmAvgIcon;
              break;
            // レーダ流域平均雨量(大流域)
            case 20:
              ic = raderAvgIcon;
              break;
            // 危機管理水位計
            case 200:
              ic = swinWaterIcon;
              break;
            // 河川カメラ
            case 100:
              ic = cameraIcon;
              break;
            // 危機管理水位計河川カメラ
            case 201:
              ic = swinCameraIcon;
              break;
            default:
              ic = waterIcon;
          }

          let mk = null;
          mk = L.marker(latlng, {
            icon: ic,
            properties: feature.properties,
            latlng
          });

          mk.on("click", this.clickObs);

          return mk;
        }
      };
    }
  },
  methods: {
    clickObs(e) {
      var itmkndCd = e.target.feature.properties.itmkndCd;
      this.$store.commit("tm/setSelectedObs", itmkndCd);
      this.$router.push("/pc/obsview");
    }
  },
  created() {
    axios
      .get(this.url)
      .then(json => {
        this.icon.geojson = json.data;
      })
      .catch(error => {
        console.log("error", error);
      });
  }
});
</script>

