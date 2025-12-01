<template>
  <tease-component
    v-for="(week, index) in weeks"
    :key="index"

    v-bind="week"
  />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import HeaderComponent from '../components/HeaderComponent.vue';
import TeaseComponent from '../components/TeaseComponent.vue';

import week1 from '../content/week1.yaml';
import week2 from '../content/week2.yaml';
import week3 from '../content/week3.yaml';
import week4 from '../content/week4.yaml';
import week5 from '../content/week5.yaml';
import week6 from '../content/week6.yaml';
import week7 from '../content/week7.yaml';
import week8 from '../content/week8.yaml';
import week9 from '../content/week9.yaml';
import week10 from '../content/week10.yaml';

const weeks = computed(() => [
  week10,
  week9,
  week8,
  week7,
  week6,
  week5,
  week4,
  week3,
  week2,
  week1,
]);
</script>
