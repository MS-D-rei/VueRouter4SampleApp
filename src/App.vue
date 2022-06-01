<script setup></script>

<template>
  <header>
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/brazil">Brazil</router-link>
      <router-link to="/hawaii">Hawaii</router-link>
      <router-link to="/jamaica">Jamaica</router-link>
      <router-link to="/panama">Panama</router-link>
    </div>
    <!-- anchor tag also can change to the about page but refresh the page. -->
    <!-- <a href="/about">a tag for About</a> -->
    <div class="container">
      <router-view></router-view>
    </div>
  </header>
</template>
