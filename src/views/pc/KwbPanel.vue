<template>
  <v-layout column class="kwb_panel">
    <v-tabs v-model="model">
      <v-tab to="/pc/overview">概況</v-tab>
      <v-tab to="/pc/obslist">観測所一覧</v-tab>
      <v-tab to="/pc/riverwarn">河川予警報</v-tab>
      <v-tab to="/pc/radar">レーダ雨量</v-tab>
      <v-tab to="/pc/floodview">浸水想定</v-tab>
      <v-tab to="/pc/viewconfig">表示設定</v-tab>
    </v-tabs>
    <v-flex class="contents_panel">
      <v-tabs-items v-model="model">
        <v-tab-item value="/pc/overview">
          <router-view
            name="pc_contents"
            v-if="model === '/pc/overview'"
          ></router-view>
        </v-tab-item>
        <v-tab-item value="/pc/obslist">
          <router-view
            name="pc_contents"
            v-if="model === '/pc/obslist'"
          ></router-view>
        </v-tab-item>
        <v-tab-item value="/pc/riverwarn">
          <router-view
            name="pc_contents"
            v-if="model === '/pc/riverwarn'"
          ></router-view>
        </v-tab-item>
        <v-tab-item value="/pc/radar">
          <router-view
            name="pc_contents"
            v-if="model === '/pc/radar'"
          ></router-view>
        </v-tab-item>
        <v-tab-item value="/pc/floodview">
          <router-view
            name="pc_contents"
            v-if="model === '/pc/floodview'"
          ></router-view>
        </v-tab-item>
        <v-tab-item value="/pc/viewconfig">
          <router-view
            name="pc_contents"
            v-if="model === '/pc/viewconfig'"
          ></router-view>
        </v-tab-item>
      </v-tabs-items>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  name: "kwb-panel",
  data() {
    return {
      model: "/pc/overview"
    };
  },
  computed: {},
  method: {}
};
</script>
<style lang="stylus" scoped>
.kwb_panel{
  height: 100%;
  z-index: 3100;
}
.contents_panel{
  background-color: #fff;
  height: 100%;
}
</style>
