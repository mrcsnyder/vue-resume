<template>
    <div>

            <h1 id="resume_header" class="trebuchet lg-headers text-center"><b-icon-file-text font-scale="1"></b-icon-file-text> Resume <a class="btn btn-sm btn-dark" :href="'http://resume-api.thisdudecodes.com/pdf-resume/'+resumeLink" target="_blank"><i class="fas fa-download"></i> PDF</a></h1>

            <div class="row">

                <div class="col-lg-8 col-12 mt-2">
                   <resume-work :work="resumeWork"></resume-work>
                   <resume-education :education="resumeEducation"/>
                   <resume-awards :awards="resumeAwards"/>
                </div>

                <div class="col-lg-4 col-12">
                    <resume-skills :skills="resumeSkills"/>
                </div>

            </div>

    </div>
</template>

<script>

    import ResumeWork from "./ResumeWork";
    import ResumeEducation from "./ResumeEducation";
    import ResumeAwards from "./ResumeAwards";
    import ResumeSkills from "./ResumeSkills";

    export default {
        name: 'Resume',

        props: {
            resumeWork: Array,
            resumeEducation: Array,
            resumeLink: String,
            resumeSkills: Object,
            resumeAwards: Object,
        },

        data() {
            return {
                coding: [],
            }
        },

        components: {
            ResumeEducation,
            ResumeAwards,
            ResumeWork,
            ResumeSkills,

            },

        methods: {

        },

        computed: {

        },

        mounted() {

        },

    }
</script>
