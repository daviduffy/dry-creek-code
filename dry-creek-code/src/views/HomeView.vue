<template>
  <tease-component
    v-for="(week, index) in weeks"
    :key="index"

    v-bind="week"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import HeaderComponent from '../components/Header.vue';
import TeaseComponent from '../components/TeaseComponent.vue';

import week1 from '../content/week1.yaml';
import week2 from '../content/week2.yaml';

const weeks = computed(() => [
  week1,
  week2,
]);
</script>
