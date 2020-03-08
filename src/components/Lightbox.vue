<template>

    <div>
        <img
                @click="getProjectImages(ProjectId)"

                :src="'http://resume-api.thisdudecodes.com/images/thmb-'+mainPhoto"

        >
<!--        <transition name="fade" mode="out-in">-->
<!--            <div @click.stop="bg = !bg" class="light-box__bg" v-if="bg"></div>-->
<!--        </transition>-->

        <div>
            <div :id="ProjectId" class="modal">
                <span class="close cursor" @click="closeModal(ProjectId)">&times;</span>
                <div class="modal-content">

                <div class="mySlides">
                    <img

                            v-if="gallery.length > 0"
                            :src="'http://resume-api.thisdudecodes.com/images/'+gallery[this.currentImg].file_name"
                            class="img-fluid mx-auto"
                    >
                </div>

                <!-- Next/previous controls -->
                <a class="prev" @click="galleryPrev">&#10094;</a>
                <a class="next" @click="galleryNext">&#10095;</a>

                <!-- Caption text -->
                <div class="caption-container">
                    <p id="caption"></p>
                </div>

            </div>


        </div>
            </div>

    </div>


</template>

<script>
    export default {
        name: 'Lightbox',

        components: {


        },

        data() {
            return{
                currentImg: 0,
                gallery: [],
                bg: true,
                count:true,

            }
        },

        props: {
            ProjectId: Number,
            ProjectTitle: String,
            urlPre: String,
            mainPhoto: String,
        },

        methods: {

            // lightboxEffect(curr) {
            //     this.currentImage = curr;
            //     this.bg = !this.bg;
            // },

            getProjectImages(id){

                // this.bg = !this.bg;


                document.getElementById(id).style.display = "block";
                // document.getElementsByClassName("mySlides").style.display="block";
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

            closeModal(id){

                document.getElementById(id).style.display = "none";

            },
        }

    }

</script>

<style>

    /* The Modal (background) */
    .modal {
        display: none;
        position: fixed;
        z-index: 1;
        padding-top: 100px;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: black;
    }

    /* Modal Content */
    .modal-content {
        /*position: relative;*/
        background-color: #fefefe;
        margin: auto;
        padding: 0;
        /*width: 90%;*/
        /*max-width: 1200px;*/
    }

    /* The Close Button */
    .close {
        color: white;
        position: absolute;
        top: 10px;
        right: 25px;
        font-size: 35px;
        font-weight: bold;
    }

    .close:hover,
    .close:focus {
        color: #999;
        text-decoration: none;
        cursor: pointer;
    }

    /* Hide the slides by default */
    .mySlides {
        display: block;
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

    /* Number text (1/3 etc) */
    .numbertext {
        color: #f2f2f2;
        font-size: 12px;
        padding: 8px 12px;
        position: absolute;
        top: 0;
    }

    /* Caption text */
    .caption-container {
        text-align: center;
        background-color: black;
        padding: 2px 16px;
        color: white;
    }

    img.demo {
        opacity: 0.6;
    }

    .active,
    .demo:hover {
        opacity: 1;
    }

    img.hover-shadow {
        transition: 0.3s;
    }

    .hover-shadow:hover {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

</style>