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

//import vue-analytics for Google Analytics integration:
import VueAnalytics from 'vue-analytics';



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

const router = new VueRouter(routes);

//define dynamic component page titles...
router.beforeEach((toRoute, fromRoute, next) => {
  window.document.title = toRoute.meta && toRoute.meta.title ? 'ThisDudeCodes.com | '+toRoute.meta.title : 'ThisDudeCodes.com';

  next();
})

// Configuration VueAnalytics
Vue.use(VueAnalytics, {
    id: 'UA-137370451-1',
    router,
    // sendHitTask: window.location.hostname !== "localhost",
    debug: {
        enabled: false
    }
});

Vue.component('font-awesome-icon', FontAwesomeIcon);

//use VueRouter as a plugin...
 Vue.use(VueRouter);

//add uppercase filter for searches
Vue.filter('uppercase', function (value) {
  return value.toUpperCase();
});
Vue.config.productionTip = false

new Vue({
   router: router,
  render: h => h(App),
}).$mount('#app')