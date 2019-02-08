<template>
  <div class="obs-title container-col">
    <div class="obs-item-info container-row box-one">
      <div class="obs-rvr-nm container-col">
        <div class="kana">{{title.rvrKana}}</div>
        <div>{{title.rvrName}}</div>
      </div>
      <div class="obs-rsys-nm container-col">
        <div class="kana">{{title.rsysKana}}</div>
        <div>({{title.rsysName}})</div>
      </div>
    </div>
    <div class="obs-item container-row box-one">
      <div class="obs-name container-col">
        <div class="kana">{{title.obsKana}}</div>
        <div>{{title.obsName}}</div>
      </div>
      <div class="detail" @click="openObs()">詳細個別観測所画面</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "kwb-obs-title",
  computed: {
    title: {
      get() {
        return this.$store.state.tm.obsDetail.common;
      }
    }
  },
  methods: {
    openObs() {
      let routeData = this.$router.resolve({
        name: "ObsMode",
        query: {}
      });
      console.log("routeData.href:", routeData.href);
      window.open(routeData.href, "_blank");
    }
  }
};
</script>

<style lang="scss" scoped>
.obs-title {
  color: #303030;
  border-bottom: solid 2px;
  border-color: #726a6a;
  margin-bottom: 8px;
  flex-shrink: 0;
  .kana {
    padding-bottom: 1px;
    font-size: 0.5rem;
  }
  .obs-item-info {
    height: 28px;
    align-items: center;
    font-size: 0.9rem;
    padding-bottom: 4px;
    .obs-rvr-nm {
      margin-right: 4px;
    }
  }
  .obs-item {
    height: 28px;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 4px;
    .obs-name {
      font-size: 1.2rem;
      font-weight: bold;
    }
    .detail {
      padding: 4px 8px 4px 8px;
      font-size: 0.8rem;
      color: #fff;
      background-color: #4a98d3;
      box-shadow: 2px 2px 4px #223b72;
      border-radius: 5px;
      cursor: pointer;
    }
  }
}
</style>
