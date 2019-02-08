<template>
  <div class="kwb-pc-obs-list box-one container-col">
    <div class="obs-item container-row">
      <div class="obs-name container-col">地図表示域の観測所一覧</div>
      <div @click="changePattern()" class="detail">詳細検索</div>
    </div>
    <div v-if="testTabPattern === true" class="obs-tab-box container-row">
      <div class="tab-box container-row">
        <div
          v-for="index in getObsTabMasterLength"
          :key="index"
          @click="changeTabFlag(index - 1)"
          :class="{'tab-non-act': obsTabMaster[index - 1].flag === true}"
          class="obs-tab tab-act hand"
        >{{obsTabMaster[index - 1].label}}</div>
      </div>
      <div v-if="listCategory === 'river'" class="sw-stage-tab">
        <div
          @click="changeTabFlag(obsTabMaster.length - 1)"
          :class="{'tab-non-act': obsTabMaster[obsTabMaster.length - 1].flag === true}"
          class="obs-tab tab-act hand"
        >{{obsTabMaster[obsTabMaster.length - 1].label}}</div>
      </div>
    </div>

    <!-- test -->
    <div v-if="testTabPattern === false" class="test-obs-tab-box container-row">
      <div class="test-tab-box container-row">
        <div
          v-for="index in obsTabMaster.length"
          :key="index"
          @click="changeTabFlag(index - 1)"
          :class="{'tab-non-act': obsTabMaster[index - 1].flag === true}"
          class="test-obs-tab tab-act hand container-row"
        >
          <div class="test-obs-icon">
            <img :src="obsTabMaster[index - 1].url">
          </div>
          <div class="box-one">{{obsTabMaster[index - 1].label}}</div>
        </div>
      </div>
    </div>
    <!-- test -->
    <div class="obs-list-top container-row">
      <div v-if="listCategory === 'river'">水系別観測所一覧</div>
      <div v-if="listCategory === 'ctv'">市町村別観測所一覧</div>
      <div class="container-row">
        <div
          @click="changeCategory('ctv')"
          :class="{'btn-non-act': listCategory === 'ctv', 'btn-act hand': listCategory === 'river'}"
          class="category-btn"
        >市町村名</div>
        <div
          @click="changeCategory('river')"
          :class="{'btn-non-act': listCategory === 'river', 'btn-act hand': listCategory === 'ctv'}"
          class="category-btn"
        >河川名</div>
      </div>
    </div>
    <div class="scroll">
      <div v-if="obsTabMaster[obsTabMaster.length - 1].flag === false && listCategory === 'river'">
        <div class="large-item bgc-white">▶ 那珂川水系</div>
        <div class="large-item bgc-blue-light container-col">▼ 利根川水系</div>
        <div class="middle-item bgc-white container-col">▼ 利根川</div>
        <div v-if="obsTabMaster[4].flag === true">
          <div class="small-item bgc-blue-light container-row">
            <div class="obs-content-icon">
              <img src="/img/obs_icons/obs_quality.png">
            </div>
            <div class="box-one">布川</div>
            <div class="obs-content box-one container-col">
              <div class="margin-btm box-one container-row">
                <div class="obs-content-box box-one container-col">
                  <div class="obs-content-label border-btm">水温</div>
                  <div class="obs-content-val">7.7℃</div>
                </div>
                <div class="obs-content-box box-one container-col">
                  <div class="obs-content-label border-btm">pH</div>
                  <div class="obs-content-val">7.8</div>
                </div>
                <div class="obs-content-box box-one container-col">
                  <div class="obs-content-label border-btm">DO</div>
                  <div class="obs-content-val">12.1mg/l</div>
                </div>
              </div>
              <div class="box-one container-row">
                <div class="obs-content-box box-one container-col">
                  <div class="obs-content-label border-btm">伝導率</div>
                  <div class="obs-content-val">27.2mS/m</div>
                </div>
                <div class="obs-content-box box-one container-col">
                  <div class="obs-content-label border-btm">濁度</div>
                  <div class="obs-content-val">6.2度</div>
                </div>
                <div class="obs-content-box border-non box-one container-col">
                  <div class="obs-content-label border-btm">COD</div>
                  <div class="obs-content-val">2.4mg/l</div>
                </div>
              </div>
            </div>
          </div>
          <div class="small-item bgc-white container-row">
            <div class="obs-content-icon">
              <img src="/img/obs_icons/obs_quality.png">
            </div>
            <div class="box-one">小見川</div>
            <div class="obs-content box-one container-col">
              <div class="margin-btm box-one container-row">
                <div class="obs-content-box box-one container-col">
                  <div class="obs-content-label border-btm">水温</div>
                  <div class="obs-content-val">7.2℃</div>
                </div>
                <div class="obs-content-box box-one container-col">
                  <div class="obs-content-label border-btm">pH</div>
                  <div class="obs-content-val">9.2</div>
                </div>
                <div class="obs-content-box box-one container-col">
                  <div class="obs-content-label border-btm">DO</div>
                  <div class="obs-content-val">11.1mg/l</div>
                </div>
              </div>
              <div class="box-one container-row">
                <div class="obs-content-box box-one container-col">
                  <div class="obs-content-label border-btm">伝導率</div>
                  <div class="obs-content-val">38.6mS/m</div>
                </div>
                <div class="obs-content-box box-one container-col">
                  <div class="obs-content-label border-btm">濁度</div>
                  <div class="obs-content-val">23.8度</div>
                </div>
                <div class="obs-content-box border-non box-one container-col">
                  <div class="obs-content-label border-btm">COD</div>
                  <div class="obs-content-val">6.3mg/l</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="middle-item bgc-blue-light container-col">▼ 鬼怒川</div>
        <div v-if="obsTabMaster[0].flag === true">
          <div class="small-item bgc-white container-row">
            <div class="obs-content-icon">
              <img src="/img/obs_icons/obs_water.png">
            </div>
            <div class="obs-name box-one">佐貫(上)</div>
            <div class="list-time box-one">02/07 16:00</div>
            <div class="list-val box-one">
              <span class="list-val-label">水位標のゼロ点高から</span>2.18m
            </div>
          </div>
          <div class="small-item bgc-blue-light container-row">
            <div class="obs-content-icon">
              <img src="/img/obs_icons/obs_water.png">
            </div>
            <div class="obs-name box-one">石井(右)</div>
            <div class="list-time box-one">02/07 16:00</div>
            <div class="list-val box-one">
              <span class="list-val-label">水位標のゼロ点高から</span>-1.64m
            </div>
          </div>
          <div class="small-item bgc-white container-row">
            <div class="obs-content-icon">
              <img src="/img/obs_icons/obs_water.png">
            </div>
            <div class="obs-name box-one">佐貫(下)</div>
            <div class="list-time box-one">02/07 16:00</div>
            <div class="list-val box-one">
              <span class="list-val-label">水位標のゼロ点高から</span>-3.22m
            </div>
          </div>
          <div class="small-item bgc-blue-light container-row">
            <div class="obs-content-icon">
              <img src="/img/obs_icons/obs_water.png">
            </div>
            <div class="obs-name box-one">湯元</div>
            <div class="list-time box-one">02/07 16:00</div>
            <div class="list-val box-one">
              <span class="list-val-label">水位標のゼロ点高から</span>0.70m
            </div>
          </div>
          <div class="small-item bgc-white container-row">
            <div class="obs-content-icon">
              <img src="/img/obs_icons/obs_water.png">
            </div>
            <div class="obs-name box-one">松ノ木平</div>
            <div class="list-time box-one">02/07 16:00</div>
            <div class="list-val box-one">
              <span class="list-val-label">水位標のゼロ点高から</span>3.35m
            </div>
          </div>
        </div>
        <div v-if="obsTabMaster[1].flag === true">
          <div class="small-item bgc-blue-light container-row">
            <div class="obs-content-icon">
              <img src="/img/obs_icons/obs_dam.png">
            </div>
            <div class="box-one">川俣ダム</div>
            <div class="obs-content box-one container-col">
              <div class="margin-btm box-one container-row">
                <div class="obs-content-box box-one container-col">
                  <div class="obs-content-label border-btm">貯水位</div>
                  <div class="obs-content-val">972.22m</div>
                </div>
                <div class="obs-content-box box-one container-col">
                  <div class="obs-content-label border-btm">貯水量</div>
                  <div class="obs-content-val">63,715(10&sup3;m&sup3;)</div>
                </div>
                <div class="obs-content-box box-one container-col">
                  <div class="obs-content-label border-btm">全放流量</div>
                  <div class="obs-content-val">0.09m&sup3;/s</div>
                </div>
                <div class="obs-content-box border-non box-one container-col">
                  <div class="obs-content-label border-btm">全流入量</div>
                  <div class="obs-content-val">7.03m&sup3;/s</div>
                </div>
              </div>
              <div class="box-one container-row">
                <div class="obs-content-box box-one container-col">
                  <div class="obs-content-label border-btm">治水容量</div>
                  <div class="obs-content-val">-%</div>
                </div>
                <div class="obs-content-box box-one container-col">
                  <div class="obs-content-label border-btm">有効容量</div>
                  <div class="obs-content-val">-%</div>
                </div>
                <div class="obs-content-box border-non box-one container-col">
                  <div class="obs-content-label border-btm">利水容量</div>
                  <div class="obs-content-val">87.1%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="obsTabMaster[2].flag === true">
          <div class="small-item bgc-white container-row">
            <div class="obs-content-icon">
              <img src="/img/obs_icons/obs_rain.png">
            </div>
            <div class="box-one">川俣</div>
            <div class="obs-content box-one container-row">
              <div class="obs-content-box box-one container-col">
                <div class="obs-content-label border-btm">時間雨量</div>
                <div class="obs-content-val">0.0mm</div>
              </div>
              <div class="obs-content-box box-one container-col">
                <div class="obs-content-label border-btm">10分間雨量</div>
                <div class="obs-content-val">0.0mm</div>
              </div>
              <div class="obs-content-box box-one container-col">
                <div class="obs-content-label border-btm">累加雨量</div>
                <div class="obs-content-val">0.0mm</div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="obsTabMaster[3].flag === true">
          <div @click="clickCam" class="small-item bgc-blue-light container-row">
            <div class="obs-content-icon">
              <img src="/img/obs_icons/obs_camera.png">
            </div>
            <div class="box-one">高間木地先 鬼怒川右岸101k</div>
          </div>
        </div>
        <div v-if="obsTabMaster[5].flag === true">海岸</div>
        <div v-if="obsTabMaster[6].flag === true">積雪深</div>
        <div class="middle-item bgc-blue-light container-col">▶ 江戸川</div>
        <div class="middle-item bgc-white container-col">▶ 渡良瀬川</div>
        <div class="large-item bgc-blue-light">▶ 荒川水系</div>
      </div>
      <div v-if="listCategory === 'ctv'">
        <div class="large-item bgc-white">▶ 茨城県</div>
        <div class="large-item bgc-blue-light container-col">▼ 栃木県</div>
        <div class="middle-item bgc-white container-col">▼ 小山市</div>
        <div v-if="obsTabMaster[0].flag === true">
          <div class="small-item bgc-blue-light container-row">
            <div class="obs-content-icon">
              <img src="/img/obs_icons/obs_water.png">
            </div>
            <div class="obs-name box-one">乙女</div>
            <div class="list-time box-one">02/07 16:00</div>
            <div class="list-val box-one">
              <span class="list-val-label">堤防までの高さ</span>-11.99m
            </div>
          </div>
          <div class="small-item bgc-white container-row">
            <div class="obs-content-icon">
              <img src="/img/obs_icons/obs_water.png">
            </div>
            <div class="obs-name box-one">観晃橋</div>
            <div class="list-time box-one">02/07 16:00</div>
            <div class="list-val box-one">
              <span class="list-val-label">堤防までの高さ</span>-7.52m
            </div>
          </div>
          <div class="small-item bgc-blue-light container-row">
            <div class="obs-content-icon">
              <img src="/img/obs_icons/obs_water.png">
            </div>
            <div class="obs-name box-one">姿川橋</div>
            <div class="list-time box-one">02/07 16:00</div>
            <div class="list-val box-one">
              <span class="list-val-label">堤防までの高さ</span>-5.15m
            </div>
          </div>
        </div>
        <div v-if="obsTabMaster[obsTabMaster.length - 1].flag === true">
          <div class="small-item bgc-white container-row">
            <div class="obs-content-icon">
              <img src="/img/obs_icons/obs_swin_camera.png">
            </div>
            <div class="obs-name box-one">鬼怒川右岸47.25k</div>
            <div class="list-time box-one">02/07 12:00</div>
            <div class="list-val box-one">
              <span class="list-val-label">堤防までの高さ</span>-0.87m
            </div>
          </div>
        </div>
        <div class="middle-item bgc-blue-light container-col">▼ 日光市</div>
        <div v-if="obsTabMaster[0].flag === true">
          <div class="small-item bgc-white container-row">
            <div class="obs-content-icon">
              <img src="/img/obs_icons/obs_water.png">
            </div>
            <div class="obs-name box-one">馬坂</div>
            <div class="list-time box-one">02/07 16:00</div>
            <div class="list-val box-one">
              <span class="list-val-label">堤防までの高さ</span>-11.94m
            </div>
          </div>
          <div class="small-item bgc-blue-light container-row">
            <div class="obs-content-icon">
              <img src="/img/obs_icons/obs_water.png">
            </div>
            <div class="obs-name box-one">湯元</div>
            <div class="list-time box-one">02/07 16:00</div>
            <div class="list-val box-one">
              <span class="list-val-label">堤防までの高さ</span>-8.57m
            </div>
          </div>
          <div class="small-item bgc-white container-row">
            <div class="obs-content-icon">
              <img src="/img/obs_icons/obs_water.png">
            </div>
            <div class="obs-name box-one">大川筑</div>
            <div class="list-time box-one">02/07 16:00</div>
            <div class="list-val box-one">
              <span class="list-val-label">堤防までの高さ</span>-6.12m
            </div>
          </div>
        </div>
        <div v-if="obsTabMaster[1].flag === true">
          <div class="small-item bgc-blue-light container-row">
            <div class="obs-content-icon">
              <img src="/img/obs_icons/obs_dam.png">
            </div>
            <div class="box-one">川俣ダム</div>
            <div class="obs-content box-one container-col">
              <div class="margin-btm box-one container-row">
                <div class="obs-content-box box-one container-col">
                  <div class="obs-content-label border-btm">貯水位</div>
                  <div class="obs-content-val">972.22m</div>
                </div>
                <div class="obs-content-box box-one container-col">
                  <div class="obs-content-label border-btm">貯水量</div>
                  <div class="obs-content-val">63,715(10&sup3;m&sup3;)</div>
                </div>
                <div class="obs-content-box box-one container-col">
                  <div class="obs-content-label border-btm">全放流量</div>
                  <div class="obs-content-val">0.09m&sup3;/s</div>
                </div>
                <div class="obs-content-box border-non box-one container-col">
                  <div class="obs-content-label border-btm">全流入量</div>
                  <div class="obs-content-val">7.03m&sup3;/s</div>
                </div>
              </div>
              <div class="box-one container-row">
                <div class="obs-content-box box-one container-col">
                  <div class="obs-content-label border-btm">治水容量</div>
                  <div class="obs-content-val">-%</div>
                </div>
                <div class="obs-content-box box-one container-col">
                  <div class="obs-content-label border-btm">有効容量</div>
                  <div class="obs-content-val">-%</div>
                </div>
                <div class="obs-content-box border-non box-one container-col">
                  <div class="obs-content-label border-btm">利水容量</div>
                  <div class="obs-content-val">87.1%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="obsTabMaster[2].flag === true">
          <div class="small-item bgc-white container-row">
            <div class="obs-content-icon">
              <img src="/img/obs_icons/obs_rain.png">
            </div>
            <div class="box-one">日光</div>
            <div class="obs-content box-one container-row">
              <div class="obs-content-box box-one container-col">
                <div class="obs-content-label border-btm">時間雨量</div>
                <div class="obs-content-val">0.0mm</div>
              </div>
              <div class="obs-content-box box-one container-col">
                <div class="obs-content-label border-btm">10分間雨量</div>
                <div class="obs-content-val">0.0mm</div>
              </div>
              <div class="obs-content-box box-one container-col">
                <div class="obs-content-label border-btm">累加雨量</div>
                <div class="obs-content-val">0.0mm</div>
              </div>
            </div>
          </div>
        </div>
        <div class="middle-item bgc-blue-light container-col">▼ 宇都宮市</div>
        <div v-if="obsTabMaster[3].flag === true">
          <div @click="clickCam" class="small-item bgc-white container-row">
            <div class="obs-content-icon">
              <img src="/img/obs_icons/obs_camera.png">
            </div>
            <div class="box-one">高間木地先 鬼怒川右岸101k</div>
          </div>
        </div>
        <div v-if="obsTabMaster[2].flag === true">
          <div class="small-item bgc-blue-light container-row">
            <div class="obs-content-icon">
              <img src="/img/obs_icons/obs_rain.png">
            </div>
            <div class="box-one">大網</div>
            <div class="obs-content box-one container-row">
              <div class="obs-content-box box-one container-col">
                <div class="obs-content-label border-btm">時間雨量</div>
                <div class="obs-content-val">0.0mm</div>
              </div>
              <div class="obs-content-box box-one container-col">
                <div class="obs-content-label border-btm">10分間雨量</div>
                <div class="obs-content-val">0.0mm</div>
              </div>
              <div class="obs-content-box box-one container-col">
                <div class="obs-content-label border-btm">累加雨量</div>
                <div class="obs-content-val">0.0mm</div>
              </div>
            </div>
          </div>
        </div>
        <div class="middle-item bgc-white container-col">▼ 足利市</div>
        <div v-if="obsTabMaster[4].flag === true">
          <div class="small-item bgc-blue-light container-row">
            <div class="obs-content-icon">
              <img src="/img/obs_icons/obs_quality.png">
            </div>
            <div class="box-one">足利(自動)</div>
            <div class="obs-content box-one container-col">
              <div class="margin-btm box-one container-row">
                <div class="obs-content-box box-one container-col">
                  <div class="obs-content-label border-btm">水温</div>
                  <div class="obs-content-val">7.0℃</div>
                </div>
                <div class="obs-content-box box-one container-col">
                  <div class="obs-content-label border-btm">pH</div>
                  <div class="obs-content-val">7.6</div>
                </div>
                <div class="obs-content-box box-one container-col">
                  <div class="obs-content-label border-btm">DO</div>
                  <div class="obs-content-val">10.5mg/l</div>
                </div>
              </div>
              <div class="box-one container-row">
                <div class="obs-content-box box-one container-col">
                  <div class="obs-content-label border-btm">伝導率</div>
                  <div class="obs-content-val">12.3mS/m</div>
                </div>
                <div class="obs-content-box box-one container-col">
                  <div class="obs-content-label border-btm">濁度</div>
                  <div class="obs-content-val">閉局</div>
                </div>
                <div class="obs-content-box border-non box-one container-col">
                  <div class="obs-content-label border-btm">COD</div>
                  <div class="obs-content-val">-mg/l</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="obsTabMaster[5].flag === true">海岸</div>
        <div v-if="obsTabMaster[6].flag === true">積雪深</div>
        <div class="large-item bgc-white">▶ 埼玉県</div>
        <div class="large-item bgc-blue-light">▶ 千葉県</div>
      </div>
    </div>
    <!-- 危機管理水位計 -->
    <div
      v-if="obsTabMaster[obsTabMaster.length - 1].flag === true && listCategory === 'river'"
      class="scroll"
    >
      <div class="large-item bgc-white">▶ 那珂川水系</div>
      <div class="large-item bgc-blue-light container-col">▼ 利根川水系</div>
      <div class="middle-item bgc-white container-col">▶ 利根川</div>
      <div class="middle-item bgc-blue-light container-col">▼ 鬼怒川</div>
      <div class="small-item bgc-white container-row">
        <div class="obs-name box-one">鬼怒川右岸47.25k</div>
        <div class="list-time box-one">02/07 12:00</div>
        <div class="list-val box-one">
          <span class="list-val-label">堤防までの高さ</span>-0.87m
        </div>
      </div>
      <div class="small-item bgc-blue-light container-row">
        <div class="obs-name box-one">鬼怒川右岸33.5k</div>
        <div class="list-time box-one">02/07 12:00</div>
        <div class="list-val box-one">
          <span class="list-val-label">堤防までの高さ</span>-4.47m
        </div>
      </div>
      <div class="small-item bgc-white container-row">
        <div class="obs-name box-one">鬼怒川左岸99.75k</div>
        <div class="list-time box-one">02/07 12:00</div>
        <div class="list-val box-one">
          <span class="list-val-label">堤防までの高さ</span>-4.44m
        </div>
      </div>
      <div class="small-item bgc-blue-light container-row">
        <div class="obs-name box-one">鬼怒川右岸23.0k</div>
        <div class="list-time box-one">02/07 12:00</div>
        <div class="list-val box-one">
          <span class="list-val-label">堤防までの高さ</span>-3.35m
        </div>
      </div>
      <div class="small-item bgc-white container-row">
        <div class="obs-name obs-name">鬼怒川左岸21.25k</div>
        <div class="list-time box-one">02/07 12:00</div>
        <div class="list-val">
          <span class="list-val-label">堤防までの高さ</span>-3.93m
        </div>
      </div>
      <div class="small-item bgc-blue-light container-row">
        <div class="obs-name box-one">鬼怒川左岸87.0k</div>
        <div class="list-time box-one">02/07 12:00</div>
        <div class="list-val box-one">
          <span class="list-val-label">堤防までの高さ</span>-4.42m
        </div>
      </div>
      <div class="small-item bgc-white container-row">
        <div class="obs-name box-one">鬼怒川右岸100.25k</div>
        <div class="list-time box-one">02/07 12:00</div>
        <div class="list-val box-one">
          <span class="list-val-label">堤防までの高さ</span>-3.86m
        </div>
      </div>
      <div class="small-item bgc-blue-light container-row">
        <div class="obs-name box-one">鬼怒川左岸44.0k</div>
        <div class="list-time box-one">02/07 12:00</div>
        <div class="list-val box-one">
          <span class="list-val-label">堤防までの高さ</span>-5.38m
        </div>
      </div>
      <div class="small-item bgc-white container-row">
        <div class="obs-name box-one">鬼怒川右岸4.25k</div>
        <div class="list-time box-one">02/07 12:00</div>
        <div class="list-val box-one">
          <span class="list-val-label">堤防までの高さ</span>-3.66m
        </div>
      </div>
      <div class="small-item bgc-blue-light container-row">
        <div class="obs-name box-one">鬼怒川左岸63.75k</div>
        <div class="list-time box-one">02/07 12:00</div>
        <div class="list-val box-one">
          <span class="list-val-label">堤防までの高さ</span>-1.26m
        </div>
      </div>
      <div class="small-item bgc-white container-row">
        <div class="obs-name box-one">鬼怒川右岸7.75k</div>
        <div class="list-time box-one">02/07 12:00</div>
        <div class="list-val box-one">
          <span class="list-val-label">堤防までの高さ</span>-5.91m
        </div>
      </div>
      <div class="small-item bgc-blue-light container-row">
        <div class="obs-name box-one">鬼怒川左岸33.25k</div>
        <div class="list-time box-one">02/07 12:00</div>
        <div class="list-val box-one">
          <span class="list-val-label">堤防までの高さ</span>-3.84m
        </div>
      </div>
      <div class="small-item bgc-white container-row">
        <div class="obs-name box-one">鬼怒川左岸6.5k</div>
        <div class="list-time box-one">02/07 12:00</div>
        <div class="list-val box-one">
          <span class="list-val-label">堤防までの高さ</span>-2.57m
        </div>
      </div>
      <div class="small-item bgc-blue-light container-row">
        <div class="obs-name box-one">鬼怒川右岸41.0k</div>
        <div class="list-time box-one">02/07 12:00</div>
        <div class="list-val box-one">
          <span class="list-val-label">堤防までの高さ</span>-6.13m
        </div>
      </div>
      <div class="small-item bgc-white container-row">
        <div class="obs-name box-one">鬼怒川右岸66.0k</div>
        <div class="list-time box-one">02/07 12:00</div>
        <div class="list-val box-one">
          <span class="list-val-label">堤防までの高さ</span>-3.79m
        </div>
      </div>
      <div class="small-item bgc-blue-light container-row">
        <div class="obs-name box-one">鬼怒川右岸55.0k</div>
        <div class="list-time box-one">02/07 12:00</div>
        <div class="list-val box-one">
          <span class="list-val-label">堤防までの高さ</span>-3.76m
        </div>
      </div>
      <div class="small-item bgc-white container-row">
        <div class="obs-name box-one">鬼怒川左岸88.25k</div>
        <div class="list-time box-one">02/07 12:00</div>
        <div class="list-val box-one">
          <span class="list-val-label">堤防までの高さ</span>-5.28m
        </div>
      </div>
      <div class="small-item bgc-blue-light container-row">
        <div class="obs-name box-one">鬼怒川右岸77.25k</div>
        <div class="list-time box-one">02/07 12:00</div>
        <div class="list-val box-one">
          <span class="list-val-label">堤防までの高さ</span>-1.99m
        </div>
      </div>
      <div class="middle-item bgc-white container-col">▶ 江戸川</div>
      <div class="middle-item bgc-blue-light container-col">▶ 渡良瀬川</div>
      <div class="large-item bgc-white">▶ 荒川水系</div>
    </div>
    <div class="obs-list-btm"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      testTabPattern: true,
      listCategory: "ctv",
      obsTabMaster: [
        {
          url: "/img/obs_icons/obs_water.png",
          label: "通常水位",
          flag: true
        },
        {
          url: "/img/obs_icons/obs_dam.png",
          label: "ダム諸量",
          flag: true
        },
        {
          url: "/img/obs_icons/obs_rain.png",
          label: "雨量",
          flag: true
        },
        {
          url: "/img/obs_icons/obs_camera.png",
          label: "河川カメラ",
          flag: true
        },
        {
          url: "/img/obs_icons/obs_quality.png",
          label: "水質",
          flag: true
        },
        {
          url: "/img/obs_icons/obs_sea.png",
          label: "海岸",
          flag: true
        },
        {
          url: "/img/obs_icons/obs_snow.png",
          label: "積雪深",
          flag: true
        },
        {
          url: "/img/obs_icons/obs_swin_water.png",
          label: "危機水位",
          flag: true
        }
      ]
    };
  },
  methods: {
    changeTabFlag(index) {
      if (
        index === this.obsTabMaster.length - 1 &&
        this.obsTabMaster[index].flag === false &&
        this.listCategory === "river"
      ) {
        for (var i = 0; i < this.obsTabMaster.length; i++) {
          this.obsTabMaster[i].flag = false;
        }
      } else if (
        index !== this.obsTabMaster.length - 1 &&
        this.obsTabMaster[this.obsTabMaster.length - 1].flag === true &&
        this.listCategory === "river"
      ) {
        this.obsTabMaster[this.obsTabMaster.length - 1].flag = false;
      }
      this.obsTabMaster[index].flag = !this.obsTabMaster[index].flag;
    },
    changeCategory(category) {
      if (category === "river") {
        this.obsTabMaster[this.obsTabMaster.length - 1].flag = false;
      }
      this.listCategory = category;
    },
    clickCam() {
      this.$store.commit("tm/setSelectedObs", 100);
      this.$router.push("/pc/obsview");
    },
    changePattern() {
      this.testTabPattern = !this.testTabPattern;
    }
  },
  computed: {
    getObsTabMasterLength() {
      if (this.listCategory === "ctv") {
        return this.obsTabMaster.length;
      } else {
        return this.obsTabMaster.length - 1;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../../scss/properties.scss";

.kwb-pc-obs-list {
  padding: 8px;
}
.obs-item {
  box-sizing: border-box;
  height: 32px;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 4px;
  border-bottom: solid 2px #726a6a;
  margin-bottom: 8px;
  flex-shrink: 0;
  .obs-name {
    font-size: 1.2rem;
    font-weight: bold;
  }
  .detail {
    box-sizing: border-box;
    padding: 4px 8px 4px 8px;
    font-size: 0.8rem;
    color: #fff;
    background-color: #4a98d3;
    box-shadow: 2px 2px 2px #4e4e4e;
    border-radius: 5px;
    cursor: pointer;
  }
  .detail:active {
    margin-top: 1px;
    box-shadow: none;
  }
}
.obs-tab-box {
  box-sizing: border-box;
  height: 24px;
  margin-bottom: 8px;
  flex-shrink: 0;
  .tab-box {
    flex: 7;
    padding-right: 2px;
  }
  .obs-tab {
    text-align: center;
    width: 60px;
    height: 24px;
    line-height: 24px;
    font-size: 0.7rem;
    background-color: $bk_color;
    border-radius: 4px;
    margin-right: 4px;
  }
  .sw-stage-tab {
    flex: 1;
    padding-left: 4px;
    border-left: solid 2px $bk_color;
  }
  .tab-act {
    color: white;
    box-shadow: 2px 2px 2px #4e4e4e;
  }
  .tab-act:active {
    margin-top: 1px;
    box-shadow: none;
  }
  .tab-non-act {
    margin-top: 1px;
    box-shadow: none;
    background-color: $obs_list_tab_non_act_bk;
  }
}
.obs-list-top {
  box-sizing: border-box;
  justify-content: space-between;
  height: 40px;
  line-height: 24px;
  padding: 8px 8px 0 8px;
  font-size: 1rem;
  border-radius: 8px 8px 0 0;
  color: white;
  background-color: $content_base_color;
  flex-shrink: 0;
  .category-btn {
    box-sizing: border-box;
    text-align: center;
    margin: 0 0 0 4px;
    height: 24px;
    line-height: 24px;
    width: 64px;
    border-radius: 4px;
    font-size: 0.9rem;
    background-color: #aaaaaa;
  }
  .btn-act {
    color: white;
    box-shadow: 2px 2px 2px #4e4e4e;
  }
  .btn-act:active {
    margin-top: 1px;
    box-shadow: none;
  }
  .btn-non-act {
    margin-top: 1px;
    box-shadow: none;
    color: white;
    background-color: $obs_list_tab_non_act_bk;
  }
}
.large-item {
  font-size: 1.1rem;
  height: 32px;
  line-height: 32px;
  cursor: pointer;
  cursor: hand;
}
.middle-item {
  font-size: 1rem;
  height: 32px;
  line-height: 32px;
  padding-left: 8px;
  cursor: pointer;
  cursor: hand;
}
.small-item {
  text-align: left;
  font-size: 0.9rem;
  // height: 80px;
  padding: 8px 8px 8px 16px;
  cursor: pointer;
  cursor: hand;
  .obs-name {
    flex: 2;
  }
  .obs-content-icon {
    margin-right: 8px;
    img {
      width: 24px;
    }
  }
  .obs-content {
    flex: 3;
    text-align: center;
    font-size: 0.8rem;
    .obs-content-box {
      padding: 0 4px 0 4px;
      // border-right: dashed 1px #b6b6b6;
      .obs-content-label {
        height: 24px;
        line-height: 24px;
      }
      .obs-content-val {
        height: 24px;
        line-height: 24px;
        font-size: 0.7rem;
      }
    }
    .border-non {
      border: none;
    }
  }
  .rvr-cam {
    padding: 8px 0 0 32px;
    img {
      width: 90%;
    }
  }
  .list-time {
    text-align: center;
    font-size: 0.8rem;
  }
  .list-val {
    flex: 2;
    text-align: right;
    padding-right: 24px;
    font-size: 0.9rem;
    font-weight: bold;
    .list-val-label {
      display: inline-block;
      font-size: 0.6rem;
      font-weight: normal;
    }
  }
}
.obs-list-btm {
  box-sizing: border-box;
  height: 40px;
  border-radius: 0 0 8px 8px;
  background-color: $content_base_color;
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
.margin-left {
  margin-left: 8px;
}
.margin-btm {
  margin-bottom: 4px;
}
.border-btm {
  border-bottom: solid 1px #726a6a;
}
.bgc-white {
  background-color: white;
}
.bgc-blue-light {
  background-color: #e3f1fa;
}

.test-obs-tab-box {
  box-sizing: border-box;
  height: 52px;
  margin-bottom: 8px;
  flex-shrink: 0;
  .test-tab-box {
    flex-wrap: wrap;
  }
  .test-obs-tab {
    text-align: center;
    width: 124px;
    height: 24px;
    line-height: 24px;
    font-size: 0.7rem;
    background-color: $bk_color;
    border-radius: 4px;
    margin: 0 4px 4px 0;
    .test-obs-icon {
      margin-left: 10px;
      img {
        width: 24px;
      }
    }
  }
  .test-sw-stage-tab {
    padding-left: 4px;
    border-left: solid 2px $bk_color;
  }
  .tab-act {
    color: white;
    box-shadow: 2px 2px 2px #4e4e4e;
  }
  .tab-act:active {
    margin: 1px 4px 3px 0;
    box-shadow: none;
  }
  .tab-non-act {
    margin: 1px 4px 3px 0;
    box-shadow: none;
    background-color: $obs_list_tab_non_act_bk;
  }
}
</style>
