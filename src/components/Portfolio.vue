<template>

    <div class="mb-3">

        <br/>
        <h1 id="portfolio_header" class="text-center trebuchet lg-headers"><b-icon-file-code></b-icon-file-code> Portfolio</h1>
        <p class="main-text calibri">This section is dedicated to some of the work I have completed and felt appropriate to showcase.  If you click on a project image on this page, a navigable gallery will be displayed.  Each image in a gallery includes a  description of the pictured page.  If you click on an accompanying 'More Info' button then you will be able to read more about a particular project.</p>

        <!--beginning of portfolio galleries-->
        <div class="row mx-auto">

            <div class="col-sm-12 mt-5 col-md-6" v-for="project in projectors" :key="project.id">

                <div class="my-gallery" v-for="image in project.images" :key="image.id">


                    <figure @click="getGallery(project.id)" v-if="image.main_img === 1">


                                                <portfolio-gallery :project-id="project.id"
                                                                   :project-title="project.title"
                                                                   :url-pre="urlPre"
                                                                   :fill-gallery="gallery"
                                                                   :main-image="'http://resume-api.thisdudecodes.com/images/thmb-'+image.file_name+''"
                                                                   :gallery-length="galleryLength"
                                                />
                                                 <figcaption itemprop="caption description">{{image.description}}</figcaption>

                                            </figure>
                </div>

                                <h6 class="trebuchet">{{project.title}}</h6>
                                <b-button
                                        v-b-toggle="'collapse-' + project.id"
                                        class="btn btn-dark" data-toggle="collapse">More Info</b-button>
                                <b-collapse :id="'collapse-' + project.id" class="collapse calibri">
                                    <br/>
                                    <p>{{project.full_detail}}</p>
                                </b-collapse>

            </div>

        </div>
        <!--end of portfolio galleries-->

    </div>

</template>

<script>

    import PortfolioGallery from "./PortfolioGallery";
    export default {
        name: 'Portfolio',

        //test endpoint for portfolio projects
        //http://resume-api.thisdudecodes.com/api/portfolio-projects

        components: {

            PortfolioGallery,

        },

        data(){
            return{

                projectors: [],
                gallery:[],
                urlPre: 'http://resume-api.thisdudecodes.com/api/',
                galleryLength: 0,
            }

        },

        methods: {

            getProjectors() {


                const url = this.urlPre + 'portfolio-project-all';

                let self = this;

                fetch(url, {
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

                        self.projectors = data;
                        console.log(self.projectors);
                    })
                    .catch((error) => {
                        self.errors = error.errors;
                        console.log(self.errors);
                    });


            },

            //filter specific project and return all but the main image to pass to PortfolioGallery component
            getGallery(id) {

                // this.gallery = [];

                //get filter all projects to store specific project based on passed id to be able to use in next filter
                let grabProject = this.projectors.filter((project) => project.id === id);

                // filter specific project above and set gallery that is passed as a prop to the PortfolioGallery component
                return grabProject.filter((project) => {

                    this.gallery = project.images.filter((image) => image.main_img === 0);
                    this.galleryLength = this.gallery.length;
                })
            }

        },

        mounted() {

            //call getProjects method when component is mounted
            this.getProjectors();

        },

        
    }

</script>