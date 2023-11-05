import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home.vue";
import Contacts from "./pages/Contacts.vue";
import AboutUs from "./pages/AboutUs.vue";

const routes = [                          //definizione rotte tramite array
  {
      path: "/",                          //uri da scrivere nel browser
      name: "home",                       //nome della rotta da usare per creare un link
      component: Home,                  //componente che ritorna l'html della pagina
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
    path:"/login",
    name:"login",
    beforeEnter(to, from, next){
      window.location.href = "http://127.0.0.1:8000/login";
    }
  }
]

const router = createRouter({				      //creazione istanza di Router
  history: createWebHistory(),			      //gestione dell'url al cambio pagina
  routes,														      //l'array viene passato alle rotte
});

export { router };									      //esportazione istanza router per poterla usare dentro main.js