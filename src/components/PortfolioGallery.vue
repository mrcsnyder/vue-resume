<template>

<div>

    <b-img thumbnail v-b-modal="'modal-'+ProjectId" @click="getProjectImages(ProjectId)" :src="mainImage" />

    <b-modal header-bg-variant="dark"
             header-text-variant="light"
             body-bg-variant="dark"
             body-text-variant="light"
             hide-footer="true"
             size="xl"
             :id="'modal-'+ProjectId"
             :title="(this.currentImg + 1)+'/'+gallery.length+' '+ProjectTitle">

        <div class="portfolio-gallery" v-if="gallery.length > 0">

            <b-img class="img-fluid" fluid-grow :src="'http://resume-api.thisdudecodes.com/images/'+gallery[this.currentImg].file_name"/>
            <p>{{gallery[this.currentImg].description}}</p>

            <b-icon @click="galleryPrev" icon="chevron-left" font-scale="4" class="prev"/>
            <b-icon @click="galleryNext" icon="chevron-right" font-scale="4" class="next"/>

        </div>

    </b-modal>

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
            }
        }

    }

</script>

<style scoped>

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


</style>
