import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import sourceData from "/src/data.json";

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
    path: "/protected",
    name: "protected",
    component: () => import("/src/views/ProtectedPage.vue"),
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("/src/views/LoginPage.vue"),
  },
  {
    path: "/invoices",
    name: "invoices",
    component: () => import("@/views/InvoicesPage.vue"),
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/destination/:id/:slug",
    name: "destination.show",
    component: () => import("@/views/DestinationShow.vue"),
    props: (route) => ({ ...route.params, id: parseInt(route.params.id) }), // return { id: parseInt(route.params.id) }
    // beforeEnter() sets the routing configuration before entering the page
    beforeEnter(to, from) {
      // beforeEnter(...[to, ]) is the standard convention for unused args. Refer to 'Destructuring assignment'. beforeEnter(to) also works in this case
      const exists = sourceData.destinations.find(
        (destination) => destination.id === parseInt(to.params.id)
      );
      if (!exists)
        return {
          name: "NotFound",
          params: { pathMatch: to.path.split("/").slice(1) },
          query: to.query,
          hash: to.hash,
        };
    },
    children: [
      {
        path: ":experienceSlug",
        name: "experience.show",
        component: () => import("@/views/ExperienceShow.vue"),
        props: (route) => ({ ...route.params, id: parseInt(route.params.id) }),
        // prop function returns all of the props that will be passed to the component
        // even though the slug and experience slug exist in the path, they will not make it as params to the component
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("/src/views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes, // JavaScript object property shorthand
  linkActiveClass: "vue-school-link-active", // default -> router-link-active
  scrollBehavior(...[, , savedPosition]) {
    // scrollBehavior(to, from savedPosition)
    return (
      savedPosition ||
      new Promise((resolve) => {
        setTimeout(() => resolve({ top: 0 }, 300));
      })
    );
  },
});

// Global navigation guard
router.beforeEach((to, from) => {
  if (to.meta.requireAuth) {
    // need to login if not already logged in
    if (to.meta.requireAuth && !window.user) {
      return { name: "login", query: { redirect: to.fullPath } };
    }
  }
});

export default router;
