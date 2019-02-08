<template>
  <div class="container-row box-one main-contents">
    <div class="contents container-col box-one">
      <div class="cross-section">横断図</div>
      <div class="obs-value container-row box-one">
        <div class="active-contents container-row box-one">
          <div class="cctv box-one container-col">
            <div class="cctv-1 box-one">カメラ1</div>
            <div class="cctv-2 box-one">カメラ2</div>
          </div>
          <div class="graph box-one container-col">
            <div class="hyeto box-one">ハイエトグラフ</div>
            <div class="dam">ダム諸量</div>
          </div>
        </div>
        <div class="list">リスト</div>
      </div>
    </div>
    <div class="config">表示設定</div>
  </div>
</template>

<script>
export default {
  name: "kwb-obs-detaile"
};
</script>

<style lang="scss" scoped>
.main-contents {
  color: #000000;
  font-weight: 600;
  padding: 4px;
  background-color: #fd0505;
  .contents {
    padding: 4px;
    flex: 9;
    background-color: #60fd05;
    .cross-section {
      background-color: #fdec05;
      height: 200px;
    }
    .obs-value {
      padding: 4px;
      background-color: #003d00;
      .active-contents {
        padding: 4px;
        background-color: #9ac801;
        .cctv {
          padding: 4px;
          background-color: #06e3f3;
          .cctv-1 {
            background-color: #4c878b;
            margin-bottom: 2px;
          }
          .cctv-2 {
            background-color: #295e49;
          }
        }
        .graph {
          padding: 4px;
          background-color: #500583;
          .hyeto {
            background-color: #c589ec;
          }
          .dam {
            flex: 3;
            background-color: #905790;
          }
        }
      }
      .list {
        width: 450px;
        background-color: #f808d8;
      }
    }
  }
  .config {
    width: 200px;
    background-color: #053ffd;
  }
}
</style>
