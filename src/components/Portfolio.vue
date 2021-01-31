<template>

    <div class="mb-3">

        <br/>
        <h1 id="portfolio_header" class="text-center trebuchet lg-headers"><b-icon-file-code></b-icon-file-code> Project Portfolio</h1>
        <p class="main-text calibri">This section is dedicated to some of the work I have completed and felt appropriate to showcase.  If you click on a project image on this page, a navigable gallery will be displayed.  Each image in a gallery includes a  description of the pictured page.  If you click on an accompanying 'More Info' button then you will be able to read more about a particular project.</p>

        <!--beginning of portfolio galleries-->
        <div class="row mx-auto">

            <div class="col-sm-12 mt-5 col-md-6" v-for="project in this.projectsApp" :key="project.id">

                <div class="my-gallery" v-for="image in project.images" :key="image.id">


                    <figure @click="getGallery(project.id)" v-if="image.main_img === 1">

                                                <portfolio-gallery :project-id="project.id"
                                                                   :project-title="project.title"
                                                                   :fill-gallery="gallery"
                                                                   :key="gallery.file_name"
                                                                   :main-image="'https://resume-api.thisdudecodes.com/images/portfolio-gallery-images/thmb-'+image.file_name+''"
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

        components: {

            PortfolioGallery,

        },

        props:{

            projectsApp: Array,
        },

        data(){
            return{

                gallery:[],
                urlPre: 'https://resume-api.thisdudecodes.com/api/',
            }

        },

        methods: {

            //filter specific project and return all but the main image to pass to PortfolioGallery component
             getGallery(id) {


                     //get filter all projects to store specific project based on passed id to be able to use in next filter
                     let grabProject = this.projectsApp.filter((project) => project.id === id);

                     // filter specific project above and set gallery that is passed as a prop to the PortfolioGallery component
                     return grabProject.filter((project) => {

                         this.gallery = project.images.filter((image) => image.main_img === 0);

                     })

            }

        },

        mounted() {

        },

    }

</script>