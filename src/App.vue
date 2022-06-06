<script setup>
import TheNavigationVue from './components/TheNavigation.vue';
</script>

<template>
  <header>
    <TheNavigationVue />
    <!-- anchor tag also can change to the about page but refresh the page. -->
    <!-- <a href="/about">a tag for About</a> -->
    <div class="container">
      <!-- router-view display the component corresponding the url -->
      <router-view></router-view>
      <!-- <router-view :key="$route.path"></router-view> -->
      <!-- whenever the value of key attribute changes, Vue will destroy the current rendered component -->
      <!-- and re-render the component from scratch -->
      <!-- In this case, if $route.path changes (move to other pages), Vue will re-render the component from scratch -->
      <!-- Upside: Simple -->
      <!-- Downside: Need more computation, because destroy and render every time -->
    </div>
  </header>
</template>
