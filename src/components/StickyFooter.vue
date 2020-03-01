<template>
    <div>
      <p class="text-center"><b-icon-code-slash class="text-muted" font-scale="2"></b-icon-code-slash> thisdudecodes.com<br/>&copy; {{this.year.getFullYear()}}</p>

    </div>
</template>

<script>

    export default {
        name: 'StickyFooter',

        data() {
            return {
                year: new Date()
            }
        },

        components: {

        }
    }
</script>

<style>

</style>
