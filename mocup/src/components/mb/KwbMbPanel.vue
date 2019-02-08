<template>
  <div v-if="show == true" id="kwb-mb-panel">
    <div class="caption">メニュー</div>
    <div class="btn container-row">
      <img src="/img/m_info.png">
      <span>情報の見方</span>
    </div>
    <div class="btn container-row">
      <img src="/img/m_srch.png">
      <span>お知らせ</span>
    </div>
    <div class="btn container-row">
      <img src="/img/m_srch.png">
      <span>Q & A</span>
    </div>
    <div class="btn container-row">
      <img src="/img/m_srch.png">
      <span>リンク集</span>
    </div>
    <div class="btn container-row">
      <img src="/img/m_srch.png">
      <span>操作説明</span>
    </div>
    <div class="btn container-row">
      <img src="/img/m_srch.png">
      <span>サイトマップ</span>
    </div>
    <div class="caption">表示切替</div>
    <div class="btn container-row">
      <img src="/img/m_srch.png">
      <span>表示設定</span>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    show: {
      get() {
        return this.$store.state.app.mbSideMenuShow;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../scss/properties.scss";

#kwb-mb-panel {
  margin: 0xp;
  display: block;
  position: absolute;
  height: 100%;
  width: 306px;
  box-sizing: border-box;
  background-color: $bk_color;
  right: 0px;
  top: 0px;
  z-index: 3000;
  border-left: 6px solid $base;
  padding: 4px;
  overflow: auto;
}

.btn {
  margin-top: 4px;
  border-radius: 8px;
  background-color: #acacac;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding: 8px;
  cursor: pointer;
  img {
    width: 24px;
  }
  span {
    display: inline-block;
    padding: 0px 0px 0px 4px;
    color: #333;
    font-size: 0.8rem;
    font-weight: bold;
  }
}

.caption {
  padding: 4px 0px 4px 8px;
  font-size: 0.8rem;
  font-weight: bold;
  margin-top: 4px;
  color: #fff;
  background-color: #059;
}
</style>
