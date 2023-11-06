<script>
import axios from "axios";
export default {

    data() {
        return {
            apartments: [],
        };
    },
    methods: {
        data() {
            axios.get("http://127.0.0.1:8000/api/apartments")
                .then((resp) => {
                    this.apartments = resp.data;
                    console.log(resp);
                })
        }

    },
    mounted() {
        this.data();
    }
}
</script>

<template></template>

<style scoped lang="scss">
@use "../../scss/partials/mixins" as *;
@use "../../scss/partials/variables" as *;
</style>