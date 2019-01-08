<template>
  <div id="kwb-map-header" class="container-row">
    <div id="kwb-map-addr-srch">
      <img src="/img/addr_srch.png">
    </div>
    <div id="kwb-map-addr" class="box-one">{{mapAddress}}</div>
    <div id="kwb-map-cal">
      <img src="/img/calendar.png">
    </div>
    <div id="kwb-map-date">{{appDate}}</div>
    <div id="kwb-map-time">{{appTime}}</div>
    <div id="kwb-map-reload">
      <img src="/img/renew_s.png" @click="renew">
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    mapAddress: {
      get() {
        return this.$store.state.map.address;
      }
    },
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
      console.log("hhh");
      return this.$store.commit("app/renewTime");
    }
  }
};
</script>

<style lang="scss" scoped>
#kwb-map-header {
  align-items: flex-end;
}

#kwb-map-addr-srch {
  padding-left: 4px;
  img {
    cursor: pointer;
    width: 22px;
    height: 22px;
  }
}

#kwb-map-addr {
  font-size: 0.8rem;
  color: #fff;
  padding: 4px;
  box-sizing: border-box;
}

#kwb-map-date {
  font-size: 0.8rem;
  color: #fff;
  padding: 4px 2px 4px 0px;
  box-sizing: border-box;
}
#kwb-map-time {
  font-size: 1.2rem;
  color: #fff;
  padding: 4px 2px 4px 2px;
  box-sizing: border-box;
}
#kwb-map-cal {
  padding: 4px 4px 2px 4px;
  img {
    cursor: pointer;
    width: 22px;
    height: 22px;
  }
}
#kwb-map-reload {
  padding: 4px 4px 2px 4px;
  img {
    cursor: pointer;
    width: 22px;
    height: 22px;
  }
}
</style>
