<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
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
    getImgUrl(apartment) {
      return `http://127.0.0.1:8000/storage/${apartment.images}`;
    },
  },
  mounted() {
    this.loadData();
  },
};
</script>

<template>
  <form action="{{ route('admin.apartments.store') }}" method="POST" enctype="multipart/form-data">

    <div class="col-12  d-flex justify-content-center align-items-center ">

      <div class="col-4 sotto-uno text-start ps-4">
        <h1 class="fs-1">Sei pronto a partire?</h1>
        <br>
        <p>Benvenuto nel suo sito immobiliare personale Sig. Wayne. <br>
          Qui potrà prenotare una delle sue prossime case vacanza. <br>
          Abbiamo selezionato per lei una serie di proprietà in California,<br>
          ovviamente per lei è tutto gratis.
          <br>
          <br>
          Noi del team di Boolbnb le auguriamo un buon soggiorno.
        </p>
      </div>

      <div class="d-block ps-4">
        <img class="gift img-fluid" width="100%" src="../assets/img/ezgif.com-video-to-gif.gif" alt="">
      </div>
    </div>

    <div class="d-flex align-items-end  avanti justify-content-center btn-avanti">
      <button type="button" class="btn btn-dark m-5 fs-4"> <router-link to="/apartments" class="nav-link"
          :class="{ 'font-weight-bold': $route.path === '/apartments' }">
          Entra
        </router-link><a href="#seconda-sezione"></a></button>
    </div>
  </form>
</template>

<style scoped lang="scss">
.video-container {
  overflow: hidden;
  width: 100%;
}

video {
  width: 100%;
  height: auto;
  outline: none;
}

.gift {
  width: 800px;
}

video::-webkit-media-controls {
  display: none !important;
}

video::-webkit-media-controls-panel {
  width: calc(var(--width) + 30px) !important;
}

.sotto-uno {
  margin-top: 200px;
}

.sotto-due {
  margin-top: 150px;
}

.paggina {
  height: 100vh;

}

// .avanti {
//     height: 6vh;
//     margin-bottom: 300px;
// }

// .paggina-pena {
//     height: 100vh;
// }


::-webkit-scrollbar {
  width: 0;
}

.btn-sotto {
  margin-top: 0;
}


// ::-webkit-scrollbar-thumb {
//     background-color: #888; 
//     border-radius: 4px; 
// }


// ::-webkit-scrollbar-track {
//     background-color: #f1f1f1;
// }

.form-check-input {
  margin-right: 30px;
}

img {
  width: 40px;
}

.file-input-container {
  position: relative;
  width: 600px;
  height: 400px;
  overflow: hidden;
  background-color: #f0f0f0;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  cursor: pointer;
}

.file-input-label {
  width: 400px;
  flex-grow: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #333;
}

.file-input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
}


.container-dati {
  width: 800px;
}



form {
  color: #001632;
}



button.btn {
  background-color: #001632;
  margin: auto;
}

button a {
  // background-color: transparent;
  color: white;
  text-decoration: none;


}

.cont-2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}


.form-check-label {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.2rem;
}

.form-check-input {
  margin-top: 10px;
}
</style>
