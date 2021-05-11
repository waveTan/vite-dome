import {createRouter,createWebHashHistory} from 'vue-router'

import Home from "../views/home/home.vue";
import Assets from "../views/assets/Assets.vue";
const router = createRouter({
  //history: "history",
  history: createWebHashHistory(),
  routes: [
    {
      path: '',
      name: 'home',
      component: Home,
    },
    {
    path: "/assets",
    name: "assets",
    component: Assets,
  },
  ]
});

export default router;
