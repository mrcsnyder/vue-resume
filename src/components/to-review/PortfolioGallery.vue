<template>

    <div>

     <b-img data-toggle="modal" v-b-modal="'modal-'+ProjectId" @click="getProjectImages(ProjectId)" thumbnail :src="mainImage" />

        <div class="" id="">

            <b-modal
                     header-text-variant="light"
                     body-text-variant="light"
                     :hide-header-close="true"
                     :hide-footer="true"
                     size="xl"
                     :id="'modal-'+ProjectId"
                     scrollable
            >

                <template v-if="gallery.length > 0" v-slot:modal-title="{ close }">
                    <b-button size="sm" class="float-right" variant="dark" @click="close()">
                        &times;
                    </b-button>

                    <div class="w-100">

                        <div class="text-center">
                            <b-icon @click="galleryPrev" icon="caret-left" font-scale="1" class="prev"></b-icon>
                            <span class="gallery-counter ml-2 mr-2">{{(currentImg + 1)+'/'+gallery.length}}</span>
                            <b-icon @click="galleryNext" icon="caret-right" font-scale="1" class="next"></b-icon>
                        </div>

                    <div class="mt-1">

                     <span class="">{{gallery[currentImg].description}}</span>
                    </div>

                    </div>

                </template>

            <div class="" v-if="gallery.length > 0">
                <b-img class="img-fluid" fluid-grow :src="'http://resume-api.thisdudecodes.com/images/'+gallery[this.currentImg].file_name" />

            </div>

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

                let self = this;

                //reset gallery index to zero
                self.currentImg = 0;

                const url = self.urlPre + 'portfolio-project/'+id;

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

                        self.gallery = data;
                        console.log(self.gallery);
                    })
                    .catch((error) => {
                    self.errors = error.errors;
                    console.log(self.errors);
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


        }

    }

</script>

<style scoped>

    .gallery-description {
        font-size: 1rem;
    }

    .gallery-counter{
        font-size: 1.4rem;
    }

    /* Next & previous buttons */
    .prev,
    .next {
        cursor: pointer;
        width: auto;
        padding: .2rem;
        color: #777777;
        font-weight: bold;
        font-size: 2rem !important;
        transition: 0.6s ease;
        user-select: none;
        -webkit-user-select: none;
    }

    /* Position the "next button" to the right */
    .next {
        /*right: 0;*/
        border-radius: 3px 0 0 3px;
    }

    /* On hover, add a black background color with a little bit see-through */
    .prev:hover,
    .next:hover {
        background-color: rgba(119, 119, 119, 0.3);
    }


</style>
