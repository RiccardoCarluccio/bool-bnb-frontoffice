<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        searchText: '',                       //indirizzo salvato dall'utente
        results: [],                          //risultati indirizzi
        apartments: [],                       //lista appartamenti salvati nel database
        selectedAddress: {                    //array di oggetti che contiene i dati dell'indirizzo cliccato
          address: {},                        //vengono salvati i dati allo stesso modo di come sono salvati nell'API di TomTom
          position: {},
        },
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
              //this.getApartmentsWithinRadius(latitude, longitude);            //viene richiamata la funzione di calcolo distanza dal punto di ricerca
            }
         });
      },
      getApartmentsWithinRadius() {
        axios.get('http://127.0.0.1:8000/api/apartments')
          .then((res) => {
            res.data.forEach((apartment) => {
              debugger
              const distance = this.haversineDistance(this.selectedAddress.position.lat, this.selectedAddress.position.lon, apartment.latitude, apartment.longitude);
              if(distance < 20) {
                console.log(apartment);
              }
            })
          })
          .catch((error) => {
            console.error('Errore durante la chiamata API:', error);
          })
      },
      selectAddress(result) {
        this.searchText = result.address.freeformAddress;                     //il searchText viene assegnato al valore dell'indirizzo cliccato
        this.selectedAddress = result;                                        //vengono salvati nell'array del "data() return{}" i dettagli dell'indirizzo
        this.getApartmentsWithinRadius();
      },
      haversineDistance(lat1, lon1, lat2, lon2) {
        // Converte le latitudini e longitudini da gradi a radianti
        const toRadians = (angle) => (angle * Math.PI) / 180;
        const R = 6371; // Raggio medio della Terra in km
        const dLat = toRadians(lat2 - lat1);
        const dLon = toRadians(lon2 - lon1);
        const a =
          Math.sin(dLat / 2) * Math.sin(dLat / 2) +
          Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        // Calcola la distanza
        const distance = R * c;
        return distance;
      },
      getApartments() {
        axios.get('http://127.0.0.1:8000/api/apartments')
          .then((res) => {
            this.apartments = res.data;
          })
          .catch((error) => {
            console.error('Errore durante la richiesta API:', error);
          });
      },
    },
    mounted() {
      this.getApartments();
    },
  }
</script>

<template>
  <div class="container">
    <input class="text-center" type="text" v-model="searchText" @keyup="getAddress" @keyup.enter="getApartmentsWithinRadius" placeholder="Inserisci un indirizzo">       <!-- la ricerca avviene alla pressione di ogni tasto -->
    <button @click="getAddress" type="submit" class="btn cerca_color mx-2">Cerca</button>

    <div v-if="results.length > 0">
      <h2>Lista indirizzi più pertinenti:</h2>
      <ul>
        <li class="address-list" v-for="(result, index) in results" :key="index" @click="selectAddress(result)">     <!-- al click del mouse, la barra di ricerca viene completata con l'indirizzo selezionato -->
          {{ result.address.freeformAddress }}                        <!-- "freeformAddress" è una chiave dell'API TomTom -->
        </li>
      </ul>

      <div>
        <h2>Risultato selezionato</h2>
        <h4>{{ selectedAddress.address.freeformAddress }}</h4>
        <p>Latitudine: {{ selectedAddress.position.lat }}</p>
        <p>Longitudine: {{ selectedAddress.position.lon }}</p>
      </div>
    </div>
  </div>
  
  <div class="container">
    <div>

    </div>
  </div>
</template>

<style scoped lang="scss">
  @use "../../scss/partials/mixins" as *;
  @use "../../scss/partials/variables" as *;

  .address-list {
    cursor: pointer;
  }
</style>