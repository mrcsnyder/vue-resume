<template>


<div>
    <b-button v-b-modal="'modal-'+ProjectId" @click="getProjectImages(ProjectId)">Launch Gallery</b-button>

    <b-modal :id="'modal-'+ProjectId" :title="ProjectTitle">

        <div v-if="gallery.length > 0">
        <div v-for="image in gallery" :key="image.id">
            <img :src="'http://resume-api.thisdudecodes.com/images/thmb-'+image.file_name"/>
            <p>{{image.file_name}}</p>
        </div>

        </div>
    </b-modal>



</div>




</template>

<script>
    export default {
        name: 'PortfolioGallery',

        components: {


        },


        props: {
            ProjectId: Number,
            ProjectTitle: String,
            gallery: Array,
            getProjectImages: Function,
        }

    }

</script>