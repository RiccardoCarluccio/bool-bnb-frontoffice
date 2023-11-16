<script>

// import axios from "axios";
// import TomTomMaps from "../components/TomTomMaps.vue";
// import TheCalendario from '../components/TheCalendario.vue';
// export default {
//     data() {
//         return {
//             apartment: {},
//             TomTomMaps,
//             TheCalendario,
//         };
//     },
//     methods: {
//         data() {
//             console.log(this.$route.params);
//             axios.get("http://127.0.0.1:8000/api/apartments/" + this.$route.params.id)
//                 .then((resp) => {
//                     this.apartment = resp.data;
//                 })
//         }
//     },
//     mounted() {
//         this.data();
//     }
// }


import axios from "axios";
import TomTomMaps from "../components/TomTomMaps.vue";
import Contacts from "../components/Contacts.vue";
import TheCalendario from "../components/TheCalendario.vue";

export default {
    components: {
        TomTomMaps,
        Contacts,
        TheCalendario,
    },
    data() {
        return {
            apartment: {},
        };
    },
    methods: {
        fetchData() {
            console.log(this.$route.params);
            axios.get("http://127.0.0.1:8000/api/apartments/" + this.$route.params.id)
                .then((resp) => {
                    this.apartment = resp.data;
                })
                .catch((error) => {
                    console.error("Error fetching apartment data:", error);
                });
                
        },
        getImgUrl(apartment) {
      return `http://127.0.0.1:8000/storage/${apartment.images}`;
  },
    },
    mounted() {
        this.fetchData();
        
    },
    /* components: {
        TomTomMaps,
        TheCalendario,
        Contacts,
    }, */
}
</script>

<!-- <template>
    <div class="container">
        <h1>{{ apartment.name }}</h1>
        <p><strong>Descrizione:</strong> {{ apartment.description }}</p>
        <p><strong>Indirizzo:</strong> {{ apartment.address }}</p>
        <div class="">
            <p><strong>Servizi:</strong></p>

            <div class="d-flex align-items-center" v-for="service in apartment.services">
                <i class="">{{ service.icon }}</i>
                <p>{{ service.name }}</p>
            </div>

        </div>

        <p><strong>Stanze:</strong> {{ apartment.room }}</p>
        <p><strong>Letti:</strong> {{ apartment.bed }}</p>

        <Contacts :apartment_id="apartment.id"></Contacts>
    </div>
    
    <TomTomMaps></TomTomMaps>
</template> -->


<template>
    <div class="container">
        <div class="row">

            <div class="d-flex justify-content-between text-black">
                <div class="nome">

                </div>

                <div class="">
                    <a class="text-black distanza" href=""> <i class="fa-solid fa-arrow-up-from-bracket distanza-icon"></i> Condividi</a>
                    <a class="text-black distanza" href=""> <i class="fa-regular fa-heart distanza-icon"></i> salva</a>
                </div>
            </div>

            <div class="container">
                <div class="row distanza-sopra">
                    <!-- <div class="col-6">
                        <button class="border-0 bg-transparent efetto">
                            <div class="img-uno">
                                <img class="rounded-start-4 due"
                                    src="../assets/img/b7c9264d-73c9-45c3-882e-6e9577d63d68.webp" alt="">
                            </div>
                        </button>
                    </div>

                    <div class="col-3">
                        <button class="border-0 bg-transparent efetto">
                            <div class="img-cont ">
                                <img class="uno " src="../assets/img/062ef52a-9b4f-4301-9413-e757d1758b3f.webp" alt="">
                            </div>
                        </button>
                        <button class="border-0 bg-transparent efetto">
                            <div class="img-cont">
                                <img class="uno " src="../assets/img/150e47d8-76b8-4233-8724-cbbd12880848.webp" alt="">
                            </div>
                        </button>
                    </div>

                    <div class="col-3">
                        <button class="border-0 bg-transparent efetto">
                            <div class="img-cont">
                                <img class="uno angolo-alto" src="../assets/img/4588d88f-0224-42f4-94cb-594f4d362fba.webp" alt="">
                            </div>
                        </button>
                        <button class="border-0 bg-transparent efetto">
                            <div class="img-cont">
                                <img class="uno angolo-basso" src="../assets/img/e922f0c3-9a3d-4877-983a-56849ce92e18.webp" alt="">
                            </div>
                        </button>
                    </div>  -->

                    <div class="col-12 p-5">
                        <button class="border-0 bg-transparent efetto">
                            <div class="img-uno">
                                <img class="rounded-4 due img-fluid" :src="getImgUrl(apartment)" alt="">
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container distanza-sopra p-5">
        <div class="row">
            <h5>{{ apartment.address }}</h5>

            <p>{{ apartment.room }} camere da letto . 
                {{ apartment.bed === 1 ? '1 letto' : apartment.bed <= 2 ? apartment.bed + ' letti' : apartment.bed + ' letti' }} 
                . {{ apartment.bathroom === 1 ? '1 bagno' : apartment.bathroom <= 2 ? apartment.bathroom + ' bagni' : apartment.bathroom + ' bagni' }} </p>
        </div>
    </div>

    <div class="container distanza-sopra linea p-5" >
        <div class="row col-7">
            <p>{{ apartment.description }}</p>
        </div>
    </div>


    <!-- <div class="container distanza-sopra linea" >
        <div class="row col-7">
            <h5>Dove dormirai</h5>
                <div  class=" box-camera">
                    <img class="img-camera rounded-3 linea" src="../assets/img/150e47d8-76b8-4233-8724-cbbd12880848.webp" alt="">
                </div>
            
            <strong class="p-3">{{ apartment.room }} Camera da letto</strong>
        </div>
    </div> -->

    <div class="container distanza-sopra linea p-5">
        <div class="row">
            <p><strong>COSA TROVERAI</strong></p>
            <div class="d-flex align-items-center" v-for="service in apartment.services">
                <ul class="d-flex">
                    <li><i class="fa-solid" :class="service.icon"></i>  <p class="d-inline">{{ service.name }}</p></li>
                </ul>
            </div>
        </div>
    </div>
    


    <TheCalendario></TheCalendario>



    <Contacts :apartment_id="apartment_id"></Contacts>


    <!-- <div class="container ">
        <div class="row">
            <div class="col-12 doci d-flex">
                <div class="col-6">
                    <p class="rosso"></p>
                </div>
                <div class="col-3">
                    <p class="verde"></p>
                    <p class="blu"></p>
                </div>
                <div class="col-3">
                    <p class="nero">4</p>
                    <p class="giallo">5</p>
                </div>

            </div>
        </div>
    </div>
</div>-->
</template> 

<style scoped lang="scss">
// @use "../../scss/partials/mixins" as *;
// @use "../../scss/partials/variables" as *;


.doci {
    height: 100px;
}

.rosso {
    background-color: red;
    height: 100px;
}

// .verde {
//     background-color: forestgreen;
//     height: 50px;
// }

// .blu {
//     background-color: blue;
//     height: 50px;
// }

.nero {
    background-color: black;
    height: 50px;
}

.giallo {
    background-color: yellow;
    height: 50px;

}

p {
    margin: 0%;
}

.distanza {
    margin-right: 20px;
}
.col-12 {
    max-height: 510px;
    overflow: hidden;
}

.uno {
    min-width: 100%;
    min-height: 100%;
    object-fit:cover;
    aspect-ratio: 1/1;
    // border-left: 6px solid white;
    // border-top: 0%;
    border: 4px solid white;
}

.img-cont {
    // max-width: 100%;
    height: auto;
    display: block;
    max-width: 100%;
    padding: 0%;
    margin: 0%;
}

button,
.col-6,

.col-3 {
    padding: 0%;
    margin: 0%;
}

.img-uno {
    height: 500px;
    width: 560px;
}

.due {
    // min-width: 100%;
    // min-height: 100%;
    height: 100%;
    width: 100%;
    border: 4px solid white;
}

.row {
    padding: 0%;
}
</style>

