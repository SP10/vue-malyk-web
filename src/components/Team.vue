<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <v-card class="mx-auto" max-width="400">
            <v-img class="white--text align-end" src="../assets/partner-1.png"></v-img>

            <v-card-text class="text--primary">
              <div class="display-1 text--primary">Малик Олександр Володимирович</div>
              <div class="pt-5">Керуючий партнер, адвокат</div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="primary" text>Детальніше</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card class="mx-auto" max-width="400">
            <v-img class="white--text align-end" src="../assets/partner-2.png"></v-img>

            <v-card-text class="text--primary">
              <div class="display-1 text--primary">Гаврилюк Тетяна Дмитрівна</div>
              <div class="pt-5">Партнер, юрист</div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="primary" text>Детальніше</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card class="mx-auto" max-width="400">
            <v-img class="white--text align-end" src="../assets/partner-3.png"></v-img>

            <v-card-text class="text--primary">
              <div class="display-1 text--primary">Сороколіта Олександр Павлович</div>
              <div class="pt-5">Партнер, юрист</div>
            </v-card-text>

            <v-card-actions>
              <v-btn color="primary" text>Детальніше</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        color: "#1F7087",
        src: "../assets/FOT_6826.JPG",
        title: "Малик Олександр Володимирович",
        artist: "Керуючий партнер, адвокат"
      },
      {
        color: "#952175",
        src: "../assets/FOT_6809.JPG",
        title: "Гаврилюк Тетяна Дмитрівна ",
        artist: "Партнер, юрист"
      },
      {
        color: "#952175",
        src: "../assets/FOT_6822.JPG",
        title: "Сороколіта Олександр Павлович",
        artist: "Партнер, юрист"
      }
    ]
  })
};
</script>

<style scoped></style>
