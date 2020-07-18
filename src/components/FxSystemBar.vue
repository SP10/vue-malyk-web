<template>
  <div>
    <v-system-bar color="grey lighten-5" :height="height" :lightsOut="lightsOut" :window="window">
      <v-btn @click="sheet = !sheet" text>
        <v-icon small color="primary" class="ml-xs-1 ml-sm-2">mdi-map-marker</v-icon>
        <span
          class="grey--text mr-xs-1 mr-sm-6  text text-xs-caption text-sm-subtitle-1 text-decoration-none"
        >Як нас знайти?</span>
      </v-btn>

      <v-spacer></v-spacer>
      <v-icon small color="primary">mdi-phone</v-icon>
      <span class="mr-xs-1 mr-sm-6 text text-xs-caption text-sm-subtitle-1">
        <a class="grey--text text-decoration-none" href="tel:+380967606922">+38 (096) 7606922</a>
      </span>
    </v-system-bar>
     <v-bottom-sheet v-model="sheet">
      <v-sheet class="text-center" height="80%">
       <Map/>
      </v-sheet>
    </v-bottom-sheet>
  </div>
</template>

<script>
import Map from "@/components/Map";
export default {
  name: "fx-system-bar",
  components: {
    Map
  },
  data: () => ({
    sheet: false,
    height: 35,
    lightsOut: false,
    window: false
  })
};
</script>

<style scoped>
.text {
  font-size: 0.8rem;
}
</style>
