
import About from './components/About.vue';
import Resume from './components/Resume.vue';
import Portfolio from './components/Portfolio.vue';
import Contact from './components/Contact.vue';




export default {

    mode: 'history',

    linkActiveClass: 'active',


    routes: [

        {
            path: '/',
            component: About

        },

        {
            path: '/resume',
            component: Resume

        },

        {
            path: '/portfolio',
            component: Portfolio

        },

        {
            path: '/contact',
            component: Contact

        },



    ]

};
