<script>
import TheHeader from "./components/TheHeader.vue";
import NavBar from "./components/NavBar.vue";
import TheFooter from "./components/TheFooter.vue";
import ValleDiLacrime from "./components/ValleDiLacrime.vue";

export default {
  components:
  {
    NavBar,
    TheHeader,
    TheFooter,
    ValleDiLacrime,
  },
};
</script>

<template>
  <NavBar></NavBar>

  <main class="">
    <RouterView></RouterView>
    <ValleDiLacrime></ValleDiLacrime>
  </main>
  <footer>
    <TheFooter></TheFooter>
  </footer>
</template>

<style lang="scss">
main {
  margin-top: 8rem;
}
</style>