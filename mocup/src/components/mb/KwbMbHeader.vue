<template>
  <div id="kwb-mb-header-frame" class="container-row">
    <img class="mb_title" src="/img/mb_title.png">
    <div class="box-one"></div>
    <div id="kwb-mb-date-frame" class="container-col">
      <div id="kwb-mb-date">2018/12/31</div>
      <div id="kwb-mb-time">23:59</div>
    </div>
    <img class="renew" src="/img/renew_s.png">
    <img class="pc" src="/img/mb_pc.png">
    <img class="menu" src="/img/mb_menu.png">
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({});
</script>

<style lang="scss" scoped>
#kwb-mb-header-frame {
  align-items: flex-end;
  height: 36px;
  margin: 0px;
  padding: 0px;
  background-color: #726a6a;
  margin-bottom: 2px;
  img.mb_title {
    width: 124px;
  }
  img.renew {
    width: 22px;
    margin-bottom: 4px;
    cursor: pointer;
  }
  img.pc {
    margin-left: 4px;
    margin-bottom: 2px;
    width: 28px;
    cursor: pointer;
  }
  img.menu {
    margin-left: 4px;
    width: 36px;
    cursor: pointer;
  }
}

#kwb-mb-date-frame {
  margin-left: 4px;
}

#kwb-mb-date {
  color: #fff;
  font-size: 0.6rem;
  text-align: center;
  padding: 2px;
}
#kwb-mb-time {
  color: #fff;
  font-size: 0.8rem;
  text-align: center;
  padding: 2px;
}
</style>
