<template>
  <div class="kwb-pc-vw-spotconfig box-one container-col">
    <div class="content-caption">登録されている地点</div>
    <div class="config-box">
      <div class="container-col">
        <div class="sub-title-spot container-row">
          <div class="name">地点名</div>
          <div class="address">所在地</div>
          <div class="select">選択／削除</div>
        </div>
      </div>

      <ul>
        <li class="line-spot bgc-white container-row">
          <div class="item-name">地点１</div>
          <div class="item-address">神奈川県川崎市幸区</div>
          <div class="item-select">
            <div class="button">選択</div>
          </div>
          <div class="itemc-delete">
            <div class="button">削除</div>
          </div>
        </li>
        <li class="line-spot bgc-blue-light container-row">
          <div class="item-name">地点２</div>
          <div class="item-address">東京都新宿区</div>
          <div class="item-select">
            <div class="button">選択</div>
          </div>
          <div class="itemc-delete">
            <div class="button">削除</div>
          </div>
        </li>
        <li class="line-spot bgc-white container-row">
          <div class="item-name">地点３</div>
          <div class="item-address">大分県別府市</div>
          <div class="item-select">
            <div class="button">選択</div>
          </div>
          <div class="itemc-delete">
            <div class="button">削除</div>
          </div>
        </li>
      </ul>
    </div>

    <div class="content-caption">登録地点周辺の観測所一覧</div>
    <div class="config-box">
      <div class="container-col">
        <div class="sub-title-obs container-row">
          <div class="type">観測種別</div>
          <div class="name">観測所名</div>
          <div class="notice">通知</div>
        </div>
        <div class="scroll">
          <ul>
            <li class="line-obs bgc-white container-row">
              <div class="item-type">雨量</div>
              <div class="item-name">
                <div class="name">東矢口（道路）</div>
              </div>
              <div class="item-notice">
                <label class="notice-label">
                  <input type="checkbox" class="notice-check" checked>
                  <span class="notice-content"></span>
                </label>
              </div>
            </li>
            <li class="line-obs bgc-blue-light container-row">
              <div class="item-type">雨量</div>
              <div class="item-name">
                <div class="name">松原橋（道路）</div>
              </div>
              <div class="item-notice">
                <label class="notice-label">
                  <input type="checkbox" class="notice-check">
                  <span class="notice-content"></span>
                </label>
              </div>
            </li>
            <li class="line-obs bgc-white container-row">
              <div class="item-type">通常水位</div>
              <div class="item-name">
                <div class="name">田園調布（下）</div>
              </div>
              <div class="item-notice">
                <label class="notice-label">
                  <input type="checkbox" class="notice-check" checked>
                  <span class="notice-content"></span>
                </label>
              </div>
            </li>
            <li class="line-obs bgc-blue-light container-row">
              <div class="item-type">通常水位</div>
              <div class="item-name">
                <div class="name">田園調布（上）</div>
              </div>
              <div class="item-notice">
                <label class="notice-label">
                  <input type="checkbox" class="notice-check" checked>
                  <span class="notice-content"></span>
                </label>
              </div>
            </li>
            <li class="line-obs bgc-white container-row">
              <div class="item-type">通常水位</div>
              <div class="item-name">
                <div class="name">六郷橋下流</div>
              </div>
              <div class="item-notice">
                <label class="notice-label">
                  <input type="checkbox" class="notice-check" checked>
                  <span class="notice-content"></span>
                </label>
              </div>
            </li>
            <li class="line-obs bgc-blue-light container-row">
              <div class="item-type">通常水位</div>
              <div class="item-name">
                <div class="name">池上</div>
              </div>
              <div class="item-notice">
                <label class="notice-label">
                  <input type="checkbox" class="notice-check">
                  <span class="notice-content"></span>
                </label>
              </div>
            </li>
            <li class="line-obs bgc-white container-row">
              <div class="item-type">危機水位</div>
              <div class="item-name">
                <div class="name">多摩川右岸22.8k</div>
              </div>
              <div class="item-notice">
                <label class="notice-label">
                  <input type="checkbox" class="notice-check" checked>
                  <span class="notice-content"></span>
                </label>
              </div>
            </li>
            <li class="line-obs bgc-blue-light container-row">
              <div class="item-type">危機水位</div>
              <div class="item-name">
                <div class="name">多摩川右岸26.8k</div>
              </div>
              <div class="item-notice">
                <label class="notice-label">
                  <input type="checkbox" class="notice-check" checked>
                  <span class="notice-content"></span>
                </label>
              </div>
            </li>
            <li class="line-obs bgc-white container-row">
              <div class="item-type">河川カメラ</div>
              <div class="item-name">
                <div class="name">多摩川右岸22.8k</div>
              </div>
              <div class="item-notice">
                <label class="notice-label">
                  <input type="checkbox" class="notice-check" checked>
                  <span class="notice-content"></span>
                </label>
              </div>
            </li>
            <li class="line-obs bgc-blue-light container-row">
              <div class="item-type">河川カメラ</div>
              <div class="item-name">
                <div class="name">多摩川河口水位観測所</div>
              </div>
              <div class="item-notice">
                <label class="notice-label">
                  <input type="checkbox" class="notice-check" checked>
                  <span class="notice-content"></span>
                </label>
              </div>
            </li>
            <li class="line-obs bgc-white container-row">
              <div class="item-type">海岸</div>
              <div class="item-name">
                <div class="name">東京（晴海）</div>
              </div>
              <div class="item-notice">
                <label class="notice-label">
                  <input type="checkbox" class="notice-check" checked>
                  <span class="notice-content"></span>
                </label>
              </div>
            </li>
            <li class="line-obs bgc-blue-light container-row">
              <div class="item-type">水質</div>
              <div class="item-name">
                <div class="name">向原</div>
              </div>
              <div class="item-notice">
                <label class="notice-label">
                  <input type="checkbox" class="notice-check" checked>
                  <span class="notice-content"></span>
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "kwb-pc-vw-spotconfig"
};
</script>

<style lang="scss" scoped>
@import "../../../scss/properties.scss";
.kwb-pc-vw-spotconfig {
  color: $obs_font_black;
  margin: 10px 0 0 0;
}
.config-box {
  margin: 0 0 10px 0;
}

.scroll {
  height: 320px;
  overflow-y: auto;
  overflow-x: hidden;
}

// 共通ボタン
.button {
  margin: 3px 0 0 4px;
  width: 60px;
  height: 24p;
  line-height: 24px;
  text-align: center;
  font-size: 0.9rem;
  color: white;
  box-sizing: border-box;
  border-radius: 4px;
  background-color: #4a98d3;
  box-shadow: 2px 2px 5px #4e4e4e;
  cursor: pointer;
}
.button-act {
  box-shadow: 2px 2px 5px #4e4e4e;
}
.button-non-act {
  box-shadow: none;
  background-color: #4a98d3;
}

// 奇数行の背景色
.bgc-white {
  background-color: white;
}
// 偶数行の背景色
.bgc-blue-light {
  background-color: #e3f1fa;
}

.sub-title-spot {
  padding: 4px 0 4px 0;
  color: #02227c;
  font-weight: 400;
  font-size: 0.9rem;
  background-color: white;
  border-bottom: solid 1px;
  border-color: #726a6a;
  flex-shrink: 0;
  .name {
    width: 70px;
    padding: 0 0 0 30px;
  }
  .address {
    width: 170px;
    padding: 0 0 0 100px;
  }
  .select {
    padding: 0 0 0 50px;
  }
}

.sub-title-obs {
  padding: 4px 0 4px 0;
  color: #02227c;
  font-weight: 400;
  font-size: 0.9rem;
  background-color: white;
  border-bottom: solid 1px;
  border-color: #726a6a;
  flex-shrink: 0;
  .type {
    width: 90px;
    padding: 0 0 0 10px;
  }
  .name {
    width: 190px;
    padding: 0 0 0 100px;
  }
  .notice {
    padding: 0 0 0 50px;
  }
}

.line-spot {
  height: 32px;
  line-height: 32px;
  font-size: 0.9rem;

  .item-name {
    width: 100px;
    padding: 0 0 0 4px;
    font-size: 1rem;
  }
  .item-address {
    width: 275px;
    font-size: 1rem;
  }
  .item-select {
    font-size: 1rem;
    width: 70px;
  }
  .item-delete {
    font-size: 1rem;
    width: 70px;
  }
}

.line-obs {
  height: 32px;
  line-height: 32px;
  font-size: 0.9rem;

  .item-type {
    width: 100px;
    padding: 0 0 0 4px;
    font-size: 1rem;
  }
  .item-name {
    width: 340px;
    font-size: 1rem;
  }
  .item-notice {
    // チェック全体
    .notice-label {
      margin: 0 0 14px 2px;
      position: relative;
      display: inline-block;
    }

    .notice-content {
      overflow: hidden;
      cursor: pointer;
    }
    // 非表示時の背景
    .notice-content::before {
      display: block;
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 18px;
      height: 18px;
      border: 1px solid #aaaaaa;
      border-radius: 4px;
    }
    // チェックボックスを非表示
    .notice-check {
      display: none;
    }
    // チェック状態
    .notice-check:checked ~ .notice-content::after {
      content: "";
      display: block;
      position: absolute;
      top: -4px;
      left: 5px;
      width: 9px;
      height: 17px;
      transform: rotate(40deg);
      border-bottom: 3px solid #4a98d3;
      border-right: 3px solid #4a98d3;
    }
  }
}
</style>
