<template>
  <div class="kwb-obs-dam box-one container-col">
    <kwb-obs-title></kwb-obs-title>
    <keb-current-area></keb-current-area>
    <div class="dam-contents box-one container-col">
      <div class="dam-contents-top bgc-bkcolor container-row">
        <div v-for="(tab, index) in contentsTabList" :key="index" class="dam-contents-top-item">
          <img :src="tab.img" @click="changeTab(index)" class="hand">
        </div>
      </div>
      <div class="content-caption">{{contentsTabList[tabIndex].title}}</div>
      <div v-if="tabIndex === 0" class="scroll bgc-white container-col">
        <div class="obs-item-info container-row">
          <div class="label">管理者</div>
          <div class="value-info">{{damObs.manager}}</div>
        </div>
        <div class="obs-item-info container-row">
          <div class="label">流域面積</div>
          <div class="value-info">179.4</div>
        </div>
        <div class="obs-item-info container-row">
          <div class="label">所在地</div>
          <div class="value-info">{{damObs.address}}</div>
        </div>
        <div class="obs-item-info container-row">
          <div class="label">雨量観測所</div>
          <div class="value-info">
            <a href="#">川俣</a>(テレ流域)
          </div>
        </div>
        <div class="obs-item-info container-row">
          <div class="label">最低水位(m)</div>
          <div class="value-info">930.00</div>
        </div>
        <div class="obs-item-info container-row">
          <div class="label">予備放流水位(m)</div>
          <div class="value-info">-</div>
        </div>
        <div class="obs-item-info container-row">
          <div class="label">洪水貯留準備水位(m)</div>
          <div class="value-info">-</div>
        </div>
        <div class="obs-item-info container-row">
          <div class="label">平常時最高水位(m)</div>
          <div class="value-info">976.00</div>
        </div>
        <div class="obs-item-info container-row">
          <div class="label">異常洪水時防災操作開始水位(m)</div>
          <div class="value-info">976.00</div>
        </div>
        <div class="obs-item-info container-row">
          <div class="label">洪水時最高水位(m)</div>
          <div class="value-info">976.00</div>
        </div>
        <div class="obs-item-info container-row">
          <div class="label">洪水貯留操作開始流量(m&sup3;/s)</div>
          <div class="value-info">350.00</div>
        </div>
        <div class="obs-item-info container-row">
          <div class="label">計画最大放流量(m&sup3;/s)</div>
          <div class="value-info">350.00</div>
        </div>
        <div class="obs-item-info container-row">
          <div class="label">貯水位基準値(m)</div>
          <div class="value-info">976.00</div>
        </div>
        <div class="obs-item-info container-row">
          <div class="label">全放流基準値(m&sup3;/s)</div>
          <div class="value-info">-</div>
        </div>
        <div class="obs-item-info container-row">
          <div class="label">全流入基準値(m&sup3;/s)</div>
          <div class="value-info">350.00</div>
        </div>
        <div class="obs-item-info container-row">
          <div class="label">雨量(時間・10分)基準値(mm)</div>
          <div class="value-info">-/-</div>
        </div>
        <div class="obs-item-info container-row">
          <div class="label">累加雨量基準値(mm)</div>
          <div class="value-info">-/-</div>
        </div>
      </div>
      <div v-if="tabIndex === 1" class="container-col">
        <div class="bgc-white">ダム模式図</div>
      </div>
      <div v-if="tabIndex === 2" class="dam-contents-graph container-col">
        <div class="hyeto-graph bgc-white border-btm">ハイエトグラフ</div>
        <div class="dam-quantity-graph bgc-white">ダム諸量グラフ</div>
      </div>
      <div v-if="tabIndex === 3" class="dam-contents-list container-col">
        <div class="obs-val-list bgc-white container-col">
          <div class="column-name border-btm container-row">
            <div class="obs-time">時刻</div>
            <div v-for="master in getMaster" :key="master.label" class="box-one">{{master.label}}</div>
          </div>
          <ul class="scroll">
            <li
              v-for="(object, index) in damHistoryData"
              :key="index"
              :class="{'bgc-blue-light': index % 2 === 0}"
              class="list box-one container-row"
            >
              <div class="obs-time container-row">
                <div class="obs-val-list-date">
                  <span
                    v-if="(index === 0) || (getDate(object.obsTime) !== getDate(damHistoryData[index - 1].obsTime))"
                  >{{getDate(object.obsTime)}}</span>
                </div>
                <div class="obs-val-list-time">{{getTime(object.obsTime)}}</div>
              </div>
              <div v-for="master in getMaster" :key="master.label" class="box-one container-row">
                <div
                  v-for="(value, key) in object"
                  :key="key"
                  :class="{'container-non': key !== master.key}"
                  class="box-one"
                >
                  {{value}}
                  <span v-html="master.unit" class="unit"></span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="dam-contents-btm bgc-bkcolor container-row">
        <div v-if="tabIndex !== 3 && tabIndex !== 0" class="container-row">
          <div class="dam-contents-btm-item">
            <img src="/img/twitter.png" class="hand">
          </div>
          <div class="dam-contents-btm-item">
            <img src="/img/share-c.png" class="hand">
          </div>
          <div
            @click="toggleLegendBtn"
            :class="{'legend-btn-non-act': legendBtnToggle === true, 'legend-btn-act': legendBtnToggle === false}"
            class="legend-btn hand"
          >凡例</div>
        </div>
        <div v-if="tabIndex === 3 || tabIndex === 2" class="graph-list-btm-item container-row">
          <div
            @click="selectTime = 'hour'"
            :class="{'btn-non-act': selectTime === 'hour', 'btn-act hand': selectTime === 'min10'}"
            class="btn-hour"
          >時間</div>
          <div
            @click="selectTime = 'min10'"
            :class="{'btn-non-act': selectTime === 'min10', 'btn-act hand': selectTime === 'hour'}"
            class="btn-min10"
          >10分</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import KwbObsTitle from "./KwbObsTitle";
import KebCurrentArea from "./KwbCurrentArea";
export default {
  name: "kwb-obs-dam",
  components: {
    KwbObsTitle,
    KebCurrentArea
  },
  data() {
    return {
      tabIndex: 2,
      categoryIndex: 0,
      selectTime: "hour",
      legendBtnToggle: false,
      categoryList: [
        {
          name: "雨量関連",
          master: [
            {
              label: "時間雨量",
              key: "rnHr",
              unit: "mm/H"
            },
            {
              label: "累加雨量",
              key: "rnInc",
              unit: "mm/H"
            }
          ]
        },
        {
          name: "貯水関連",
          master: [
            {
              label: "貯水位",
              key: "storLvl",
              unit: "m"
            },
            {
              label: "貯水量",
              key: "storCap",
              unit: "(10&sup3;m&sup3;)"
            }
          ]
        },
        {
          name: "貯水率関連",
          master: [
            {
              label: "治水容量",
              key: "storPcntImp",
              unit: "%"
            },
            {
              label: "有効容量",
              key: "storPcntEff",
              unit: "%"
            },
            {
              label: "利水容量",
              key: "storPcntIrr",
              unit: "%"
            }
          ]
        },
        {
          name: "放流・流入関連",
          master: [
            {
              label: "全放流量",
              key: "allDisch",
              unit: "m&sup3;"
            },
            {
              label: "全流入量",
              key: "allSink",
              unit: "m&sup3;"
            }
          ]
        }
      ],
      contentsTabList: [
        {
          img: "/img/obs_info.png",
          title: "観測所情報"
        },
        {
          img: "/img/dam_diagram.png",
          title: "ダム模式図"
        },
        {
          img: "/img/hydro.png",
          title: "ダム諸量グラフ"
        },
        {
          img: "/img/list.png",
          title: "観測値一覧"
        }
      ],
      titleInfo: {
        obsName: "川俣ダム",
        rvrName: "鬼怒川",
        rsysName: "利根川水系",
        obsKana: "かわまただむ",
        rvrKana: "きぬがわ",
        rsysKana: "とねがわすいけい",
        manager: "国交省　鬼怒川ダム統合管理事務所",
        address: "栃木県日光市川俣",
        zeroHigh: "-"
      }
    };
  },
  mounted() {
    this.$store.commit("tm/setCommon", this.titleInfo);
  },
  computed: {
    prevCategoryIndex() {
      return this.categoryIndex - 1;
    },
    nextCategoryIndex() {
      return this.categoryIndex + 1;
    },
    damCurrentData: {
      get() {
        if (this.selectTime === "hour") {
          return this.$store.state.tm.obsDetail.dam.current.hour;
        } else {
          return this.$store.state.tm.obsDetail.dam.current.min10;
        }
      }
    },
    damHistoryData: {
      get() {
        if (this.selectTime === "hour") {
          return this.$store.state.tm.obsDetail.dam.history.hour;
        } else {
          return this.$store.state.tm.obsDetail.dam.history.min10;
        }
      }
    },
    getMaster() {
      var list = this.categoryList;
      if (this.selectTime === "hour") {
        list[0].master[0].label = "時間雨量";
        list[0].master[0].key = "rnHr10m";
        list[0].master[0].unit = "mm/H";
      } else {
        list[0].master[0].label = "10分雨量";
        list[0].master[0].key = "rn10m";
        list[0].master[0].unit = "mm/10M";
      }
      return list[this.categoryIndex].master;
    },
    damObs: {
      get() {
        return this.$store.state.tm.obsDetail.common;
      }
    }
  },
  methods: {
    changeTab(index) {
      this.tabIndex = index;
    },
    toggleLegendBtn() {
      this.legendBtnToggle = !this.legendBtnToggle;
    },
    getDate(obsTime) {
      obsTime = String(obsTime);
      var date = obsTime.slice(obsTime.indexOf("/") + 1, obsTime.indexOf(" "));
      return date;
    },
    getTime(obsTime) {
      obsTime = String(obsTime);
      var time = obsTime.slice(obsTime.indexOf(" ") + 1);
      return time;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../../scss/properties.scss";

.kwb-obs-dam {
  color: $obs_font_black;
}
.latest-obs-val {
  margin-bottom: 8px;
  flex-shrink: 0;
  .current-link {
    box-sizing: border-box;
    height: 24px;
    line-height: 24px;
  }
  .current-data {
    text-align: center;
    height: 48px;
    .current-data-label,
    .current-data-val {
      box-sizing: border-box;
      height: 24px;
      line-height: 24px;
    }
  }
}
.kwb-obs-dam-year {
  padding-left: 14px;
  font-size: 0.9rem;
}
.kwb-obs-dam-date {
  font-size: 0.9rem;
}
.kwb-obs-dam-time {
  padding-left: 8px;
  font-size: 1rem;
}
.select-point {
  background-color: #ebebeb;
  justify-content: center;
  align-items: center;
  padding: 4px 0 0 0;
  img {
    height: 16px;
  }
}
.link-left {
  font-size: 0.8rem;
  text-align: left;
  a {
    text-decoration: none;
    margin-left: 20%;
    color: #0000ff;
  }
  a:hover {
    font-weight: bold;
  }
}
.link-right {
  font-size: 0.8rem;
  text-align: right;
  a {
    text-decoration: none;
    margin-right: 20%;
    color: #0000ff;
  }
  a:hover {
    font-weight: bold;
  }
}
.display-title {
  text-align: center;
}
.dam-contents-top {
  box-sizing: border-box;
  height: 64px;
  border-radius: 8px 8px 0 0;
  padding: 8px 0 0 8px;
  flex-shrink: 0;
}
.hyeto-graph {
  height: 150px;
}
.dam-quantity-graph {
  height: 250px;
}
.dam-contents-list {
  max-height: 100%;
}
.obs-val-list {
  text-align: center;
  padding: 4px;
  li {
    list-style: none;
  }
  .obs-val-list-date {
    width: 68px;
  }
  .obs-val-list-time {
    width: 68px;
    font-size: 1rem;
  }
}
.column-name {
  box-sizing: border-box;
  height: 24px;
  line-height: 24px;
  background-color: white;
  color: #02227c;
  flex-shrink: 0;
  // padding: 0 17px 0 0;
}
.dam-contents-btm {
  box-sizing: border-box;
  height: 48px;
  border-radius: 0 0 8px 8px;
  padding: 8px 8px 0 0;
  justify-content: flex-end;
  flex-shrink: 0;
}
.graph-list-btm-item {
  box-sizing: border-box;
  height: 24px;
  line-height: 24px;
  color: white;
  margin-left: 4px;
  padding-top: 3px;
}
.legend-btn {
  box-sizing: border-box;
  width: 64px;
  height: 28px;
  font-size: 0.9rem;
  line-height: 28px;
  text-align: center;
  background-color: $content_legend_bk;
  border-radius: 4px;
  margin-top: 2px;
}
.legend-btn:active {
  margin-top: 3px;
  box-shadow: none;
}
.legend-btn-act {
  color: white;
  box-shadow: 2px 2px 5px #4e4e4e;
}
.legend-btn-non-act {
  margin-top: 3px;
  box-shadow: none;
  color: white;
  background-color: $base;
}
.btn-hour,
.btn-min10 {
  box-sizing: border-box;
  text-align: center;
  font-size: 0.9rem;
  margin-left: 2px;
  width: 50px;
  height: 24px;
  line-height: 24px;
  border-radius: 4px;
  background-color: #aaaaaa;
}
.btn-hour:active,
.btn-min10:active {
  margin-top: 1px;
  box-shadow: none;
}
.subtitle {
  color: white;
  background-color: $base;
  box-sizing: border-box;
  height: 24px;
  line-height: 24px;
  padding-left: 8px;
  flex-shrink: 0;
}
.hand {
  cursor: pointer;
  cursor: hand;
}
.scroll {
  overflow-y: auto;
  overflow-x: hidden;
}
.list {
  height: 24px;
  line-height: 24px;
  font-size: 0.9rem;
}
.unit {
  font-size: 0.7rem;
}
.obs-time {
  width: 136px;
}
.obs-item-info {
  box-sizing: border-box;
  font-size: 0.9rem;
  align-items: left;
  border-bottom: 1px #ddd dashed;
  flex-shrink: 0;
  .label {
    flex: 1;
    padding: 8px;
    border-right: 1px #ddd dashed;
  }
  .value-info {
    flex: 2;
    padding: 8px;
  }
}
.obs-item-info:last-child {
  border-bottom: none;
}

.dam-contents-top-item {
  width: 52px;
  height: 52px;
  img {
    width: 52px;
    height: 52px;
  }
}
.dam-contents-btm-item {
  width: 36px;
  img {
    width: 32px;
  }
}
.btn-act {
  color: white;
  box-shadow: 2px 2px 5px #4e4e4e;
}
.btn-non-act {
  margin-top: 1px;
  padding: 1px;
  box-shadow: none;
  color: white;
  background-color: $base;
}
.border-btm {
  border-bottom: 0.3px solid #a7a7a7;
}
.border-btm-bold {
  border-bottom: 2px solid #686868;
}
.bgc-white {
  background-color: white;
}
.bgc-bkcolor {
  background-color: $bk_color;
}
.bgc-blue {
  background-color: $base;
}
.bgc-gray {
  background-color: #a7a7a7;
}
.bgc-blue-light {
  background-color: #e3f1fa;
}
</style>
