import { createWebHistory, createRouter } from "vue-router";
import ListView from "./components/ListView.vue"
import TitleView from "./components/TitleView.vue"
import DetailView from "./components/DetailView.vue"
import NothingView from "./components/NothingView.vue"
import AutorView from "./components/AutorView.vue"
import CommentView from "./components/CommentView.vue"

const routes = [
  {
    path: "/list",
    component: ListView,
  },
  {
    path: "/title",
    component: TitleView,
  },
  {
   // path: "/detail/:id(\\d+)", // 숫자만 찾아주는 정규식 문법 // :id* 는 반복
    path: "/detail/:id",
    component: DetailView,
    children: [
      {
        path: "author",
        component: AutorView,
      },
      {
        path: "comment",
        component: CommentView,
      }
    ]
  },
  {
    path: "/:anything(.*)", // 모든 문자 정규식 (.*)* 이렇게도 자주 씀
    component: NothingView,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 