<template>

   <div class="mx-auto">

       <div v-if="personalAbout.length > 0">


           <div v-for="person in personalAbout" :key="person.id">

               <div class="row">

                   <div v-if="person.profileImage" class="col-lg-3 offset-lg-3 col-md-12 col-sm-12 col-12 order-1 order-lg-1 order-sm-1">
                       <img :title="''+person.name+'\n'+ person.role+''" :src="'http://resume-api.thisdudecodes.com/images/'+person.profileImage" id="portrait-img" class="img-fluid portrait-about mx-auto d-block rounded-circle" :alt="person.name">

                   </div>

                   <div class="col-lg-4 col-md-12 col-sm-12 col-12 order-2 order-lg-2 order-sm-2 mr-3">

                       <h1 id="name_header" class="text-center trebuchet lg-headers">{{person.name}}</h1>
                       <h3 class="text-center trebuchet text-muted">{{person.role}}</h3>
                       <h2 class="text-center">
                           <a class="icon-link mr-2" title="linkedin profile" :href="''+person.linkedIn+''" target="_blank"><font-awesome-icon :icon="['fab', 'linkedin']" /></a>
                           <a class="icon-link mr-2" title="github profile" :href="''+person.gitSource+''" target="_blank"><font-awesome-icon :icon="['fab', 'github-square']" /></a>
                           <router-link class="icon-link tab-link" title="contact me" to="/contact"><font-awesome-icon :icon="['fas', 'envelope-square']" /></router-link>
                       </h2>
                   </div>

               </div>

               <div class="row">

                   <div class="col-12">
                       <p class="calibri main-text">{{person.intro}}</p>

                       <h2 class="trebuchet lg-headers-sub text-center"> <font-awesome-icon :icon="['fas', 'guitar']" /> Hobbies &amp; Interests <font-awesome-icon :icon="['fas', 'bicycle']" /></h2>
                       <p class="calibri main-text">{{person.hobbiesInterests}}</p>
                   </div>


               </div>

           </div>

       </div>

   </div>

</template>

<script>

    export default {
        name: 'About',
        components: {

        },

        data() {
            return {
                urlPre: 'http://resume-api.thisdudecodes.com/api/'
            }
        },

        props: {
            personalAbout: Array,
        },

        methods:{

        },

        mounted() {

        }
    }
</script>

<style>

</style>