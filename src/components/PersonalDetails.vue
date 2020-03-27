<template>
<div>

    <div v-for="person in personal" :key="person.id">

        <div class="row">

            <div class="col-lg-3 offset-lg-3 col-md-12 col-sm-12 col-12 order-1 order-lg-1 order-sm-1">
                <img :src="'http://resume-api.thisdudecodes.com/images/'+person.profile_image" id="portrait-img" class="img-fluid portrait-about mx-auto d-block rounded-circle" :alt="person.name">

            </div>

            <div class="col-lg-4 col-md-12 col-sm-12 col-12 order-2 order-lg-2 order-sm-2 mr-3">

                <h1 id="name_header" class="text-center trebuchet lg-headers">{{person.name}}</h1>
                <h3 class="text-center trebuchet text-muted">{{person.current_role}}</h3>
                <h2 class="text-center">
                    <a class="icon-link" href="https://www.linkedin.com/in/chris-snyder-49956610" target="_blank"><i class="fab fa-linkedin"></i></a>
                    <a class="icon-link" href="https://github.com/iplayguitar81" target="_blank"><i class="fab fa-github-square"></i></a>
                    <a class="icon-link tab-link" href="#contact" aria-controls="contact"><i class="fas fa-envelope-square"></i></a>
                </h2>
            </div>

        </div>

        <div class="row">

            <div class="col-12">
                <p class="calibri main-text">{{person.professional_intro}}</p>

                <h2 class="trebuchet lg-headers-sub text-center"> <font-awesome-icon :icon="['fas', 'guitar']" /> Hobbies &amp; Interests <font-awesome-icon :icon="['fas', 'bicycle']" /></h2>
                <p class="calibri main-text">{{person.hobbies_interests}}</p>
            </div>


        </div>

    </div>

        </div>

</template>

<script>



    export default {
        name: 'PersonalDetails',

        components: {


        },

        data(){
            return{

            }

        },

        props:{

            personal: Array,

        },

        methods:{


        },

        mounted() {


        }

    }

</script>