<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        searchText: '',                       //indirizzo salvato dall'utente
        results: [],                          //risultati indirizzi
        apartments: [],
        nearbyApartments: [],
        selectedAddress: {                    //array di oggetti che contiene i dati dell'indirizzo cliccato
          address: {},                        //vengono salvati i dati allo stesso modo di come sono salvati nell'API di TomTom
          position: {
            lat: undefined,
            lon: undefined
          },
        },
      }
    },
    methods: {
      getAddress() {                          //chiamata axios per trovare indirizzi, latitudine e longitudine
        axios.get(`https://api.tomtom.com/search/2/geocode/${this.searchText}.json?key=G3UqwADY39DYhuxHmuH49Pv68jOXjJTW`)
          .then((res) => {
            this.results = res.data.results;                                  //tutta la lista di indirizzi
         });
      },
      getApartmentsWithinRadius() {
        if(this.selectedAddress.position.lat === undefined || this.selectedAddress.position.lon === undefined) 
          return

        axios.get('http://127.0.0.1:8000/api/apartments')
          .then((res) => {
            res.data.forEach((apartment) => {
              const distance = this.haversineDistance(this.selectedAddress.position.lat, this.selectedAddress.position.lon, apartment.latitude, apartment.longitude);
              if(distance < 20) {
                const nearbyApartmentData = {
                  id: apartment.id,
                  address: apartment.address,
                }
                this.nearbyApartments.push(nearbyApartmentData);
                console.log(apartment);
              }
            })
          })
          .catch((error) => {
            console.error('Errore durante la chiamata API:', error);
          })
      },
      selectAddress(result) {
        if(result) {
          this.searchText = result.address.freeformAddress;                     //il searchText viene assegnato al valore dell'indirizzo cliccato
          this.selectedAddress = result;                                        //vengono salvati nell'array del "data() return{}" i dettagli dell'indirizzo
        } else {
          this.searchText = this.results[0].address.freeformAddress;                     //il searchText viene assegnato al valore dell'indirizzo cliccato
          this.selectedAddress = this.results[0];
        }

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
    <input class="text-center" type="text" v-model="searchText" @keyup="getAddress" @keyup.enter="selectAddress()" placeholder="Inserisci un indirizzo">       <!-- la ricerca avviene alla pressione di ogni tasto -->
    <button @click="getAddress" type="submit" class="btn cerca_color mx-2">Cerca</button>

    <div v-if="results.length > 0">
      <h2>Lista indirizzi più pertinenti:</h2>
      <ul>
        <li class="address-list" v-for="(result, index) in results" :key="index" @click="selectAddress(result)">     <!-- al click del mouse, la barra di ricerca viene completata con l'indirizzo selezionato -->
          {{ result.address.freeformAddress }}                        <!-- "freeformAddress" è una chiave dell'API TomTom -->
        </li>
      </ul>

      <div>
        <h2>Appartamenti nelle vicinanze</h2>

        <div v-for="nearbyApartment in nearbyApartments">
          <a :href="/apartment/ + nearbyApartment.id"><h4>{{ nearbyApartment.address }}</h4></a>
        </div>
      </div>
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