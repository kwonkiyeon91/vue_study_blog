import { createWebHistory, createRouter } from "vue-router";
import ListView from "./components/ListView.vue"
import TitleView from "./components/TitleView.vue"

const routes = [
  {
    path: "/list",
    component: ListView,
  },
  {
    path: "/title",
    component: TitleView,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 