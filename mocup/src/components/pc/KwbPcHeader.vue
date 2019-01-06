<template>
  <div id="kwb-pc-header-frame" class="container-row">
    <img src="/img/title.png">
    <div id="space" class="box-one"></div>
    <div id="header-menu" class="container-row">
      <div class="m_item container-row">
        <img src="/img/m_info.png">
        <span>情報の見方</span>
      </div>
      <div class="m_item container-row">
        <img src="/img/m_srch.png">
        <span>詳細検索</span>
      </div>
      <div class="m_item container-row">
        <img src="/img/m_srch.png">
        <span>お知らせ</span>
      </div>
      <div class="m_item container-row">
        <img src="/img/m_srch.png">
        <span>Q&A</span>
      </div>
      <div class="m_item container-row">
        <img src="/img/m_srch.png">
        <span>リンク集</span>
      </div>
      <div class="m_item container-row">
        <img src="/img/m_srch.png">
        <span>操作説明</span>
      </div>
      <div class="m_item container-row">
        <img src="/img/m_srch.png">
        <span>サイト
          <br>マップ
        </span>
      </div>
      <div class="m_item container-row" @click="clickModeChange">
        <img src="/img/mb_pc.png">
        <span>モバイル
          <br>モード
        </span>
      </div>
    </div>
    <img id="mlogo" src="/img/mlogo.png">
  </div>
</template>

<script>
import { triggerEvent } from "../../lib/util.js";

export default {
  methods: {
    clickModeChange() {
      this.$router.push("/mb");
      triggerEvent(document.body, "resize");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../scss/properties.scss";

#kwb-pc-header-frame {
  background-color: $bk_color;
  height: 56px;
  box-sizing: border-box;
  margin-bottom: 4px;
}
#header-menu {
  width: 700px;
  align-items: flex-end;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-bottom: 2px;
}
.m_item {
  cursor: pointer;
  font-size: 0.7rem;
  color: #fff;
  align-items: center;
  flex-grow: 0px;
  width: 100px;
  box-sizing: border-box;
  img {
    width: 24px;
  }
  span {
    display: inline-block;
    padding-left: 4px;
  }
}
img#mlogo {
  width: 112px;
}
</style>
