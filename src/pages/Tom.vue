<!-- key: 'https://api.tomtom.com/map/1/tile/basic/main/0/0/0.png?view=1lAZUzwZ85dX7k19Gq6XiMPuDp1vH0ua', -->

<script>
// import tt from '@tomtom-international/web-sdk';

export default {
  data() {
    return {
      url: 'https://api.tomtom.com/map/1/tile/basic/main/0/0/0.png?view=Unified&key=1lAZUzwZ85dX7k19Gq6XiMPuDp1vH0ua',
      
    };
  },
  mounted() {
    
    const map = tt.map({
      key: this.url,
      container: "map"
    });
  }
};

</script>

<template>
  <div class="container">
    <div class="row">
      <div id="map" class="mappa">
        <img :src="url" alt="TomTom Map" />
      </div>
    </div>
  </div>
</template>


<style scoped>
.mappa {
  width: 500px;
  height: 500px;
}
</style>