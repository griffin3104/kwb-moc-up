<template>
  <div class="kwb_pc_vw_cstmconfig box-one container-col">
    <div class="content-caption">観測所種別</div>
    <div class="config-box">
      <ul>
        <li class="line bgc-white container-row">
          <div class="item-name">通常水位</div>
          <div class="item-disp">表示</div>
          <div class="item-swich">
            <label class="switch-label">
              <div class="container-row">
                <input type="checkbox" class="switch-check" checked>
                <span class="switch-content"></span>
                <span class="switch-circle"></span>
              </div>
            </label>
          </div>
          <div class="item-none">非表示</div>
        </li>
        <li class="line bgc-blue-light container-row">
          <div class="item-name">危機管理型水位計</div>
          <div class="item-disp">表示</div>
          <div class="item-swich">
            <label class="switch-label">
              <div class="container-row">
                <input type="checkbox" class="switch-check" checked>
                <span class="switch-content"></span>
                <span class="switch-circle"></span>
              </div>
            </label>
          </div>
          <div class="item-none">非表示</div>
        </li>
        <li class="line bgc-white container-row">
          <div class="item-name">ダム諸量</div>
          <div class="item-disp">表示</div>
          <div class="item-swich">
            <label class="switch-label">
              <div class="container-row">
                <input type="checkbox" class="switch-check" checked>
                <span class="switch-content"></span>
                <span class="switch-circle"></span>
              </div>
            </label>
          </div>
          <div class="item-none">非表示</div>
        </li>
        <li class="line bgc-blue-light container-row">
          <div class="item-name">雨量</div>
          <div class="item-disp">表示</div>
          <div class="item-swich">
            <label class="switch-label">
              <div class="container-row">
                <input type="checkbox" class="switch-check" checked>
                <span class="switch-content"></span>
                <span class="switch-circle"></span>
              </div>
            </label>
          </div>
          <div class="item-none">非表示</div>
        </li>
        <li class="line bgc-white container-row">
          <div class="item-name">河川カメラ</div>
          <div class="item-disp">表示</div>
          <div class="item-swich">
            <label class="switch-label">
              <div class="container-row">
                <input type="checkbox" class="switch-check" checked>
                <span class="switch-content"></span>
                <span class="switch-circle"></span>
              </div>
            </label>
          </div>
          <div class="item-none">非表示</div>
        </li>
        <li class="line bgc-blue-light container-row">
          <div class="item-name">水質</div>
          <div class="item-disp">表示</div>
          <div class="item-swich">
            <label class="switch-label">
              <div class="container-row">
                <input type="checkbox" class="switch-check" checked>
                <span class="switch-content"></span>
                <span class="switch-circle"></span>
              </div>
            </label>
          </div>
          <div class="item-none">非表示</div>
        </li>
        <li class="line bgc-white container-row">
          <div class="item-name">海岸</div>
          <div class="item-disp">表示</div>
          <div class="item-swich">
            <label class="switch-label">
              <div class="container-row">
                <input type="checkbox" class="switch-check" checked>
                <span class="switch-content"></span>
                <span class="switch-circle"></span>
              </div>
            </label>
          </div>
          <div class="item-none">非表示</div>
        </li>
        <li class="line bgc-blue-light container-row">
          <div class="item-name">積雪深</div>
          <div class="item-disp">表示</div>
          <div class="item-swich">
            <label class="switch-label">
              <div class="container-row">
                <input type="checkbox" class="switch-check" checked>
                <span class="switch-content"></span>
                <span class="switch-circle"></span>
              </div>
            </label>
          </div>
          <div class="item-none">非表示</div>
        </li>
      </ul>
    </div>

    <div class="content-caption">河川予警報</div>
    <li class="line bgc-white container-row">
      <div class="item-name">洪水予報</div>
      <div class="item-disp">表示</div>
      <div class="item-swich">
        <label class="switch-label">
          <div class="container-row">
            <input type="checkbox" class="switch-check" checked>
            <span class="switch-content"></span>
            <span class="switch-circle"></span>
          </div>
        </label>
      </div>
      <div class="item-none">非表示</div>
    </li>
    <li class="line bgc-blue-light container-row">
      <div class="item-name">ダム放流通知</div>
      <div class="item-disp">表示</div>
      <div class="item-swich">
        <label class="switch-label">
          <div class="container-row">
            <input type="checkbox" class="switch-check" checked>
            <span class="switch-content"></span>
            <span class="switch-circle"></span>
          </div>
        </label>
      </div>
      <div class="item-none">非表示</div>
    </li>
    <li class="line bgc-white container-row">
      <div class="item-name">水防警報</div>
      <div class="item-disp">表示</div>
      <div class="item-swich">
        <label class="switch-label">
          <div class="container-row">
            <input type="checkbox" class="switch-check" checked>
            <span class="switch-content"></span>
            <span class="switch-circle"></span>
          </div>
        </label>
      </div>
      <div class="item-none">非表示</div>
    </li>
  </div>
</template>

<script>
export default {
  name: "Kwb-pc-vw-cstmconfig"
};
</script>

<style lang="scss" scoped>
@import "../../../scss/properties.scss";
.kwb_pc_vw_cstmconfig {
  color: $obs_font_black;
  margin: 10px 0 0 0;
}
.config-box {
  margin: 0 0 10px 0;
}

// 奇数行の背景色
.bgc-white {
  background-color: white;
}
// 偶数行の背景色
.bgc-blue-light {
  background-color: #e3f1fa;
}

.line {
  padding-left: 32px;
  height: 32px;
  line-height: 32px;
  font-size: 0.9rem;

  .item-name {
    font-size: 1rem;
    width: 220px;
  }
  .item-disp {
    font-size: 1rem;
    width: 60px;
    padding: 0 20px 0 0;
    text-align: right;
  }
  .item-none {
    font-size: 1rem;
    width: 80px;
    padding: 0 0 0 20px;
  }
  // 設定の表示・非表示切替ボタン
  .item-swich {
    // スイッチ全体
    .switch-label {
      width: 60px;
      padding-top: 4px;
      position: relative;
      display: inline-block;
    }
    // スイッチの背景
    .switch-content {
      //display: block;
      height: 24px;
      margin-top: 8px;
      border-radius: 30px;
      overflow: hidden;
      cursor: pointer;
    }
    // 非表示時の背景
    .switch-content:before {
      //display: block;
      content: "";
      width: 60px;
      height: 22px;
      top: 4px;
      left: 0;
      position: absolute;
      background-color: #aaaaaa;
      border: 1.5px solid #9a9a9a;
      border-radius: 24px;
    }
    // チェックボックスを非表示
    .switch-check {
      display: none;
    }
    // スイッチの外観
    .switch-circle {
      left: 38px;
      display: block;
      position: absolute;
      cursor: pointer;
      -webkit-box-shadow: 0 2px 6px #999;
      box-shadow: 0 2px 6px #999;
      width: 24px;
      height: 24px;
      -webkit-border-radius: 20px;
      border-radius: 20px;
      //  background-color: #726a6a;
      background-color: #ebebeb;
      -webkit-transition: all 0.5s;
      -moz-transition: all 0.5s;
      -ms-transition: all 0.5s;
      -o-transition: all 0.5s;
      transition: all 0.5s;
    }
    // スイッチを移動
    .switch-check:checked ~ .switch-circle {
      left: 0px;
      // background-color: #4a98d3;
      background-color: #ebebeb;
    }
  }
}
</style>
