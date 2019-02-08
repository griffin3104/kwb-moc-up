<template>
  <div class="kwb-pc-obs-view box-one container-col">
    <kwb-obs-water-qt v-if="itmkndCd === 6"></kwb-obs-water-qt>
    <kwb-obs-coast v-if="itmkndCd === 12"></kwb-obs-coast>
    <kwb-obs-dam v-if="itmkndCd === 7"></kwb-obs-dam>
    <kwb-obs-rn v-if="itmkndCd === 1">雨量観測所</kwb-obs-rn>
    <kwb-obs-snow v-if="itmkndCd === 3">積雪観測所</kwb-obs-snow>
    <kwb-obs-stage v-if="itmkndCd === 4">通常水位観測所</kwb-obs-stage>
    <kwb-river-cam v-if="itmkndCd === 100">河川カメラ</kwb-river-cam>
    <kwb-obs-sw-stage v-if="itmkndCd === 200">危機管理水位計観測所</kwb-obs-sw-stage>
    <div v-if="itmkndCd === 201">危機管理水位計カメラ</div>
    <div v-if="itmkndCd === 20">レーダ流域平均雨量観測所</div>
    <div v-if="itmkndCd === 2">流域平均雨量観測所</div>
  </div>
</template>

<script>
import KwbObsWaterQt from "./obs/KwbObsWaterqt.vue";
import KwbObsCoast from "./obs/KwbObsCoast.vue";
import KwbObsDam from "./obs/KwbObsDam.vue";
import KwbObsRn from "./obs/KwbObsRn.vue";
import KwbObsStage from "./obs/KwbObsStage.vue";
import KwbRiverCam from "./obs/KwbRiverCam.vue";
import KwbObsSwStage from "./obs/KwbObsSwStage.vue";
import KwbObsSnow from "./obs/KwbObsSnow.vue";

export default {
  components: {
    KwbObsWaterQt,
    KwbObsCoast,
    KwbObsDam,
    KwbObsRn,
    KwbObsStage,
    KwbRiverCam,
    KwbObsSwStage,
    KwbObsSnow
  },
  computed: {
    itmkndCd: {
      get() {
        return this.$store.state.tm.selectedObs.itmkndCd;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.kwb-pc-obs-view {
  padding: 8px;
}
</style>
