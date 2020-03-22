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
                    <h2 class="trebuchet lg-headers text-center">Skills <i class="fas fa-code"></i></h2>

                    <h5 class="trebuchet text-muted">Coding</h5>
                    <table class="table calibri">

                        <tbody>

                        <tr class="d-flex">
                            <td class="col-6">Aptitude to Learn Unlisted Skill</td>
                            <td class="col-6"><div class="rating"><div class="stars"></div><div class="back" style="width:98%;"></div></div></td>
                        </tr>


                        <tr class="d-flex">
                            <td class="col-6">ASP.NET MVC</td>
                            <td class="col-6"><div class="rating"><div class="stars"></div><div class="back" style="width:75%;"></div></div></td>
                        </tr>

                        <tr class="d-flex">
                            <td class="col-6">Bootstrap 3/4</td>
                            <td class="col-6"><div class="rating"><div class="stars"></div><div class="back" style="width:95%;"></div></div></td>
                        </tr>

                        <tr class="d-flex">
                            <td class="col-6">C#</td>
                            <td class="col-6"><div class="rating"><div class="stars"></div><div class="back" style="width:83%;"></div></div></td>
                        </tr>

                        <tr class="d-flex">
                            <td class="col-6">HTML5/CSS3</td>
                            <td class="col-6"><div class="rating"><div class="stars"></div><div class="back" style="width:95%;"></div></div></td>
                        </tr>

                        <tr class="d-flex">
                            <td class="col-6">Java</td>
                            <td class="col-6"><div class="rating"><div class="stars"></div><div class="back" style="width:70%;"></div></div></td>
                        </tr>

                        <tr class="d-flex">
                            <td class="col-6">Javascript</td>
                            <td class="col-6"><div class="rating"><div class="stars"></div><div class="back" style="width:92%;"></div></div></td>
                        </tr>

                        <tr class="d-flex">
                            <td class="col-6">jQuery</td>
                            <td class="col-6"><div class="rating"><div class="stars"></div><div class="back" style="width:95%;"></div></div></td>
                        </tr>

                        <tr class="d-flex">
                            <td class="col-6">Laravel</td>
                            <td class="col-6"><div class="rating"><div class="stars"></div><div class="back" style="width:95%;"></div></div></td>
                        </tr>

                        <tr class="d-flex">
                            <td class="col-6">PHP</td>
                            <td class="col-6"><div class="rating"><div class="stars"></div><div class="back" style="width:85%;"></div></div></td>
                        </tr>


                        <tr class="d-flex">
                            <td class="col-6">Responsive Design</td>
                            <td class="col-6"><div class="rating"><div class="stars"></div><div class="back" style="width:90%;"></div></div></td>
                        </tr>

                        <tr class="d-flex">
                            <td class="col-6">Ruby</td>
                            <td class="col-6"><div class="rating"><div class="stars"></div><div class="back" style="width:80%;"></div></div></td>
                        </tr>


                        <tr class="d-flex">
                            <td class="col-6">Ruby on Rails</td>
                            <td class="col-6"><div class="rating"><div class="stars"></div><div class="back" style="width:85%;"></div></div></td>
                        </tr>


                        <tr class="d-flex">
                            <td class="col-6">SQL</td>
                            <td class="col-6"><div class="rating"><div class="stars"></div><div class="back" style="width:85%;"></div></div></td>
                        </tr>

                        <tr class="d-flex">
                            <td class="col-6">Symfony</td>
                            <td class="col-6"><div class="rating"><div class="stars"></div><div class="back" style="width:85%;"></div></div></td>
                        </tr>


                        <tr class="d-flex">
                            <td class="col-6">Visual Basic</td>
                            <td class="col-6"><div class="rating"><div class="stars"></div><div class="back" style="width:75%;"></div></div></td>
                        </tr>

                        <tr class="d-flex">
                            <td class="col-6">Vue.js</td>
                            <td class="col-6"><div class="rating"><div class="stars"></div><div class="back" style="width:75%;"></div></div></td>
                        </tr>

                        <tr class="d-flex">
                            <td class="col-6">Wordpress</td>
                            <td class="col-6"><div class="rating"><div class="stars"></div><div class="back" style="width:80%;"></div></div></td>
                        </tr>

                        </tbody>
                    </table>

                    <h5 class="trebuchet text-muted">Methodologies/DevOps</h5>
                    <table class="table calibri">

                        <tbody>

                        <tr class="d-flex">
                            <td class="col-6">Agile Development</td>
                            <td class="col-6"><div class="rating"><div class="stars"></div><div class="back" style="width:95%;"></div></div></td>
                        </tr>

                        <tr class="d-flex">
                            <td class="col-6">Docker</td>
                            <td class="col-6"><div class="rating"><div class="stars"></div><div class="back" style="width:80%;"></div></div></td>
                        </tr>

                        <tr class="d-flex">
                            <td class="col-6">LEMP</td>
                            <td class="col-6"><div class="rating"><div class="stars"></div><div class="back" style="width:80%;"></div></div></td>
                        </tr>


                        <tr class="d-flex">
                            <td class="col-6">VPS</td>
                            <td class="col-6"><div class="rating"><div class="stars"></div><div class="back" style="width:85%;"></div></div></td>
                        </tr>



                        </tbody>
                    </table>


                    <h5 class="trebuchet text-muted">Software</h5>
                    <table class="table calibri">

                        <tbody>

                        <tr class="d-flex">
                            <td class="col-6">Adobe Flash</td>
                            <td class="col-6"><div class="rating"><div class="stars"></div><div class="back" style="width:70%;"></div></div></td>
                        </tr>

                        <tr class="d-flex">
                            <td class="col-6">Adobe Photoshop</td>
                            <td class="col-6"><div class="rating"><div class="stars"></div><div class="back" style="width:75%;"></div></div></td>
                        </tr>

                        <tr class="d-flex">
                            <td class="col-6">Git/Github</td>
                            <td class="col-6"><div class="rating"><div class="stars"></div><div class="back" style="width:90%;"></div></div></td>
                        </tr>

                        <tr class="d-flex">
                            <td class="col-6">JetBrains IDE's</td>
                            <td class="col-6"><div class="rating"><div class="stars"></div><div class="back" style="width:80%;"></div></div></td>
                        </tr>

                        <tr class="d-flex">
                            <td class="col-6">Legacy Systems</td>
                            <td class="col-6"><div class="rating"><div class="stars"></div><div class="back" style="width:85%;"></div></div></td>
                        </tr>

                        <tr class="d-flex">
                            <td class="col-6">Microsoft Office</td>
                            <td class="col-6"><div class="rating"><div class="stars"></div><div class="back" style="width:90%;"></div></div></td>
                        </tr>

                        <tr class="d-flex">
                            <td class="col-6">Microsoft Project</td>
                            <td class="col-6"><div class="rating"><div class="stars"></div><div class="back" style="width:70%;"></div></div></td>
                        </tr>

                        <tr class="d-flex">
                            <td class="col-6">Microsoft Visio</td>
                            <td class="col-6"><div class="rating"><div class="stars"></div><div class="back" style="width:70%;"></div></div></td>
                        </tr>

                        <tr class="d-flex">
                            <td class="col-6">SQL Server</td>
                            <td class="col-6"><div class="rating"><div class="stars"></div><div class="back" style="width:75%;"></div></div></td>
                        </tr>

                        <tr class="d-flex">
                            <td class="col-6">Tableau</td>
                            <td class="col-6"><div class="rating"><div class="stars"></div><div class="back" style="width:80%;"></div></div></td>
                        </tr>

                        <tr class="d-flex">
                            <td class="col-6">Tower</td>
                            <td class="col-6"><div class="rating"><div class="stars"></div><div class="back" style="width:80%;"></div></div></td>
                        </tr>

                        <tr class="d-flex">
                            <td class="col-6">Visual Studio</td>
                            <td class="col-6"><div class="rating"><div class="stars"></div><div class="back" style="width:80%;"></div></div></td>
                        </tr>

                        <tr class="d-flex">
                            <td class="col-6">VS Code</td>
                            <td class="col-6"><div class="rating"><div class="stars"></div><div class="back" style="width:80%;"></div></div></td>
                        </tr>


                        </tbody>
                    </table>

                    <h5 class="trebuchet text-muted">Operating Systems</h5>
                    <table class="table calibri">

                        <tbody>

                        <tr class="d-flex">
                            <td class="col-6">Android</td>
                            <td class="col-6"><div class="rating"><div class="stars"></div><div class="back" style="width:90%;"></div></div></td>
                        </tr>
                        <tr class="d-flex">
                            <td class="col-6">iOS</td>
                            <td class="col-6"><div class="rating"><div class="stars"></div><div class="back" style="width:95%;"></div></div></td>
                        </tr>

                        <tr class="d-flex">
                            <td class="col-6">Mac</td>
                            <td class="col-6"><div class="rating"><div class="stars"></div><div class="back" style="width:95%;"></div></div></td>
                        </tr>

                        <tr class="d-flex">
                            <td class="col-6">Windows</td>
                            <td class="col-6"><div class="rating"><div class="stars"></div><div class="back" style="width:95%;"></div></div></td>
                        </tr>


                        </tbody>

                    </table>

                    <h5 class="trebuchet text-muted">Business</h5>
                    <table class="table calibri">

                        <tbody>

                        <tr class="d-flex">
                            <td class="col-6">Ability to Meet Deadlines</td>
                            <td class="col-6"><div class="rating"><div class="stars"></div><div class="back" style="width:100%;"></div></div></td>
                        </tr>

                        <tr class="d-flex">
                            <td class="col-6">Attention to Detail</td>
                            <td class="col-6"><div class="rating"><div class="stars"></div><div class="back" style="width:100%;"></div></div></td>
                        </tr>

                        <tr class="d-flex">
                            <td class="col-6">Collaboration</td>
                            <td class="col-6"><div class="rating"><div class="stars"></div><div class="back" style="width:100%;"></div></div></td>
                        </tr>

                        <tr class="d-flex">
                            <td class="col-6">Customer Service</td>
                            <td class="col-6"><div class="rating"><div class="stars"></div><div class="back" style="width:100%;"></div></div></td>
                        </tr>

                        <tr class="d-flex">
                            <td class="col-6">Learning New Skills</td>
                            <td class="col-6"><div class="rating"><div class="stars"></div><div class="back" style="width:100%;"></div></div></td>
                        </tr>

                        <tr class="d-flex">
                            <td class="col-6">Management Experience</td>
                            <td class="col-6"><div class="rating"><div class="stars"></div><div class="back" style="width:80%;"></div></div></td>
                        </tr>

                        <tr class="d-flex">
                            <td class="col-6">Organization</td>
                            <td class="col-6"><div class="rating"><div class="stars"></div><div class="back" style="width:98%;"></div></div></td>
                        </tr>

                        <tr class="d-flex">
                            <td class="col-6">Phone Etiquette</td>
                            <td class="col-6"><div class="rating"><div class="stars"></div><div class="back" style="width:95%;"></div></div></td>
                        </tr>


                        <tr class="d-flex">
                            <td class="col-6">Responsible</td>
                            <td class="col-6"><div class="rating"><div class="stars"></div><div class="back" style="width:100%;"></div></div></td>
                        </tr>

                        <tr class="d-flex">
                            <td class="col-6">Team work</td>
                            <td class="col-6"><div class="rating"><div class="stars"></div><div class="back" style="width:100%;"></div></div></td>
                        </tr>

                        <tr class="d-flex">
                            <td class="col-6">Typing <br/>(90+ WPM)</td>
                            <td class="col-6"><div class="rating"><div class="stars"></div><div class="back" style="width:99%;"></div></div></td>
                        </tr>


                        </tbody>
                    </table>

                </div>

            </div>


    </div>
</template>

<script>

    import ResumeWork from "./ResumeWork";
    import ResumeEducation from "./ResumeEducation";
    import ResumeAwards from "./ResumeAwards";


    export default {
        name: 'Resume',

        data() {
            return {
                work: [],
                education: [],
                awards: {scholarships: [], honors: []},
                urlPre: 'http://resume-api.thisdudecodes.com/api/'

            }
        },

        components: {
            ResumeEducation,
            ResumeAwards,
            ResumeWork,

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
           this.getEducation();
           this.getAwards();

        }
    }
</script>

<style>

</style>
