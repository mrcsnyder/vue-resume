<template>
    <div>

            <h1 id="resume_header" class="trebuchet lg-headers text-center"><b-icon-document-text font-scale="1"></b-icon-document-text> Resume <a class="btn btn-sm btn-dark" href="Chris_Snyder_Resume.pdf"><i class="fas fa-download"></i> PDF</a></h1>

            <div class="row">

                <div class="col-lg-8 col-12 mt-2">
                   <resume-work :work="work"></resume-work>
                   <resume-education :education="education"/>
                   <resume-awards :awards="awards"/>
                </div>

                <div class="col-lg-4 col-12">
                    <resume-skills :skills="skills"/>
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

        data() {
            return {
                work: [],
                education: [],
                awards: {scholarships: [], honors: []},
                skills: {coding: [], methods_devops: [], software: [], operating_systems: [], business: [] },
                urlPre: 'http://resume-api.thisdudecodes.com/api/'

            }
        },

        components: {
            ResumeEducation,
            ResumeAwards,
            ResumeWork,
            ResumeSkills,

            },


        methods: {

            //get educational background from endpoint
            getWork() {

                const url = this.urlPre + 'work';

                fetch(url, {
                    method: 'GET', // *GET, POST, PUT, DELETE, etc.
                    // mode: 'no-cors', // no-cors, *cors, same-origin
                    // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                    // credentials: 'same-origin', // include, *same-origin, omit
                    headers: {
                        'Content-Type': 'application/json'
                        // 'Content-Type': 'application/x-www-form-urlencoded',
                    }
                })
                    .then((response) => {
                        return response.json();
                    })
                    .then((data) => {

                        this.work = data;

                        console.log('test'+ this.work);
                    });


            },

            //get skills from endpoint
            getSkills() {

                const url = this.urlPre + 'skills';

                fetch(url, {
                    method: 'GET', // *GET, POST, PUT, DELETE, etc.
                    // mode: 'no-cors', // no-cors, *cors, same-origin
                    // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                    // credentials: 'same-origin', // include, *same-origin, omit
                    headers: {
                        'Content-Type': 'application/json'
                        // 'Content-Type': 'application/x-www-form-urlencoded',
                    }
                })
                    .then((response) => {
                        return response.json();
                    })
                    .then((data) => {

                        this.skills = data;
                        this.skills.coding = data.coding;
                        this.skills.methods_devops = data.methods_devops;
                        this.skills.software = data.software;
                        this.skills.operating_systems = data.operating_systems;
                        this.skills.business = data.business;

                        console.log(this.skills);
                    });


            },

            //get educational background from endpoint
            getEducation() {

                const url = this.urlPre + 'education';

                fetch(url, {
                    method: 'GET', // *GET, POST, PUT, DELETE, etc.
                    // mode: 'no-cors', // no-cors, *cors, same-origin
                    // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                    // credentials: 'same-origin', // include, *same-origin, omit
                    headers: {
                        'Content-Type': 'application/json'
                        // 'Content-Type': 'application/x-www-form-urlencoded',
                    }
                })
                    .then((response) => {
                        return response.json();
                    })
                    .then((data) => {

                        this.education = data;
                        console.log(this.education);
                    });


            },

            //get educational background from endpoint
            getAwards() {

                const url = this.urlPre + 'education-awards';

                fetch(url, {
                    method: 'GET', // *GET, POST, PUT, DELETE, etc.
                    // mode: 'no-cors', // no-cors, *cors, same-origin
                    // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                    // credentials: 'same-origin', // include, *same-origin, omit
                    headers: {
                        'Content-Type': 'application/json'
                        // 'Content-Type': 'application/x-www-form-urlencoded',
                    }
                })
                    .then((response) => {
                        return response.json();
                    })
                    .then((data) => {

                        console.log(data);
                        this.awards.scholarships = data.scholarships;
                        this.awards.honors = data.honors;

                        console.log(this.awards);
                    });


            },
        },

        mounted() {

           this.getWork();
           this.getSkills();
           this.getEducation();
           this.getAwards();

        }
    }
</script>

<style>

</style>
