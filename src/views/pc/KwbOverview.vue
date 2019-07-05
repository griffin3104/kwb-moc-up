<template>
  <v-layout class="kwb_overview">
    <v-flex>
      <river-warn-overview></river-warn-overview>
    </v-flex>
  </v-layout>
</template>

<script>
import RiverWarnOverview from "../../components/RiverWarnOverview.vue";

export default {
  components: {
    RiverWarnOverview
  }
};
</script>

<style lang="stylus" scoped>
.kwb_overview{
  padding: 16px;
}
</style>
