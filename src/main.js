import Vue from 'vue'
import App from './App.vue'

//fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'

import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faUserGraduate, faLaptopCode, faAward, faGuitar, faBicycle, faEnvelopeSquare, faSmile, faSmileWink, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

//import VueRouter...
import VueRouter from 'vue-router';

//import routes file
import routes from './routes';

//import VueBootstrap...
import {BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue'

import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//use BootstrapVue as a plugin...
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

//use fontawesome
library.add(faUserGraduate, faLaptopCode, faAward, faGuitar, faBicycle, faEnvelopeSquare, faLinkedin, faGithubSquare, faSmile, faSmileWink, faExclamationCircle );

var routey = new VueRouter(routes);

//define dynamic component page titles...
routey.beforeEach((toRoute, fromRoute, next) => {
  window.document.title = toRoute.meta && toRoute.meta.title ? 'ThisDudeCodes.com | '+toRoute.meta.title : 'ThisDudeCodes.com';

  next();
})

Vue.component('font-awesome-icon', FontAwesomeIcon);

//use VueRouter as a plugin...
 Vue.use(VueRouter);

//add uppercase filter for searches
Vue.filter('uppercase', function (value) {
  return value.toUpperCase();
});
Vue.config.productionTip = false

new Vue({
   router: routey,
  render: h => h(App),
}).$mount('#app')