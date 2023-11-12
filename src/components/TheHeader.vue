<script>
import TheSearchBar from "./TheSearchBar.vue";

export default {
  components: {
    TheSearchBar,
  },
  data() {
    return {
      showAdvancedSearch: false,
      isSmallScreen: false,
    };
  },
  methods: {
    openAdvancedSearch() {
      this.showAdvancedSearch = true;
    },
    checkScreenSize() {
      this.isSmallScreen = window.innerWidth < 770;
    },
  },
  mounted() {
    this.checkScreenSize();
    window.addEventListener("resize", this.checkScreenSize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkScreenSize);
  },
};
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container d-flex justify-content-between align-items-center">
        <router-link
          v-if="!isSmallScreen"
          :to="{ name: 'home' }"
          class="navbar-brand"
        >
          <img src="\src\assets\Risorsa 8port creatt.png" alt="logo full" />
        </router-link>
        <router-link
          v-if="isSmallScreen"
          :to="{ name: 'home' }"
          class="navbar-brand"
        >
          <img src="\src\assets\Risorsa 7port creatt.png" alt="logo mini" />
        </router-link>

        <!-- SEARCH BAR -->
        <div
          class="d-flex align-items-center flex-grow-1 justify-content-center"
        >
          <TheSearchBar
            @open-advanced-search="openAdvancedSearch"
          ></TheSearchBar>
        </div>
        <!-- BURGER BTN -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- NAV LINKS -->
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link
                :to="{ name: 'home' }"
                class="nav-link"
                :class="{ 'active-link': $route.name === 'home' }"
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                :to="{ name: 'apartments' }"
                class="nav-link"
                :class="{ 'active-link': $route.name === 'apartments' }"
                >Appartamenti</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                :to="{ name: 'contacts' }"
                class="nav-link"
                :class="{ 'active-link': $route.name === 'contacts' }"
                >Contatti</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                :to="{ name: 'about-us' }"
                class="nav-link"
                :class="{ 'active-link': $route.name === 'about-us' }"
                >Su di noi</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                :to="{ name: 'login' }"
                class="nav-link"
                :class="{ 'active-link': $route.name === 'login' }"
                >Login</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style lang="scss">
img {
  height: 35px;
}

@media (max-width: 770px) {
  .navbar-brand {
    display: block;
  }
}

@media (max-width: 460px) {
  .navbar-brand {
    display: none;
  }
}

.navbar-nav {
  display: flex;
  justify-content: space-between;
}

.navbar-nav a {
  position: relative;
  padding: 15px;
  text-decoration: none;
  color: #001632;
}

.navbar-nav a::before {
  content: "";
  position: absolute;
  left: 0;
  right: 100%;
  top: 0;
  height: 3px;
  background-color: #d87767;
  transition: right 0.3s ease;
}

.navbar-nav a:hover::before {
  right: 0;
}

.navbar-nav a:hover {
  color: #001632;
}

.navbar-nav .active-link::before {
  right: 0;
}

.navbar-nav .active-link {
  color: #001632;
  font-weight: bold;
}
</style>
