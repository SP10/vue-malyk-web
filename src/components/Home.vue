<template>
  <v-card elevation="0" max-width="444" class="mx-auto">
    <v-system-bar lights-out></v-system-bar>
    <v-carousel
      :continuous="false"
      :cycle="cycle"
      :show-arrows="false"
      hide-delimiter-background
      delimiter-icon="mdi-minus"
      height="300"
    >
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet color="white red--text" height="100%" tile>
          <v-row class="fill-height" align="center" justify="center">
            <div class="body-2">{{ slide }}</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      cycle: true,
      slides: [
        "Досвідчена команда",
        "Робота на результат",
        "Інноваційність",
        "Прозорість",
        "Зручність"
      ]
    };
  }
};
</script>
