<script>
import TheSearchBar from "./components/TheSearchBar.vue";
import ValleDiLacrime from "./components/ValleDiLacrime.vue";

export default {
  TheSearchBar,
  components: { TheSearchBar, ValleDiLacrime },
};
</script>

<template>
  <header>
    <nav class="container">
      <div class="py-3 d-flex">
        <TheSearchBar></TheSearchBar>
        <ul class="ms-auto d-flex list-unstyled gap-3">
          <li><router-link :to="{ name: 'home' }">Home</router-link></li>
          <li>
            <router-link :to="{ name: 'contacts' }">Contatti</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'about-us' }">Su di noi</router-link>
          </li>
          <li><router-link :to="{ name: 'login' }">Login</router-link></li>
          <li><router-link :to="{ name: 'apartments' }">Appartamenti</router-link></li>
          <!-- <li><router-link :to="{ name:'apartments.show', params: { id: apartment.id }}">Singolo appartmaneto</router-link></li> -->
        </ul>
      </div>
    </nav>
  </header>
  <!-- <TheHeader></TheHeader> -->

  <main>
    <RouterView></RouterView>
  </main>

  <!-- <TheFooter></TheFooter> -->
</template>

<style lang="scss">

</style>
