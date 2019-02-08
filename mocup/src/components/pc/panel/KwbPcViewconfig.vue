<template>
  <div class="kwb-pc-view-config box-one container-col">
    <!-- タブ選択 -->
    <div class="container-row">
      <div
        @click="tabIndex = 1"
        :class="{'button button-non-act': tabIndex === 1, 'button button-act': tabIndex !== 1}"
      >カスタマイズ設定</div>
      <div
        @click="tabIndex = 3"
        :class="{'button button-non-act': tabIndex === 3, 'button button-act': tabIndex !== 3}"
      >地点登録設定</div>
      <div
        @click="tabIndex = 2"
        :class="{'button button-non-act': tabIndex === 2, 'button button-act': tabIndex !== 2}"
      >初期表示設定</div>
    </div>

    <!-- カスタマイズ設定 -->
    <div v-if="tabIndex == 1">
      <kwb-pc-vw-cstmconfig></kwb-pc-vw-cstmconfig>
    </div>
    <!-- 初期表示設定 -->
    <div v-if="tabIndex == 2">
      <kwb-pc-vw-defconfig></kwb-pc-vw-defconfig>
    </div>
    <!-- 地点登録設定 -->
    <div v-if="tabIndex == 3">
      <kwb-pc-vw-spotconfig></kwb-pc-vw-spotconfig>
    </div>
  </div>
</template>

<script>
import KwbPcVwCstmconfig from "./KwbPcVwCstmconfig";
import KwbPcVwDefconfig from "./KwbPcVwDefconfig";
import KwbPcVwSpotconfig from "./KwbPcVwSpotconfig";

export default {
  name: "KwbPcViewconfig",
  data() {
    return {
      tabIndex: 1
    };
  },
  components: {
    KwbPcVwCstmconfig,
    KwbPcVwDefconfig,
    KwbPcVwSpotconfig
  }
};
</script>

<style lang="scss" scoped>
@import "../../../scss/properties.scss";
.kwb-pc-view-config {
  color: $obs_font_black;
  padding: 8px;
}
.button {
  margin: 0 8px 0 0;
  width: 130px;
  height: 24p;
  line-height: 24px;
  text-align: center;
  font-size: 0.9rem;
  color: white;
  box-sizing: border-box;
  border-radius: 4px;
  background-color: #aaaaaa;
}
.button-act {
  background-color: #726a6a;
  box-shadow: 2px 2px 4px #4e4e4e;
}
.button-non-act {
  box-shadow: none;
  background-color: #4a98d3;
}
</style>
