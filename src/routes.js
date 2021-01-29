import About from './components/About.vue';
import Resume from './components/Resume.vue';
import Portfolio from './components/Portfolio.vue';
import Contact from './components/Contact.vue';

export default  {

    mode: 'history',

    linkActiveClass: 'active',


    routes: [

        {
            path: '/',
            component: About,
            meta: {
                title: 'About Chris'
            }

        },

        {
            path: '/resume',
            component: Resume,
            meta: {
                title: 'Resume'
            }

        },

        {
            path: '/portfolio',
            component: Portfolio,
            meta: {
                title: 'Project Portfolio'
            }

        },

        {
            path: '/contact',
            component: Contact,
            meta: {
                title: 'Contact Chris'
            }

        },

    ]

};