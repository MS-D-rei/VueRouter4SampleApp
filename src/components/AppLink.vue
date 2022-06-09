<template>
  <a v-if="isExternal" :href="props.to">
    <slot />
  </a>
  <router-link v-else v-bind="props">
    <slot />
  </router-link>
</template>

<script setup>
import { computed } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps({
  // this enables to use 'to' props.
  ...RouterLink.props,
});

const isExternal = computed(() => {
  return typeof props.to === "string" && props.to.startsWith("https");
});
</script>

<style lang="scss" scoped></style>
