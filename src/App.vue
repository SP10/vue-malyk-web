<template>
  <v-app id="app">
    <fx-system-bar/>
    <fx-header/>
    <fx-footer/>
    <router-view />
  </v-app>
</template>

<script>
import FxSystemBar from '@/components/FxSystemBar';
import FxHeader from "@/components/FxHeader";
import FxFooter from "@/components/FxFooter";

export default {
  name: "App",

  components: {
    FxSystemBar,
    FxHeader,
    FxFooter
  },

  data: () => ({
  
  })
};
</script>
