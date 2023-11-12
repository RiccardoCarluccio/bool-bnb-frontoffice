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
      <div class="col-xxl-2 col-xl-3 col-lg-4 col-md-6 col-sm-12 m-2 p-2 rounded-3" v-for="apartment in apartments"
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
            <div class="card-image p-0 carousel-item active" :class="{ active: index === 0 }">
              <img :src="getImgUrl(apartment)" class="card-img-top rounded-3 p-2 d-block img-fluid w-100 h-100"
                style="max-height: 300px; min-height: 220px; object-fit: cover;" alt="" />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"><i
                class="fa-solid fa-circle-arrow-left"></i></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"><i
                class="fa-solid fa-circle-arrow-right"></i></span>
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
.gallery {
  color: #001632;
}

.gallery a {
  text-decoration: none;
  color: #001632;
}

.carousel-indicators button {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin: 0 5px;
    background-color: #888; /* Colore di sfondo dei pallini non attivi */
}
// @use "../../scss/partials/mixins" as *;
// @use "../../scss/partials/variables" as *;</style>