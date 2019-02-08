<template>
  <div class="kwb-pc-vw-defconfig box-one container-col">
    <div class="content-caption">地図の初期表示位置</div>
    <div class="content-caption">初期ズームレベル</div>
    <div class="content-caption">初期表示コンテンツ</div>
    <div class="content-caption">通常表示・水防団表示</div>
  </div>
</template>

<script>
export default {
  name: "kwb-pc-vw-defconfig"
};
</script>

<style lang="scss" scoped>
@import "../../../scss/properties.scss";
.kwb-pc-vw-defconfig {
  color: $obs_font_black;
  margin: 10px 0 0 0;
}
.config-box {
  margin: 0 0 10px 0;
}
</style>
