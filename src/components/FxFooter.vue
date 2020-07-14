<template>
  <v-footer padless elevation="6" fixed color="#FFF8E1">
    <v-card class="flex" tile>
      <v-card-title class="pa-0">
        <v-spacer></v-spacer>
        <v-btn
          v-for="social in social_media"
          :href="social.path"
          :key="social.key"
          class="mx-4"
          color="primary"
          dark
          icon
        >
          <v-icon size="24px">{{ social.icon }}</v-icon>
        </v-btn>
        <v-btn class="mx-4" color="primary" icon :href="'viber://chat/?number=380961097608'">
              <v-icon size="24px" class="icon-viber"></v-icon>
        </v-btn>
      </v-card-title>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "fx-footer",
  data: () => ({
    social_media: [
      {
        key: 0,
        icon: "mdi-facebook",
        path: "https://www.facebook.com/MalykPartners/"
      },
      {
        key: 1,
        icon: "mdi-instagram",
        path: "https://instagram.com/malykpartners"
      },
      {
        key: 2,
        icon: "mdi-telegram",
        path: "tg://resolve?domain=MalykOleksandr"
      },
    ]
  })
};
</script>

<style lang="css" scoped>
.icon-viber {
  background-image: url('../assets/icons/viber.svg');
}</style>
