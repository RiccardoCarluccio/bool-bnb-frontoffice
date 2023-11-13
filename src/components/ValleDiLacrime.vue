<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        searchText: '',                       //indirizzo salvato dall'utente
        results: [],                          //risultati indirizzi                     DA CANCELLARE?
        apartments: [],                       //risultati BnB
      }
    },
    methods: {
      getAddress() {                          //chiamata axios per trovare indirizzi, latitudine e longitudine
        axios.get(`https://api.tomtom.com/search/2/geocode/${this.searchText}.json?key=G3UqwADY39DYhuxHmuH49Pv68jOXjJTW`)
          .then((res) => {
            this.results = res.data.results;                                  //tutta la lista di indirizzi
            const firstResult = res.data.results[0];                          //indirizzo più pertinente (primo della lista risultati)
            if(firstResult) {
              const latitude = firstResult.position.lat;                      //"latitudine" e "longitudine" vengono rese disponibili come variabili
              const longitude = firstResult.position.lon;
              this.getApartmentsWithinRadius(latitude, longitude);            //viene richiamata la funzione di calcolo distanza dal punto di ricerca
            }
         });
      },
    },
  }
</script>

<template>
  <div class="container">
    <input class="text-center" type="text" v-model="searchText" @keyup="getAddress" placeholder="Inserisci un indirizzo">       <!-- la ricerca avviene alla pressione di ogni tasto -->
    <button @click="getAddress" type="submit" class="btn cerca_color mx-2">Cerca</button>

    <div v-if="results.length > 0">
      <h2>Lista indirizzi più pertinenti:</h2>
      <ul>
        <li v-for="(result, index) in results" :key="index">
          {{ result.address.freeformAddress }}                        <!-- "freeformAddress" è una chiave dell'API TomTom -->
        </li>
      </ul>
    </div>
  </div>  
</template>

<style scoped lang="scss">
</style>