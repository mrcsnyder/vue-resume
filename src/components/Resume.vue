<template>
    <div>

            <h1 id="resume_header" class="trebuchet lg-headers text-center"><b-icon-document-text font-scale="1"></b-icon-document-text> Resume <a class="btn btn-sm btn-dark" href="Chris_Snyder_Resume.pdf"><i class="fas fa-download"></i> PDF</a></h1>

            <div class="row">

                <div class="col-lg-8 col-12 mt-2">
                    <h2 class="trebuchet lg-headers"><font-awesome-icon :icon="['fas', 'laptop-code']" /> Professional Experience</h2>
                    <br/>


                    <span class="badge badge-dark mb-2 trebuchet">Nov 2017 - Present</span>
                    <h3 class="trebuchet h3-resume">Full Stack Developer | <span class="resume-break">Triad Learning Systems</span></h3>
                    <p class="calibri">During my tenure with the company I have completed a multitude of projects using AWS, Bootstrap 3/4, C#, CSS3, Docker, Git, HTML5, JavaScript, jQuery, Laravel, SQL, Symfony, and VB Script.  I have maintained an exceptional level of customer service while collaborating with team members on project requirements, involving both front-end & back-end development and have successfully met or exceeded deadlines.  On several occasions I have taken initiative to develop code based solutions to long standing problems without being asked.  In addition, projects I have completed for TLS on my own or as a collaborative effort have had a significant positive result on company revenue.</p>
                    <hr/>

                    <span class="badge badge-dark mb-2 trebuchet">2013 - Present</span>
                    <h3 class="trebuchet h3-resume">Freelance Web Developer</h3>
                    <p class="calibri">Since earning my first software/web development related certificate in June 2013 at Spokane Community College I have worked on several projects part time while continuing to pursue my education which has also helped me to gain experience in languages or technology that I did not learn while attending school. Some of the projects I have completed are available to view in the Portfolio section of this webpage!</p>
                    <hr/>

                    <span class="badge badge-dark mb-2 trebuchet">Jan 2010 - Feb 2012</span>
                    <h3 class="trebuchet h3-resume">IT Help Desk | <span class="resume-break">Team Spirit America</span></h3>
                    <p class="calibri">Helped staff in troubleshooting and resolving technical computing issues, repaired malfunctioning or otherwise inoperable computers and hardware when necessary, served as customer support and technical liaison to CEO, staff members and vendors. Monitored internet based lead providing partner companies that TSA did business with utilizing proprietary software.</p>
                    <hr/>


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

    import ResumeEducation from "./ResumeEducation";
    import ResumeAwards from "./ResumeAwards";

    export default {
        name: 'Resume',

        data() {
            return {
                education: [],
                awards: {scholarships: [], honors: []},
                urlPre: 'http://resume-api.thisdudecodes.com/api/'

            }
        },

        components: {
            ResumeEducation,
            ResumeAwards,

            },


        methods: {

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

           this.getEducation();
           this.getAwards();

        }
    }
</script>

<style>

</style>
