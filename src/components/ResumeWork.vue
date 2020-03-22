<template>

    <div v-if="work.length > 0">

        <h2 class="trebuchet lg-headers mb-3"><font-awesome-icon :icon="['fas', 'laptop-code']" /> Professional Experience</h2>

        <div v-for="wrk in work" :key="wrk.id">

            <span class="badge badge-dark mb-2 trebuchet">{{wrk.start_date_month_year_format}} - {{wrk.end_date_month_year_format}}</span>
            <h3 class="trebuchet h3-resume">{{wrk.role}} <span class="resume-break" v-if="wrk.company_name !== null">| {{wrk.company_name}}</span></h3>
            <p class="calibri">{{wrk.description}}</p>
            <hr/>

        </div>

    </div>

</template>

<script>

    export default {
        name: 'ResumeWork',

        components: {


        },

        data(){
            return{


            }

        },

        props:{

            work: Array,

        },

        methods:{


        },

        mounted() {


        }

    }

</script>