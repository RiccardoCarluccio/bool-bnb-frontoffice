import { createApp } from "vue";
import App from "./App.vue";
import '../scss/general.scss';
import { router } from "./router.js";
import "bootstrap/dist/js/bootstrap.js";


import TomTomMaps from "./components/TomTomMaps.vue";
// Vue.component('TomTomMaps', require('./components/TomTomMaps.vue'));

export default {
    name: 'TomTomMaps',
  };
  
createApp(App).use(router).mount('#app')
