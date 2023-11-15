<script>
import TheHeader from "./components/TheHeader.vue";
import TheSearchBar from "./components/TheSearchBar.vue";
import TheFooter from "./components/TheFooter.vue";
import NavBar from "./components/NavBar.vue";
import TomTomMaps from "./components/TomTomMaps.vue";

export default {
  components: { TheSearchBar, TheHeader, TheFooter, NavBar },
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
