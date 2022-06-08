<template>
  <div>
    <h1>Greeting, {{ username }}</h1>
    <button @click="logout">Logout</button>
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
