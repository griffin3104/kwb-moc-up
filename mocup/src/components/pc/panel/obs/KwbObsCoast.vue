<template>
  <div class="kwb-obs-coast container-col box-one">
    <kwb-obs-title></kwb-obs-title>
    <div class="notice-info container-col">
      <div class="container-row">
        <div class="obs-info box-one">当観測所に関するお知らせがあります！</div>
        <div class="danger box-one">危険</div>
      </div>
    </div>
    <kwb-current-area></kwb-current-area>
    <div class="contents container-col box-one">
      <div class="contents-tab container-row">
        <div v-for="(tabItem,index) in tabList" :key="index">
          <img :src="tabItem.url" @click="changeTab(index)">
        </div>
      </div>
      <div class="contents-info container-col">
        <div class="content-caption">{{tabList[tabIndex].tabName}}</div>
        <div class="current-info container-col" v-if="tabIndex === 0">
          <div class="obs-item-info container-row">
            <div class="label">沿岸名</div>
            <div class="value-info">{{coastObs.rsysName}}</div>
          </div>
          <div class="obs-item-info container-row">
            <div class="label">海岸名</div>
            <div class="value-info">{{coastObs.rvrName}}</div>
          </div>
          <div class="obs-item-info container-row">
            <div class="label">管理者</div>
            <div class="value-info">{{coastObs.manager}}</div>
          </div>
          <div class="obs-item-info container-row">
            <div class="label">所在地</div>
            <div class="value-info">{{coastObs.address}}</div>
          </div>
          <div class="obs-item-info container-row">
            <div class="label">零点高</div>
            <div class="value-info">{{coastObs.zeroHigh}}</div>
          </div>
          <div class="obs-item-info container-row">
            <div class="label">注意値(潮位)</div>
            <div class="value-info">{{coastSpec.tidlvlCaut}}</div>
          </div>
          <div class="obs-item-info container-row">
            <div class="label">警戒値(潮位)</div>
            <div class="value-info">{{coastSpec.tidlvlWarn}}</div>
          </div>
        </div>
        <div class="graph-info container-col" v-if="tabIndex === 1">
          <div class="wave-tide">波と潮位の状況</div>
          <div class="wind-dir-speed">風向・風速</div>
        </div>

        <div class="obs-value-info container-col" v-if="tabIndex === 2">
          <div class="container-col">
            <div class="sub-title container-row">
              <div class="obs-time">時刻</div>
              <div
                v-for="master in coastLabel[categoryIndex].master"
                :key="master.label"
                class="label-name box-one"
              >{{master.label}}</div>
            </div>
            <ul class="scroll box-one">
              <li
                v-for="(object, index) in historyData"
                :key="index"
                class="list box-one container-row"
              >
                <div class="obs-time container-row">
                  <div class="date">
                    <span
                      v-if="(index === 0) || (getDate(object.obsTime) !== getDate(historyData[index - 1].obsTime))"
                    >{{getDate(object.obsTime)}}</span>
                  </div>
                  <div class="time">{{getTime(object.obsTime)}}</div>
                </div>

                <div
                  v-for="master in coastLabel[categoryIndex].master"
                  :key="master.label"
                  class="box-one container-row"
                >
                  <div
                    v-for="(value, key) in object"
                    :key="key"
                    :class="{'container-non': key !== master.value}"
                    class="value box-one"
                  >
                    {{value}}
                    <span v-html="master.unit" class="unit"></span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="option container-row">
        <img v-if="tabIndex === 1" src="/img/twitter.png">
        <img v-if="tabIndex === 1" src="/img/share-c.png">
        <div v-if="tabIndex === 1" class="legend">凡例</div>
      </div>
    </div>
  </div>
</template>

<script>
import KwbObsTitle from "./KwbObsTitle";
import KwbCurrentArea from "./KwbCurrentArea";
export default {
  name: "kwb-obs-coast",
  components: {
    KwbObsTitle,
    KwbCurrentArea
  },
  data() {
    return {
      categoryIndex: 0,
      tabIndex: 1,
      tabList: [
        {
          tabName: "観測所情報",
          url: require("../../../../../public/img/obs_info.png")
        },
        {
          tabName: "海岸情報",
          url: require("../../../../../public/img/hydro.png")
        },
        {
          tabName: "観測値一覧",
          url: require("../../../../../public/img/list.png")
        }
      ],
      titleInfo: {
        obsName: "タワー総合",
        rvrName: "筑後川",
        rsysName: "筑後川",
        obsKana: "たわーそうごう",
        rsysKana: "ちくごがわ",
        rvrKana: "ちくごがわ",
        manager: "国交省　筑後川河川事務所",
        address:
          "佐賀県杵島郡白石町大字福富町(佐賀県杵島郡白石町大字福富町字藤富搦287番地の１より143度方向で17.1kmの海上)",
        zeroHigh: "T.P.-1.6m(標高 -1.6m)"
      },

      coastLabel: [
        {
          name: "最大波",
          master: [
            { label: "波高", value: "maxwvHght", unit: "m" },
            { label: "周期", value: "maxwvCycl", unit: "(s)" }
          ]
        },
        {
          name: "1/3有義波",
          master: [
            { label: "波高", value: "maxwvHght", unit: "m" },
            { label: "周期", value: "maxwvCycl", unit: "(s)" }
          ]
        },
        {
          name: "潮位",
          master: [{ label: "潮位", value: "tidlvl", unit: "(T.P.m)" }]
        },
        {
          name: "風向・風速",
          master: [
            { label: "風向き", value: "avewndDir", unit: "" },
            { label: "風速", value: "avewndSpd", unit: "(m/s)" }
          ]
        }
      ]
    };
  },
  computed: {
    prevCategoryIndex() {
      return this.categoryIndex - 1;
    },
    nextCategoryIndex() {
      return this.categoryIndex + 1;
    },
    historyData: {
      get() {
        return this.$store.state.tm.obsDetail.coast.history.hour;
      }
    },
    coastObs: {
      get() {
        return this.$store.state.tm.obsDetail.common;
      }
    },
    coastSpec: {
      get() {
        return this.$store.state.tm.obsDetail.coast.spec;
      }
    }
  },
  mounted() {
    this.$store.commit("tm/setCommon", this.titleInfo);
  },
  methods: {
    changeTab(selectedNum) {
      this.tabIndex = selectedNum;
    },
    getDate(obsTime) {
      obsTime = String(obsTime);
      var date = obsTime
        .slice(0, obsTime.indexOf(" "))
        .slice(obsTime.indexOf("/") + 1);
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
.kwb-obs-coast {
  color: $obs_font_black;
}
.notice-info {
  box-sizing: border-box;
  display: none;
  margin-bottom: 4px;
  font-size: 0.8rem;
  font-weight: bold;
  color: #fff;
  .obs-info {
    padding: 4px;
    height: 16px;
    text-align: center;
    background-color: #3e9251;
  }
  .danger {
    padding: 4px;
    height: 16px;
    text-align: center;
    background-color: #c82339;
  }
}

.contents {
  box-sizing: border-box;
  .contents-tab {
    height: 56px;
    padding: 8px 0 0 8px;
    background-color: $content_base_color;
    border-radius: 8px 8px 0 0;
    flex-shrink: 0;
    img {
      width: 52px;
      height: 52px;
      cursor: pointer;
    }
  }

  .contents-info {
    font-size: 0.9rem;
    background-color: $subtitle_font_color;
    .obs-item-info {
      padding: 8px;
      align-items: center;
      border-bottom: 1px #ddd dashed;
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

    .obs-value-info {
      .sub-title {
        color: #02227c;
        font-weight: 400;
        font-size: 1rem;
        height: 24px;
        line-height: 24px;
        border-bottom: solid 1px;
        border-color: #726a6a;
        flex-shrink: 0;
        .obs-time {
          width: 136px;
          text-align: center;
        }
        .label-name {
          text-align: center;
        }
      }
      .scroll {
        overflow-y: auto;
        overflow-x: hidden;
        .list {
          padding: 4px;
          .obs-time {
            align-items: center;
            box-sizing: border-box;
            .date {
              text-align: center;
              width: 80px;
              font-size: 0.9rem;
              padding-right: 4px;
            }
            .time {
              text-align: left;
              width: 56px;
              font-size: 1rem;
            }
          }
          .value {
            font-size: 0.9rem;
            text-align: center;
            .unit {
              font-size: 0.7rem;
            }
          }
        }
        .list:nth-child(2n + 1) {
          background-color: #e3f1fa;
        }
      }
    }
  }
  .wave-tide {
    height: 80px;
    border-bottom: 1px solid;
    border-color: #000;
  }
  .wind-dir-speed {
    height: 264px;
  }
  .option {
    height: 48px;
    justify-content: flex-end;
    padding: 8px;
    box-sizing: border-box;
    background-color: $content_base_color;
    border-radius: 0 0 8px 8px;
    flex-shrink: 0;
    img {
      width: 32px;
      height: 32px;
      padding-right: 4px;
      cursor: pointer;
    }
    .legend {
      box-sizing: border-box;
      font-size: 0.9rem;
      width: 64px;
      height: 28px;
      font-size: 0.8rem;
      line-height: 28px;
      text-align: center;
      background-color: #aaaaaa;
      box-shadow: 2px 2px 5px #4e4e4e;
      border-radius: 4px;
      margin: 2px 0 0 0;
      cursor: pointer;
    }
  }
}
</style>
