
<script>
import axios from "axios";
import TomTomMaps from "../components/TomTomMaps.vue";
import Contacts from "../components/Contacts.vue";

export default {
    components: {

        Contacts,
    },
    data() {
        return {
            apartment: {},
            TomTomMaps,
        };
    },
    methods: {
        data() {
            console.log(this.$route.params);
            axios.get("http://127.0.0.1:8000/api/apartments/" + this.$route.params.id)
                .then((resp) => {
                    this.apartment = resp.data;
                })
        }
    },
    mounted() {
        this.data();
    }
}
</script>

<template>
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
    
    <!-- <TomTomMaps></TomTomMaps> -->
</template>


<!-- <template>
    <div class="container">
        <div class="row">

            <div class="d-flex justify-content-between text-black">
                <div class="nome">

                </div>

                <div class="text-black">
                    <a href=""><i class="fa-solid fa-arrow-up-from-bracket"></i> Condividi</a>
                    <a href=""><i class="fa-regular fa-heart"></i> salva</a>
                </div>
            </div>

            <div class="container">
                <div class="row col-12">
                    <div class="col-6">
                        <button class="border-0 bg-transparent">
                            <div class="img-uno">
                                <img class="rounded-start-4 due"
                                    src="../assets/img/b7c9264d-73c9-45c3-882e-6e9577d63d68.webp" alt="">
                            </div>
                        </button>
                    </div>

                    <div class="col-3">
                        <button class="border-0 bg-transparent">
                            <div class="img-cont">
                                <img class="uno" src="../assets/img/062ef52a-9b4f-4301-9413-e757d1758b3f.webp" alt="">
                            </div>
                        </button>
                        <button class="border-0 bg-transparent">
                            <div class="img-cont">
                                <img class="uno" src="../assets/img/150e47d8-76b8-4233-8724-cbbd12880848.webp" alt="">
                            </div>
                        </button>
                    </div>

                    <div class="col-3">
                        <button class="border-0 bg-transparent">
                            <div class="img-cont">
                                <img class="uno" src="../assets/img/4588d88f-0224-42f4-94cb-594f4d362fba.webp" alt="">
                            </div>
                        </button>
                        <button class="border-0 bg-transparent">
                            <div class="img-cont">
                                <img class="uno" src="../assets/img/e922f0c3-9a3d-4877-983a-56849ce92e18.webp" alt="">
                            </div>
                        </button>
                    </div>
                </div>
            </div>



        </div>
    </div>


    <div class="container">
        <div class="row">
            <div class="col-12 doci d-flex">
                <div class="col-6">
                    <p class="rosso">1</p>
                </div>
                <div class="col-3">
                    <p class="verde">2</p>
                    <p class="blu">3</p>
                </div>
                <div class="col-3">
                    <p class="nero">4</p>
                    <p class="giallo">5</p>
                </div>

            </div>
        </div>
    </div>
</div></template> -->

<style scoped lang="scss">
@use "../../scss/partials/mixins" as *;
@use "../../scss/partials/variables" as *;


.doci {
    height: 100px;
}

.rosso {
    background-color: red;
    height: 100px;
}

.verde {
    background-color: forestgreen;
    height: 50px;
}

.blu {
    background-color: blue;
    height: 50px;
}

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


.col-12 {
    max-height: 510px;
    overflow: hidden;
}

.uno {
    min-width: 100%;
    min-height: 100%;
    // height: 250px;
    // width: auto;
}

.img-cont {
    // max-width: 100%;
    height: auto;
    display: block;
}

.img-uno {
    height: 500px;
    width: 560px;
}

.due {
    min-width: 100%;
    min-height: 100%;
}

.row {
    padding: 0%;
}
</style>

