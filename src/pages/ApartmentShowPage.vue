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
        },
        getImgUrl(apartment) {
            return `http://127.0.0.1:8000/storage/${apartment.images}`;
        },
    },
    mounted() {
        this.data();
    }
}
</script>

<template>
    <div class="container">
        <div class="card">
            <h1>{{ apartment.name }}</h1>

            <div class="carousel-inner">
                <div class="card-image p-0 rounded-3 carousel-item active" :class="{ active: index === 0 }">
                    <img :src="getImgUrl(apartment)" class="card-img-top p-2 d-block w-100"
                        style="height: 300px; object-fit: contain;" alt="" />
                </div>
            </div>
            <div class="card-body">

                <p><strong>Description:</strong> {{ apartment.description }}</p>
                <p><strong>Address:</strong> {{ apartment.address }}</p>
                <p><strong>services:</strong></p>

                <div class="d-flex align-items-center" v-for="service in apartment.services">
                    <i class="">{{ service.icon }}</i>
                    <p>{{ service.name }}</p>
                </div>

            </div>

            <p><strong>Rooms:</strong> {{ apartment.room }}</p>
            <p><strong>Beds:</strong> {{ apartment.bed }}</p>

            <TomTomMaps></TomTomMaps>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../../scss/partials/mixins" as *;
@use "../../scss/partials/variables" as *;
</style>