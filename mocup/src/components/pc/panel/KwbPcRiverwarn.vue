<template>
  <div>
    <div class="base-canvas">
      <div class="main-title">河川予警報詳細</div>
      <div class="panel-link-test border-debug">テスト用：
        <div v-on:click="testFldfrView" class="link-text">洪水</div>
        <span>&nbsp;/&nbsp;</span>
        <div v-on:click="testDamdschView" class="link-text">ダム</div>
        <span>&nbsp;/&nbsp;</span>
        <div v-on:click="testFldctlView" class="link-text">水防</div>
      </div>
      <!-- 表示内容切替え / 未指定 -->
      <div v-if="isSelected = false" class="panel-notfound">
        <!-- 地点が指定されていない場合 -->
        現在指定地点の警報はありません
      </div>
      <!-- 表示内容切替え / 洪水予報 -->
      <div v-else-if="riverwarnDetailType === 1">
        <div class="panel-summary flex-container">
          <!-- 区間名 -->
          <div class="item-summary">
            <div class="title-summary">区間名</div>
            <div class="data-summary">{{ fldfr.fldfrNm }}</div>
          </div>
          <!-- 水系名 -->
          <div class="item-summary">
            <div class="title-summary">水系名</div>
            <div class="data-summary">{{ fldfr.rsysNm }}水系</div>
          </div>
          <div class="item-summary">
            <div class="title-summary">発表状況</div>
            <div class="data-summary summary-fldfr-danger">
              第{{ fldfrs[fldfrIndex].fldfrNo }}号
              <br>
              {{ fldfrs[fldfrIndex].fldfrKndNm }}
              <br>
              {{ fldfrs[fldfrIndex].fldfrTime }}
            </div>
          </div>
          <!-- [todo] 発表番号を指定してデータを取得する -->
        </div>

        <div class="panel-obs">
          <div class="wide-title">基準観測所</div>
          <div>
            <!-- 水位レベルの逆順にソートして表示する -->
            <div
              class="flex-container"
              v-for="obs in sortedFldfrObssByStgOvlvl"
              v-bind:key="obs.id"
            >
              <!-- 水位レベル(stgOvlvl)によってボーダーカラーを変更する -->
              <div class="list-item" v-bind:class="classColor(obs.stgOvlvl)" v-on:click="clickObs">
                <div class="obs-name">{{ obs.obsName }}</div>
                <div class="obs-stg">{{ obs.stg }}</div>
                <div class="obs-stg-ovlvl">{{ getObsLvlText(obs.stgOvlvl) }}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="panel-twns">
          <div class="wide-title">対象市町村</div>
          <div class>
            <!-- 都道府県でループ -->
            <div v-for="pref in fldfrPrefs" v-bind:key="pref.prefCd">
              <div class="text-pref">
                <span
                  class="link-text"
                  v-on:click="moveMap(pref.lat, pref.lon, 10)"
                >【{{ pref.prefNm }}】</span>
              </div>
              <div class="flex-container-town">
                <!-- 市町村でループ -->
                <div class="text-twn" v-for="twn in pref.twns" v-bind:key="twn.twnCd">
                  <span class="link-text" v-on:click="moveMap(twn.lat, twn.lon, 13)">{{ twn.twnNm }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="panel-fldfr">
          <div class="wide-title">発表文</div>
          <div class="announce-pdf">
            <div class="link-text">洪水予報文等の本文</div>
            <div>(pdf形式：165KB)</div>
          </div>
          <div class="announce-main-text flex-container flex-space-between">
            <div>
              {{ fldfr.fldfrNm }}&nbsp;
              <span class="font-small">({{ fldfr.rsysNm }}水系)</span>
            </div>
            <div>第{{ fldfrs[fldfrIndex].fldfrNo }}号</div>
            <div>{{ fldfrs[fldfrIndex].fldfrTime }}</div>
          </div>
          <div class="announce-main-text">{{ fldfrs[fldfrIndex].jrsNm }}</div>
          <div class="announce-main-text">
            <div class="announce-main-text-fldfr-danger">{{ fldfrs[fldfrIndex].fldfrKndNm }}</div>
          </div>
          <div class="announce-main-text">
            <span v-html="getIndentedText(fldfrs[fldfrIndex].text)"></span>
          </div>
        </div>
        <div class="panel-anno">
          <div class="title-anno">発表号数</div>
          <div class="panel-annno-list">
            <div class="ann-no" v-for="ann in reverseFldfrs" v-bind:key="ann.fldfrNo">
              <div
                v-if="ann.fldfrNo != fldfr.activeFldfrNo"
                class="link-circle-button"
                v-on:click="changeAnnNo(ann.fldfrNo)"
              >{{ ann.fldfrNo }}</div>
              <div v-else class="circle-button">{{ ann.fldfrNo }}</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 表示内容切替え / ダム放流通知 -->
      <div v-else-if="riverwarnDetailType === 2">
        <div class="panel-summary flex-container">
          <!-- 区間名 -->
          <div class="item-summary">
            <div class="title-summary">ダム名</div>
            <div class="data-summary">{{ damdsch.damdschNm }}</div>
          </div>
          <!-- 水系名 -->
          <div class="item-summary">
            <div class="title-summary">河川名</div>
            <div class="data-summary">
              {{ damdsch.rvrNm }}&nbsp;
              <span class="font-small">({{ damdsch.rsysNm }}水系)</span>
            </div>
          </div>
          <div class="item-summary">
            <div class="title-summary">発表状況</div>
            <div class="data-summary summary-damdsh-danger">
              第{{ damdschs[damdschIndex].damdschNo }}号
              <br>
              {{ damdschs[damdschIndex].damdschKndNm }}
              <br>
              {{ damdschs[damdschIndex].damdschTime }}
            </div>
          </div>
          <!-- [todo] 発表番号を指定してデータを取得する -->
        </div>

        <div class="panel-twns">
          <div class="wide-title">対象市町村</div>
          <div class>
            <!-- 都道府県でループ -->
            <div v-for="pref in damdschPrefs" v-bind:key="pref.prefCd">
              <div class="text-pref">
                <span
                  class="link-text"
                  v-on:click="moveMap(pref.lat, pref.lon, 10)"
                >【{{ pref.prefNm }}】</span>
              </div>
              <div class="flex-container-town">
                <!-- 市町村でループ -->
                <div class="text-twn" v-for="twn in pref.twns" v-bind:key="twn.twnCd">
                  <span class="link-text" v-on:click="moveMap(twn.lat, twn.lon, 13)">{{ twn.twnNm }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="panel-fldfr">
          <div class="wide-title">発表文</div>
          <div class="announce-pdf">
            <div class="link-text">ダム放流通知等の本文</div>
            <div>(pdf形式：165KB)</div>
          </div>
          <div class="announce-main-text flex-container flex-space-between">
            <div>{{ damdsch.damdschNm }}</div>
            <div>
              {{ damdsch.rvrNm }}&nbsp;
              <span class="font-small">({{ damdsch.rsysNm }}水系)</span>
            </div>
            <div>第{{ damdschs[damdschIndex].damdschNo }}号</div>
            <div>{{ damdschs[damdschIndex].damdschTime }}</div>
          </div>
          <div class="announce-main-text">{{ damdschs[damdschIndex].jrsNm }}</div>
          <div class="announce-main-text">
            <div
              class="announce-main-text-damdsch-disasteroperating"
            >{{ damdschs[damdschIndex].damdschKndNm }}</div>
          </div>
          <div class="announce-main-text">
            <span v-html="getIndentedText(damdschs[damdschIndex].text)"></span>
          </div>
        </div>
        <div class="panel-anno">
          <div class="title-anno">発表号数</div>
          <div class="panel-annno-list">
            <div class="ann-no" v-for="ann in reverseDamdschs" v-bind:key="ann.damdschNo">
              <div
                v-if="ann.damdschNo != damdsch.activeDamdschNo"
                class="link-circle-button"
                v-on:click="changeAnnNo(ann.damdschNo)"
              >{{ ann.damdschNo }}</div>
              <div v-else class="circle-button">{{ ann.damdschNo }}</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 表示内容切替え / 水防警報 -->
      <div v-else-if="riverwarnDetailType === 3">
        <div class="panel-summary flex-container">
          <!-- 区間名 -->
          <div class="item-summary">
            <div class="title-summary">区間名</div>
            <div class="data-summary">{{ fldctl.fldctlNm }}</div>
          </div>
          <!-- 水系名 -->
          <div class="item-summary">
            <div class="title-summary">水系名</div>
            <div class="data-summary">{{ fldctl.rsysNm }}水系</div>
          </div>
          <div class="item-summary">
            <div class="title-summary">発表状況</div>
            <div class="data-summary summary-fldctl-standby">
              第{{ fldctls[fldctlIndex].fldctlNo }}号
              <br>
              {{ fldctls[fldctlIndex].fldctlKndNm }}
              <br>
              {{ fldctls[fldctlIndex].fldctlTime }}
            </div>
          </div>
          <!-- [todo] 発表番号を指定してデータを取得する -->
        </div>

        <div class="panel-obs">
          <div class="wide-title">基準観測所</div>
          <div>
            <!-- 水位レベルの逆順にソートして表示する -->
            <div
              class="flex-container"
              v-for="obs in sortedFldctlObssByStgOvlvl"
              v-bind:key="obs.id"
            >
              <!-- 水位レベル(stgOvlvl)によってボーダーカラーを変更する -->
              <div class="list-item" v-bind:class="classColor(obs.stgOvlvl)" v-on:click="clickObs">
                <div class="obs-name">{{ obs.obsName }}</div>
                <div class="obs-stg">{{ obs.stg }}</div>
                <div class="obs-stg-ovlvl">{{ getObsLvlText(obs.stgOvlvl) }}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="panel-twns">
          <div class="wide-title">対象市町村</div>
          <div class>
            <!-- 都道府県でループ -->
            <div v-for="pref in fldctlPrefs" v-bind:key="pref.prefCd">
              <div class="text-pref">
                <span
                  class="link-text"
                  v-on:click="moveMap(pref.lat, pref.lon, 10)"
                >【{{ pref.prefNm }}】</span>
              </div>
              <div class="flex-container-town">
                <!-- 市町村でループ -->
                <div class="text-twn" v-for="twn in pref.twns" v-bind:key="twn.twnCd">
                  <span class="link-text" v-on:click="moveMap(twn.lat, twn.lon, 13)">{{ twn.twnNm }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="panel-fldfr">
          <div class="wide-title">発表文</div>
          <div class="announce-pdf">
            <div class="link-text">水防警報文等の本文</div>
            <div>(pdf形式：165KB)</div>
          </div>
          <div class="announce-main-text flex-container flex-space-between">
            <div>
              {{ fldctl.fldctlNm }}&nbsp;
              <span class="font-small">({{ fldctl.rsysNm }}水系)</span>
            </div>
            <div>第{{ fldctls[fldctlIndex].fldctlNo }}号</div>
            <div>{{ fldctls[fldctlIndex].fldctlTime }}</div>
          </div>
          <div class="announce-main-text">{{ fldctls[fldctlIndex].jrsNm }}</div>
          <div class="announce-main-text">
            <div class="announce-main-text-fldctl-standby">{{ fldctls[fldctlIndex].fldctlKndNm }}</div>
          </div>
          <div class="announce-main-text">
            <span v-html="getIndentedText(fldctls[fldctlIndex].text)"></span>
          </div>
        </div>
        <div class="panel-anno">
          <div class="title-anno">発表号数</div>
          <div class="panel-annno-list">
            <div class="ann-no" v-for="ann in reverseFldctls" v-bind:key="ann.fldctlNo">
              <a
                v-if="ann.fldctlNo != fldctl.activeFldctlNo"
                class="link-text"
                href="#"
              >{{ ann.fldctlNo }}</a>
              <span v-else>{{ ann.fldctlNo }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * [todo]
 * 号数の切り替え
 * 号数切替に伴い、レベルに応じた背景・フォントカラーを適用
 * 警報レベルの定義
 * 警報レベルごとの色定義を properties.sccs へ抜き出し
 * 時刻表記の見直し
 * データがない場合への対応
 * スマホ版(別コンポーネントで実装)
 */
export default {
  name: "kwb-riverwarn",
  data: function() {
    return {
      isSelected: true
    };
  },
  /**
   * createdフック
   * x 暫定で洪水予報データをセットする
   * o 暫定でダム放流通知データをセットする
   */
  created() {
    // this.$store.commit("riverwarn/setFldfrDetail");
    // this.$store.commit("riverwarn/setDamdschDetail");
    // this.$store.commit("riverwarn/setFldctlDetail");
  },
  /**
   * mounted フック
   *
   */
  mounted() {
    // console.log("fldfr.activeFldfrNo = " + this.fldfr.activeFldfrNo);
    // console.log("damdsch.activeDamdschNo = " + this.damdsch.activeDamdschNo);
    // console.log("fldctl.activeFldctlNo = " + this.fldctl.activeFldctlNo);
  },
  computed: {
    riverwarnDetailType: {
      get() {
        return this.$store.state.riverwarn.riverwarnDetail.riverwarnDetailType;
      }
    },
    // 洪水予報オブジェクトを取得する
    fldfr: {
      get() {
        return this.$store.state.riverwarn.riverwarnDetail.fldfr;
      }
    },
    // ダム放流通知オブジェクトを取得する
    damdsch: {
      get() {
        return this.$store.state.riverwarn.riverwarnDetail.damdsch;
      }
    },
    // 水防警報オブジェクトを取得する
    fldctl: {
      get() {
        return this.$store.state.riverwarn.riverwarnDetail.fldctl;
      }
    },
    /**
     * 洪水予報の配列を取得する
     */
    fldfrs: {
      get() {
        return this.$store.state.riverwarn.riverwarnDetail.fldfr.fldfrs;
      }
    },
    /**
     * ダム放流通知の配列を取得する
     */
    damdschs: {
      get() {
        return this.$store.state.riverwarn.riverwarnDetail.damdsch.damdschs;
      }
    },
    /**
     * 水防警報の配列を取得する
     */
    fldctls: {
      get() {
        return this.$store.state.riverwarn.riverwarnDetail.fldctl.fldctls;
      }
    },
    reverseFldfrs() {
      return this.fldfrs.slice().reverse();
    },
    reverseDamdschs() {
      return this.damdschs.slice().reverse();
    },
    reverseFldctls() {
      return this.fldctls.slice().reverse();
    },
    /**
     * 洪水予報の配列数
     */
    detailFldfrCount() {
      return this.$store.getters.riverwarn.detailFldfrCount;
    },
    fldfrIndex: {
      get() {
        return this.$store.state.riverwarn.riverwarnDetail.fldfr.fldfrIndex;
      }
    },
    damdschIndex: {
      get() {
        return this.$store.state.riverwarn.riverwarnDetail.damdsch.damdschIndex;
      }
    },
    fldctlIndex: {
      get() {
        return this.$store.state.riverwarn.riverwarnDetail.fldctl.fldctlIndex;
      }
    },
    // activefldfrNo: {
    //   get() {
    //     return this.$store.state.riverwarn.riverwarnDetail.fldfr.activefldfrNo;
    //   }
    // },
    fldfrPrefs: {
      get() {
        return this.$store.state.riverwarn.riverwarnDetail.fldfr.prefs;
      }
    },
    damdschPrefs: {
      get() {
        return this.$store.state.riverwarn.riverwarnDetail.damdsch.prefs;
      }
    },
    fldctlPrefs: {
      get() {
        return this.$store.state.riverwarn.riverwarnDetail.fldctl.prefs;
      }
    },
    /**
     * 洪水予報の観測所を水位超過レベルの降順にソートする
     * @returns 水位超過レベルの降順にソートした観測所の配列
     */
    //todo 第二ソートキーも考える
    sortedFldfrObssByStgOvlvl() {
      let obss = this.$store.state.riverwarn.riverwarnDetail.fldfr.obss;
      return obss.sort((a, b) => {
        return a.stgOvlvl > b.stgOvlvl ? -1 : a.stgOvlvl < b.stgOvlvl ? 1 : 0;
      });
    },
    /**
     * 水防警報の観測所を水位超過レベルの降順にソートする
     * @returns 水位超過レベルの降順にソートした観測所の配列
     */
    //todo 第二ソートキーも考える
    sortedFldctlObssByStgOvlvl() {
      let obss = this.$store.state.riverwarn.riverwarnDetail.fldctl.obss;
      return obss.sort((a, b) => {
        return a.stgOvlvl > b.stgOvlvl ? -1 : a.stgOvlvl < b.stgOvlvl ? 1 : 0;
      });
    }
  },
  methods: {
    /**
     * 改行(\n)付きテキストをHTML表示用に整形する
     * @param {string} 整形するテキスト
     * @returns 整形済みテキスト
     */
    getIndentedText: function(str) {
      return str.replace(/\r?\n/g, "<br>");
    },
    /**
     * レベルごとの色指定クラス名の取得
     * @param level レベル
     * @return 色指定クラス名
     */
    classColor: function(level) {
      switch (level) {
        case 1:
          return "obs-standby";
        case 2:
        case 3:
          return "obs-warn";
        case 4:
          return "obs-refuge";
        case 5:
          return "obs-danger";
        default:
          return "obs-none";
      }
    },
    /**
     * 水位超過レベルを表す文字列を取得する
     * @augments level - 水位超過レベル
     * @returns 水位超過レベルの文字列
     */
    getObsLvlText: function(level) {
      switch (level) {
        case 1:
          return "水防団待機水位超過";
        case 2:
        case 3:
          return "氾濫注意水位超過";
        case 4:
          return "避難判断水位超過";
        case 5:
          return "氾濫危険水位超過";
        default:
          return "超過無し";
      }
    },
    clickObs() {
      let itmkndCd = 4; // [todo] 暫定。
      this.$store.commit("tm/setSelectedObs", itmkndCd);
      this.$router.push("/pc/obsview");
    },

    /**
     * マップ移動
     * 緯度・軽度・ズームレベルを指定してマップ領域のストアを更新する
     * @param lat マップ中心点とする緯度
     * @param lon マップ中心点とする経度
     * @oaram zoomLevel ズームレベル
     */
    moveMap(lat, lon, zoomLevel) {
      //alert('マップ領域の中心を緯度' + lon + ' 経度' + lat + ' へ移動します');
      this.$store.commit("map/setCenter", [lat, lon]);
      this.$store.commit("map/setZoom", zoomLevel);
    },
    changeAnnNo(annNo) {
      return annNo;
    },
    testFldfrView() {
      this.$store.commit("riverwarn/setFldfrDetail");
      this.$store.commit("mapRiverwarn/showRiverLine");
      this.$store.commit("mapRiverwarn/hideTwnArea");
    },
    testDamdschView() {
      this.$store.commit("riverwarn/setDamdschDetail");
      this.$store.commit("mapRiverwarn/hideRiverLine");
      this.$store.commit("mapRiverwarn/showTwnArea");
    },
    testFldctlView() {
      this.$store.commit("riverwarn/setFldctlDetail");
      this.$store.commit("mapRiverwarn/showRiverLine");
      this.$store.commit("mapRiverwarn/showTwnArea");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../scss/properties.scss";

// ボーダー・背景・フォントカラーの定義
$color-bg-content: white;
$color-bg-canvas: $bk_color;
// [todo] /src/scss/properties.scss に共通定義したほうが良い
// 洪水予報・観測所水位
$color-danger: purple; // 氾濫危険水位超過
$color-refuge: red; // 避難判断水位超過
$color-warn: orange; // 氾濫注意水位超過
$color-standby: yellow; // 水防団待機水位超過
$color-fldfr-danger: $color-danger; // 氾濫危険水位超過
$color-fldfr-refuge: $color-refuge; // 避難判断水位超過
$color-fldfr-warn: $color-warn; // 氾濫注意水位超過
$color-fldfr-standby: $color-standby; // 水防団待機水位超過
$color-obs-danger: $color-danger; // 氾濫危険水位超過
$color-obs-refuge: $color-refuge; // 避難判断水位超過
$color-obs-warn: $color-warn; // 氾濫注意水位超過
$color-obs-standby: $color-standby; // 水防団待機水位超過
// ダム放流通知
$color-damdsch-disasteroperating: yellow; // 異常洪水時防災操作実施中
$color-damdsch-riserving: deepskyblue; // 洪水貯留操作実施中
// 水防警報
$color-fldctl-dispatch: yellow; // 出動
$color-fldctl-standby: lime; // 待機
$color-fldctl-stay: green; // 準備
//
$bg-color-selected: lightgray; // マウスオーバー時の一覧背景色
$bg-color-subtitle: $subtitle_bk_color; // 各パネルタイトルの背景色
$fontcolor-subtitle: $subtitle_font_color; // 各パネルタイトルのフォント色
$fontcolor-light: $content_main_color; // 暗い背景時のフォントカラー
$fontcolor-dark: black; // 明るい背景時のフォントカラー
$fontcolor-link: navy; // リンクテキストのフォントカラー
// ボタンの色
$color-button-bg-active: $base;
$color-button-bg-inactive: #726a6a;
$color-button-shadow: #4e4e4e;

* {
  font-size: 0.9rem;
  //user-select: none;  //テキストを選択不可とする
  box-sizing: border-box;
}
// コンテンツ全体の余白、スクロール制御
.base-canvas {
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 8px;
  height: 85vh;
}

.flex-container {
  display: flex;
}

.flex-container-inline {
  display: inline-flex;
}

.selectable {
  user-select: auto;
}

.main-title {
  //padding: 0.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  padding-bottom: 8px;
  border-bottom: solid 2px #726a6a;
}

// 見出し
.wide-title {
  color: $fontcolor-subtitle;
  background: $bg-color-subtitle;
  // width: 100%;
  padding: 0.5rem;
  font-weight: bold;
}

//------------------------------------------------------------
// サマリー関連
//------------------------------------------------------------
.panel-notfound {
  margin: 0.2rem;
  padding: 0.5rem;
  background-color: $color-bg-content;
}

//------------------------------------------------------------
// サマリー関連
//------------------------------------------------------------
.panel-summary {
  border-color: $color-bg-canvas;
  width: 100%;
  margin-top: 8px;
}

.item-summary {
  width: 33.333333%;
  border: 1px solid $color-bg-canvas;
}

.title-summary {
  background: $bg-color-subtitle;
  color: $fontcolor-subtitle;
  margin: 0px;
  text-align: center;
  padding: 0.5rem;
  font-weight: bold;
}

.data-summary {
  background: $color-bg-content;
  margin: 0px;
  height: 4rem;
  text-align: center;
  padding: 0.5rem;
}

.summary-fldfr-danger {
  background-color: $color-fldfr-danger;
  color: $fontcolor-light;
}

.summary-damdsh-danger {
  background-color: $color-damdsch-disasteroperating;
  color: $fontcolor-dark;
}

.summary-fldctl-standby {
  background-color: $color-fldctl-standby;
  color: $fontcolor-dark;
}

.font-small {
  font-size: 0.7rem;
}

//------------------------------------------------------------
// 基準観測所
//------------------------------------------------------------
.panel-obs {
  margin-top: 8px;
}

.list-item {
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.1rem;
  display: inline-flex;
  justify-content: space-between;
  // box-sizing: border-box;
}

// 観測所一覧の色
.obs-danger,
.obs-refuge,
.obs-warn,
.obs-standby,
.obs-none {
  border: 2px solid white;
  color: black;
  background: $color-bg-content;
}

.obs-danger {
  border-left: 5px solid $color-obs-danger;
  border-bottom: 2px solid $color-obs-danger;
}

.obs-refuge {
  border-left: 5px solid $color-obs-refuge;
  border-bottom: 2px solid $color-obs-refuge;
}

.obs-warn {
  border-left: 5px solid $color-obs-warn;
  border-bottom: 2px solid $color-obs-warn;
}

.obs-standby {
  border-left: 5px solid $color-obs-standby;
  border-bottom: 2px solid $color-obs-standby;
}

.obs-danger:hover,
.obs-refuge:hover,
.obs-warn:hover,
.obs-standby:hover {
  background-color: $bg-color-selected;
  cursor: pointer;
}

.obs-danger:hover {
  border: 2px solid $color-obs-danger;
  border-left: 5px solid $color-obs-danger;
}

.obs-refuge:hover {
  border: 2px solid $color-obs-refuge;
  border-left: 5px solid $color-obs-refuge;
}

.obs-warn:hover {
  border: 2px solid $color-obs-warn;
  border-left: 5px solid $color-obs-warn;
}

.obs-standby:hover {
  border: 2px solid $color-obs-standby;
  border-left: 5px solid $color-obs-standby;
}

//リスト内の項目
.obs-name,
.obs-stg,
.obs-stg-ovlvl {
  padding: 0.2rem;
}

.obs-name {
  width: 20%;
}

.obs-stg {
  width: 20%;
}

.obs-stg-ovlvl {
  width: 30%;
}

//------------------------------------------------------------
// 対象市町村関連
//------------------------------------------------------------
.panel-twns {
  margin-top: 8px;
  background-color: $color-bg-content;
}

.flex-container-town {
  display: flex;
  flex-wrap: wrap;
  margin-left: 1rem;
}

.text-pref,
.text-twn {
  color: navy;
  //border: solid 1px $bg-color-subtitle;
  //border-radius:  0%;
  background-color: $color-bg-content;
  padding: 0.3rem;
  margin-top: 0.1rem;
  // white-space: nowrap;
  //text-decoration: underline;
}

.link-text {
  background-color: $color-bg-content;
  border: none;
  color: $fontcolor-link;
}

.link-text:hover {
  font-weight: bold;
  cursor: pointer;
}

// .text-twn:hover, .text-pref:hover {
//   text-decoration: underline;
//   cursor : pointer;
// }

//------------------------------------------------------------
// 本文関連
//------------------------------------------------------------
.panel-fldfr {
  margin-top: 8px;
}
.announce-main-text,
.announce-pdf {
  background-color: $color-bg-content;
  padding: 0.5rem;
  line-height: 1.5rem;
}

.announce-pdf {
  //text-align: right;
  //width:100%;
  display: flex;
  justify-content: flex-end;
  border-bottom: solid 1px $color-bg-canvas;
}

.flex-space-between {
  justify-content: space-between;
}

.announce-main-text-fldfr-danger {
  padding: 0.5rem;
  background-color: $color-fldfr-danger;
  display: inline-block;
  color: $fontcolor-light;
}

.announce-main-text-damdsch-disasteroperating {
  padding: 0.5rem;
  background-color: $color-damdsch-disasteroperating;
  display: inline-block;
  color: $fontcolor-dark;
}

.announce-main-text-fldctl-standby {
  padding: 0.5rem;
  background-color: $color-fldctl-standby;
  display: inline-block;
  color: $fontcolor-dark;
}

.text-attach {
  text-align: right;
  border: solid 1px $color-bg-canvas;
}

//------------------------------------------------------------
// 発表番号（号数）関連
//------------------------------------------------------------
.panel-anno {
  display: inline-flex;
  //width: 100%;
  width: 100%;
  margin-top: 8px;
  background: $color-bg-content;
}

.title-anno {
  background: $bg-color-subtitle;
  color: $fontcolor-subtitle;
  margin: 0px;
  padding: 0.5rem;
  width: 20%;
  font-weight: bold;
}

.panel-annno-list {
  background: $color-bg-content;
  padding: 0.5rem;
  width: 80%;
  //height: 3rem;
  display: flex;
  //justify-content: center;
  //flex-flow: row wrap;
  flex-wrap: wrap;
}

.circle-button {
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  //border: solid 1px gray;
  background: $color-button-bg-active;
  color: $fontcolor-light;
  text-align: center;
  line-height: 30px;
  vertical-align: middle;
  //box-shadow:3px 3px 3px gray;
}

.link-circle-button {
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: $color-button-bg-inactive;
  color: $fontcolor-light;
  text-align: center;
  line-height: 30px;
  vertical-align: middle;
  //box-shadow:3px 3px 3px gray;
  box-shadow: 2px 2px 5px $color-button-shadow;
}

.link-circle-button:hover {
  //background: lightgray;
  //color: $fontcolor-dark;
  cursor: pointer;
}

.link-circle-button:active {
  cursor: pointer;
  //transform: translate3d(0, 2px, 0);
  // box-shadow:2px 2px 2px gray;
  box-shadow: none;
}

// 要素境界確認用
.border-debug {
  border: dashed 2px red;
}

.panel-link-test {
  margin-top: 4px;
  margin-bottom: 4px;
  background: ivory;
  padding: 0.5rem;
  //width: 70%;
  display: inline-flex;
  justify-content: center;
  //font-size: 0.7rem;
  float: right;
}

.ann-no {
  margin: 0.5rem;
}
</style>
