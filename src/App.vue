<script setup>
import TheNavigationVue from './components/TheNavigation.vue';
</script>

<template>
  <header>
    <TheNavigationVue />
    <!-- anchor tag also can change to the about page but refresh the page. -->
    <!-- <a href="/about">a tag for About</a> -->
    <div class="container">
      <router-view></router-view>
    </div>
  </header>
</template>
