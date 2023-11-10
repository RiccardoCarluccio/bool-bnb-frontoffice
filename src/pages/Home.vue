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
  },
  mounted() {
    this.loadData();
  },
};
</script>

<template>
  <div class="container" v-for="apartment in apartments" :key="apartment.id">
    <div class="row">
      <div class="d-flex justify-content-center">
        <div class="col-3 p-2 m-3" style="border: .1px solid black">
          <div class="card-image p-0 rounded-3">
            <img src="{{ apartment.image }}" class="card-img-top rounded-0" alt="">
          </div>
          <div class="card-body h-50">
            <div class="row d-flex">
              <h2></h2>
              <span class="text-decoration-none p-2 text-center">{{ apartment.name }}</span>
              <span class="text-decoration-none p-2 text-center">{{ apartment.address }}</span>
              <span class="text-decoration-none p-2 text-center">{{ apartment.description }}</span>
              <span class="text-decoration-none p-2 text-center"></span>
              <router-link :to="{ name:'apartments.show', params: { id: apartment.id }}">Singolo appartmaneto</router-link>
            </div>
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
