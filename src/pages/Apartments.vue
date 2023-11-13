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
              <img :src="getImgUrl(apartment)" class="card-img-top rounded-3 d-block img-fluid w-100 h-100"
                style="width: 300px; height: 300px; object-fit: cover;" alt="" />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev">
            <span aria-hidden="true"><i class="fa-solid fa-circle-arrow-left"></i></span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next">
            <span aria-hidden="true"><i class="fa-solid fa-circle-arrow-right"></i></span>
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
  padding-top: 71px;
}

.gallery a {
  text-decoration: none;
  color: #001632;
}

.carousel-indicators button {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  margin: 0 5px;
  background-color: #888;
  /* Colore di sfondo dei pallini non attivi */
}

/* Nascondi le frecce direzionali all'inizio */
.carousel-control-prev,
.carousel-control-next {
  opacity: 0;
  transition: opacity 0.3s ease;
}

/* Mostra le frecce direzionali quando il mouse è sopra il carosello */
.carousel:hover .carousel-control-prev,
.carousel:hover .carousel-control-next {
  opacity: .8;
}

/* Stile per le frecce direzionali */
.carousel-control-prev,
.carousel-control-next {
  font-size: 1rem;
  /* Regola la dimensione delle frecce */
  color: #fff;
  /* Colore delle frecce */
  background: transparent;
  /* Sfondo trasparente */
  border: none;
  /* Senza bordo */
  outline: none;
  /* Senza contorno */
}

// @use "../../scss/partials/mixins" as *;
// @use "../../scss/partials/variables" as *;
</style>