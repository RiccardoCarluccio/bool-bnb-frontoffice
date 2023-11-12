
<script>
import axios from "axios";
import TomTomMaps from "../components/TomTomMaps.vue";

export default {
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

<!-- <template>
    <div class="container">
        <div class="card">
            <h1>{{ apartment.name }}</h1>

            <div class="carousel-inner">
                <div class="card-image p-0 rounded-3 carousel-item active" :class="{ active: index === 0 }">
                    <img :src="getImgUrl(apartment)" class="card-img-top p-2 d-block w-100"
                        style="height: 300px; object-fit: contain;" alt="" />
                </div>
            </div>
            <div class="card-body">

                <p><strong>Description:</strong> {{ apartment.description }}</p>
                <p><strong>Address:</strong> {{ apartment.address }}</p>
                <p><strong>services:</strong></p>

                <div class="d-flex align-items-center" v-for="service in apartment.services">
                    <i class="">{{ service.icon }}</i>
                    <p>{{ service.name }}</p>
                </div>

            </div>

            <p><strong>Rooms:</strong> {{ apartment.room }}</p>
            <p><strong>Beds:</strong> {{ apartment.bed }}</p>

            <TomTomMaps></TomTomMaps>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../../scss/partials/mixins" as *;
@use "../../scss/partials/variables" as *;


// .doci {
//     height: 100px;
// }
// .rosso {
//     background-color: red;
//     height: 100px;
// }

// .verde {
//     background-color: forestgreen;
//     height: 50px;
// }

// .blu {
//     background-color: blue;
//     height: 50px;
// }

// .nero {
//     background-color: black;
//     height:50px;
// }

// .giallo {
//     background-color: yellow;
//     height:50px;

// }
// p {
//     margin: 0%;
// }


.col-12 {
    max-height: 510px;
    overflow: hidden;
}
.uno {
    height: 250px;
    width: auto;
}

.img-cont  {
    max-width: 100%;
    height: auto;
    display: block;
}

.img-uno {
    height:500px;
    width: 560px;
}

.due {
    width: 100%;
    height: 100%;
}

.row {
    padding: 0%;
}

</style>

