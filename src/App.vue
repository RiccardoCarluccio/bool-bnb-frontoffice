<script>
export default {

};

</script>

<template>
  <header>

    <nav class="container">
      <div class="py-3 d-flex">
        <ul class="ms-auto d-flex list-unstyled gap-3">
          <li><a href="http://127.0.0.1:8000/login">Accedi</a></li>
          <li><router-link :to="{ name: 'home' }">home</router-link></li>
          <li><router-link :to="{ name: 'contacts' }">Contatti</router-link></li>
          <li><router-link :to="{ name: 'about-us' }">Su di noi</router-link></li>
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

<style lang="scss"></style>