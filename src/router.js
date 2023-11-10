import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home.vue";
import Contacts from "./pages/Contacts.vue";
import AboutUs from "./pages/AboutUs.vue";
import Apartments from "./pages/Apartments.vue";
import ApartmentShowPage from "./pages/ApartmentShowPage.vue";
import TheSearchBar from "./components/TheSearchBar.vue";

const routes = [
  //definizione rotte tramite array
  {
    path: "/", //uri da scrivere nel browser
    name: "home", //nome della rotta da usare per creare un link
    component: Home, //componente che ritorna l'html della pagina
  },
  {
    path: "/contacts",
    name: "contacts",
    component: Contacts,
  },
  {
    path: "/about-us",
    name: "about-us",
    component: AboutUs,
  },
  {
 
    path: "/apartments",
    name: "apartments",
    component: Apartments
  },
  {
 
    path: "/apartments/:id",
    name: "apartments.show",
    component: ApartmentShowPage,
  },
  {
    path: "/search-results",
    name: "search-results",
    component: TheSearchBar,
  },
  {
    path: "/login",
    name: "login",
    beforeEnter(to, from, next) {
      window.location.href = "http://127.0.0.1:8000/login";
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { router };
