<template>
  <div>
    <v-system-bar color="amber darken-3" :height="height" :lightsOut="lightsOut" :window="window">
      <v-icon small color="primary" class="ml-2">mdi-map-marker</v-icon><span class="white--text mr-6 text text-xs-caption text-sm-h6 text-decoration-none">м. Вінниця, вул. Грушевського, 17</span>
      <v-spacer></v-spacer>
      <v-icon small color="primary">mdi-phone</v-icon><span class="mr-6 text text-xs-overline text-sm-h6"><a class="white--text text-decoration-none" href="tel:+380967606922">+38 (096) 7606922</a></span>
    </v-system-bar>
  </div>
</template>

<script>
export default {
  name: 'fx-system-bar',
  data: () => ({
    height: 35,
    lightsOut: false,
    window: false,
  }),
};
</script>

<style scoped>
.text{
  font-size: 0.7rem;
}
</style>
