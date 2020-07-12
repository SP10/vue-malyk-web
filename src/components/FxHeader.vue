<template>
  <v-card class='overflow-hidden' outlined>
    <v-app-bar
      absolute
      color='#fcb69f'
      dark
      flat
      shrink-on-scroll
      src='../assets/hero.jpg'
      scroll-target='#scrolling-techniques-2'
    >
      <template v-slot:img='{ props }'>
        <v-img
          v-bind='props'
          gradient='to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)'
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click='drawer = true' color='primary'></v-app-bar-nav-icon>

      <v-toolbar-title class='text-caption text-sm-h6' color='primary'>{{ title }}</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model='drawer' right='right' absolute temporary>
      <v-list nav dense>
        <v-list-item v-for='item in items' :key='item.title' :to='items.path'>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-sheet id='scrolling-techniques-2' class='overflow-y-auto' max-height='600'>
      <v-container style='height: 1000px;'></v-container>
    </v-sheet>
  </v-card>
</template>

<script>
export default {
  name: 'fx-header',
  data: () => ({
    title: 'Адвокатське бюро Малик та партнери',
    drawer: false,
    items: [
      { title: 'Головна', icon: 'mdi-home', path: '' },
      { title: 'Команда', icon: 'mdi-account-group' },
      { title: 'Про нас', icon: 'mdi-information' },
      { title: 'Консультація', icon: 'mdi-account-question' },
    ],
  }),
};
</script>

<style></style>
