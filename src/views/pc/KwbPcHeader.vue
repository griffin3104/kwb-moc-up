<template>
  <nav class="pc-app-bar">
    <v-layout row class="primary pc-app-bar-frame">
      <img class="title-pic" src="/img/apptitle.png" />
      <v-spacer></v-spacer>
      <v-btn icon dark>
        <v-icon>menu</v-icon>
      </v-btn>
    </v-layout>
  </nav>
</template>

<script>
export default {
  name: "kwb-pc-header"
};
</script>

<style lang="stylus" scoped>
.pc-app-bar{
  display: block;
  height: 48px;
  box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
  z-index : 4000;
}
.pc-app-bar-frame{
  align-items: center;
  height: 100%;
  color: #fff;
  img {
    height: 100%;
  }
}
</style>
