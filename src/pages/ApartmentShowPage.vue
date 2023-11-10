<script>
import axios from "axios";
import TomTomMaps from "../components/TomTomMaps.vue";

export default {
    data() {
        return {
            apartment: {},
            TomTomMaps,
        };
    },
    methods: {
        data() {
            console.log(this.$route.params);
            axios.get("http://127.0.0.1:8000/api/apartments/" + this.$route.params.id)
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

        <!-- <img src="{{ $apartments->image_url }}" alt="{{ $apartments->name }}" style="max-width: 100%;"> -->
        <p><strong>Description:</strong> {{ apartment.description }}</p>
        <p><strong>Address:</strong> {{ apartment.address }}</p>
        <div class="">
            <p><strong>services:</strong></p>

            <div class="d-flex align-items-center" v-for="service in apartment.services">
                <i class="">{{ service.icon }}</i>
                <p>{{ service.name }}</p>
            </div>

        </div>

        <p><strong>Rooms:</strong> {{ apartment.room }}</p>
        <p><strong>Beds:</strong> {{ apartment.bed }}</p>
    </div>

    <TomTomMaps></TomTomMaps>

</template>

<style scoped lang="scss">
@use "../../scss/partials/mixins" as *;
@use "../../scss/partials/variables" as *;
</style>