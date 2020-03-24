<template>

    <div>

        <h2 class="trebuchet lg-headers text-center">Skills <i class="fas fa-code"></i></h2>

        <div v-if="skills.coding.length > 0">
            <h5 class="trebuchet text-muted">Coding</h5>
            <table class="table calibri">

                <tbody>
                <tr v-for="code in skills.coding" :key="code.id" class="d-flex">
                    <td class="col-6">{{code.skill}}</td>
                    <td class="col-6"><div class="rating"><div class="stars"></div><div class="back" :style="'width:'+code.rating+'%;'"></div></div></td>
                </tr>
                </tbody>
            </table>
        </div>

        <div v-if="skills.methods_devops.length > 0">
            <h5 class="trebuchet text-muted">Methodologies/DevOps</h5>
            <table class="table calibri">

                <tbody>
                <tr v-for="method in skills.methods_devops" :key="method.id" class="d-flex">
                    <td class="col-6">{{method.skill}}</td>
                    <td class="col-6"><div class="rating"><div class="stars"></div><div class="back" :style="'width:'+method.rating+'%;'"></div></div></td>
                </tr>
                </tbody>
            </table>

        </div>

        <div v-if="skills.software.length > 0">
            <h5 class="trebuchet text-muted">Software</h5>
            <table class="table calibri">

                <tbody>
                <tr v-for="software in skills.software" :key="software.id" class="d-flex">
                    <td class="col-6">{{software.skill}}</td>
                    <td class="col-6"><div class="rating"><div class="stars"></div><div class="back" :style="'width:'+software.rating+'%;'"></div></div></td>
                </tr>
                </tbody>
            </table>
        </div>


        <div v-if="skills.operating_systems.length > 0">
            <h5 class="trebuchet text-muted">Operating Systems</h5>
            <table class="table calibri">

                <tbody>
                <tr v-for="operating_system in skills.operating_systems" :key="operating_system.id" class="d-flex">
                    <td class="col-6">{{operating_system.skill}}</td>
                    <td class="col-6"><div class="rating"><div class="stars"></div><div class="back" :style="'width:'+operating_system.rating+'%;'"></div></div></td>
                </tr>
                </tbody>

            </table>

        </div>

        <div v-if="skills.business.length > 0">
            <h5 class="trebuchet text-muted">Business</h5>
            <table class="table calibri">

                <tbody>
                <tr v-for="biz in skills.business" :key="biz.id" class="d-flex">
                    <td class="col-6">{{biz.skill}}</td>
                    <td class="col-6"><div class="rating"><div class="stars"></div><div class="back" :style="'width:'+biz.rating+'%;'"></div></div></td>
                </tr>
                </tbody>
            </table>
        </div>

    </div>

</template>

<script>


    export default {
        name: 'ResumeSkills',

        components: {


        },

        data(){
            return{

            }

        },

        props:{

            skills: Object,

        },

        methods:{
            
        },

        mounted() {

        }

    }
</script>