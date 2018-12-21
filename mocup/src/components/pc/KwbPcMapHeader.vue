<template>
  <div id="kwb-map-header" class="container-row">
    <div id="kwb-map-addr-srch">
      <img src="/img/addr_srch.png">
    </div>
    <div id="kwb-map-addr" class="box-one">東京都立川市周辺</div>
    <div id="kwb-map-date">2018/12/31</div>
    <div id="kwb-map-time">23:59</div>
    <div id="kwb-map-reload">
      <img src="/img/renew_s.png">
    </div>
  </div>
</template>

<script>
export default {};
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
#kwb-map-reload {
  padding: 4px 4px 2px 4px;
  img {
    cursor: pointer;
    width: 22px;
    height: 22px;
  }
}
</style>
