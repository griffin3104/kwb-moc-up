<template>
  <div class="kwb-pc-obs-waterqt box-one container-col">
    <kwb-obs-title></kwb-obs-title>
    <div class="info-area container-non">お知らせ</div>
    <kwb-current-area></kwb-current-area>
    <div class="obs-contents container-col box-one">
      <div class="obs-content-top container-row">
        <div
          v-for="(tab, index) in contentsTabList"
          :key="index"
          class="obs-content-top-item pointer"
        >
          <img :src="tab.img" @click="changeTab(index)">
        </div>
      </div>
      <div class="obs-content-area container-col">
        <div class="content-caption">{{contentsTabList[tabIndex].title}}</div>
        <div v-if="tabIndex === 0" class="obs-info-content container-col">
          <div class="obs-info-item container-row">
            <div class="label">水系名</div>
            <div class="value-info">{{obsCommon.rsysName}}</div>
          </div>
          <div class="obs-info-item container-row">
            <div class="label">河川名</div>
            <div class="value-info">{{obsCommon.rvrName}}</div>
          </div>
          <div class="obs-info-item container-row">
            <div class="label">管理者</div>
            <div class="value-info">{{obsCommon.manager}}</div>
          </div>
          <div class="obs-info-item container-row">
            <div class="label">位置</div>
            <div class="value-info">{{obsCommon.lonlat}}</div>
          </div>
          <div class="obs-info-item container-row">
            <div class="label">所在地</div>
            <div class="value-info">{{obsCommon.address}}</div>
          </div>
          <div class="obs-info-item container-row">
            <div class="label">基準値(水温)</div>
            <div class="value-info">-</div>
          </div>
          <div class="obs-info-item container-row">
            <div class="label">基準値(pH)</div>
            <div class="value-info">{{spec.phLolmt}} ～ {{spec.phUplmt}}</div>
          </div>
          <div class="obs-info-item container-row">
            <div class="label">基準値(DO)</div>
            <div class="value-info">{{spec.doxLolmt}}</div>
          </div>
          <div class="obs-info-item container-row">
            <div class="label">基準値(導電率)</div>
            <div class="value-info">-</div>
          </div>
          <div class="obs-info-item container-row">
            <div class="label">基準値(濁度)</div>
            <div class="value-info">-</div>
          </div>
          <div class="obs-info-item container-row">
            <div class="label">基準値(アンモニウムイオン)</div>
            <div class="value-info">-</div>
          </div>
          <div class="obs-info-item container-row">
            <div class="label">基準値(塩分濃度)</div>
            <div class="value-info">-</div>
          </div>
          <div class="obs-info-item container-row">
            <div class="label">基準値(COD)</div>
            <div class="value-info">{{spec.codUplmt}}</div>
          </div>
        </div>
        <div v-if="tabIndex === 1" class="obs-graph-content container-col">
          <div class="waterqt-graph">グラフ</div>
        </div>
        <div v-if="tabIndex === 2" class="obs-list-content container-col">
          <div class="container-col">
            <div class="sub-title container-row">
              <div class="obs-time">時刻</div>
              <div v-for="master in obsList" :key="master.name" class="label-name">{{master.name}}</div>
            </div>
            <ul class="scroll box-one">
              <li
                v-for="(object, index) in history"
                :key="index"
                class="list box-one container-row"
              >
                <div v-for="(item, index) in object" :key="index">{{item}}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="waterqt-content-bottom" class="obs-content-bottom">
        <ul v-if="tabIndex === 1" class="obs-bottom-items container-row">
          <li class="obs-bottom-item">
            <img class="sns-mark pointer" src="/img/twitter.png">
          </li>
          <li class="obs-bottom-item">
            <img class="sns-mark pointer" src="/img/share-c.png">
          </li>
          <li>
            <div class="obs-bottom-legend btn-act pointer">凡例</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import KwbObsTitle from "./KwbObsTitle";
import KwbCurrentArea from "./KwbCurrentArea";

export default {
  name: "KwbObaWaterqt",
  components: {
    KwbObsTitle,
    KwbCurrentArea
  },
  data() {
    return {
      currentDisplay: 0,
      categoryIndex: 0,
      legendBtn: false,
      tabIndex: 1,
      contentsTabList: [
        {
          img: "/img/obs_info.png",
          title: "観測所情報"
        },
        {
          img: "/img/hydro.png",
          title: "水質グラフ"
        },
        {
          img: "/img/list.png",
          title: "観測値一覧"
        }
      ],
      obsList: [
        { name: "水温", value: "tmp", unit: "℃" },
        { name: "pH", value: "ph", unit: "" },
        { name: "DO", value: "do", unit: "mg/l" },
        { name: "導電率", value: "conduct", unit: "mS/m" },
        { name: "濁度", value: "13.4", unit: "度" },
        { name: "アンモニウムイオン", value: "-", unit: "mg/l" },
        { name: "塩分濃度", value: "-", unit: "mg/l" },
        { name: "COD", value: "4.0", unit: "mg/l" }
      ],
      qwtrLabel: [
        { name: "水温", value: "tmp", unit: "℃" },
        { name: "pH", value: "ph", unit: "" },
        { name: "DO", value: "do", unit: "mg/l" },
        { name: "導電率", value: "conduct", unit: "mS/m" },
        { name: "濁度", value: "turbdty", unit: "度" },
        { name: "アンモニウムイオン", value: "amn", unit: "mg/l" },
        { name: "塩分濃度", value: "slt", unit: "mg/l" },
        { name: "COD", value: "cod", unit: "mg/l" }
      ],
      obsInfo: {
        obsName: "小見川",
        rsysName: "利根川",
        rvrName: "利根川",
        obsKana: "おみがわ",
        rsysKana: "とねがわ",
        rvrKana: "とねがわ",
        manager: "利根川下流河川事務所",
        lonlat: "-",
        address: "千葉県香取市八日市場(小見川大橋(右岸)より上流約30m)"
      }
    };
  },
  computed: {
    obsCommon: {
      get() {
        return this.$store.state.tm.obsDetail.common;
      }
    },
    spec: {
      get() {
        return this.$store.state.tm.obsDetail.qwtr.spec;
      }
    },
    history: {
      get() {
        return this.$store.state.tm.obsDetail.qwtr.history.hour;
      }
    }
  },
  mounted() {
    this.tabIndex = 1;
    this.$store.commit("tm/setCommon", this.obsInfo);
  },
  methods: {
    changeTab(index) {
      this.tabIndex = index;
    },
    getCurrentIndex(index) {
      this.categoryIndex = index;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../../scss/properties.scss";

.kwb-pc-obs-waterqt {
  li {
    list-style: none;
  }
}
.info-area {
  height: 24px;
  line-height: 24px;
  color: white;
  background-color: #686868;
  border-bottom: 8px;
}

.obs-contents {
  box-sizing: border-box;
  .obs-content-top {
    box-sizing: border-box;
    height: 64px;
    border-radius: 8px 8px 0 0;
    padding: 8px 0 0 8px;
    background-color: $content_base_color;
    flex-shrink: 0;
    .obs-content-top-item {
      width: 52px;
      height: 52px;
      img {
        width: 52px;
        height: 52px;
      }
    }
  }
  .obs-content-area {
    background-color: $content_main_color;
    .obs-info-content {
      overflow-y: auto;
      .obs-info-item {
        padding: 8px;
        align-items: center;
        border-bottom: 1px #ddd dashed;
        font-size: 0.9rem;
        flex-shrink: 0;
        .label {
          flex: 1.5;
        }
        .value-info {
          flex: 5;
        }
      }
      .obs-item-info:last-child {
        border-bottom: none;
      }
    }
    .obs-graph-content {
      height: 300px;
    }

    .obs-list-content {
      padding: 4px;
      overflow-x: scroll;
      white-space: nowrap;
      .sub-title {
        color: #02227c;
        font-weight: 400;
        font-size: 0.9rem;
        border-bottom: solid 1px;
        border-color: #726a6a;
        flex-shrink: 0;
        .obs-time {
          width: 136px;
          text-align: center;
        }
        .label-name {
          padding: 0 20px 0 20px;
          text-align: center;
        }
      }
      .scroll {
        overflow-y: auto;
        overflow-x: hidden;
        .list {
          line-height: 24px;
          height: 24px;
          .obs-time {
            align-items: center;
            box-sizing: border-box;
            .date {
              text-align: center;
              width: 80px;
              font-size: 0.8rem;
              padding-right: 4px;
            }
            .time {
              text-align: left;
              width: 56px;
              font-size: 1rem;
            }
          }
          .value {
            text-align: center;
          }
        }
        .list:nth-child(2n + 1) {
          background-color: #e3f1fa;
        }
      }
    }
  }
  .obs-content-bottom {
    box-sizing: border-box;
    height: 48px;
    border-radius: 0 0 8px 8px;
    padding: 8px 0 0 8px;
    background-color: $bk_color;
    .obs-bottom-items {
      justify-content: flex-end;
      padding-right: 8px;
      .sns-mark {
        height: 32px;
        width: 32px;
        margin-right: 8px;
      }
      .obs-bottom-legend {
        height: 28px;
        width: 64px;
        line-height: 28px;
        text-align: center;
        border-radius: 4px;
        background-color: $content_legend_bk;
        box-sizing: border-box;
      }
    }
  }
}
.btn-act {
  color: white;
  box-shadow: 2px 2px 5px #4e4e4e;
}
.btn-non-act {
  margin-top: 1px;
  padding: 1px;
  box-shadow: 2px 2px 2px #7e7e7e inset;
  color: #303030;
}
.pointer {
  cursor: pointer;
  cursor: hand;
}
</style>
