<template>
   <div v-if="education.length > 0">
       <h2 class="trebuchet lg-headers"> <font-awesome-icon :icon="['fas', 'user-graduate']" /> Education</h2>
       <br/>

       <div v-for="edu in education" :key="edu.id">

           <span class="badge badge-dark mb-2 trebuchet">{{edu.start_month_year_format}} - {{edu.end_month_year_format}}</span>
           <br/>
           <h3 class="trebuchet h3-resume h3-school-title"><img class="img-fluid school-logo" :src="'https://resume-api.thisdudecodes.com/images/education/'+edu.logo" :alt="''+edu.school_name"> {{edu.school_name}}</h3>
           <p class="calibri">{{edu.details}}</p>

           <div v-if="edu.degrees.length > 0">

               <h5 class="trebuchet text-muted">Degree Earned</h5>

               <table class="table calibri">
                   <thead class="thead-dark">
                   <tr class="d-flex">
                       <th class="col-4" scope="col">Degree</th>
                       <th class="col-4" scope="col">Completed</th>
                       <th class="col-4" scope="col">GPA</th>
                   </tr>
                   </thead>
                   <tbody>
                   <tr v-for="degree in edu.degrees" :key="degree.id" class="d-flex">
                       <td class="col-4">{{degree.major}}<br/> ({{degree.honors_info}})</td>
                       <td class="col-4">{{degree.completed_month_year_format}}</td>
                       <td class="col-4">{{degree.gpa}}</td>
                   </tr>
                   </tbody>
               </table>

               <hr/>


           </div>

<!--           <div v-if="edu.degrees.length > 0">-->

<!--               <h5 class="trebuchet text-muted">Certificates Earned</h5>-->
<!--               <table class="table calibri">-->
<!--                   <thead class="thead-dark">-->
<!--                   <tr class="d-flex">-->
<!--                       <th class="col-6" scope="col">Certificate</th>-->
<!--                       <th class="col-6" scope="col">Date Earned</th>-->
<!--                   </tr>-->
<!--                   </thead>-->
<!--                   <tbody>-->
<!--                   <tr v-for="certificate in edu.degrees" :key="certificate.id" class="d-flex">-->
<!--                       <td class="col-6">{{certificate.major}}</td>-->
<!--                       <td class="col-6">{{certificate.completed_month_year_format}}</td>-->
<!--                   </tr>-->
<!--                   </tbody>-->
<!--               </table>-->

<!--           </div>-->

       </div>



   </div>



</template>

<script>

    export default {
        name: 'ResumeEducation',

        components: {

        },

        data(){
            return{

            }

        },

        props:{

            education: Array,

        },

        methods:{

        },

        mounted() {

        }

    }

</script>