<script>
import TheHeader from "./components/TheHeader.vue";
import TheSearchBar from "./components/TheSearchBar.vue";
import TheFooter from "./components/TheFooter.vue";
import ValleDiLacrime from "./components/ValleDiLacrime.vue";

export default {
  components:
  {
    TheSearchBar,
    TheHeader,
    TheFooter,
    ValleDiLacrime
  },
};
</script>

<template>
  <!-- <header>
    <nav class="container">
      <img src="#" alt="LOGO" />
      <div class="py-3 d-flex">
        <TheSearchBar></TheSearchBar>
        <ul class="ms-auto d-flex list-unstyled gap-3">
          <li><router-link :to="{ name: 'home' }">Home</router-link></li>
          <li>
            <router-link :to="{ name: 'apartments' }">Appartamenti</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'contacts' }">Contatti</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'about-us' }">Su di noi</router-link>
          </li>
          <li><router-link :to="{ name: 'login' }">Login</router-link></li>
        </ul>
      </div>
    </nav>
  </header> -->
  <TheHeader></TheHeader>

  <RouterView></RouterView>
  <ValleDiLacrime></ValleDiLacrime>
  
  <TheFooter></TheFooter>

</template>

<style lang="scss">

</style>
