<script>
import TheHeader from "./components/TheHeader.vue";
import TheSearchBar from "./components/TheSearchBar.vue";
import NavBar from "./components/NavBar.vue";
import TomTomMaps from "./components/TomTomMaps.vue";
import TheCalendario from "./components/TheCalendario.vue";

export default {
  components: { TheSearchBar, TheHeader, TheFooter, NavBar, TheCalendario },
};
</script>

<template>
  <NavBar></NavBar>
  <!-- <TheHeader></TheHeader> -->

  <main class="">
    <RouterView></RouterView>
  </main>
  <footer>
    <TheFooter></TheFooter>
  </footer>
</template>

<style lang="scss">
main {
  margin-top: 7rem;
}
</style>
