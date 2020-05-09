<template>

    <div>

     <b-img data-toggle="modal" v-b-modal="'modal-'+ProjectId" @click="getProjectImages(ProjectId)" thumbnail :src="mainImage" />

        <div class="lightbox" id="">
            <b-modal
                     header-text-variant="light"

                     body-text-variant="light"
                     :hide-footer="true"
                     size="xl"
                     :id="'modal-'+ProjectId"
                     scrollable

            >
                <template v-if="gallery.length > 0" v-slot:modal-title>
                    <span class="gallery-counter">{{(currentImg + 1)+'/'+gallery.length}}</span>
                    <b-container fluid class="modalImg mt-1">

                        <b-row class="">
                            <b-col class="" cols="12"><span class="gallery-description">{{gallery[currentImg].description}}</span></b-col>
                        </b-row>

                    </b-container>

                </template>

            <b-icon @click="galleryPrev" icon="chevron-left" font-scale="4" class="prev"></b-icon>
            <div class="" v-if="gallery.length > 0">
                <b-img class="img-fluid" fluid-grow :src="'http://resume-api.thisdudecodes.com/images/'+gallery[this.currentImg].file_name" />

            </div>

            <b-icon @click="galleryNext" icon="chevron-right" font-scale="4" class="next"></b-icon>
            </b-modal>
        </div>




    </div>


</template>

<script>
    export default {
        name: 'PortfolioGallery',

        components: {

        },

        data() {
            return{
                currentImg: 0,
                gallery: [],
                zoomed: false,

            }
        },

        props: {
            ProjectId: Number,
            ProjectTitle: String,
            urlPre: String,
            mainImage: String,
        },

        methods: {

            getProjectImages(id){

                //reset gallery index to zero
                this.currentImg = 0;

                const url = this.urlPre + 'portfolio-project/'+id;

                fetch(url, {
                    method: 'GET', // *GET, POST, PUT, DELETE, etc.
                    //mode: 'no-cors', // no-cors, *cors, same-origin
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

                        this.gallery = data;
                        console.log(this.gallery);
                    });

            },

            galleryNext(){

                if(this.currentImg < (this.gallery.length - 1)){
                    this.currentImg +=1;
                }

                else{
                    // go to first image if on the last image and next is clicked
                    this.currentImg = 0;
                }

            },

            galleryPrev(){
                if(this.currentImg > 0){

                    this.currentImg --;

                }

                else{
                    // go to the last image if going one past zero
                    this.currentImg = this.gallery.length - 1;
                }
            },

            zoomGallery(){

                let galleryDiv = document.getElementById("galleryDiv");
                galleryDiv.classList.remove("gallery-img-wrapper");
                this.zoomed = true;

            },


        }

    }

</script>

<style scoped>


    .gallery-description {
        font-size: 1rem;
        /*line-height: 1 !important;*/

    }

    .gallery-counter{
        font-size: 1rem;
    }

    /* Next & previous buttons */
    .prev,
    .next {
        cursor: pointer;
        position: absolute;
        top: 50%;
        width: auto;
        padding: 16px;
        margin-top: -50px;
        color: white;
        font-weight: bold;
        font-size: 20px;
        transition: 0.6s ease;
        border-radius: 0 3px 3px 0;
        user-select: none;
        -webkit-user-select: none;
    }

    /* Position the "next button" to the right */
    .next {
        right: 0;
        border-radius: 3px 0 0 3px;
    }

    /* On hover, add a black background color with a little bit see-through */
    .prev:hover,
    .next:hover {
        background-color: rgba(0, 0, 0, 0.8);
    }


    /*.modal-backdrop.in {*/
    /*    background-color: rgba(193, 66, 66, 1) !important;*/
    /*}*/



</style>
