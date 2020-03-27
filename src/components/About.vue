<template>

            <div class="mx-auto">

        <personal-details :personal="personal"/>

            </div>

</template>

<script>

    import PersonalDetails from "./PersonalDetails";
    export default {
        name: 'About',
        components: {
            PersonalDetails,

        },

        data() {
            return {
                personal: [],
                urlPre: 'http://resume-api.thisdudecodes.com/api/'
            }
        },

        methods:{

            //get personal details from endpoint
            getPersonal() {

                const url = this.urlPre + 'personal-details';

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

                        this.personal = data;

                        console.log(this.personal);
                    });


            },

        },

        mounted() {

            this.getPersonal();

        }
    }
</script>

<style>

</style>