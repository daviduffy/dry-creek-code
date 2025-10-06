<template>
  <div class="week week--full">
    <h1 class="week__heading">{{ title }}</h1>
    <div
      v-if="content"
      class="week__content"
    >
      <div class="week__body">
        <component :is="Component" />
      </div>
      <aside-component
        v-bind="asideModel"
        class="week__aside"
      />
    </div>
  </div>

</template>

<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import AsideComponent from '../components/AsideComponent.vue';

import week1 from '../content/week1.yaml';
import week2 from '../content/week2.yaml';

import WeekOneComponent from '../components/WeekOneComponent.vue';
import WeekTwoComponent from '../components/WeekTwoComponent.vue';

const router = useRouter();
const options = computed(() => {
  // use store for this ffs
  const { currentRoute, options } = router;
  const { path } = currentRoute.value;
  const { routes } = router.options;
  const routeOptions = routes.find((route) => route.path === path);
  return routeOptions;
});

const content = computed(() => {
  const { content } = (options?.value || {});
  if (!content) return false;
  let output;
  switch (content) {
    case 'week1.yaml':
      output = week1;
      break;
    case 'week2.yaml':
      output = week2;
      break;
    default:
      console.log(`no match on ${content}`);
      break;
  }
  return output;
});

const asideModel = computed(() => {
  if (!content.value) return {};
  return { links: content.value.links };
})

const Component = computed(() => {
  const { content } = (options?.value || {});
  if (!content) return false;
  let output;
  switch (content) {
    case 'week1.yaml':
      output = WeekOneComponent;
      break;
    case 'week2.yaml':
      output = WeekTwoComponent;
      break;
    default:
      console.log(`no match on ${content}`);
      break;
  }
  return output;
});

const title = computed(() => {
  if (!content.value) return 'There was an issue loading this page';
  return content?.value?.heading;
});

</script>

<style lang="scss">
.week--full {
  grid-template-columns: unset;
  grid-auto-flow: row;

  .week__heading {
    margin-bottom: 2.4rem;
  }

  .week__content {
    display: grid;
    margin: 0 auto;
    @media (min-width: 768px) {
      grid-template-columns: 660px 1fr;
      column-gap: 2.4rem;
    }
  }
}
</style>
