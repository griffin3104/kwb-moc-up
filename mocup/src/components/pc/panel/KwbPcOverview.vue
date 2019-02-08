<template>
  <!-- --- 予警報のヘッダと模式図と警報一覧 --- -->
  <div class="kwb-panel-overview-riverwarn container-col">
    <!-- --- ヘッダ --- -->
    <div class="kwb-panel-overview-riverwarn-head container-row">
      <!-- --- アイコンボタン --- -->
      <!-- 河川アイコン -->
      <img class="riverwarn" src="/img/overview_mb_flood.png" @click="showRiverWarn('flood')">
      <!-- ダムアイコン -->
      <img class="riverwarn" src="/img/overview_mb_dam.png" @click="showRiverWarn('dam')">
      <!-- 水防アイコン -->
      <img
        class="riverwarn"
        src="/img/overview_mb_fldctl_party.png"
        @click="showRiverWarn('fldctlparty')"
      >

      <!-- 全国表示アイコン   memo : マップコンポーネントに移動予定 -->
      <!-- 地図種別＝地方 -->
      <div v-if="this.areatype !== 'Nationwide'">
        <img class="riverwarn02" src="/img/overview_mb_Nationwide.png" @click="showNationwide()">
      </div>

      <!-- テスト用 -->
      <div class="panel-link-test border-debug">テスト用：
        <div v-on:click="testListViewNormal1" class="link-text">&nbsp;&nbsp;&nbsp;通常１</div>
        <div v-on:click="testListViewNormal2" class="link-text">&nbsp;&nbsp;&nbsp;通常２</div>
        <div v-on:click="testListViewDetail" class="link-text">&nbsp;&nbsp;&nbsp;拡大</div>
      </div>
      <!-- テスト用 -->
    </div>

    <!-- --- 模式図と警報一覧 --- -->
    <div class="kwb-panel-overview-riverwarn-pattern-diagram-list container-row">
      <!-- --- 模式図 --- -->
      <div class="kwb-panel-overview-riverwarn-pattern-diagram container-col">
        <!-- 画像 ー 全国／地方 -->
        <img class="imagebase" v-bind:src="imagebase" alt>

        <!-- 画像 ー 凡例 -->
        <img class="imagecom" v-bind:src="imagecom" alt>

        <!-- 画像 ー 超過色彩 -->
        <img
          v-for="image in this.imageOverColor"
          :key="image.id"
          class="imageovercolor"
          v-bind:src="'/img/overview_map_' + image.area + '_' + image.level + '.png'"
          alt
        >

        <!-- 画像 ー 地方名／都道府県名 -->
        <img class="imagetop" v-bind:src="imagetop" alt v-bind:usemap="usemap">

        <!-- 画像 ー マウスオーバー／マウスアウト -->
        <img class="image" v-bind:src="image" alt v-bind:usemap="usemap">

        <!-- --- マップ情報 --- -->
        <!-- マップ情報 ー 全国 -->
        <map name="smplMapNationwide">
          <area
            v-for="map in this.nationwidemaps"
            :key="map.id"
            shape="poly"
            v-bind:alt="map.alt"
            v-bind:coords="map.coords"
            href="#"
            @click="onclickOverviewMap(map.areacd);"
            @mouseover="msOverSubmenu(map.areacd)"
            @mouseout="msOutSubmenu()"
          >
        </map>

        <!-- マップ情報 ー 地方 -->
        <map name="smplMapRegion">
          <area
            v-for="map in this.regionmaps"
            :key="map.id"
            shape="poly"
            v-bind:alt="map.alt"
            v-bind:coords="map.coords"
            href="#"
            @click="onclickOverviewMap(map.areacd);"
            @mouseover="msOverSubmenu(map.areacd)"
            @mouseout="msOutSubmenu()"
          >
        </map>
      </div>

      <!-- --- 警報一覧 --- -->
      <div class="kwb-panel-overview-riverwarn-list container-col">
        <!-- アイコンボタンの値＝河川 -->
        <div v-if="this.picked === 'flood'">
          <!-- 通常表示 -->
          <div v-if="!this.detailflg">
            <div v-if="this.testflg">
              <div class="por-list" v-for="map in this.flooddetails" :key="map.fldfr_id">
                <div
                  class="por-line"
                  v-bind:class="classColorFlood(map.level, 'list')"
                  v-on:click="clickRiverwarn"
                >
                  <div class="por-col-rsysnm">{{map.rsysNm}} {{map.fldfrNm}}</div>
                  <div class="por-col-anntime">{{map.annTime}}発表</div>
                  <div class="por-col-annno">第{{map.annNo}}号 {{map.fldfrKndNm}}</div>
                  <div class="por-col-heading">{{map.heading}}</div>
                </div>
              </div>
            </div>
            <div v-else>
              <!-- test用 -->
              <div class="por-list" v-for="map in this.flooddetails" :key="map.fldfr_id">
                <div
                  class="por-line"
                  v-bind:class="classColorFlood(map.level, 'list')"
                  v-on:click="clickRiverwarn"
                >
                  <div class="por-col-rsysnm">{{map.rsysNm}} {{map.fldfrNm}}</div>
                  <div class="por-col-anntime">{{map.annTime}}発表</div>
                  <div class="por-col-annno">第{{map.annNo}}号</div>
                </div>
              </div>
            </div>
          </div>
          <!-- 拡大表示 -->
          <div v-else>
            <div class="por-list" v-for="map in this.flooddetails" :key="map.fldfr_id">
              <div class="por-line" v-bind:class="classColorFlood(map.level, 'list')">
                <div class="por-col-grp1" v-on:click="clickRiverwarn">
                  <div class="por-col-rsysnm">{{map.rsysNm}} {{map.fldfrNm}}</div>
                  <div class="por-col-anntime">{{map.annTime}}発表</div>
                  <div class="por-col-annno">第{{map.annNo}}号 {{map.fldfrKndNm}}</div>
                  <div class="por-col-heading">{{map.heading}}</div>
                </div>
                <!-- 基準観測所 -->
                <div class="por-col-grp2" v-bind:class="classColorFlood(map.level, 'line')">
                  <div class="por-col-obs">
                    <div class="flex-container-obs">
                      <!-- 基準観測所でループ -->
                      <div class="text-obs" v-for="obs in map.obss" v-bind:key="obs.obsFcd">
                        <span
                          class="link-text"
                          v-on:click="moveMap(obs.lat, obs.lon, 13)"
                        >{{ obs.obsName }}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- 対象市町村 -->
                <div class="por-col-grp3" v-bind:class="classColorFlood(map.level, 'line')">
                  <div class="por-col-pref">
                    <!-- 都道府県でループ -->
                    <div v-for="pref in map.prefs" v-bind:key="pref.prefCd">
                      <div class="text-pref">
                        <span
                          class="link-text"
                          v-on:click="moveMap(pref.lat, pref.lon, 10)"
                        >【{{ pref.prefNm }}】</span>
                      </div>
                      <div class="flex-container-town">
                        <!-- 市町村でループ -->
                        <div class="text-twn" v-for="twn in pref.twns" v-bind:key="twn.twnCd">
                          <span
                            class="link-text"
                            v-on:click="moveMap(twn.lat, twn.lon, 13)"
                          >{{ twn.twnNm }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 警報一覧データなし -->
          <div v-if="this.flooddetails.length===0">{{this.conMsg_nodata}}</div>
        </div>
        <!-- アイコンボタンの値＝ダム -->
        <div v-if="this.picked === 'dam'">
          <!-- 通常表示 -->
          <div v-if="!this.detailflg">
            <div v-if="this.testflg">
              <div class="por-list" v-for="map in this.damdetails" :key="map.damdsch_id">
                <div
                  class="por-line"
                  v-bind:class="classColorDam(map.level, 'list')"
                  v-on:click="clickRiverwarn"
                >
                  <div class="por-col-rsysnm">{{map.damNm}} {{map.rsysNm}} {{map.fldfrNm}}</div>
                  <div class="por-col-anntime">{{map.annTime}}発表</div>
                  <div class="por-col-annno">第{{map.annNo}}号 {{map.damdschKndNm}}</div>
                  <div class="por-col-heading">{{map.heading}}</div>
                </div>
              </div>
            </div>
            <div v-else>
              <!-- test用 -->
              <div class="por-list" v-for="map in this.damdetails" :key="map.damdsch_id">
                <div
                  class="por-line"
                  v-bind:class="classColorDam(map.level, 'list')"
                  v-on:click="clickRiverwarn"
                >
                  <div class="por-col-rsysnm">{{map.damNm}} {{map.rsysNm}} {{map.fldfrNm}}</div>
                  <div class="por-col-anntime">{{map.annTime}}発表</div>
                  <div class="por-col-annno">第{{map.annNo}}号</div>
                </div>
              </div>
            </div>
          </div>
          <!-- 拡大表示 -->
          <div v-else>
            <div class="por-list" v-for="map in this.damdetails" :key="map.damdsch_id">
              <div class="por-line" v-bind:class="classColorDam(map.level, 'list')">
                <div class="por-col-grp1" v-on:click="clickRiverwarn">
                  <div class="por-col-rsysnm">{{map.damNm}} {{map.rsysNm}} {{map.fldfrNm}}</div>
                  <div class="por-col-anntime">{{map.annTime}}発表</div>
                  <div class="por-col-annno">第{{map.annNo}}号 {{map.damdschKndNm}}</div>
                  <div class="por-col-heading">{{map.heading}}</div>
                </div>
                <div class="por-col-grp2" v-bind:class="classColorDam(map.level, 'line')">
                  <div class="por-col-obs">
                    <!-- 都道府県でループ -->
                    <div v-for="pref in map.prefs" v-bind:key="pref.prefCd">
                      <div class="text-pref">
                        <span
                          class="link-text"
                          v-on:click="moveMap(pref.lat, pref.lon, 10)"
                        >【{{ pref.prefNm }}】</span>
                      </div>
                      <div class="flex-container-town">
                        <!-- 市町村でループ -->
                        <div class="text-twn" v-for="twn in pref.twns" v-bind:key="twn.twnCd">
                          <span
                            class="link-text"
                            v-on:click="moveMap(twn.lat, twn.lon, 13)"
                          >{{ twn.twnNm }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 警報一覧データなし -->
          <div v-if="this.damdetails.length===0">{{this.conMsg_nodata}}</div>
        </div>
        <!-- アイコンボタンの値＝水防 -->
        <div v-if="this.picked === 'fldctlparty'">
          <!-- 通常表示 -->
          <div v-if="!this.detailflg">
            <div v-if="this.testflg">
              <div class="por-list" v-for="map in this.fldctlpartydetails" :key="map.fldctl_id">
                <div
                  class="por-line"
                  v-bind:class="classColorFldctlparty(map.level, 'list')"
                  v-on:click="clickRiverwarn"
                >
                  <div class="por-col-rsysnm">{{map.rsysNm}} {{map.fldfrNm}}</div>
                  <div class="por-col-anntime">{{map.annTime}}発表</div>
                  <div class="por-col-annno">第{{map.annNo}}号 {{map.fldctlNm}}</div>
                  <div class="por-col-heading">{{map.heading}}</div>
                </div>
              </div>
            </div>
            <div v-else>
              <!-- test用 -->
              <div class="por-list" v-for="map in this.fldctlpartydetails" :key="map.fldctl_id">
                <div
                  class="por-line"
                  v-bind:class="classColorFldctlparty(map.level, 'list')"
                  v-on:click="clickRiverwarn"
                >
                  <div class="por-col-rsysnm">{{map.rsysNm}} {{map.fldfrNm}}</div>
                  <div class="por-col-anntime">{{map.annTime}}発表</div>
                  <div class="por-col-annno">第{{map.annNo}}号</div>
                </div>
              </div>
            </div>
          </div>
          <!-- 拡大表示 -->
          <div v-else>
            <div class="por-list" v-for="map in this.fldctlpartydetails" :key="map.fldctl_id">
              <div class="por-line" v-bind:class="classColorFldctlparty(map.level, 'list')">
                <div class="por-col-grp1" v-on:click="clickRiverwarn">
                  <div class="por-col-rsysnm">{{map.rsysNm}} {{map.fldfrNm}}</div>
                  <div class="por-col-anntime">{{map.annTime}}発表</div>
                  <div class="por-col-annno">第{{map.annNo}}号 {{map.fldctlNm}}</div>
                  <div class="por-col-heading">{{map.heading}}</div>
                </div>

                <div class="por-col-grp2" v-bind:class="classColorFldctlparty(map.level, 'line')">
                  <div class="por-col-obs">
                    <div class="flex-container-obs">
                      <!-- 基準観測所でループ -->
                      <div class="text-obs" v-for="obs in map.obss" v-bind:key="obs.obsFcd">
                        <span
                          class="link-text"
                          v-on:click="moveMap(obs.lat, obs.lon, 13)"
                        >{{ obs.obsName }}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="por-col-grp3" v-bind:class="classColorFldctlparty(map.level, 'line')">
                  <div class="por-col-pref">
                    <!-- 都道府県でループ -->
                    <div v-for="pref in map.prefs" v-bind:key="pref.prefCd">
                      <div class="text-pref">
                        <span
                          class="link-text"
                          v-on:click="moveMap(pref.lat, pref.lon, 10)"
                        >【{{ pref.prefNm }}】</span>
                      </div>
                      <div class="flex-container-town">
                        <!-- 市町村でループ -->
                        <div class="text-twn" v-for="twn in pref.twns" v-bind:key="twn.twnCd">
                          <span
                            class="link-text"
                            v-on:click="moveMap(twn.lat, twn.lon, 13)"
                          >{{ twn.twnNm }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 警報一覧データなし -->
          <div v-if="this.fldctlpartydetails.length===0">{{this.conMsg_nodata}}</div>
        </div>
      </div>
    </div>

    <!-- --- 観測所一覧 --- -->
    <div class="containner-row"></div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      // watch用
      unwatch1: null,
      unwatch2: null,
      // メッセージ一覧
      conMsg_nodata: "発表されていません", // 警報一覧の表示データなし
      // 詳細情報表示／非表示フラグ(表示：true/非表示：false) memo : 上位コンポーネントに移動予定
      detailflg: false,
      // テストフラグ
      testflg: true,
      // マップ情報 ー 全国／地方
      usemap: "",
      // 画像 ー 地方名／都道府県名
      imagetop: "",
      // 画像 ー 全国／地方
      imagebase: "",
      // 画像 ー 超過彩色
      //      imageovercolor: [],
      // 画像 ー 凡例
      imagecom: "",
      // 画像 ー マウスオーバー／マウスアウト
      image: "",

      // マップ情報 ー 全国版
      nationwidemaps: [
        {
          id: 1,
          alt: "北海道",
          // width:403pxの時のcoords
          //          coords: "297, 4, 386, 4, 386, 58, 321, 58, 321, 68, 297, 68",
          // width:267pxの時のcoords
          coords: "195, 1, 255, 1, 255, 37, 212, 37, 212, 45, 195, 45",
          areacd: "81"
        },
        {
          id: 2,
          alt: "東北",
          coords:
            //            "296, 75, 348, 75, 348, 65, 365, 65, 365, 155, 312, 155, 312, 126, 296, 126",
            "195, 52, 228, 52, 228, 45, 241, 45, 241, 100, 205, 100, 205, 80, 195, 80",
          areacd: "82"
        },
        {
          id: 3,
          alt: "関東",
          coords:
            //            "298, 159, 365, 159, 365, 241, 343, 241, 343, 216, 332, 216, 332, 239, 309, 239, 309, 221, 291, 221, 291, 200, 298, 200",
            "195, 105, 242, 105, 241, 157, 225, 157, 225, 144, 218, 144, 218, 157, 205, 157, 205, 146, 193, 146, 193, 133, 197, 133",
          areacd: "83"
        },
        {
          id: 4,
          alt: "北陸",
          coords:
            //            "238, 128, 257, 128, 257, 143, 296, 143, 296, 130, 308, 130, 309, 155, 295, 155, 294, 197, 288, 197, 287, 221, 275, 221, 275, 181, 238, 181",
            "157, 84, 169, 84, 169, 94, 195, 94, 195, 84, 202, 84, 202, 100, 195, 100, 195, 130, 189, 130, 189, 146, 181, 146, 181, 119, 157, 119",
          areacd: "84"
        },
        {
          id: 5,
          alt: "中部",
          coords:
            //            "254, 185, 271, 185, 271, 225, 305, 225, 306, 248, 266, 248, 266, 236, 257, 236, 257, 253, 241, 253, 240, 209, 254, 209",
            "168, 123, 179, 123, 179, 149, 202, 149, 202, 164, 177, 164, 177, 155, 169, 155, 169, 166, 159, 166, 159, 138, 168, 138",
          areacd: "85"
        },
        {
          id: 6,
          alt: "近畿",
          coords:
            //            "188, 167, 233, 167, 233, 185, 250, 185, 250, 205, 236, 205, 236, 253, 206, 253, 206, 217, 188, 217",
            "125, 111, 155, 111, 155, 123, 165, 123, 165, 135, 156, 135, 156, 166, 137, 166, 137, 143, 125, 143",
          areacd: "86"
        },
        {
          id: 7,
          alt: "中国",
          //          coords: "129, 167, 184, 167, 184, 217, 129, 217",
          coords: "86, 111, 122, 111, 121, 143, 86, 143",
          areacd: "87"
        },
        {
          id: 8,
          alt: "四国",
          //          coords: "136, 224, 195, 224, 195, 259, 136, 259",
          coords: "90, 149, 129, 149, 129, 171, 90, 171",
          areacd: "88"
        },
        {
          id: 9,
          alt: "九州",
          coords:
            //            "49, 167, 120, 167, 120, 250, 75, 250, 75, 195, 63, 195, 63, 205, 49, 205",
            "32, 111, 79, 111, 79, 166, 50, 166, 50, 129, 41, 129, 41, 135, 32, 135",
          areacd: "89"
        },
        {
          id: 10,
          alt: "沖縄",
          //          coords: "24, 242, 40, 242, 40, 268, 24, 268",
          coords: "16, 160, 26, 160, 26, 176, 16, 176",
          areacd: "90"
        }
      ],
      // マップ情報 ー 地方版
      regionmaps: [],
      regionmapsData: [
        {
          id: 8,
          alt: "茨城県",
          coords:
            "135,123,157,113,175,98,187,81,193,95,198,34,222,48,222,32,253,38,226,128,241,163,232,161,202,166,183,164,154,148",
          regionareacd: "83",
          areacd: "8"
        },
        {
          id: 9,
          alt: "栃木県",
          coords:
            "100,36,137,17,154,2,192,11,198,34,193,95,187,81,175,98,157,113,135,123,110,104,106,94,106,90,115,70,100,68",
          regionareacd: "83",
          areacd: "9"
        },
        {
          id: 10,
          alt: "群馬県",
          coords:
            "34,149,25,240,25,108,20,100,9,100,3,91,7,71,17,61,35,59,56,42,68,15,100,36,100,68,115,70,106,90,106,94,110,104,135,123,119,123,86,116",
          regionareacd: "83",
          areacd: "10"
        },
        {
          id: 11,
          alt: "埼玉県",
          coords:
            "34,149,86,116,119,123,135,123,154,148,158,175,162,181,61,169,37,162",
          regionareacd: "83",
          areacd: "11"
        },
        {
          id: 12,
          alt: "千葉県",
          coords:
            "154,148,183,164,202,166,232,161,263,190,246,191,225,201,213,214,209,236,212,245,203,260,179,264,152,293,143,186,155,262,146,235,161,230,166,218,176,207,174,194,160,193",
          regionareacd: "83",
          areacd: "12"
        },
        {
          id: 13,
          alt: "東京都",
          coords:
            "182,159,222,158,265,171,264,178,245,181,245,196,183,196,189,188",
          regionareacd: "83",
          areacd: "13"
        },
        {
          id: 14,
          alt: "神奈川県",
          coords: "176,205,241,205,241,240,176,241",
          regionareacd: "83",
          areacd: "14"
        },
        {
          id: 15,
          alt: "山梨県",
          coords: "110,153,165,153,169,195,111,195,",
          regionareacd: "83",
          areacd: "19"
        },
        {
          id: 36,
          alt: "徳島県",
          //          coords: "230,103,237,76,325,46,345,48,342,81,355,87,351,106,364,108,306,146,271,113",
          coords:
            "153,69,156,50,166,45,200,39,216,32,231,34,228,52,237,59,233,68,240,71,204,97,178,75",
          regionareacd: "88",
          areacd: "36"
        },
        {
          id: 37,
          alt: "香川県",
          //          coords: "226,73,222,41,246,42,260,22,277,29,300,3,311,10,304,38,326,48,302,60,238,78",
          coords:
            "150,48,147,26,162,27,171,15,184,19,197,2,205,6,200,24,205,29,216,32,200,39,166,45,156,50",
          regionareacd: "88",
          areacd: "37"
        },
        {
          id: 38,
          alt: "愛媛県",
          //          coords: "25,178,108,126,110,102,143,60,170,90,225,73,234,76,232,104,187,110,154,156,127,159,129,197,96,241,84,240,84,200,90,185,71,184,74,164",
          coords:
            "15,118,70,85,73,65,94,39,115,60,147,53,150,48,156,50,153,69,120,73,107,84,102,102,84,106,86,124,65,161,56,161,55,132,59,122,49,121,49,107",
          regionareacd: "88",
          areacd: "38"
        },
        {
          id: 39,
          alt: "高知県",
          coords:
            //            "96,240,130,189,128,161,156,153,164,126,184,112,231,105,276,114,308,144,293,192,261,160,220,151,186,172,171,212,162,222,146,232,145,265,132,256,98,261,107,240",
            "65,161,86,124,84,106,102,102,107,84,120,73,153,69,178,75,204,97,198,108,193,128,171,104,144,101,118,118,111,144,104,148,97,148,97,174,89,170,83,176,66,172,71,160",
          regionareacd: "88",
          areacd: "39"
        }
      ],

      // 緯度経度情報
      latlons: [
        {
          id: 1,
          name: "北海道",
          latitude: 43.063968,
          longitude: 141.347899,
          areacd: 81
        },
        { id: 2, name: "青森県", latitude: 40.824623, longitude: 140.740593 },
        { id: 3, name: "岩手県", latitude: 39.703531, longitude: 141.152667 },
        {
          id: 4,
          name: "宮城県",
          latitude: 38.268839,
          longitude: 140.872103,
          areacd: 82
        },
        { id: 5, name: "秋田県", latitude: 39.7186, longitude: 140.102334 },
        { id: 6, name: "山形県", latitude: 38.240437, longitude: 140.363634 },
        { id: 7, name: "福島県", latitude: 37.750299, longitude: 140.467521 },
        { id: 8, name: "茨城県", latitude: 36.341813, longitude: 140.446793 },
        { id: 9, name: "栃木県", latitude: 36.565725, longitude: 139.883565 },
        { id: 10, name: "群馬県", latitude: 36.391208, longitude: 139.060156 },
        {
          id: 11,
          name: "埼玉県",
          latitude: 35.857428,
          longitude: 139.648933,
          areacd: 83
        },
        { id: 12, name: "千葉県", latitude: 35.605058, longitude: 140.123308 },
        { id: 13, name: "東京都", latitude: 35.689521, longitude: 139.691704 },
        {
          id: 14,
          name: "神奈川県",
          latitude: 35.447753,
          longitude: 139.642514
        },
        { id: 15, name: "新潟県", latitude: 37.902418, longitude: 139.023221 },
        { id: 16, name: "富山県", latitude: 36.69529, longitude: 137.211338 },
        {
          id: 17,
          name: "石川県",
          latitude: 36.594682,
          longitude: 136.625573,
          areacd: 84
        },
        { id: 18, name: "福井県", latitude: 36.065219, longitude: 136.221642 },
        { id: 19, name: "山梨県", latitude: 35.664158, longitude: 138.568449 },
        { id: 20, name: "長野県", latitude: 36.651289, longitude: 138.181224 },
        { id: 21, name: "岐阜県", latitude: 35.391227, longitude: 136.722291 },
        { id: 22, name: "静岡県", latitude: 34.976978, longitude: 138.383054 },
        {
          id: 23,
          name: "愛知県",
          latitude: 35.180188,
          longitude: 136.906565,
          areacd: 85
        },
        { id: 24, name: "三重県", latitude: 34.730283, longitude: 136.508591 },
        { id: 25, name: "滋賀県", latitude: 35.004531, longitude: 135.86859 },
        { id: 26, name: "京都府", latitude: 35.021004, longitude: 135.755608 },
        {
          id: 27,
          name: "大阪府",
          latitude: 34.686316,
          longitude: 135.519711,
          areacd: 86
        },
        { id: 28, name: "兵庫県", latitude: 34.691279, longitude: 135.183025 },
        { id: 29, name: "奈良県", latitude: 34.685333, longitude: 135.832744 },
        {
          id: 30,
          name: "和歌山県",
          latitude: 34.226034,
          longitude: 135.167506
        },
        { id: 31, name: "鳥取県", latitude: 35.503869, longitude: 134.237672 },
        { id: 32, name: "島根県", latitude: 35.472297, longitude: 133.050499 },
        { id: 33, name: "岡山県", latitude: 34.661772, longitude: 133.934675 },
        {
          id: 34,
          name: "広島県",
          latitude: 34.39656,
          longitude: 132.459622,
          areacd: 87
        },
        { id: 35, name: "山口県", latitude: 34.186121, longitude: 131.4705 },
        { id: 36, name: "徳島県", latitude: 34.06577, longitude: 134.559303 },
        { id: 37, name: "香川県", latitude: 34.340149, longitude: 134.043444 },
        {
          id: 38,
          name: "愛媛県",
          latitude: 33.84166,
          longitude: 132.765362,
          areacd: 88
        },
        { id: 39, name: "高知県", latitude: 33.559705, longitude: 133.53108 },
        { id: 40, name: "福岡県", latitude: 33.606785, longitude: 130.418314 },
        { id: 41, name: "佐賀県", latitude: 33.249367, longitude: 130.298822 },
        { id: 42, name: "長崎県", latitude: 32.744839, longitude: 129.873756 },
        {
          id: 43,
          name: "熊本県",
          latitude: 32.789828,
          longitude: 130.741667,
          areacd: 89
        },
        { id: 44, name: "大分県", latitude: 33.238194, longitude: 131.612591 },
        { id: 45, name: "宮崎県", latitude: 31.91109, longitude: 131.423855 },
        {
          id: 46,
          name: "鹿児島県",
          latitude: 31.560148,
          longitude: 130.557981
        },
        {
          id: 47,
          name: "沖縄県",
          latitude: 26.212401,
          longitude: 127.680932,
          areacd: 90
        }
      ]
    };
  },
  computed: {
    // アイコンボタンの値(河川：flood/ダム：dam/水防：fldctlparty)
    picked() {
      return this.$store.state.riverwarn.riverwarnList.picked;
    },
    // 地図種別(全国：Nationwide/地方：Region/都道府県：Prefectures)
    areatype() {
      return this.$store.state.riverwarn.riverwarnList.areatype;
    },
    // 地方／都道府県のエリアコード
    areaCd() {
      return this.$store.state.riverwarn.riverwarnList.areaCd;
    },
    // 地方のエリアコード
    areaCdReg() {
      return this.$store.state.riverwarn.riverwarnList.areaCdReg;
    },

    // 超過色彩
    imageOverColor() {
      return this.$store.state.riverwarn.riverwarnList.imageOverColor;
    },

    // 警報一覧情報 ー 河川
    flooddetails() {
      return this.$store.state.riverwarn.riverwarnList.fldfrs;
    },
    // 警報一覧情報 ー ダム
    damdetails() {
      return this.$store.state.riverwarn.riverwarnList.damdschs;
    },
    // 警報一覧情報 ー 水防
    fldctlpartydetails() {
      return this.$store.state.riverwarn.riverwarnList.fldctls;
    }
  },
  mounted() {
    // data の初期化
    this.setPicked(this.picked);
    this.setAreatype(this.areatype);
    this.$store.dispatch("riverwarn/setImageOverColorData");
    this.$store.dispatch("riverwarn/setRiverwarnData");

    // アイコンボタンのwatch
    this.unwatch1 = this.$store.watch(
      state => {
        // 監視対象データを返す
        return state.riverwarn.riverwarnList.picked;
      },
      newVal => {
        // 監視対象データ変更時の処理
        this.setPicked(newVal);
      }
    );

    // 地図種別のwatch
    this.unwatch2 = this.$store.watch(
      state => {
        // 監視対象データを返す
        return state.riverwarn.riverwarnList.areatype;
      },
      newVal => {
        // 監視対象データ変更時の処理
        this.setAreatype(newVal);
      }
    );
  },
  destroyed() {
    // unwatch
    this.unwatch1();
    this.unwatch2();
  },
  methods: {
    /* テスト用 */
    testListViewNormal1() {
      this.detailflg = false;
      this.testflg = true;
    },
    testListViewNormal2() {
      this.detailflg = false;
      this.testflg = false;
    },
    testListViewDetail() {
      this.detailflg = true;
    },
    /* テスト用 */

    /**
     * 模式図クリック
     * @param areaCd 地方／都道府県コード
     */
    onclickOverviewMap(areaCd) {
      // 地図種別＝全国
      if (this.areatype === "Nationwide") {
        // 地方コード＝四国   memo : モックでは四国のみ押せるように制御
        if (areaCd === "88") {
          // 地方／都道府県のエリアコード
          this.$store.dispatch("riverwarn/setAreaCd", areaCd);
          // 地方のエリアコード
          this.$store.dispatch("riverwarn/setAreaCdReg", areaCd);

          // 地図種別＝地方
          this.$store.dispatch("riverwarn/setAreatype", "Region");

          // マップ制御
          let latlon;
          latlon = this.getLatLon(this.areaCd); // 対象エリアの緯度／経度を取得
          this.moveMap(latlon.lat, latlon.lon, 8);
        }

        // 地図種別＝地方
      } else if (this.areatype === "Region") {
        // 地方／都道府県のエリアコード
        this.$store.dispatch("riverwarn/setAreaCd", areaCd);
        // 地図種別＝都道府県
        this.$store.dispatch("riverwarn/setAreatype", "Prefectures");

        // マップ制御
        let latlon;
        latlon = this.getLatLon(this.areaCd); // 対象エリアの緯度／経度を取得
        this.moveMap(latlon.lat, latlon.lon, 10);

        // 地図種別＝都道府県
      } else if (this.areatype === "Prefectures") {
        // 地方／都道府県のエリアコード
        this.$store.dispatch("riverwarn/setAreaCd", areaCd);

        // マップ制御
        let latlon;
        latlon = this.getLatLon(this.areaCd); // 対象エリアの緯度／経度を取得
        this.moveMap(latlon.lat, latlon.lon, 10);
      }
    },

    /**
     *サブメニューマウスオーバー時の処理
     * @param areaCd 地方／都道府県コード
     */
    msOverSubmenu(areaCd) {
      this.image = "/img/overview_map_" + areaCd + "_01.png";
    },

    /**
     *サブメニューマウスアウト時の処理
     */
    msOutSubmenu() {
      this.image = "/img/overview_map_dmy.png";
    },

    /**
     *アイコンボタン押下時の処理
     * @param picked アイコンボタンの値(河川：flood/ダム：dam/水防：fldctlparty)
     */
    showRiverWarn(picked) {
      // アイコンボタンの値
      this.$store.dispatch("riverwarn/setPicked", picked);
    },

    /**
     *全国表示ボタン押下時の処理
     */
    showNationwide() {
      // 全国／地方の判別(Nationwide/Region)
      this.$store.dispatch("riverwarn/setAreatype", "Nationwide");

      // 地方／都道府県のエリアコード
      this.$store.dispatch("riverwarn/setAreaCd", "");
      // 地方のエリアコード
      this.$store.dispatch("riverwarn/setAreaCdReg", "");

      // マップ制御 memo : mock用に東京都の県庁所在地
      this.moveMap(35.689634, 139.692101, 5);
    },

    /**
     * エリアコードから緯度／経度を取得
     * @param areaCd 地方／都道府県コード
     */
    getLatLon(areacd) {
      for (var latlonIdx in this.latlons) {
        var latlon = this.latlons[latlonIdx];

        // 都道府県の緯度／経度
        if (latlon.id == areacd) {
          return { lat: latlon.latitude, lon: latlon.longitude };
        }

        // 地方の緯度／経度
        if (latlon.areacd !== undefined) {
          if (latlon.areacd == areacd) {
            return { lat: latlon.latitude, lon: latlon.longitude };
          }
        }
      }
      return;
    },
    /**
     * 河川予警報詳細画面への遷移
     */
    clickRiverwarn() {
      //      let itmkndCd = 3; // [todo] 暫定。
      //      this.$store.commit("tm/setSelectedObs", itmkndCd);
      if (this.picked === "flood") {
        this.$store.commit("riverwarn/setFldfrDetail");
        this.$store.commit("mapRiverwarn/showRiverLine");
        this.$store.commit("mapRiverwarn/hideTwnArea");
      }
      if (this.picked === "dam") {
        this.$store.commit("riverwarn/setDamdschDetail");
        this.$store.commit("mapRiverwarn/hideRiverLine");
        this.$store.commit("mapRiverwarn/showTwnArea");
      }
      if (this.picked === "fldctlparty") {
        this.$store.commit("riverwarn/setFldctlDetail");
        this.$store.commit("mapRiverwarn/showRiverLine");
        this.$store.commit("mapRiverwarn/showTwnArea");
      }
      this.$router.push("/pc/riverwarn");
    },
    /**
     * 警報一覧の色分け ー 河川
     * @param level xxx
     * @param type xxx
     */
    classColorFlood: function(level, type) {
      switch (level) {
        case 1:
          return "flood-" + type + "-standby";
        case 2:
        case 3:
          return "flood-" + type + "-warn";
        case 4:
          return "flood-" + type + "-refuge";
        case 5:
          return "flood-" + type + "-danger";
        default:
          return "flood-" + type + "-none";
      }
    },

    /**
     * 警報一覧の色分け ー ダム
     * @param level xxx
     * @param type xxx
     */
    classColorDam: function(level, type) {
      switch (level) {
        case 3:
          return "dam-" + type + "-warn";
        case 5:
          return "dam-" + type + "-danger";
        default:
          return "dam-" + type + "-none";
      }
    },

    /**
     * 警報一覧の色分け ー 水防
     * @param level xxx
     * @param type xxx
     */
    classColorFldctlparty: function(level, type) {
      switch (level) {
        case 3:
          return "fldctlparty-" + type + "-warn";
        case 4:
          return "fldctlparty-" + type + "-refuge";
        case 5:
          return "fldctlparty-" + type + "-danger";
        default:
          return "fldctlparty-" + type + "-none";
      }
    },

    /*
     * setPicked
     * @param picked アイコンボタンの値(河川：flood/ダム：dam/水防：fldctlparty)
     */
    setPicked: function(picked) {
      // 模式図
      //画像 ー 凡例
      this.imagecom = "/img/overview_hanrei_map_" + picked + ".png";

      // 地図種別＝全国
      if (this.areatype === "Nationwide") {
        // 画像 ー 全国
        this.imagebase = "/img/overview_map_base.png";

        // 地図種別＝地方
      } else if (this.areatype === "Region") {
        // 画像 ー 地方
        this.imagebase = "/img/overview_map_base_" + this.areaCd + ".png";

        // 地図種別＝都道府県
      } else if (this.areatype === "Prefectures") {
        // 画像 ー 地方
        this.imagebase = "/img/overview_map_base_" + this.areaCdReg + ".png";
      }
    },

    /*
     * setAreatype
     * @param areatype 地図種別(全国：Nationwide/地方：Region/都道府県：Prefectures)
     */
    setAreatype: function(areatype) {
      var Idx;
      var map;

      // 地図種別＝全国
      if (areatype === "Nationwide") {
        // 画像 ー 地方名
        this.imagetop = "/img/overview_map_top.png";
        // 画像 ー 全国
        this.imagebase = "/img/overview_map_base.png";
        // 画像 ー マウスオーバー／マウスアウト
        this.image = "/img/overview_map_dmy.png";

        // マップ情報 ー 全国
        this.usemap = "#smplMap" + areatype;
      }

      // 地図種別＝地方
      else if (areatype === "Region") {
        // 画像 ー 都道府県名
        this.imagetop = "/img/overview_map_top_" + this.areaCd + ".png";
        // 画像 ー 地方
        this.imagebase = "/img/overview_map_base_" + this.areaCd + ".png";
        // 画像 ー マウスオーバー／マウスアウト
        this.image = "/img/overview_map_dmy.png";

        // マップ情報 ー 地方版
        this.regionmaps.splice(0);
        for (Idx in this.regionmapsData) {
          map = this.regionmapsData[Idx];
          if (map.regionareacd === this.areaCd) {
            this.regionmaps.push(map);
          }
        }
        // マップ情報 ー 地方
        this.usemap = "#smplMap" + areatype;
      }

      // 地図種別＝都道府県
      else if (areatype === "Prefectures") {
        // 画像 ー 都道府県名
        this.imagetop = "/img/overview_map_top_" + this.areaCdReg + ".png";
        // 画像 ー 地方
        this.imagebase = "/img/overview_map_base_" + this.areaCdReg + ".png";
        // 画像 ー マウスオーバー／マウスアウト
        this.image = "/img/overview_map_dmy.png";

        // マップ情報 ー 地方版
        this.regionmaps.splice(0);
        for (Idx in this.regionmapsData) {
          map = this.regionmapsData[Idx];
          if (map.regionareacd === this.areaCdReg) {
            this.regionmaps.push(map);
          }
        }
        // マップ情報 ー 地方
        this.usemap = "#smplMap" + "Region";
      }
    },

    /**
     * マップ移動
     * 緯度・軽度・ズームレベルを指定してマップ領域のストアを更新する
     * @param lat マップ中心点とする緯度
     * @param lon マップ中心点とする経度
     * @oaram zoomLevel ズームレベル
     */
    moveMap(lat, lon, zoomLevel) {
      //alert('マップ領域の中心を緯度' + lat + ' 経度' + lon + ' へ移動します');
      this.$store.commit("map/setCenter", [lat, lon]);
      this.$store.commit("map/setZoom", zoomLevel);
    }
  }
};
</script>



<style lang="scss" scoped>
// アイコンボタン
.kwb-panel-overview-riverwarn-head {
  padding: 8px 8px 0px 8px;
  img.riverwarn,
  img.riverwarn02 {
    padding-right: 4px;
    height: 35px;
    cursor: pointer;
  }
}

// 模式図、警報一覧コンテナ共通
.kwb-panel-overview-riverwarn-pattern-diagram-list {
  padding: 8px;
  flex-basis: 200px;
  //  background: white;
}

// 模式図コンテナ
.kwb-panel-overview-riverwarn-pattern-diagram {
  background-color: white;
  //  flex-basis: 403px;
  //  flex-basis: 267px;
  flex-basis: 267px;
  //align-self: center;
  img {
    border: 0;
    //    width: 403px;
    width: 267px;
    //    height: 272px;
    height: auto;
  }
  img.imagebase {
    background-color: #fff;
    //    position: absolute;
    z-index: 0;
  }
  img.imageovercolor {
    position: absolute;
    z-index: 5000;
  }
  img.imagecom {
    width: 5rem;
    height: 5rem;
    position: absolute;
    z-index: 9000;
  }
  img.imagetop {
    position: absolute;
    z-index: 10000;
  }
  img.image {
    position: absolute;
    z-index: 11000;
  }
}

// 警報一覧コンテナ
.kwb-panel-overview-riverwarn-list {
  // カラーの定義 ー 河川
  $flood-danger: purple; // 氾濫危険
  $flood-refuge: red; // 避難判断
  $flood-warn: orange; // 氾濫注意
  $flood-standby: yellow; // 水防団待機
  // カラーの定義 ー ダム
  $dam-danger: yellow; // 異常洪水時防災操作等実施中
  $dam-warn: skyblue; // 洪水貯留操作実施中
  // カラーの定義 ー 水防
  $fldctlparty-danger: yellow; // 出勤
  $fldctlparty-refuge: lime; // 準備
  $fldctlparty-warn: green; // 待機

  $bg-color-selected: lightgray;

  $fontcolor-link: navy; // リンクテキストのフォントカラー

  flex-basis: 100%;
  //align-self: center;
  //  height: 272px;
  overflow-y: scroll;
  background: white;

  .por-list {
    display: flex;

    color: black;
    background: white;

    //  border-left: 5px solid $flood-warn;
    //  border-bottom: 2px solid $flood-warn;
  }
  .por-list :hover {
    background-color: #acc;
  }

  .flood-list-standby {
    border-left: 5px solid $flood-standby;
    border-bottom: 2px solid $flood-standby;
  }
  .flood-list-warn {
    border-left: 5px solid $flood-warn;
    border-bottom: 2px solid $flood-warn;
  }
  .flood-list-refuge {
    border-left: 5px solid $flood-refuge;
    border-bottom: 2px solid $flood-refuge;
  }
  .flood-list-danger {
    border-left: 5px solid $flood-danger;
    border-bottom: 2px solid $flood-danger;
  }

  .dam-list-warn {
    border-left: 5px solid $dam-warn;
    border-bottom: 2px solid $dam-warn;
  }
  .dam-list-danger {
    border-left: 5px solid $dam-danger;
    border-bottom: 2px solid $dam-danger;
  }

  .fldctlparty-list-warn {
    border-left: 5px solid $fldctlparty-refuge;
    border-bottom: 2px solid $fldctlparty-refuge;
  }
  .fldctlparty-list-refuge {
    border-left: 5px solid $fldctlparty-refuge;
    border-bottom: 2px solid $fldctlparty-refuge;
  }
  .fldctlparty-list-danger {
    border-left: 5px solid $fldctlparty-danger;
    border-bottom: 2px solid $fldctlparty-danger;
  }

  .por-line,
  .por-col-grp1,
  .por-col-grp2,
  .por-col-grp3 {
    display: inline-flex;
    padding: 0.5em;
    ////    padding: 0.2em;
    margin-top: 0.1em;
    flex-wrap: wrap;
  }

  .por-line {
    width: 100%;
  }

  .por-col-grp1 {
    width: 50%;
  }
  .por-col-grp2 {
    width: 20%;
  }
  .por-col-grp3 {
    width: 20%;
  }

  .flood-line-standby {
    border-left: 3px dashed $flood-standby;
  }
  .flood-line-warn {
    border-left: 3px dashed $flood-warn;
  }
  .flood-line-refuge {
    border-left: 3px dashed $flood-refuge;
  }
  .flood-line-danger {
    border-left: 3px dashed $flood-danger;
  }

  .dam-line-warn {
    border-left: 3px dashed $dam-warn;
  }
  .dam-line-danger {
    border-left: 3px dashed $dam-danger;
  }

  .fldctlparty-line-warn {
    border-left: 3px dashed $fldctlparty-warn;
  }
  .fldctlparty-line-refuge {
    border-left: 3px dashed $fldctlparty-refuge;
  }
  .fldctlparty-line-danger {
    border-left: 3px dashed $fldctlparty-danger;
  }

  .por-col-rsysnm,
  .por-col-anntime,
  .por-col-annno,
  .por-col-obs,
  .por-col-pref,
  .por-col-heading {
    padding: 0.2em;
  }

  .por-col-rsysnm,
  .por-col-annno {
    font-size: 0.9rem;
    ////    font-size: 0.1rem;
  }
  .por-col-anntime,
  .por-col-obs,
  .por-col-pref,
  .por-col-heading {
    font-size: 0.8rem;
    ////    font-size: 0.1rem;
  }

  .por-col-rsysnm {
    width: 30%;
  }
  .por-col-anntime {
    width: 30%;
  }
  .por-col-annno {
    width: 30%;
  }
  .por-col-pref {
    width: 100%;
  }
  .por-col-heading {
    display: block;
    width: 100%;
  }

  //------------------------------------------------------------
  // 対象市町村関連
  //------------------------------------------------------------
  .flex-container-town {
    display: flex;
    flex-wrap: wrap;
    margin-left: 0.3rem;
    ////    margin-left: 1rem;
  }

  .text-pref,
  .text-twn {
    color: navy;
    //border: solid 1px $bg-color-subtitle;
    //border-radius:  0%;
    //    background-color: white;
    padding: 0.3rem;
    ////    padding: 0.2rem;
    margin-top: 0.1rem;
    // white-space: nowrap;
    //text-decoration: underline;
  }

  //------------------------------------------------------------
  // 基準観測所関連
  //------------------------------------------------------------
  .flex-container-obs {
    display: flex;
    flex-wrap: wrap;
    margin-left: 1rem;
    ////    margin-left: 0.3rem;
  }

  .text-obs {
    color: navy;
    //border: solid 1px $bg-color-subtitle;
    //border-radius:  0%;
    //    background-color: white;
    padding: 0.3rem;
    ////    padding: 0.2rem;
    margin-top: 0.1rem;
    // white-space: nowrap;
    //text-decoration: underline;
  }
}

//------------------------------------------------------------
// テスト用
//------------------------------------------------------------
.link-text {
  //    background-color: white;
  border: none;
  color: navy;
}

.link-text:hover {
  font-weight: bold;
  cursor: pointer;
}
.border-debug {
  border: dashed 2px red;
}
.panel-link-test {
  background: ivory;
  padding: 0.5rem;
  //width: 70%;
  display: inline-flex;
  justify-content: center;
  font-size: 0.7rem;
  float: right;
}
//------------------------------------------------------------
// テスト用
//------------------------------------------------------------
</style>
