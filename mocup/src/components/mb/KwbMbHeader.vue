<template>
  <div id="kwb-mb-header-frame" class="container-row">
    <img class="mb_title" src="/img/mb_title.png">
    <div class="box-one"></div>
    <div id="kwb-mb-date-frame" class="container-col">
      <div id="kwb-mb-date">{{appDate}}</div>
      <div id="kwb-mb-time">{{appTime}}</div>
    </div>
    <img class="renew" src="/img/renew_s.png" @click="renew">
    <img class="menu" src="/img/mb_menu.png" @click="showSideMenu">
  </div>
</template>

<script>
export default {
  computed: {
    appDate: {
      get() {
        return this.$store.state.app.appTime.dateStr;
      }
    },
    appTime: {
      get() {
        return this.$store.state.app.appTime.timeStr;
      }
    }
  },
  methods: {
    renew() {
      this.$store.commit("app/renewTime");
    },
    showSideMenu() {
      if (this.$store.state.app.mbSideMenuShow == false)
        this.$store.commit("app/openSideMenu");
      else
        this.$store.commit("app/closeSideMenu");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../scss/properties.scss";

#kwb-mb-header-frame {
  align-items: flex-end;
  height: 36px;
  margin: 0px;
  padding: 0px;
  background-color: $bk_color;
  margin-bottom: 2px;
  img.mb_title {
    width: 124px;
  }
  img.renew {
    width: 22px;
    margin-bottom: 4px;
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
