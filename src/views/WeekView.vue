<template>
  <div class="week week-full">
    <h1>This is a week page</h1>
    {{ options?.content }}
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const options = computed(() => {
  // use store for this ffs
  const { currentRoute, options } = router;
  const { path } = currentRoute.value;
  const { routes } = router.options;
  const routeOptions = routes.find((route) => route.path === path);
  return routeOptions;
});


</script>

<style>

</style>
