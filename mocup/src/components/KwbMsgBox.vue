<template>
  <div v-if="show" id="__kwb_msg_back__">
    <div id="__kwb_msg_frame__">
      <div id="__kwb_msg_cap__" class="container-row" :class="{info: !isWarn, warn: isWarn}">
        <img id="__kwb_msg_close__" src @click="closeMsg">
        <span id="__kwb_msg_cap_str__" class="box-one">caption</span>
      </div>
      <div id="__kwb_msg_msg__">message</div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    show: {
      get() {
        return this.$store.state.msg.show;
      },
      set(st) {
        this.$store.commit("msg/setShow", st);
      }
    },
    isWarn: {
      get() {
        return this.$store.state.msg.warn;
      }
    }
  },
  methods: {
    closeMsg() {
      bkElm = document.getElementById("__kwb_msg_back__");
      bkElm.style.display = "none;"
    }
  }
}
</script>

<style lang="scss" scoped>
#__kwb_msg_back__ {
  position: absolute;
  margin: 0px;
  padding: 0px;
  background-color: rgba(96, 96, 96, 0.6);
  top: 0xp;
  right: 0px;
  left: 0px;
  bottom: 0px;
}

#__kwb_msg_frame__ {
  position: absolute;
  width: 80%;
  margin: 0px;
  padding: 0px;
}

#__kwb_msg_cap__ {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  box-sizing: border-box;
  width: 100%;
}
</style>
