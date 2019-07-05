<template>
  <v-card class="std_card primary" dark>
    <v-layout row class="card_header">
      <div class="card_title">河川予警報概況</div>
      <v-spacer></v-spacer>
      <v-btn icon dark>
        <v-icon>fullscreen</v-icon>
      </v-btn>
    </v-layout>
    <v-layout>
      <v-tabs light centered style="width:100%;">
        <v-tab>洪水予報</v-tab>
        <v-tab>水防警報</v-tab>
        <v-tab>ダム放流通知</v-tab>
      </v-tabs>
    </v-layout>

    <v-layout row class="river-warn-overview">
      <v-flex xs6 style="padding:8px 4px 4px 4px;">
        <div class="river-warn-overview-map">
          <object
            id="rw_overview"
            type="image/svg+xml"
            :data="overviewUrl"
          ></object>
        </div>
      </v-flex>
      <v-flex xs6 style="padding:0px;overflow: auto;">
        <v-list two-line light>
          <!-- ------------------------------------- -->
          <v-list-tile @click="clickRiverWarnList(1)">
            <v-list-tile-content>
              <v-list-tile-title>
                <v-icon color="#a00">warning</v-icon>
                鬼怒川
              </v-list-tile-title>
              <v-list-tile-sub-title class="river-warn-sub-title">
                <span class="rw-ff3">氾濫危険水位</span>
                2019/08/24 11:55
              </v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <!-- ------------------------------------- -->
          <v-list-tile @click="clickRiverWarnList(2)">
            <v-list-tile-content>
              <v-list-tile-title>
                <v-icon color="#c50">warning</v-icon>
                利根川
              </v-list-tile-title>
              <v-list-tile-sub-title class="river-warn-sub-title">
                <span class="rw-ff2">避難判断水位</span>
                2019/08/24 11:55
              </v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <!-- ------------------------------------- -->
          <v-list-tile @click="clickRiverWarnList(3)">
            <v-list-tile-content>
              <v-list-tile-title>
                <v-icon color="#ea0">warning</v-icon>
                隅田川
              </v-list-tile-title>
              <v-list-tile-sub-title class="river-warn-sub-title">
                <span class="rw-ff1">氾濫注意水位</span>
                2019/08/24 11:55
              </v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <!-- ------------------------------------- -->
          <v-list-tile @click="clickRiverWarnList(4)">
            <v-list-tile-content>
              <v-list-tile-title>
                <v-icon color="#ea0">warning</v-icon>
                江戸川
              </v-list-tile-title>
              <v-list-tile-sub-title class="river-warn-sub-title">
                <span class="rw-ff1">氾濫注意水位</span>
                2019/08/24 11:55
              </v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <!-- ------------------------------------- -->
        </v-list>
      </v-flex>
    </v-layout>
  </v-card>
</template>
<script>
import { setTimeout } from "timers";
export default {
  name: "rvier-warn-overview",
  computed: {
    overviewUrl: {
      get() {
        const level = this.$store.state.riverWarn.overviewLevel;
        let url = this.$store.state.riverWarn.overviewUrl;
        url = url + "/" + level + ".svg";
        console.log("url:" + url);
        return url;
      }
    },
    overviewState: {
      get() {
        return this.$store.state.riverWarn.overviewState;
      }
    }
  },
  methods: {
    clickRiverWarnList(cd) {
      console.log(`${cd}がクリックされました。`);
    },
    setRwOverview() {
      console.log("setRwOverview() >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
      const elmE = document.getElementById("rw_overview");
      const elm = elmE.contentDocument;
      for (const st of this.overviewState) {
        const pathElm = elm.getElementById(st.code);
        if (pathElm == null) {
          break;
        }
        pathElm.style.cursor = "pointer";
        switch (st.state) {
          case 0:
            pathElm.style.setProperty("fill", "#fff");
            break;
          case 1:
            pathElm.style.setProperty("fill", "#acf");
            break;
          case 2:
            pathElm.style.setProperty("fill", "#dc0");
            break;
          case 3:
            pathElm.style.setProperty("fill", "#f70");
            break;
          case 4:
            pathElm.style.setProperty("fill", "#a00");
            break;
        }
      }
    }
  },
  mounted() {
    console.log("mounted.");
    setTimeout(() => {
      console.log("event mounted.");
      this.setRwOverview();
    }, 500);
  },
  watch: {
    overviewUrl() {
      console.log("change overviewUrl");
      setTimeout(() => {
        console.log("wathc (overviewUrl)");
        this.setRwOverview();
      }, 500);
    },
    overviewState() {
      console.log("change overviewState");
      setTimeout(() => {
        console.log("wathc (overviewState)");
        this.setRwOverview();
      }, 500);
    }
  }
};
</script>

<style lang="stylus" scoped>
.river-warn-overview{
  height:232px;
  background-color:#fff;
}
.river-warn-overview-map{
  height:220px;
  background:#b0bec5;
}
.river-warn-sub-title{
  font-size: 9pt;
  span{
    font-size: 8pt;
    font-weight: bold;
    display: inline-block;
    padding: 0px 8px 2px 8px;
    border-radius: 8px
  }
}
.rw-ff1{
  color: #550;
  background-color: #ea0;
}
.rw-ff2{
  color: #fff;
  background-color: #c50;
}
.rw-ff3{
  color: #fff;
  background-color: #a00;
}
.rw-ff4{
  color: #fff;
  background-color: #000;
}
</style>
