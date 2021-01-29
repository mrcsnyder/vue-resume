<template>

        <b-nav tabs class="mt-3" align="center">
            <b-nav-item to="/"><b-icon-person-fill></b-icon-person-fill> About</b-nav-item>
            <b-nav-item to="/resume"><b-icon-file-text></b-icon-file-text> Resume</b-nav-item>
            <b-nav-item to="/portfolio"><b-icon-file-code></b-icon-file-code> Project Portfolio</b-nav-item>
            <b-nav-item to="/contact"><b-icon-envelope-fill></b-icon-envelope-fill> Contact</b-nav-item>
        </b-nav>

</template>

<script>

    export default {
        name: 'Navbar',
        components: {

        }
    }
</script>

<style scoped>

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
</style>
