<script setup>
import { computed } from "vue";
// import { useRoute } from "vue-router";
import sourceData from "@/data.json";

// const route = useRoute(); // for getting this.$route in Composition API

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
});

// const destinationId = computed(() => {
//   return parseInt(route.params.id);
// });

const destination = computed(() => {
  return sourceData.destinations.find(
    (destination) => destination.id === props.id
  );
});

// Reacting to params changes
// 1. use key attribute in router-link
// 2. use watch function

// const destination = ref("");

// 1. key attribute
// async function initData() {
//   const response = await fetch(`https://travel-dummy-api.netlify.app/${route.params.slug}`)
//   destination.value = await response.json()
// }
// initData()
// And set :key="$route.path" in router-link tag

// 2. watch function
// #FIX, can't fetch properly at the first rending.
// watch(
//   () => route.params,
//   async () => {
//     const response = await fetch(
//       `https://travel-dummy-api.netlify.app/${route.params.slug}`
//     );
//     destination.value = await response.json();
//   }
// );
</script>

<template>
  <section class="destination">
    <h1>{{ destination.name }}</h1>
    <div class="destination-details">
      <img :src="`/images/${destination.image}`" :alt="destination.name" />
      <p>{{ destination.description }}</p>
    </div>
  </section>
</template>
