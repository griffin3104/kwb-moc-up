<template>
  <div id="kwb-pc-panel-frame" class="container-col">
    <ul id="kwb-pc-tab-frame" class="container-row">
      <li
        v-for="tab in tabs"
        :key="tab.idx"
        :class="tabSelect(tab.selected)"
        @click="setTabIndex(tab.idx)"
      >{{tab.caption}}</li>
    </ul>
    <div id="kwb-pc-contents-frame" class="box-one container-col">
      <router-view name="pc_contents"></router-view>
    </div>
  </div>
</template>
<script>
import Vue from "vue";

export default Vue.extend({
  data: function() {
    return {
      tabIndex: 0,
      tabs: [
        {
          idx: 0,
          caption: "概況",
          url: "overview",
          selected: false
        },
        {
          idx: 1,
          caption: "観測所一覧",
          url: "obslist",
          selected: false
        },
        {
          idx: 2,
          caption: "河川予警報",
          url: "riverwarn",
          selected: false
        },
        {
          idx: 3,
          caption: "レーダ雨量",
          url: "radar",
          selected: false
        },
        {
          idx: 4,
          caption: "浸水想定",
          url: "floodview",
          selected: false
        },
        {
          idx: 5,
          caption: "表示設定",
          url: "viewconfig",
          selected: false
        },
        {
          idx: 6,
          caption: "観測所",
          url: "obsview",
          selected: false
        }
      ]
    };
  },
  methods: {
    tabSelect(flg) {
      if (flg) {
        return "act";
      } else {
        return "non_act";
      }
    },
    setTabIndex(idx) {
      // if (idx % 2) {
      //   this.$store.commit("msg/showInfo", {
      //     caption: "キャプション",
      //     msg: "メッセージ表示(" + idx + ")"
      //   });
      // } else {
      //   this.$store.commit("msg/showWarn", {
      //     caption: "キャプション",
      //     msg: "メッセージ表示(" + idx + ")"
      //   });
      // }
      this.tabIndex = idx;
      this.$router.push("/pc/" + this.tabs[idx].url);
    }
  },
  watch: {
    tabIndex: function(newIdx, oldIdx) {
      this.tabs[newIdx].selected = true;
      this.tabs[oldIdx].selected = false;
    },
    $route: function(toRoute) {
      console.log("route change", toRoute);
      for (var tabIdx in this.tabs) {
        var tab = this.tabs[tabIdx];
        if (toRoute.path.endsWith(tab.url)) {
          tab.selected = true;
          this.tabIndex = tab.idx;
        } else {
          tab.selected = false;
        }
      }
    }
  },
  mounted() {
    for (var tabIdx in this.tabs) {
      var tab = this.tabs[tabIdx];
      if (location.pathname.endsWith(tab.url)) {
        tab.selected = true;
        this.tabIndex = tab.idx;
      } else {
        tab.selected = false;
      }
    }
  }
});
</script>

<style lang="scss" scoped>
@import "../../scss/properties.scss";

#kwb-pc-panel-frame {
  background-color: $bk_color;
  box-sizing: border-box;
  width: 550px;
  padding: 8px;
  min-height: 600px;
  min-width: 550px;
}

#kwb-pc-tab-frame {
  width: 100%;
  justify-content: flex-start;
  list-style: none;
  li {
    cursor: pointer;
    background-color: #808080;
    border-top-right-radius: 8px;
    padding: 5px 4px 5px 4px;
    flex: 1;
    font-size: 0.7rem;
    color: #f0f0f0;
    text-align: center;
    margin-right: 2px;
  }
  .act {
    background-color: #c0c0c0;
    color: #303030;
    font-weight: bold;
  }
  .non_act {
    background-color: #808080;
    color: #f0f0f0;
    font-weight: normal;
  }
}
#kwb-pc-contents-frame {
  background-color: #c0c0c0;
}
</style>