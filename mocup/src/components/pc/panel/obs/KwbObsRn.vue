<template>
  <div class="box-one container-col">
    <kwb-obs-title></kwb-obs-title>
    <div class="current-area container-col">
      <div class="content-caption container-row">最新観測値
        <div class="current-date">2019/01/15</div>
        <div class="current-time">{{min10List[0].time}}</div>
      </div>
      <div class="current-box box-one container-col">
        <div class="current-data box-one container-col">
          <div class="current-title">雨量関連</div>
          <div class="box-one container-row">
            <div class="data-box box-one container-col">
              <div class="current-label border-btm">時間雨量</div>
              <div class="current-value box-one">
                0.0
                <span class="unit">mm/H</span>
              </div>
            </div>
            <div class="data-box box-one container-col">
              <div class="current-label">10分雨量</div>
              <div class="current-value box-one">
                0.0
                <span class="unit">mm/10M</span>
              </div>
            </div>
            <div class="data-box box-one container-col">
              <div class="current-label">累加雨量</div>
              <div class="current-value box-one">
                0.0
                <span class="unit">mm/H</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="contents-top container-row">
      <div v-for="(tab, index) in contentsTabList" :key="index" class="dam-contents-top-item">
        <img :src="tab.img" @click="changeTab(index)" class="hand">
      </div>
    </div>
    <div class="content-caption">{{contentsTabList[tabIndex].title}}</div>
    <div class="contents-area container-col">
      <div v-if="tabIndex === 0">
        <div class="content-obs-info container-row">
          <div class="obs-info-label">管理者</div>
          <div class="obs-info-value">{{rnObs.manager}}</div>
        </div>
        <div class="content-obs-info container-row">
          <div class="obs-info-label">所在地</div>
          <div class="obs-info-value">{{rnObs.address}}</div>
        </div>
        <div class="content-obs-info container-row">
          <div class="obs-info-label">標高</div>
          <div class="obs-info-value">340.0m</div>
        </div>
        <div class="content-obs-info container-row">
          <div class="obs-info-label">緯度経度(世界)</div>
          <div class="obs-info-value">{{rnObs.lonlat}}</div>
        </div>
        <div v-if="selectTime === 'hour'" class="content-obs-info container-row">
          <div class="caution obs-info-label">雨量(時間)警戒値</div>
          <div class="obs-info-value">-</div>
        </div>
        <div v-if="selectTime === 'min10'" class="content-obs-info container-row">
          <div class="caution obs-info-label">雨量(10分)警戒値</div>
          <div class="obs-info-value">-</div>
        </div>
        <div class="content-obs-info container-row">
          <div class="caution obs-info-label">累加雨量警戒値</div>
          <div class="obs-info-value">-</div>
        </div>
        <div v-if="selectTime === 'hour'" class="content-obs-info container-row">
          <div class="attention obs-info-label">雨量(時間)注意値</div>
          <div class="obs-info-value">-</div>
        </div>
        <div v-if="selectTime === 'min10'" class="content-obs-info container-row">
          <div class="attention obs-info-label">雨量(10分)注意値</div>
          <div class="obs-info-value">-</div>
        </div>
        <div class="content-obs-info border-non container-row">
          <div class="attention obs-info-label">累加雨量注意値</div>
          <div class="obs-info-value">-</div>
        </div>
      </div>
      <div v-if="tabIndex === 1" class="content-stage-graph">水位グラフ</div>
      <div v-if="tabIndex === 2" class="content-obs-list container-col">
        <div class="column-name container-row">
          <div class="column-time">時刻</div>
          <div v-if="selectTime === 'hour'" class="box-one">時間雨量</div>
          <div v-if="selectTime === 'min10'" class="box-one">10分雨量</div>
          <div class="box-one">累加雨量</div>
        </div>
        <ul class="test-list scroll">
          <li
            v-for="(n, index) in 20"
            :key="index"
            :class="{'bgc-blue-light': index % 2 === 0}"
            class="container-row"
          >
            <div class="list-date">
              <span :class="{'container-non': index !== 0}">01/15</span>
            </div>
            <div v-if="selectTime === 'hour'" class="list-time">{{hourList[index].time}}</div>
            <div v-if="selectTime === 'min10'" class="list-time">{{min10List[index].time}}</div>
            <div v-if="selectTime === 'hour'" class="box-one">
              0.0
              <span class="unit">mm/H</span>
            </div>
            <div v-if="selectTime === 'min10'" class="box-one">
              0.0
              <span class="unit">mm/10M</span>
            </div>
            <div class="box-one">
              0.0
              <span class="unit">mm/H</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="contents-btm container-row">
      <div v-if="tabIndex !== 0 && tabIndex !== 2" class="container-row">
        <div class="contents-btm-item">
          <img src="/img/twitter.png" class="hand">
        </div>
        <div class="contents-btm-item">
          <img src="/img/share-c.png" class="hand">
        </div>
        <div
          @click="toggleLegendBtn"
          :class="{'legend-btn-non-act': legendBtnToggle === true, 'btn-act': legendBtnToggle === false}"
          class="contents-btm-item legend-btn hand"
        >凡例</div>
      </div>
      <div class="contents-btm-time-btn container-row">
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
</template>

<script>
import KwbObsTitle from "./KwbObsTitle";

export default {
  name: "kwb-obs-rn",
  components: {
    KwbObsTitle
  },
  data() {
    return {
      tabIndex: 1,
      legendBtnToggle: false,
      selectTime: "hour",
      contentsTabList: [
        {
          img: "/img/obs_info.png",
          title: "観測所情報"
        },
        {
          img: "/img/hydro.png",
          title: "水位グラフ"
        },
        {
          img: "/img/list.png",
          title: "観測値一覧"
        }
      ],
      titleInfo: {
        obsName: "千鶴",
        rvrName: "荒川",
        rsysName: "大石川水系",
        obsKana: "ちづる",
        rvrKana: "あらかわ",
        rsysKana: "おおいしかわすいけい",
        manager: "国交省　羽越河川国道事務所",
        address: "新潟県岩船郡関川村大字大石(大石ダム南東約5.5km)",
        lonlat: "緯度 073°59'50 経緯 139°36'41",
        zeroHigh: "-"
      },
      hourList: [
        {
          time: "21:00"
        },
        {
          time: "20:00"
        },
        {
          time: "19:00"
        },
        {
          time: "18:00"
        },
        {
          time: "17:00"
        },
        {
          time: "16:00"
        },
        {
          time: "15:00"
        },
        {
          time: "14:00"
        },
        {
          time: "13:00"
        },
        {
          time: "12:00"
        },
        {
          time: "11:00"
        },
        {
          time: "10:00"
        },
        {
          time: "09:00"
        },
        {
          time: "08:00"
        },
        {
          time: "07:00"
        },
        {
          time: "06:00"
        },
        {
          time: "05:00"
        },
        {
          time: "04:00"
        },
        {
          time: "03:00"
        },
        {
          time: "02:00"
        }
      ],
      min10List: [
        {
          time: "21:00"
        },
        {
          time: "20:50"
        },
        {
          time: "20:40"
        },
        {
          time: "20:30"
        },
        {
          time: "20:20"
        },
        {
          time: "20:10"
        },
        {
          time: "20:00"
        },
        {
          time: "19:50"
        },
        {
          time: "19:40"
        },
        {
          time: "19:30"
        },
        {
          time: "19:20"
        },
        {
          time: "19:10"
        },
        {
          time: "19:00"
        },
        {
          time: "18:50"
        },
        {
          time: "18:40"
        },
        {
          time: "18:30"
        },
        {
          time: "18:20"
        },
        {
          time: "18:10"
        },
        {
          time: "18:00"
        },
        {
          time: "17:50"
        }
      ]
    };
  },
  mounted() {
    this.$store.commit("tm/setCommon", this.titleInfo);
  },
  methods: {
    changeTab(index) {
      this.tabIndex = index;
    },
    toggleLegendBtn() {
      this.legendBtnToggle = !this.legendBtnToggle;
    }
  },
  computed: {
    rnObs: {
      get() {
        return this.$store.state.tm.obsDetail.common;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../../scss/properties.scss";

.current-area {
  box-sizing: border-box;
  height: 136px;
  margin-bottom: 8px;
  border-bottom: 2px solid #726a6a;
  flex-shrink: 0;
  .current-date {
    margin-left: 24px;
  }
  .current-time {
    margin-left: 8px;
  }
  .current-box {
    text-align: center;
    background-color: white;
    padding: 8px 16px 8px 16px;
    .current-data {
      border-radius: 8px 8px 8px 8px;
      border: 1px solid #c0c0c0;
      .current-title {
        height: 24px;
        line-height: 24px;
      }
      .data-box {
        margin: 4px 8px 8px 8px;
        border-radius: 8px 8px 8px 8px;
        border: 1px solid #c0c0c0;
        .current-label {
          box-sizing: border-box;
          height: 24px;
          line-height: 24px;
          font-size: 0.9rem;
          border-bottom: 1px solid #c0c0c0;
        }
        .current-value {
          font-size: 0.9rem;
          line-height: 240%;
        }
      }
    }
  }
}
.contents-top {
  background-color: $content_base_color;
  box-sizing: border-box;
  height: 64px;
  padding: 8px 0 0 8px;
  border-radius: 8px 8px 0 0;
  flex-shrink: 0;
  img {
    height: 52px;
    width: 52px;
  }
}
.contents-area {
  background-color: $content_main_color;
  .content-obs-info {
    box-sizing: border-box;
    font-size: 0.9rem;
    align-items: center;
    border-bottom: 1px #ddd dashed;
    flex-shrink: 0;
    text-align: left;
    .obs-info-label {
      flex: 1;
      padding: 8px;
    }
    .obs-info-value {
      flex: 2;
      padding: 8px;

      word-break: break-all;
      border-left: 1px #ddd dashed;
    }
  }
  .border-non {
    border-bottom: none;
  }
  .content-stage-graph {
    height: 300px;
  }
  .content-obs-list {
    padding: 4px;
    text-align: center;
    .column-name {
      color: #02227c;
      box-sizing: border-box;
      height: 24px;
      line-height: 24px;
      flex-shrink: 0;
      border-bottom: solid 1px #726a6a;
      .column-time {
        width: 136px;
      }
    }
    .test-list {
      li {
        box-sizing: border-box;
        height: 24px;
        line-height: 24px;
        font-size: 0.9rem;
        text-align: center;
        .list-date {
          width: 68px;
        }
        .list-time {
          font-size: 1rem;
          width: 68px;
        }
      }
    }
  }
}
.contents-btm {
  background-color: $content_base_color;
  justify-content: flex-end;
  box-sizing: border-box;
  height: 48px;
  padding: 8px 8px 0 0;
  border-radius: 0 0 8px 8px;
  flex-shrink: 0;
  .contents-btm-item {
    margin-right: 4px;
    img {
      height: 32px;
      width: 32px;
    }
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
  .legend-btn-non-act {
    margin-top: 3px;
    box-shadow: none;
    color: white;
    background-color: $base;
  }
  .contents-btm-time-btn {
    padding-top: 3px;
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
    .btn-non-act {
      margin-top: 1px;
      box-shadow: none;
      color: white;
      background-color: $base;
    }
  }
}
.btn-act {
  color: white;
  box-shadow: 2px 2px 2px #4e4e4e;
}
.scroll {
  overflow-y: auto;
  overflow-x: hidden;
}
.unit {
  font-size: 0.7rem;
}
.hand {
  cursor: pointer;
  cursor: hand;
}
.caution {
  color: purple;
}
.attention {
  color: red;
}
.bgc-blue-light {
  background-color: #e3f1fa;
}
</style>
