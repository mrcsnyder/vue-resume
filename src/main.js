import Vue from 'vue'
import App from './App.vue'

//fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserGraduate, faLaptopCode, faAward } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

//import VueRouter...
import VueRouter from 'vue-router';

// import axios from 'axios';

//import VueAxios from 'vue-axios'

//import routes file for use in project...
import routes from './routes';

//import VueBootstrap...
import {BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue'

import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// import { VueReCaptcha } from "vue-recaptcha-v3";

//use BootstrapVue as a plugin...
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

//use fontawesome
library.add(faUserGraduate, faLaptopCode, faAward);


Vue.component('font-awesome-icon', FontAwesomeIcon);

//use VueRouter as a plugin...
Vue.use(VueRouter);

// Vue.use(VueReCaptcha, { siteKey: "6LfYm9EUAAAAAJ5fJ61xA5BY2edImwTnGvXG6iet" });

//add uppercase filter for searches
Vue.filter('uppercase', function (value) {
  return value.toUpperCase();
});
Vue.config.productionTip = false

new Vue({
router: new VueRouter(routes),
  render: h => h(App),
}).$mount('#app')
