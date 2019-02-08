<template>
  <div class="box-one container-col">
    <kwb-obs-title></kwb-obs-title>
    <div class="contents-top container-row">
      <div v-for="(tab, index) in contentsTabList" :key="index" class="dam-contents-top-item">
        <img :src="tab.img" @click="changeTab(index)" class="hand">
      </div>
    </div>
    <div class="content-caption">{{contentsTabList[tabIndex].title}}</div>
    <div class="contents-area container-col">
      <div v-if="tabIndex === 0" class="content-obs-info border-non container-row">
        <div class="obs-info-label">所在地</div>
        <div class="obs-info-value">宇都宮市高間木地先 鬼怒川右岸</div>
      </div>
      <div v-if="tabIndex === 1" class="content-rvr-cam scroll container-col">
        <div class="rvr-cam-now">
          現在
          <img src="/img/river_now.png">
        </div>
        <div class="rvr-cam-normal">
          平常時
          <img src="/img/river_normal.png">
        </div>
      </div>
    </div>
    <div class="contents-btm"></div>
  </div>
</template>

<script>
import KwbObsTitle from "./KwbObsTitle";
export default {
  name: "kwb-river-cam",
  components: {
    KwbObsTitle
  },
  data() {
    return {
      tabIndex: 1,
      contentsTabList: [
        {
          img: "/img/obs_info.png",
          title: "観測所情報"
        },
        {
          img: "/img/cctv_vtr.png",
          title: "河川カメラ"
        }
      ],
      titleInfo: {
        obsName: "鬼怒川　右岸",
        rvrName: "鬼怒川",
        rsysName: "利根川水系",
        obsKana: "きぬがわ　うがん",
        rvrKana: "きぬがわ",
        rsysKana: "とねがわすいけい",
        manager: "-",
        address: "-",
        lonlat: "-",
        zeroHigh: "-"
      }
    };
  },
  mounted() {
    this.$store.commit("tm/setCommon", this.titleInfo);
  },
  methods: {
    changeTab(index) {
      this.tabIndex = index;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../../scss/properties.scss";

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
  .content-rvr-cam {
    padding: 4px;
    img {
      width: 100%;
    }
    .rvr-cam-now {
      margin-bottom: 8px;
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
}
.scroll {
  overflow-y: auto;
  overflow-x: hidden;
}
.hand {
  cursor: pointer;
  cursor: hand;
}
</style>