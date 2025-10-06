<template>
  <div class="breadcrumbs">
    <router-link
      class="breadcrumbs__link link"
      to="/"
    >
      &laquo; home
    </router-link>
  </div>
</template>

<script setup lang="ts">
</script>

<style>
.breadcrumbs {
  padding: 0.8rem 1.6rem;
}

.breadcrumbs__link {
  color: var(--blue);
}
</style>