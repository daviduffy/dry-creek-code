<template>
  <header-component />
  <breadcrumbs v-if="!isHome" />
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import { computed, onMounted } from 'vue';
import HeaderComponent from './components/HeaderComponent.vue';
import Breadcrumbs from './components/BreadcrumbsComponent.vue';

const route = useRoute()
const isHome = computed(() => route.path === '/');

</script>
