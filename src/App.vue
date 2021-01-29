<template>
  <b-container :awards-app="awardsApp" id="app">

    <navbar></navbar>
<div v-if="isLoaded">

  <keep-alive>
    <router-view class="mt-5"
                 :projects-app="projectsApp"
                 :personal-about="personalAbout"
                 :resume-link="resumeLink"
                 :resume-work="resumeWork"
                 :resume-education="resumeEdu"
                 :resume-skills="resumeSkills"
                 :resume-awards="resumeAwards"

    > </router-view>
  </keep-alive>


</div>
    <div v-if="!isLoaded" class="text-center">

        <b-img fluid-grow :src="require('./assets/loading.gif')" />

    </div>


    <sticky-footer></sticky-footer>

  </b-container>
</template>

<script>
import Navbar from "./components/Navbar";

import StickyFooter from "./components/StickyFooter";

export default {
  name: 'App',
  components: {
    Navbar,
    StickyFooter,
  },


  data(){
    return{
      isLoaded: false,
      personalData: [],
      personalAbout:[{
        id: null,
        name:null,
        profileImage:null,
        role:null,
        hobbiesInterests: null,
        intro: null,
        linkedIn: null,
        gitSource: null,

      }],
      resumeLink: null,
      resumeWork: [],
      resumeEdu: [],
      resumeSkills: { coding: [], methods_devops: [], software: [], operating_systems: [], business: [] },
      resumeAwards: { scholarships:[], honors: [] },
      awardsApp: [],
      skillsApp: [],
      projectsApp:[],
      urlPre: 'https://resume-api.thisdudecodes.com/api/',
      title: 'Testerson McTesterson'
    }

  },

  methods: {

    async getPersonalData() {

      const url = this.urlPre + 'personal-with-all/1';

      let self = this;

      await fetch(url, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        // mode: 'no-cors', // no-cors, *cors, same-origin
        // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        // credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        }})
              .then((response) => {
                return response.json();
              })
              .then((data) => {

                self.personalData = data[0];

                //test passing props
               // self.awardsApp = self.personalData.awards;
                self.projectsApp = self.personalData.projects;

                //store personal details:
                self.personalAbout[0].id = self.personalData.id;
                self.personalAbout[0].name = self.personalData.name;
                self.personalAbout[0].profileImage = self.personalData.profile_image;
                self.personalAbout[0].intro = self.personalData.professional_intro;
                self.personalAbout[0].gitSource = self.personalData.git_source;
                self.personalAbout[0].linkedIn = self.personalData.linkedin;
                self.personalAbout[0].role = self.personalData.current_role;
                self.personalAbout[0].hobbiesInterests = self.personalData.hobbies_interests;

                //resume data:
                self.resumeLink = self.personalData.resume;
                self.resumeWork = self.personalData.work;
                self.resumeEdu = self.personalData.education;
                //resume -> skills data:
                self.resumeSkills.coding = self.personalData.coding_skills;
                self.resumeSkills.methods_devops = self.personalData.methods_devops_skills;
                self.resumeSkills.software = self.personalData.software_skills;
                self.resumeSkills.operating_systems = self.personalData.operating_systems_skills;
                self.resumeSkills.business = self.personalData.business_skills;

                //resume -> awards data:
                self.resumeAwards.scholarships = self.personalData.scholarships;
                self.resumeAwards.honors = self.personalData.honors;


                //console.log('Personal Data: '+self.personalData);
                 console.log(self.personalData);
                 self.isLoaded = true;
              })
              .catch((error) => {
                self.errors = error.errors;
                console.log(self.errors);
              });

    },

  },

mounted() {
//call getProjects method when component is mounted
  this.getPersonalData();

},

}
</script>

<style>

  .modal-backdrop {
    background-color: #000000 !important;
    opacity: 1 !important;
  }

  .modal-content{
    border:none !important;
    background-color: #000000 !important;
  }

  .modal-title{
    line-height:1 !important;
    /*display: inline !important;*/

  }

  .modal-header{
    display: inline !important;
    /*text-align: center;*/
  }

  img.img-thumbnail:active {
    border-color: #000000 !important;
    box-shadow: 0 0 0 0.3rem rgb(119, 119, 119) !important;
  }

  img.img-thumbnail:focus {
    border-color: #000000 !important;
    box-shadow: 0 0 0 0.3rem rgb(119, 119, 119) !important;
    outline: none !important;
  }

  img.img-thumbnail:visited {
    border-color: #000000 !important;
    box-shadow: 0 0 0 0.3rem rgb(119, 119, 119) !important;
  }

  .trebuchet {
    font-family: 'Trebuchet MS';
  }


  .portrait-about{
    border: 3px solid #6c757d;
  }

  h1 {
    font-size: 3rem;
  }

  h1 {
    font-size: 2.5rem;
  }

  h2.lg-headers-sub{
    font-size: 1.5rem;
  }


  .calibri {
    font-family: 'Calibri';
  }

  .main-text {
    font-size: 1.3em;
  }

  .nav-tabs .nav-link {
    border: 1px solid #00000014;
    border-top-left-radius: .25rem;
    border-top-right-radius: .25rem;
  }

  .nav-link{
    color: #000000;
  }

  .nav-link:hover{
    color: #000000;
  }

  .icon-link{
    color: #000000;
  }

  .icon-link:hover{
    color: #000000;
  }

  .badge {
    display: inline-block;
    padding: .25em .4em;
    font-size: 100%;
    font-weight: 700;
    line-height: 1;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: .25rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  }

  .h3-resume {
    font-size: 1.45rem;

  }

  .resume-break{
    display:inline-block;
  }

  .rating {
    width: 150px;
    height: 30px;
    position: relative;
    margin-left: auto;
    margin-right: auto;
  }
  .stars {
    background: url(./assets/stars-newer-bg-lg.png);
    z-index: 10;
    position: absolute;
    top: 0;
    left: 0;
  }

  .back {
    background: #000000;
    border-bottom: 1px solid #ffffff;
    border-left: 1px solid #ffffff;
    border-right: 1px solid #ffffff;
    border-top: 1px solid #ffffff;

  }

  .back, .stars {
    width: 100%;
    height: 100%;
  }



  .form-control:focus {
    color: #000000;
    background-color: #fff;
    border-color: #000000;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0,0,0,.20);
  }

  label.error{

    color: black;
    background-color: #d2d6da;
    padding:.5em;
    font-family: calibri;
    font-size: 1.1em;
  }

  label.resume-label {
    font-size: 1.2em;
    font-weight: 900;
  }


  /*media queries*/

  /*max hide tab text */
  @media screen and (max-width: 499px) {
    span.tab-text {
      display: none;
    }

    .school-logo {
      width:35px;
    }

    .h3-school-title{
      font-size: 1rem;
    }


    h2.lg-headers-sub {
      font-size: 1.3rem;
    }


    h1#contact_header{
      font-size:2em;
    }

    h1#contact_header i{
      font-size:1em;
    }



    h1#resume_header{
      font-size:2em;
    }

    h1#resume_header i{
      font-size:1em;
    }


    h1#portfolio_header{
      font-size:2em;
    }

    h1#portfolio_header i{
      font-size:1em;
    }


    h2 {
      font-size:1.7rem;
    }

    img#portrait-img{
      width:150px;
    }


    h1#name_header{
      font-size:2em;
    }



    .rating {
      width: 120px;
      height: 24px;
      position: relative;
      margin-left: auto;
      margin-right: auto;
    }
    .stars {
      background: url(./assets/stars-newer-bg-lg_mobile.png);
      z-index: 10;
      position: absolute;
      top: 0;
      left: 0;
    }

    .back {
      background: #000000;
      border-bottom: 1px solid #ffffff;
      border-left: 1px solid #ffffff;
      border-right: 1px solid #ffffff;
      border-top: 1px solid #ffffff;

    }

    .back, .stars {
      width: 100%;
      height: 100%;
    }


  }

</style>
