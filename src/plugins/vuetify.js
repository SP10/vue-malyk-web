import Vue from 'vue';
import Vuetify from 'vuetify/lib';

// Helpers
import colors from 'vuetify/es5/util/colors';
import VueSimpleSVG from 'vue-simple-svg';

Vue.use(VueSimpleSVG)
Vue.use(Vuetify);
const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#c99d44', // #E53935
        secondary: colors.amber.lighten5, // #FFCDD2
        accent: colors.indigo.base, // #3F51B5
        info: colors.amber.lighten5,
      },
      dark: {
        primary: colors.red.darken4,
        secondary: colors.blue.lighten4, // #FFCDD2
        accent: colors.indigo.base, // #3F51B5
      },
    },

  },
});

// export default new Vuetify({});
export default vuetify;
