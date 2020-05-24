<template>
    <div>

            <h1 id="resume_header" class="trebuchet lg-headers text-center"><b-icon-file-text font-scale="1"></b-icon-file-text> Resume <a class="btn btn-sm btn-dark" :href="'http://resume-api.thisdudecodes.com/pdf-resume/'+this.resume" target="_blank"><i class="fas fa-download"></i> PDF</a></h1>

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
                resume: '',
                work: [],
                education: [],
                awards: {scholarships: [], honors: []},
                skills: {coding: [], methods_devops: [], software: [], operating_systems: [], business: [] },
                urlPre: 'http://resume-api.thisdudecodes.com/api/',


            }
        },

        components: {
            ResumeEducation,
            ResumeAwards,
            ResumeWork,
            ResumeSkills,

            },


        methods: {

            //get resume filename from endpoint
            getResume() {

                let self = this;

                const url = self.urlPre + 'resume-pdf';

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

                        self.resume = data[0];

                        console.log(self.resume);
                    })
                    .catch((error) => {
                    self.errors = error.errors;
                    console.log(self.errors);
                });

            },
            //get educational background from endpoint
            getWork() {

                let self = this;

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

                        self.work = data;

                        console.log('test'+ self.work);
                    })
                    .catch((error) => {
                    self.errors = error.errors;
                    console.log(self.errors);
                });


            },

            //get skills from endpoint
            getSkills() {

                let self = this;

                const url = self.urlPre + 'skills';

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

                        self.skills = data;
                        self.skills.coding = data.coding;
                        self.skills.methods_devops = data.methods_devops;
                        self.skills.software = data.software;
                        self.skills.operating_systems = data.operating_systems;
                        self.skills.business = data.business;

                        console.log(self.skills);
                    })
                    .catch((error) => {
                    self.errors = error.errors;
                    console.log(self.errors);
                });


            },

            //get educational background from endpoint
            getEducation() {

                let self = this;

                const url = self.urlPre + 'education';

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

                        self.education = data;
                        console.log(self.education);
                    })
                    .catch((error) => {
                        self.errors = error.errors;
                        console.log(self.errors);
                    });


            },

            //get educational awards from endpoint
            getAwards() {

                let self = this;

                const url = self.urlPre + 'education-awards';

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
                        self.awards.scholarships = data.scholarships;
                        self.awards.honors = data.honors;

                        console.log(self.awards);
                    })
                    .catch((error) => {
                        self.errors = error.errors;
                        console.log(self.errors);
                    });


            },
        },

        mounted() {
           let self = this;

           //call the following methods when component is mounted to hit the following resume related endpoints:
           self.getResume();
           self.getWork();
           self.getSkills();
           self.getEducation();
           self.getAwards();

        }
    }
</script>

<style>

</style>
