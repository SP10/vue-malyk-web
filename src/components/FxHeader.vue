<template>
  <v-card class="overflow-hidden" outlined>
    <v-app-bar
      absolute
      color="#fcb69f"
      dark
      flat
      shrink-on-scroll
      src="../assets/hero.jpg"
      scroll-target="#scrolling-techniques-2"
    >
      <template v-slot:img="{ props }">
        <v-img v-bind="props" gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"></v-img>
      </template>

      <v-app-bar-nav-icon @click="drawer = true" color="primary"></v-app-bar-nav-icon>

      <v-toolbar-title class="text-caption text-sm-h6" color="primary">{{ title }}</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" right="right" absolute width="305px" temporary>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title"></v-list-item-title>
          <v-list-item-subtitle>
            <v-img src="../assets/mobile.logo.png" aspect-ratio="1.8" contain></v-img>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Головна</v-list-item-title>
        </v-list-item>
        <v-list-group no-action prepend-icon="mdi-information-variant" value="true">
          <template v-slot:activator>
            <v-list-item-title>Про нас</v-list-item-title>
          </template>
          <v-list-item v-for="(item, i) in about" :key="i" @click="1">
            <v-list-item-title class="text-caption" v-text="item[0]"></v-list-item-title>
          </v-list-item>
        </v-list-group>
        <v-list-group no-action prepend-icon="mdi-briefcase-variant" value="true">
          <template v-slot:activator>
            <v-list-item-title>Послуги</v-list-item-title>
          </template>
          <v-list-item v-for="(service, i) in services" :key="i" @click="1">
            <v-list-item-title class="text-caption" v-text="service[0]"></v-list-item-title>
          </v-list-item>
        </v-list-group>
        <v-list-group no-action prepend-icon="mdi-card-text" value="true">
          <template v-slot:activator>
            <v-list-item-title>Практики</v-list-item-title>
          </template>
          <v-list-item v-for="(proceeding, i) in proceedings" :key="i" @click="1">
            <v-list-item-title class="text-caption" v-text="proceeding[0]"></v-list-item-title>
          </v-list-item>
        </v-list-group>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-newspaper-variant</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Новини</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-card-account-phone</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Контакти</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-sheet id="scrolling-techniques-2" class="overflow-y-auto" max-height="600px">
      <v-container style="height: 1000px;"></v-container>
    </v-sheet>
  </v-card>
</template>

<script>
export default {
  name: "fx-header",
  data: () => ({
    title: "Адвокатське бюро Малик і партнери",
    drawer: false,
    about: [["Про бюро"], ["Команда"]],
    services: [
      ["Консультування"],
      ["Представництво"],
      ["Абонентське обслуговування"]
    ],
    proceedings: [
      ["Цивільне право"],
      ["Сімейне та спадкове право"],
      ["Адміністративне право"],
      ["Кримінальне право"],
      ["Земельні питання"],
      ["Трудові спори"],
      ["Податкові питання"],
      ["Відшкодування шкоди"]
    ],
  })
};
</script>

<style>
.item--text {
  color: #ffe082;
}
</style>
