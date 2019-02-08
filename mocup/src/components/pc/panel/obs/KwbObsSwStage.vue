<template>
  <div class="kwb-obs-sw-stage container-col box-one">
    <!-- タイトル領域 -->
    <kwb-obs-title></kwb-obs-title>
    <!-- お知らせ領域 -->
    <div class="notice-info container-col">
      <div class="container-row">
        <div class="obs-info box-one">当観測所に関するお知らせがあります！</div>
        <div class="danger box-one">危険</div>
      </div>
    </div>
    <!-- カレント領域 -->
    <div class="obs-current-area container-col">
      <div class="content-caption container-row">
        <div class="latest-title">最新観測値</div>
        <div class="latest-date">2018/12/31</div>
        <div class="latest-time">23:50</div>
      </div>

      <div class="current-box container-col">
        <div class="data-box box-one container-col">
          <div class="current-label">堤防天端からの高さ</div>
          <div class="current-value box-one">
            -8.3
            <span class="unit">m</span>
          </div>
        </div>
      </div>
    </div>
    <!-- コンテンツ領域 -->
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
            <div class="label">管理者</div>
            <div class="value-info">{{stageObs.manager}}</div>
          </div>
          <div class="obs-item-info container-row">
            <div class="label">位置</div>
            <div class="value-info">{{stageObs.manager}}</div>
          </div>
          <div class="obs-item-info container-row">
            <div class="label">所在地</div>
            <div class="value-info">{{stageObs.address}}</div>
          </div>
          <div class="obs-item-info container-row">
            <div class="label">零点高</div>
            <div class="value-info">{{stageObs.zeroHigh}}</div>
          </div>
          <div class="obs-item-info container-row">
            <div class="label">観測開始水位</div>
            <div class="value-info">-4.13m</div>
          </div>
        </div>

        <div class="cross-info container-col" v-if="tabIndex === 1">
          <div class="cross-section">横断図</div>
        </div>

        <div class="stage-info container-col" v-if="tabIndex === 2">
          <div class="stage-graph">水位グラフ</div>
        </div>

        <div class="river-camera-info container-col" v-if="tabIndex === 3">
          <div class="river-camera">
            <img src="/img/river1.jpg" class="normal-camera">
            <img src="/img/river2.jpg" class="current-camera">
          </div>
        </div>

        <div class="obs-value-info container-col" v-if="tabIndex === 4">
          <div class="cross-section">横断図</div>
          <div class="container-col">
            <div class="sub-title container-row">
              <div class="obs-time">時刻</div>
              <div
                v-for="master in master"
                :key="master.label"
                class="label-name box-one"
              >{{master.label}}</div>
            </div>
            <ul class="scroll box-one">
              <li
                v-for="(object, index) in history.hour"
                :key="index"
                class="list box-one container-row"
              >
                <div class="obs-time container-row">
                  <div class="date">
                    <span
                      v-if="(index === 0) || (getDate(object.obsTime) !== getDate(history.hour[index - 1].obsTime))"
                    >{{getDate(object.obsTime)}}</span>
                  </div>
                  <div class="time">{{getTime(object.obsTime)}}</div>
                </div>

                <div v-for="masters in master" :key="masters.label" class="box-one container-row">
                  <div
                    v-for="(value, key) in object"
                    :key="key"
                    :class="{'container-non': key !== masters.key}"
                    class="value box-one"
                  >
                    {{value}}
                    <span v-html="masters.unit" class="unit"></span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="option container-row">
        <img v-if="tabIndex !== 3 && tabIndex !== 0 && tabIndex !== 4" src="/img/twitter.png">
        <img v-if="tabIndex !== 3 && tabIndex !== 0 && tabIndex !== 4" src="/img/share-c.png">
        <div v-if="tabIndex !== 3 && tabIndex !== 0 && tabIndex !== 4" class="legend">凡例</div>
      </div>
    </div>
  </div>
</template>

<script>
import KwbObsTitle from "./KwbObsTitle";
export default {
  name: "kwb-obs-sw-stage",
  components: {
    KwbObsTitle
  },
  data() {
    return {
      tabIndex: 1,
      selectTime: "hour",
      tabList: [
        {
          tabName: "観測所情報",
          url: require("../../../../../public/img/obs_info.png")
        },
        {
          tabName: "河川横断図",
          url: require("../../../../../public/img/cross.png")
        },
        {
          tabName: "水位グラフ",
          url: require("../../../../../public/img/hydro.png")
        },
        {
          tabName: "河川カメラ",
          url: require("../../../../../public/img/cctv_vtr.png")
        },
        {
          tabName: "観測値一覧",
          url: require("../../../../../public/img/list.png")
        }
      ],
      titleInfo: {
        obsName: "多摩川河口",
        rsysName: "多摩川",
        rvrName: "多摩川",
        obsKana: "たまがわかこう",
        rsysKana: "たまがわ",
        rvrKana: "たまがわ",
        manager: "国交省　京浜河川事務所",
        lonlat: "-",
        address: "神奈川県川崎市川崎区殿町(大師橋下流約2.5km)"
      },

      master: [{ label: "堤防天端からの高さ", key: "bnkHght", unit: "m" }],
      history: {
        min10: [
          {
            obsTime: "2019/01/15 18:20",
            bnkHght: 1.56,
            rn10m: 0,
            rnInc: 0,
            rnHr10m: 0
          },
          {
            obsTime: "2019/01/15 18:10",
            bnkHght: 1.56,
            rn10m: 0,
            rnInc: 0,
            rnHr10m: 0
          },
          {
            obsTime: "2019/01/15 18:00",
            bnkHght: 1.56,
            rn10m: 0,
            rnInc: 0,
            rnHr10m: 0
          },
          {
            obsTime: "2019/01/15 17:50",
            bnkHght: 1.56,
            rn10m: 0,
            rnInc: 0,
            rnHr10m: 0
          },
          {
            obsTime: "2019/01/15 17:40",
            bnkHght: 1.56,
            rn10m: 0,
            rnInc: 0,
            rnHr10m: 0
          },
          {
            obsTime: "2019/01/15 17:30",
            bnkHght: 1.56,
            rn10m: 0,
            rnInc: 0,
            rnHr10m: 0
          },
          {
            obsTime: "2019/01/15 17:20",
            bnkHght: 1.56,
            rn10m: 0,
            rnInc: 0,
            rnHr10m: 0
          },
          {
            obsTime: "2019/01/15 17:10",
            bnkHght: 1.56,
            rn10m: 0,
            rnInc: 0,
            rnHr10m: 0
          },
          {
            obsTime: "2019/01/15 17:00",
            bnkHght: 1.56,
            rn10m: 0,
            rnInc: 0,
            rnHr10m: 0
          },
          {
            obsTime: "2019/01/15 16:50",
            bnkHght: 1.56,
            rn10m: 0,
            rnInc: 0,
            rnHr10m: 0
          }
        ],
        hour: [
          {
            obsTime: "2019/01/15 18:00",
            bnkHght: 1.48,
            rn10m: 0,
            rnInc: 0,
            rnHr10m: 0
          },
          {
            obsTime: "2019/01/15 17:00",
            bnkHght: 1.48,
            rn10m: 0,
            rnInc: 0,
            rnHr10m: 0
          },
          {
            obsTime: "2019/01/15 16:00",
            bnkHght: 1.48,
            rn10m: 0,
            rnInc: 0,
            rnHr10m: 0
          },
          {
            obsTime: "2019/01/15 15:00",
            bnkHght: 1.48,
            rn10m: 0,
            rnInc: 0,
            rnHr10m: 0
          },
          {
            obsTime: "2019/01/15 14:00",
            bnkHght: 1.48,
            rn10m: 0,
            rnInc: 0,
            rnHr10m: 0
          },
          {
            obsTime: "2019/01/15 13:00",
            bnkHght: 1.48,
            rn10m: 0,
            rnInc: 0,
            rnHr10m: 0
          },
          {
            obsTime: "2019/01/15 12:00",
            bnkHght: 1.48,
            rn10m: 0,
            rnInc: 0,
            rnHr10m: 0
          },
          {
            obsTime: "2019/01/15 11:00",
            bnkHght: 1.48,
            rn10m: 0,
            rnInc: 0,
            rnHr10m: 0
          },
          {
            obsTime: "2019/01/15 10:00",
            bnkHght: 1.48,
            rn10m: 0,
            rnInc: 0,
            rnHr10m: 0
          },
          {
            obsTime: "2019/01/15 09:00",
            bnkHght: 1.48,
            rn10m: 0,
            rnInc: 0,
            rnHr10m: 0
          }
        ]
      }
    };
  },
  mounted() {
    this.$store.commit("tm/setCommon", this.titleInfo);
  },
  computed: {
    stageObs: {
      get() {
        return this.$store.state.tm.obsDetail.common;
      }
    }
  },
  methods: {
    changeTab(selectedNum) {
      this.tabIndex = selectedNum;
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
.kwb-obs-sw-stage {
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
.obs-current-area {
  border-bottom: 2px solid $bk_color;
  margin-bottom: 8px;
  .latest-date {
    padding-left: 24px;
  }
  .latest-time {
    padding-left: 8px;
  }
  .current-box {
    font-size: 0.8rem;
    background-color: $content_main_color;
    align-items: center;
    padding: 4px 0 4px 0;
    .data-box {
      border-radius: 8px 8px 8px 8px;
      border: 1px solid #c0c0c0;

      .current-label {
        text-align: center;
        box-sizing: border-box;
        width: 256px;
        height: 24px;
        line-height: 24px;
        font-size: 0.9rem;
        border-bottom: 1px solid #c0c0c0;
      }
      .current-value {
        text-align: center;
        font-size: 1rem;
        line-height: 240%;
        .unit {
          font-size: 0.7rem;
        }
      }
    }
  }
}
.contents {
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
    overflow-y: auto;
    overflow-x: hidden;
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
  }
  .cross-info {
    padding: 4px;
    .cross-section {
      border: 1px #131212 solid;
      height: 250px;
    }
  }
  .stage-info {
    padding: 4px;
    .stage-graph {
      border: 1px #131212 solid;
      height: 400px;
    }
  }
  .river-camera-info {
    padding: 4px;
    .river-camera {
      overflow-y: auto;
      .current-camera {
        width: 450px;
        height: auto;
      }
      .normal-camera {
        width: 500px;
        height: auto;
      }
    }
  }
  .obs-value-info {
    padding: 4px;
    .cross-section {
      border: 1px #131212 solid;
      height: 200px;
      margin-bottom: 4px;
    }
    .sub-title {
      color: #02227c;
      font-weight: 400;
      font-size: 0.8rem;
      height: 16px;
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
