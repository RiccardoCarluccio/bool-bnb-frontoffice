<script>
import axios from "axios";
export default {

    data() {
        return {
            apartment: {},
        };
    },
    methods: {
        data() {
          
            axios.get("http://127.0.0.1:8000/api/apartments/"  + this.$route.params.id)
                .then((resp) => {
                   
                    this.apartment = resp.data;
                   
                })
        }

    },
    mounted() {
        this.data();
    }
}
</script>

<template>
<div class="container">
    <h1>{{ apartment.name }}</h1>
</div>
</template>

<style scoped lang="scss">
@use "../../scss/partials/mixins" as *;
@use "../../scss/partials/variables" as *;
</style>