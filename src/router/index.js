import { createRouter, createWebHashHistory } from "vue-router";
import CategoriasView from "../views/CategoriasView.vue";
import MeuPetView from "../views/MeuPetView.vue";

const routes = [
  {
    path: "/",
    name: "CategoriasView",
    component: CategoriasView,
  },
  {
    path: "/meupet/:id",
    name: "MeuPetView",
    component: MeuPetView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
