<script>
import TheHeader from "./components/TheHeader.vue";
import NavBar from "./components/NavBar.vue";
import TheFooter from "./components/TheFooter.vue";

export default {
  components:
  {
    NavBar,
    TheHeader,
    TheFooter,
  },
};
</script>

<template>
  <NavBar></NavBar>

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
