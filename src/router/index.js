import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Units from "../views/Units.vue";
import Unit from "../views/Unit.vue";
import Calls from "../views/Calls.vue";
import Vehicles from "../views/Vehicles.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: '/units',
    name: 'units',
    component: Units,
  },
  {
    path: '/unit/:id',
    name: 'unit',
    component: Unit,
    params: true
  },
  {
    path: '/calls',
    name: 'calls',
    component: Calls,
  },
  {
    path: '/vehicles',
    name: 'vehicles',
    component: Vehicles,
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
