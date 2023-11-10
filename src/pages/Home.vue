<script>
import axios from "axios";
export default {
  data() {

    return {
      apartments: [],
      searchQuery: "",
      searchApartment: null,
    };
  },
  computed: {
    filteredApartments() {
      if (!this.searchQuery) {
        return this.apartments;
      }
      return this.apartments.filter((apartment) => {
        return apartment.name
          .toLowerCase()
          .includes(this.searchQuery.toLowerCase());
      });
    },
  },
  methods: {
    loadData() {
      axios.get("http://127.0.0.1:8000/api/apartments").then((resp) => {
        this.apartments = resp.data;
      });
    },
    getImgUrl(apartment) {
      return `http://127.0.0.1:8000/storage/${apartment.images}`;
  },
  },
  mounted() {
    this.loadData();
  },
};
</script>

<template>
  <div class="gallery">
    <div class="row p-3 d-flex justify-content-center">
      <div class="col-xxl-2 col-xl-3 col-lg-4 col-md-8 col-sm-12 m-2 p-2" v-for="apartment in apartments"
        :key="apartment.id">

        <div :id="'carouselExampleIndicators' + apartment.id" class="carousel slide">
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
              aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
              aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
              aria-label="Slide 3"></button>
          </div>
          <div class="carousel-inner">
            <div class="card-image p-0 rounded-3 carousel-item active"
            :class="{ active: index === 0 }">
              <img :src="getImgUrl(apartment)" class="card-img-top p-2 d-block w-100" style="height: 300px; object-fit: contain;"
                alt="" />
            </div>
          </div> 
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

        <div class="card-body h-50">
          <div class="row d-flex">
            <h2></h2>
            <span class="text-decoration-none"><router-link
                :to="{ name: 'apartments.show', params: { id: apartment.id } }">{{ apartment.name }}</router-link></span>
            <span class="text-decoration-none">{{ apartment.address }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "../../scss/partials/mixins" as *;
@use "../../scss/partials/variables" as *;
</style>