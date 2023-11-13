<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        searchText: '',                       //indirizzo salvato dall'utente
        results: [],                          //risultati ricerca
      }
    },
    methods: {
      getAddress() {
        axios.get(`https://api.tomtom.com/search/2/geocode/${this.searchText}.json?key=G3UqwADY39DYhuxHmuH49Pv68jOXjJTW`)
          .then((res) => {
            this.results = res.data.results;
          });
      },
    },
  }
</script>

<template>
  <div class="container">
    <input class="text-center" type="text" v-model="searchText" @keyup.enter="getAddress" placeholder="Inserisci un indirizzo">
    <button @click="getAddress" type="submit" class="btn cerca_color mx-2">Cerca</button>
  </div>
</template>

<style scoped lang="scss">
</style>