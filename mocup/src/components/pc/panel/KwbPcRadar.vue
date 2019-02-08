<template>
  <div class="kwb-pc-rader box-one container-col">
    <!-- レーダ雨量の種類 -->
    <div class="content-caption">
      <div class="title">レーダ雨量の種類</div>
    </div>
    <div class="setting-box container-row">
      <div class="buton-rain button-non-act">XRAIN</div>
      <div class="buton-rain button-act">Cバンドレーダ</div>
    </div>
    <!-- 透過設定 -->
    <div class="content-caption">
      <div class="title">透過設定</div>
    </div>
    <div class="setting-box">
      <div class="container-row">
        <div class="text-trans-start">0%</div>
        <div class="text-trans-end">100%</div>
      </div>
      <div class="container-row">
        <div class="setting-item-range">
          <input type="range" class="range">
        </div>
        <div class="text-trans">80%</div>
      </div>
    </div>
    <!-- ４枚表示 -->
    <div class="content-caption">
      <div class="title">４枚表示</div>
    </div>
    <div class="setting-box">
      <div class="setting-item-border container-row">
        <div class="button-disp button-act">１枚表示</div>
        <div class="button-disp button-non-act">４枚表示</div>
      </div>
      <div class="setting-item container-row">
        <div class="selection selection-disp">
          <label>
            <input type="radio" class="radio" name="span" checked>
            <em>５分間隔</em>
          </label>
          <label>
            <input type="radio" class="radio" name="span">
            <em>３０分間隔</em>
          </label>
          <label>
            <input type="radio" class="radio" name="span">
            <em>６０分間隔</em>
          </label>
        </div>
      </div>
    </div>
    <!-- 履歴動画再生 -->
    <div class="content-caption">
      <div class="title">履歴動画再生</div>
    </div>
    <div class="setting-box">
      <div class="setting-item container-row">
        <div class="selection">
          <label>
            <input type="radio" class="radio" name="hspan" checked>
            <em>１時間（５分間隔）</em>
          </label>
          <label>
            <input type="radio" class="radio" name="hspan">
            <em>３時間（３０分間隔）</em>
          </label>
          <label>
            <input type="radio" class="radio" name="hspan">
            <em>６時間（６０分間隔）</em>
          </label>
        </div>
      </div>
      <div class="setting-item-right container-row">
        <!-- ボタンについてはアイコンに変更予定 -->
        <div class="button button-revial">再生</div>
        <div class="button button-pose">一時停止</div>
      </div>
      <div class="container-row">
        <div class="text-time-start">13:14</div>
        <div class="text-time-end">14:14</div>
      </div>
      <div class="container-row">
        <!-- ボタンについてはアイコンに変更予定 -->
        <div class="setting-item">
          <div class="button button-prev">前へ</div>
        </div>
        <div class="setting-item-range-history">
          <input type="range" class="range">
        </div>
        <div class="setting-item">
          <div class="button button-next">次へ</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "kwb-radar"
};
</script>

<style lang="scss" scoped>
@import "../../../scss/properties.scss";
.kwb-pc-rader {
  color: $obs_font_black;
  padding: 8px;
}
// 設定エリアのタイトル
.setting-title {
  border-bottom: 2px solid #726a6a;
  margin-bottom: 8px;
  margin-top: 8px;
  .title {
    padding-left: 8px;
  }
}
// 設定エリア
.setting-box {
  margin-bottom: 8px;
  background-color: #fff;
  padding-top: 4px;
  padding-bottom: 4px;
  // padding-left: 8px;

  .setting-item {
    padding-left: 8px;
    padding-bottom: 4px;
    margin-bottom: 4px;
  }
  .setting-item-border {
    padding-left: 0px;
    padding-bottom: 8px;
    margin-bottom: 4px;
    border-bottom: 2px inset #5331db48;
  }
  .setting-item-right {
    width: 510px;
    padding-left: 8px;
    padding-bottom: 4px;
    margin-bottom: 4px;
    justify-content: flex-end;
  }
  .setting-item-range {
    width: 460px;
    padding: 2px 0 0 8px;
  }
  .setting-item-range-history {
    width: 360px;
    padding: 8px 0 0 8px;
  }
  // 共通ボタン
  .button {
    height: 16px;
    margin-right: 8px;
    padding: 8px 10px 4px 10px;
    text-align: center;
    font-size: 0.9rem;
    color: #fff;
    background-color: #4a98d3;
    box-shadow: 2px 2px 4px #4e4e4e;
    border-radius: 5px;
    cursor: pointer;
  }
  // レーダ雨量の種類の選択
  .buton-rain {
    width: 120px;
    height: 20px;
    margin: 4px 4px 4px 8px;
    padding: 6px 4px 0px 4px;
    text-align: center;
    font-size: 0.9rem;
    border-radius: 5px;
    cursor: pointer;
  }
  // ４枚表示ボタン
  .button-disp {
    width: 80px;
    height: 20px;
    margin: 4px 4px 4px 8px;
    padding: 6px 4px 0px 4px;
    text-align: center;
    font-size: 0.9rem;
    border-radius: 5px;
    cursor: pointer;
  }
  // 再生ボタン
  .button-revial {
    padding: 8px 6px 4px 0px;
    width: 60px;
    text-align: right;
  }
  // 一時停止ボタン
  .button-pose {
    padding: 8px 6px 4px 0px;
    width: 90px;
    text-align: right;
  }
  // 次へボタン
  .button-next {
    padding: 8px 0px 4px 6px;
    width: 60px;
    text-align: left;
  }
  // 前へボタン
  .button-prev {
    padding: 8px 6px 4px 0px;
    width: 60px;
    text-align: right;
  }
  // ボタン選択時
  .button-non-act {
    color: #fff;
    background-color: #4a98d3;
    box-shadow: 0px 0px 0px 0px;
  }
  // ボタン非選択時
  .button-act {
    color: #fff;
    background-color: #726a6a;
    box-shadow: 2px 2px 4px #4e4e4e;
  }

  // テキスト
  .text-trans {
    margin-bottom: 4px;
    font-size: 1.2rem;
  }
  .text-trans-start {
    margin: 4px 0 4px 0;
    padding-left: 5px;
    font-size: 0.9rem;
  }
  .text-trans-end {
    margin: 4px 0 4px 0;
    padding-left: 400px;
    font-size: 0.9rem;
  }
  .text-time-start {
    margin: 8px 0 4px 0;
    padding-left: 70px;
    font-size: 0.9rem;
  }
  .text-time-end {
    margin: 8px 0 4px 0;
    padding-left: 286px;
    font-size: 0.9rem;
  }
  // ラジオボタン
  .selection {
    margin: 10px 0px 8px 0;
  }
  .selection-disp {
    margin: 10px 0px 8px 0;
    padding-left: 0px;
  }
  .selection input[type="radio"] {
    display: none;
  }
  .selection em {
    padding: 2px 8px 2px 8px;
    text-align: center;
    font-size: 0.9rem;
    color: #fff;
    background-color: #4a98d3;
    box-shadow: 2px 2px 4px #4e4e4e;
    border-radius: 5px;
    cursor: pointer;
  }
  .selection input[type="radio"] + em {
    margin: 4px 6px 4px 0;
    color: #fff;
    background-color: #726a6a;
    box-shadow: 2px 2px 5px #4e4e4e;
  }
  .selection input[type="radio"]:checked + em {
    margin: 4px 6px 4px 0;
    color: #fff;
    background-color: #4a98d3;
    box-shadow: 0px 0px 0px 0px;
  }

  // スライダー
  .range {
    // ブラウザ毎の外観をカット
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    // 外観設定
    padding-top: 4px;
    width: 95%;
    height: 10px;
    background-color: #bdc6e4;
    border: 1px solid transparent;
    border-radius: 5px;
    cursor: pointer;
    outline: 0;
    // BOXSIZEの指定を変更
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    // スライダーの「つまみ」
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      background: #4169e1;
      border-radius: 3px;
      cursor: pointer;
      height: 20px;
      margin-top: -5px;
      width: 14px;
    }
    // スライダーの「つまみ」がアクティブ時
    &:active::-webkit-slider-thumb {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      background-color: #da3722;
      cursor: pointer;
      position: relative;
    }
  }
}
</style>
