<template>
  <v-card class="overflow-hidden" outlined>
    <v-app-bar
      ref="bar"
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

      <v-toolbar-title class="text-body-2 text-sm-h6" color="primary">{{ title }}</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" right="right" absolute width="280px" temporary>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title"></v-list-item-title>
          <v-list-item-subtitle>
            <v-img src="../assets/mobile.logo.png" aspect-ratio="1.8" contain></v-img>
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-item @click="$router.push('/home')">
          <v-list-item-title>Головна</v-list-item-title>
        </v-list-item>
        <v-list-group
          v-for="item in items"
          :key="item.title"
          v-model="item.active"
          no-action
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item v-for="subItem in item.items" :key="subItem.title" @click="$router.push(subItem.route)">
            <v-list-item-content>
              <v-list-item-title v-text="subItem.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
         <v-list-item>
          <v-list-item-title>Новини</v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>Контакти</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-sheet id="scrolling-techniques-2" class="overflow-y-auto" max-height="600px">
      <v-container class="mt-xs-125 m-125" style="height: 1000px;">
          <v-row>
            <v-col><router-view /></v-col>
          </v-row>
      </v-container>
    </v-sheet>
  </v-card>
</template>

<script>
// import Home from '@/components/Home';
export default {
  name: "fx-header",
  components:{
    // Home
  },
  data: () => ({
    title: `Адвокатське бюро "Малик і партнери"`,
    drawer: false,
    items: [
      // {
      //   action: "mdi-home",
      //   title: "Головна",
      //   items: []
      // },
      {
        action: "mdi-incognito",
        title: "Про нас",
        items: [{ title: "Про бюро", route:'/about' }, { title: "Команда",route:'/team' }]
      },
      {
        action: "mdi-briefcase-variant",
        title: "Послуги",
        items: [
          { title: "Консультування", route:'' },
          { title: "Представництво", route:'' },
          { title: "Абонентське обслуговування", route:'' }
        ]
      },
      {
        action: "mdi-card-text",
        title: "Практики",
        items: [
          { title: "Цивільне право", route:'' },
          { title: "Сімейне та спадкове право", route:'' },
          { title: "Адміністративне право", route:'' },
          { title: "Кримінальне право", route:'' },
          { title: "Земельні питання", route:'' },
          { title: "Трудові спори", route:'' },
          { title: "Податкові питання", route:'' },
          { title: "Відшкодування шкоди", route:'' }
        ]
      },
      // {
      //   action: "mdi-newspaper-variant",
      //   title: "Новини",
      //   items: []
      // },
      // {
      //   action: "mdi-card-account-phone",
      //   title: "Контакти",
      //   items: []
      // }
    ]
  })
};
</script>

<style>
.item--text {
  color: #ffe082;
}
.m-125{
  margin-top: 125px;
}
</style>
