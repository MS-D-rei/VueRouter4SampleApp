<script setup>
import { computed } from "vue";
// import { useRoute } from "vue-router";
import sourceData from "@/data.json";
import ExperienceCard from "@/components/ExperienceCard.vue";
import GoBack from "/src/components/GoBack.vue";

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
  <!-- For transition component to apply proper classes,
  all pages needs to have a single root element (div is the element in this time)-->
  <div> <!-- single root element -->
    <section class="destination">
      <h1>{{ destination.name }}</h1>
      <GoBack />
      <div class="destination-details">
        <img :src="`/images/${destination.image}`" :alt="destination.name" />
        <p>{{ destination.description }}</p>
      </div>
    </section>
    <section class="experiences">
      <h2>Top Experiences in {{ destination.name }}</h2>
      <div class="cards">
        <router-link
          v-for="experience in destination.experiences"
          :key="experience.slug"
          :to="{ name: 'experience.show', params: { experienceSlug: experience.slug } }"
        >
          <!-- :experience="experience" is passing props to child component -->
          <ExperienceCard :experience="experience" />
        </router-link>
      </div>
      <router-view /> <!-- <router-view></router-view> also works -->
    </section>
  </div>
</template>
