<template>

    <div v-if="Object.keys(awards).length > 0" >
        <h2 class="trebuchet lg-headers"><font-awesome-icon :icon="['fas', 'award']" /> Awards</h2>
    <div>

        <div v-if="awards.scholarships.length > 0">
        <h5 class="trebuchet text-muted">Scholarships</h5>
        <table class="table calibri">
            <thead class="thead-dark">
            <tr class="d-flex">
                <th class="col-6" scope="col"> Scholarship</th>
                <th class="col-6" scope="col">Awarded</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="scholarship in awards.scholarships" :key="scholarship.id" class="d-flex">
                <td class="col-6">{{scholarship.award_name}}</td>
                <td class="col-6">{{scholarship.date_range}}</td>
            </tr>
            </tbody>
        </table>
        </div>

        <hr/>

    </div>

<!--    <div v-if="awards.scholarships.length > 0">-->

<!--        <h5 class="trebuchet text-muted">Honors</h5>-->
<!--        <table class="table calibri">-->
<!--            <thead class="thead-dark">-->
<!--            <tr class="d-flex">-->
<!--                <th class="col-6" scope="col"> Honor</th>-->
<!--                <th class="col-6" scope="col">Awarded</th>-->
<!--            </tr>-->
<!--            </thead>-->
<!--            <tbody>-->
<!--            <tr v-for="honor in awards.honors" :key="honor.id" class="d-flex">-->
<!--                <td class="col-6">{{honor.award_name}}</td>-->
<!--                <td class="col-6">{{honor.date_range}}</td>-->
<!--            </tr>-->
<!--            </tbody>-->
<!--        </table>-->

<!--    </div>-->

<!--    <hr/>-->

    </div>


</template>

<script>

    export default {
        name: 'ResumeAwards',

        components: {

        },

        data(){
            return{

            }

        },

        props:{

            awards: Object,

        },

        methods:{


        },

        mounted() {

        }

    }

</script>