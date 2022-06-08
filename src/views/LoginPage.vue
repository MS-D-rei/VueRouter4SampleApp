<template>
  <div class="login">
    <form class="form" @submit.prevent="login">
      <h1>Login</h1>
      <label for="username">Username</label>
      <input v-model="username" type="text" name="username" class="input" />
      <label for="password">Password</label>
      <input v-model="password" type="text" name="password" class="input" />
      <button class="btn">Login</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";

const username = ref("");
const password = ref("");
const router = useRouter();
const route = useRoute();

function login() {
  // Auth user against API, but pretend it in this case
  window.user = username;
  // If $route.query.redirect exist, use it. If not, use "/protected"
  const redirectPath = route.query.redirect || "/protected";
  router.push(redirectPath);
}
</script>
