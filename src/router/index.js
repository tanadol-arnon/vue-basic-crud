import { createWebHistory, createRouter } from "vue-router";
import CreateComponent from "@/components/CreateComponent";
import EditComponent from "@/components/EditComponent";
import ListComponent from "@/components/ListComponent";

const routes = [
  {
    path: "/",
    name: "home",
    component: CreateComponent,
  },
  {
    path: "/view",
    name: "view",
    component: ListComponent,
  },
  {
    path: "/edit/:id",
    name: "edit",
    component: EditComponent,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;