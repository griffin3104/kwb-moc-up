<template>
  <div class="obs-current-area container-col">
    <div class="current-title content-caption container-row">
      <div class="latest-title">最新観測値</div>
      <div class="latest-date">{{obsTime.date}}</div>
      <div class="latest-time">{{obsTime.time}}</div>
    </div>
    <div v-if="itmkndCd === 6" class="current-box">
      <swiper :options="swiperOption">
        <swiper-slide
          class="sgl-swip-style container-row"
          v-for="(item, index) in categoryList"
          v-bind:key="index"
        >
          <div class="sgl-prev-container container-col">
            <div v-if="index !== 0" v-text="getPrevCategory(index)"></div>
          </div>
          <div class="sgl-main-container container-col">
            <div class="sgl-main-content container-col">
              <div class="sgl-current-category">
                <div class="sgl-current-item">{{categoryList[index].name}}</div>
              </div>
              <div class="sgl-current-value">
                <div class="sgl-current-item">
                  {{categoryList[index].value}}
                  <span>{{categoryList[index].unit}}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="sgl-next-container container-col">
            <div v-if="index + 1 < categoryList.length" v-text="getNextCategory(index)"></div>
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev sgl-button-prev" slot="button-prev">
          <img class="sgl-swip-button" src="/img/tri_prev.png">
        </div>
        <div class="swiper-button-next sgl-button-next" slot="button-next">
          <img class="sgl-swip-button" src="/img/tri_next.png">
        </div>
      </swiper>
    </div>
    <div v-if="itmkndCd === 7 || itmkndCd === 12" class="current-box">
      <swiper :options="swiperOption">
        <swiper-slide
          class="grp-swip-style container-row"
          v-for="(item, index) in categoryList"
          v-bind:key="item.name"
        >
          <div class="grp-prev-container container-col">
            <div v-if="index !== 0" v-text="getPrevCategory(index)"></div>
          </div>
          <div class="grp-main-container container-col">
            <div class="grp-main-content container-col">
              <div class="grp-current-category">
                <div>{{categoryList[index].name}}</div>
              </div>
              <div class="sub-current-area">
                <div
                  v-for="(subItem, idx) in categoryList[index].master"
                  v-bind:key="subItem.label"
                  class="sub-current-item container-col"
                >
                  <div
                    class="sub-current-category-name container-col"
                  >{{categoryList[index].master[idx].label}}</div>
                  <div class="sub-current-value">
                    {{categoryList[index].master[idx].value}}
                    <span
                      v-html="categoryList[index].master[idx].unit"
                    ></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="grp-next-container container-col">
            <div v-if="index + 1 < categoryList.length" v-text="getNextCategory(index)"></div>
          </div>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev grp-button-prev" slot="button-prev">
          <img class="grp-swip-button" src="/img/tri_prev.png">
        </div>
        <div class="swiper-button-next grp-button-next" slot="button-next">
          <img class="grp-swip-button" src="/img/tri_next.png">
        </div>
      </swiper>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";

export default Vue.extend({
  name: "kwb-current-area",
  components: { swiper, swiperSlide },
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: false,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        on: {
          slideChangeTransitionEnd: function() {}
        }
      },
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
      damLabel: [
        {
          name: "雨量関連",
          master: [
            { label: "時間雨量", value: "rnHr10m", unit: "mm/H" },
            { label: "累加雨量", value: "rnInc", unit: "mm/H" }
          ]
        },
        {
          name: "貯水関連",
          master: [
            { label: "貯水位", value: "storLvl", unit: "m" },
            { label: "貯水量", value: "storCap", unit: "(10&sup3;m&sup3;)" }
          ]
        },
        {
          name: "貯水率関連",
          master: [
            { label: "治水容量", value: "storPcntImp", unit: "%" },
            { label: "有効容量", value: "storPcntEff", unit: "%" },
            { label: "利水容量", value: "storPcntIrr", unit: "%" }
          ]
        },
        {
          name: "放流・流入関連",
          master: [
            { label: "全放流量", value: "allDisch", unit: "m&sup3;" },
            { label: "全流入量", value: "allSink", unit: "m&sup3;" }
          ]
        }
      ],
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
    obsTime: {
      get() {
        var obsFullTime;
        if (this.$store.state.tm.selectedObs.itmkndCd === 6) {
          obsFullTime = this.$store.state.tm.obsDetail.qwtr.current.hour
            .obsTime;
        } else if (this.$store.state.tm.selectedObs.itmkndCd === 12) {
          obsFullTime = this.$store.state.tm.obsDetail.coast.current.hour
            .obsTime;
        } else if (this.$store.state.tm.selectedObs.itmkndCd === 7) {
          obsFullTime = this.$store.state.tm.obsDetail.dam.current.min10
            .obsTime;
        }
        var obsLatestTime = {
          date: "",
          time: ""
        };
        obsLatestTime.date = this.getDate(obsFullTime);
        obsLatestTime.time = this.getTime(obsFullTime);
        return obsLatestTime;
      }
    },
    itmkndCd: {
      get() {
        // dam:ダム諸量, coast:海岸, qwtr:水質
        return this.$store.state.tm.selectedObs.itmkndCd;
      }
    },
    categoryList: {
      get() {
        if (this.$store.state.tm.selectedObs.itmkndCd === 6) {
          var qwtrVal = this.$store.state.tm.obsDetail.qwtr.current.hour;
          var qwtrLabel = this.qwtrLabel;
          for (var qwIdx in qwtrLabel) {
            for (var qwNm in qwtrVal) {
              if (qwtrLabel[qwIdx].value === qwNm) {
                if (qwtrVal[qwNm] !== null) {
                  qwtrLabel[qwIdx].value = qwtrVal[qwNm];
                } else {
                  qwtrLabel[qwIdx].value = "-";
                }
              }
            }
          }
          return qwtrLabel;
        } else if (this.$store.state.tm.selectedObs.itmkndCd === 12) {
          var coastVal = this.$store.state.tm.obsDetail.coast.current.hour;
          var coastLabel = this.coastLabel;
          for (var coIdx in coastLabel) {
            for (var coI in coastLabel[coIdx].master) {
              for (var coNm in coastVal) {
                if (coastLabel[coIdx].master[coI].value === coNm) {
                  if (coastVal[coNm] !== null) {
                    coastLabel[coIdx].master[coI].value = coastVal[coNm];
                  } else {
                    coastLabel[coIdx].master[coI].value = "-";
                  }
                }
              }
            }
          }
          return coastLabel;
        } else if (this.$store.state.tm.selectedObs.itmkndCd === 7) {
          //TODO:正時・10分の切替のif文を追加
          var damVal = this.$store.state.tm.obsDetail.dam.current.min10;
          var damLabel = this.damLabel;
          for (var dmIdx in damLabel) {
            for (var dmI in damLabel[dmIdx].master) {
              for (var dmNm in damVal) {
                if (damLabel[dmIdx].master[dmI].value === dmNm) {
                  if (damVal[dmNm] !== null) {
                    damLabel[dmIdx].master[dmI].value = damVal[dmNm];
                  } else {
                    damLabel[dmIdx].master[dmI].value = "-";
                  }
                }
              }
            }
          }
          return damLabel;
        } else {
          return null;
        }
      }
    }
  },
  methods: {
    onSlideChangeStart(currentPage) {
      console.log("onSlideChangeStart", currentPage);
    },
    onSlideChangeEnd() {
      console.log("onSlideChangeEnd");
    },
    getPrevCategory(index) {
      var target = index - 1;
      return this.categoryList[target].name;
    },
    getNextCategory(index) {
      var target = index + 1;
      return this.categoryList[target].name;
    },
    getDate(obsTime) {
      obsTime = String(obsTime);
      var date = obsTime.slice(0, obsTime.indexOf(" "));
      return date;
    },
    getTime(obsTime) {
      obsTime = String(obsTime);
      var time = obsTime.slice(obsTime.indexOf(" ") + 1);
      return time;
    }
  }
});
</script>

<style lang="scss" scoped>
@import "../../../../scss/properties.scss";
// 共通設定
.obs-current-area {
  border-bottom: 2px solid #726a6a;
  margin-bottom: 8px;
  .current-title {
    .latest-date {
      padding-left: 24px;
    }
    .latest-time {
      padding-left: 8px;
    }
  }
  .current-box {
    padding: 8px;
    background-color: #fff;
    color: $obs_font_black;
  }
}

// シングル設定(カレント項目の値が一つの場合)
.sgl-prev-container {
  flex: 1;
  justify-content: center;
  font-size: 0.9rem;
  height: 64px;
}
.sgl-main-container {
  flex: 4;
  padding: 0 12px 0 12px;
  height: 64px;
  .sgl-main-content {
    border: 1px solid #c0c0c0;
    border-radius: 8px 8px 8px 8px;
    height: 64px;
    justify-content: center;
    margin: 0 8px 0 8px;
    .sgl-current-category {
      font-size: 1rem;
      border-bottom: 1px solid #c0c0c0;
      flex: 2;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .sgl-current-value {
      font-size: 1.2rem;
      flex: 3;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .sgl-current-item {
      span {
        font-size: 1rem;
      }
    }
  }
}
.sgl-next-container {
  flex: 1;
  justify-content: center;
  font-size: 0.9rem;
  height: 64px;
}
.sgl-swip-style {
  font-weight: bold;
  text-align: center;
  height: 80px;
}
.sgl-swip-button {
  height: 24px;
  width: 18px;
}
.sgl-button-prev {
  padding: 4px;
  height: 40px;
  width: 40px;
  top: 40%;
  left: 84px;
  background-size: 40px 40px;
  background-image: url("");
  background-color: #fff;
  border-radius: 50%;
  border: 4px solid #acacac;
  box-shadow: 2px 2px 4px #303030;
  box-sizing: border-box;
}
.sgl-button-next {
  padding: 4px;
  height: 40px;
  width: 40px;
  top: 40%;
  right: 84px;
  background-size: 40px 40px;
  background-image: url("");
  background-color: #fff;
  border-radius: 50%;
  border: 4px solid #acacac;
  box-shadow: 2px 2px 4px #303030;
  box-sizing: border-box;
  text-align: right;
}

// グループ設定(カレント項目の値が複数ある場合)
.grp-prev-container {
  flex: 1;
  justify-content: center;
  font-size: 0.8rem;
  height: 80px;
}
.grp-main-container {
  flex: 5;
  padding: 0 12px 0 12px;
  height: 80px;
  .grp-main-content {
    border: 1px solid #c0c0c0;
    border-radius: 8px 8px 8px 8px;
    height: 80px;
    justify-content: center;
    margin: 0 8px 0 8px;
    .grp-current-category {
      font-size: 1rem;
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .sub-current-area {
      flex: 2;
      display: flex;
      justify-content: center;
      align-items: center;
      .sub-current-item {
        border: 1px solid #c0c0c0;
        border-radius: 8px 8px 8px 8px;
        width: 100px;
        height: 40px;
        justify-content: center;
        margin: 0 4px 0 4px;
        box-sizing: border-box;
        .sub-current-category-name {
          border-bottom: 1px solid #c0c0c0;
          flex: 2;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          font-size: 0.9rem;
          box-sizing: border-box;
        }
        .sub-current-value {
          flex: 3;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 0.8rem;
          span {
            font-size: 0.5rem;
          }
        }
      }
    }
  }
}
.grp-next-container {
  flex: 1;
  justify-content: center;
  font-size: 0.8rem;
  height: 80px;
}
.grp-swip-style {
  height: 100px;
  font-weight: bold;
  text-align: center;
}
.grp-swip-button {
  height: 15px;
  width: 10px;
}

.grp-button-prev {
  padding: 4px;
  height: 30px;
  width: 30px;
  top: 45%;
  left: 76px;
  background-image: url("");
  background-color: #fff;
  background-size: 30px 30px;
  border-radius: 50%;
  border: 4px solid #acacac;
  box-shadow: 2px 2px 4px #303030;
  box-sizing: border-box;
}
.grp-button-next {
  padding: 4px;
  height: 30px;
  width: 30px;
  top: 45%;
  right: 76px;
  background-image: url("");
  background-color: #fff;
  background-size: 30px 30px;
  border-radius: 50%;
  border: 4px solid #acacac;
  box-shadow: 2px 2px 4px #303030;
  box-sizing: border-box;
  text-align: right;
}

// swiperの設定変更
.swiper-button-disabled {
  display: none;
}
.swiper-pagination-bullets {
  bottom: -2px;
}
</style>
