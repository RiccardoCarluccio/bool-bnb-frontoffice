<script>
import axios from "axios";
import tt from "@tomtom-international/web-sdk-maps";
import "@tomtom-international/web-sdk-maps";

export default {
  data() {
    return {
      apartment: null,
      store,
      tt
    };
  },

  mounted() {
    this.map = null;

    axios
      .get(this.store.backendURL + "api/apartments/" + this.$route.params.id)
      .then(response => {
        this.apartment = response.data.results;

        if (this.apartment.latitude && this.apartment.longitude) {
          const latitude = parseFloat(this.apartment.latitude);
          const longitude = parseFloat(this.apartment.longitude);
          let center = [latitude, longitude];

          this.map = tomtom.map({
            key: "tfq3VXuUfjKMfhXczfMw6uIgOljcSTrC",
            container: "map",
            center: center,
            zoom: 10,
          });

          // Create an info window with apartment details
          const infoWindow = new tt.Popup({
            offset: [0, -20],
            content: `<div>
              <h4>${this.apartment.name}</h4>
              <p>${this.apartment.description}</p>
              <p>Address: ${this.apartment.address}</p>
              <p>Rooms: ${this.apartment.room}</p>
              <p>Beds: ${this.apartment.bed}</p>
            </div>`
          });

          // Add event listener to open info window on marker click
          const marker = new tt.Marker().setLngLat(center).addTo(this.map);
          marker.on("click", () => {
            infoWindow.setPopupAnchor(marker);
            infoWindow.open();
          });

          this.map.on("load", () => {
            let marker = new tt.Marker().setLngLat(center).addTo(this.map);
          });
        } else {
          console.error(
            "I dati dell'appartamento non contengono latitudine e/o longitudine valide."
          );
          const errorElement = document.createElement("div");
          errorElement.textContent = "Map not available due to invalid coordinates.";
          document.getElementById("map").appendChild(errorElement);
        }
      })
      .catch(error => console.error(error));
  },
};
</script>

<template>
  <div class="tomtom">
    <div id="map" class="map"></div>
  </div>
</template>

<style lang="scss" scoped>
.map {
  height: 100%;
  width: 100%;
  border-radius: 11px;
}

.tomtom {
  height: 400px;
}

@media screen and (max-width:767px) {
  .map {
    height: 400px;
    width: 100%;
  }
}
</style>
