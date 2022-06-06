import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";

// Important that makes it clear what paths routes contains.
const routes = [
  { path: "/", name: "Home", component: HomePage },
  // component: () => import('') is lazy loading routes
  // vite imports the page when we need
  // { path: '/brazil', name: 'brazil', component: () => import('@/views/BrazilPage.vue') },
  // { path: '/hawaii', name: 'hawaii', component: () => import('@/views/HawaiiPage.vue') },
  // { path: '/jamaica', name: 'jamaica', component: () => import('@/views/JamaicaPage.vue') },
  // { path: '/panama', name: 'panama', component: () => import('@/views/PanamaPage.vue') },
  {
    path: "/destination/:id/:slug",
    name: "destination.show",
    component: () => import("@/views/DestinationShow.vue"),
    props: (route) => ({ ...route.params, id: parseInt(route.params.id) }), // return { id: parseInt(route.params.id) }
  },
  {
    path: "/destination/:id/:slug/:experienceSlug",
    name: "experience.show",
    component: () => import("@/views/ExperienceShow.vue"),
    props: (route) => ({ ...route.params, id: parseInt(route.params.id) }),
    // prop function returns all of the props that will be passed to the component
    // even though the slug and experience slug exist in the path, they will not make it as params to the component
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes, // JavaScript object property shorthand
  linkActiveClass: "vue-school-link-active", // default -> router-link-active
});

export default router;
