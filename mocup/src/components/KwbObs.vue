<template>
  <div class="detaile-flame container-col box-one">
    <div class="header">ヘッダー部</div>
    <kwb-obs-detaile></kwb-obs-detaile>
  </div>
</template>

<script>
import KwbObsDetaile from "./KwbObsDetaile.vue";
export default {
  name: "kwb-obs",
  components: {
    KwbObsDetaile
  }
};
</script>

<style lang="scss" scoped>
.detaile-flame {
  min-width: 1200px;
  min-height: 800px;
  .header {
    height: 60px;
    background-color: #fff;
    box-sizing: border-box;
  }
}
</style>
