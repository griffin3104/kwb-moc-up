<template>
  <div id="kwb-map-header" class="container-row">
    <div id="kwb-map-addr" class="box-one">{{mapAddress}}</div>
    <div v-if="menu_show == false" id="kwb-mb-menu-show-btn">▼ 表示</div>
    <div v-if="menu_show == true" id="kwb-mb-menu-hide-btn">▲ 非表示</div>
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
    menu_show: {
      get() {
        return this.$store.state.app.mbMenuShow;
      },
      set(val) {
        this.$store.commit("setMbMenuShow", val);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../scss/properties.scss";

#kwb-map-header {
  align-items: flex-end;
}

#kwb-map-addr {
  font-size: 0.6rem;
  color: #fff;
  padding: 4px;
  box-sizing: border-box;
}

#kwb-mb-menu-show-btn {
  border-left: 2px solid $base;
  box-sizing: border-box;
  padding: 4px 8px 4px 8px;
  color: #fff;
  font-size: 0.6rem;
}
#kwb-mb-menu-hide-btn {
  border-left: 2px solid $base;
  box-sizing: border-box;
  padding: 4px 8px 4px 8px;
  color: #fff;
  font-size: 0.6rem;
}
</style>
