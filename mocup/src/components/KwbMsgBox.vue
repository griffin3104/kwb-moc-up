<template>
  <div v-if="show" id="__kwb_msg_back__">
    <div id="__kwb_msg_frame__" :style="frameStyle">
      <div id="__kwb_msg_cap__" class="container-row" :class="{info: !isWarn, warn: isWarn}">
        <img id="__kwb_msg_close__" src="/img/close.png" @click="closeMsg">
        <span id="__kwb_msg_cap_str__" class="box-one">{{caption}}</span>
      </div>
      <div id="__kwb_msg_msg__">{{msg}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "kwb-msg-box",
  data: function () {
    return {
      frameStyleData: { "left": "0px" }
    }
  },
  computed: {
    frameStyle() {
      return {
        "--left": this.frameStyleData.left
      }
    },
    show: {
      get() {
        var val = this.$store.state.msg.show;
        if (val) {
          var posLeft = 0;
          if ((window.innerWidth * 0.8) > 600) {
            console.log("full 0.5:", window.innerWidth, window.innerWidth * 0.5);
            posLeft = window.innerWidth * 0.5 - 300;
          } else {
            posLeft = window.innerWidth * 0.5 - (window.innerWidth * 0.8 * 0.5);
          }
          this.$set(this.frameStyleData, "left", posLeft + "px");
        }
        return val;
      }
    },
    isWarn: {
      get() {
        return this.$store.state.msg.warn;
      }
    },
    caption: {
      get() {
        return this.$store.state.msg.caption;
      }
    },
    msg: {
      get() {
        return this.$store.state.msg.msg;
      }
    }
  },
  methods: {
    closeMsg() {
      this.$store.commit("msg/close");
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
  top: 0px;
  right: 0px;
  left: 0px;
  bottom: 0px;
  z-index: 5000;
}

#__kwb_msg_frame__ {
  --left: 0px;
  position: absolute;
  width: 80%;
  margin: 0px;
  padding: 0px;
  z-index: 5001;
  top: 40%;
  max-width: 600px;
  left: var(--left);
}

#__kwb_msg_cap__ {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  color: #fff;
  z-index: 5002;
  padding: 8px;
  font-size: 1rem;
  font-weight: bold;
}
.info {
  background-color: #48c;
}
.warn {
  background-color: #a33;
}
#__kwb_msg_close__ {
  width: 20px;
  height: 20px;
}
#__kwb_msg_cap_str__ {
  text-align: center;
}
#__kwb_msg_msg__ {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  color: #333;
  background-color: #fff;
  z-index: 5002;
  padding: 8px;
  font-size: 1rem;
}
</style>
