<template>
  <v-app class="secondary">
    <router-view name="app_header"></router-view>
    <v-layout>
      <v-flex class="map_panel">
        <kwb-map></kwb-map>
      </v-flex>
      <div :class="[isMobile ? 'k_none' : 'k_panel']">
        <router-view name="panel"></router-view>
      </div>
    </v-layout>
  </v-app>
</template>

<script>
import KwbMap from "./views/KwbMap.vue";

export default {
  name: "App",
  components: {
    KwbMap
  },
  data() {
    return {
      //
    };
  },
  computed: {
    isMobile() {
      console.log("isMobile");
      return false;
    }
  },
  methods: {},
  created: function() {
    //設定情報サーバリクエスト
    this.$store.dispatch("initApplication");
  },
  watch: {
    $route: function(toRoute) {
      if (toRoute.path === "/") {
        this.$router.push("/pc/overview");
        return;
      }
    }
  }
};
</script>

<style lang="stylus">
@import url('https://fonts.googleapis.com/css?family=Kosugi+Maru|Noto+Sans+JP:400,700,900&display=swap');
@import "~leaflet/dist/leaflet.css";
* :not(.v-icon) {
  font-family: 'Noto Sans JP', sans-serif!important;
}
html{
  overflow: hidden;
}
.k_none{
  display: none;
}
.map_panel{
  z-index: 3000;
}
.k_panel{
  width: 500px;
  overflow-y: auto;
  z-index: 3100;
}
.card_header{
  align-items: center;
  height: 40px;
}
.card_title{
  font-weight: bold;
  padding-left: 16px;
}
</style>
