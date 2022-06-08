<template>
  <div>
    <h1>Greeting, {{ username }}</h1>
    <button @click="logout">Logout</button>
    <router-link :to="{ name: 'invoices' }">
      <button>Invoices</button>
    </router-link>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const username = ref("");
username.value = window.user;

function logout() {
  window.user = null;
  router.push({ name: "Home" });
}
</script>
