<script setup>
import TheNavigation from "./components/TheNavigation.vue";
</script>

<template>
  <TheNavigation />
  <!-- anchor tag also can change to the about page but refresh the page. -->
  <!-- <a href="/about">a tag for About</a> -->
  <div class="container">
    <!-- router-view display the component corresponding the url -->
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" :key="$route.path"></component>
      </transition>
    </router-view>

    <!-- <router-view :key="$route.path"></router-view> -->
    <!-- whenever the value of key attribute changes, Vue will destroy the current rendered component -->
    <!-- and re-render the component from scratch -->
    <!-- In this case, if $route.path changes (move to other pages), Vue will re-render the component from scratch -->
    <!-- Upside: Simple -->
    <!-- Downside: Need more computation, because destroy and render every time -->
  </div>
</template>

<style lang="css">
/* 'slide' is the word we provide */
/* 'enter-active', 'leave-active', 'enter-from', 'leave-to' are what Vue provides */
/* .slide-enter-active,
  .slide-leave-active {
    transition: opacity 1s, transform 1s;
  }
  .slide-enter-from,
  .slide-leave-to {
    opacity: 0;
    transform: translateX(-30%);
  } */
/* .moveUp-enter-active {
  animation: fadeIn 1s ease-in;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}
.moveUp-leave-active {
  animation: moveUp 0.3s ease-in;
}
@keyframes moveUp {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-400px);
  } */
.fade-enter-active,
.fade-leave-active {
  transition-delay: 0.5s;
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
