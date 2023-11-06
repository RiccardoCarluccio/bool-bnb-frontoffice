<script>
import axios from "axios";
export default {
  data() {
    return {
      searchQuery: "",
      searchResults: [],
    };
  },
  methods: {
    searchApartments() {
      // API REQUEST
      axios
        .get("APIAPIAPIAPIAPI", {
          params: { query: this.searchQuery },
        })
        .then((response) => {
          this.searchResults = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<template>
  <div>
    <nav class="navbar bg-body-tertiary">
      <div class="container-fluid">
        <form class="d-flex" role="search" @submit.prevent="searchApartments">
          <input
            v-model="searchQuery"
            class="form-control me-2"
            type="search"
            placeholder="Search for apartments"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </nav>
    <ul>
      <li v-for="apartment in searchResults" :key="apartment.id">
        {{ apartment.title }}
      </li>
    </ul>
  </div>
</template>
