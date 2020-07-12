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
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click="drawer = true" color="primary"></v-app-bar-nav-icon>

      <v-toolbar-title class="text-caption text-sm-h6" color="primary">{{ title }}</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" right="right" absolute temporary>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title"> </v-list-item-title>
          <v-list-item-subtitle>
            <v-img src="../assets/logo.png" aspect-ratio="1" contain></v-img>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <!-- <v-list nav dense>
        <v-list-item v-for="item in items" :key="item.title" :to="items.path">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list> -->
      <v-treeview
        v-model="tree"
        :open="open"
        :items="items"
        activatable
        item-key="title"
        open-on-click
      >
        <template v-slot:prepend="{ item, open }">
          <v-icon v-if="!item.file">
            {{ open ? "mdi-folder-open" : "mdi-folder" }}
          </v-icon>
          <v-icon v-else>
            {{ files[item.file] }}
          </v-icon>
        </template>
      </v-treeview>
      <!-- <v-divider></v-divider> -->
      <!-- <v-btn class="m-4" block tile color="primary" dark>Консультація</v-btn> -->
      <!-- <v-list nav dense>
        <v-list-item :key="Консультація" :to="path">
          <v-list-item-icon>
            <v-icon>mdi-account-question</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="item--text">Консультація</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list> -->
    </v-navigation-drawer>
    <v-sheet id="scrolling-techniques-2" class="overflow-y-auto" max-height="600">
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
    open: ['public'],
    items: [
      { id: 1, title: "Головна", icon: "mdi-home", children: [] },
      {
        id: 2,
        title: "Послуги",
        icon: "mdi-briefcase-variant",
        children: [
          { id: 3, name: "Консультація" },
          { id: 4, name: "Представництво в суді" },
          { id: 5, name: "Абонентське обслуговування" },
          { id: 6, name: "Виїзд адвоката" },
          { id: 7, name: "Інше" }
        ]
      },
      { id: 8, title: "Команда", icon: "mdi-account-group", children: [] },
      { id: 9, title: "Про нас", icon: "mdi-information-variant", children: [] }
      // { title: 'Консультація', icon: 'mdi-account-question' },
    ]
  })
};
</script>

<style>
.item--text {
  color: #ffe082;
}
</style>
