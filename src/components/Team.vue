<template>
  <div>
    <v-container>
      <v-row dense>
        <v-col v-for="(item, i) in items" :key="i" cols="12">
          <v-card :color="item.color" dark>
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="text-subtitle-2 headline" v-text="item.title"></v-card-title>

                <v-card-subtitle v-text="item.artist"></v-card-subtitle>
              </div>

              <v-list-item-avatar class="ma-3" size="125" tile>
                <v-img :src="item.src"></v-img>
              </v-list-item-avatar>
            </div>
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
        src: "../assets/team-1.png",
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
