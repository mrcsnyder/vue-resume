<template>

    <div>

        <b-img data-toggle="modal" v-b-modal="'modal-'+ProjectId" thumbnail :src="mainImage" />


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

                <template v-if="fillGallery.length > 0 && this.currentImg <= fillGallery.length" v-slot:modal-title="{ close }">
                    <b-button size="sm" class="float-right" variant="dark" @click="close()">
                        &times;
                    </b-button>

                    <div class="w-100">

                        <div class="text-center">
                            <b-icon @click="galleryPrev" icon="caret-left" font-scale="1" class="prev"></b-icon>
                            <span class="gallery-counter ml-2 mr-2">{{(currentImg + 1)+'/'+fillGallery.length}}</span>
                            <b-icon @click="galleryNext" icon="caret-right" font-scale="1" class="next"></b-icon>
                        </div>

                        <div class="mt-1">
                            <span class="">{{fillGallery[currentImg].description}}</span>
                        </div>

                    </div>

                </template>

                <div class="" v-if="fillGallery.length > 0 && this.currentImg <= fillGallery.length">
                    <b-img class="img-fluid" fluid-grow :src="'http://resume-api.thisdudecodes.com/images/'+fillGallery[this.currentImg].file_name" />

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
            }
        },

        props: {
            ProjectId: Number,
            ProjectTitle: String,
            urlPre: String,
            mainImage: String,
            fillGallery: Array,
        },

        methods: {

            galleryNext(){

                if(this.currentImg < (this.fillGallery.length - 1)){
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
                    this.currentImg = this.fillGallery.length - 1;
                }
            },


        },

        mounted() {

        },

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
