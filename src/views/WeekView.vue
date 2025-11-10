<template>
  <div class="week week--full">
    <h1 class="week__heading">{{ title }}</h1>
    <div
      v-if="model.content"
      class="week__content"
    >
      <div class="week__body">
        <component :is="model.component" />
      </div>
      <aside-component
        v-if="asideModel"
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
import week3 from '../content/week3.yaml';
import week4 from '../content/week4.yaml';
import week5 from '../content/week5.yaml';
import week6 from '../content/week6.yaml';
import week7 from '../content/week7.yaml';

import WeekOneComponent from '../components/WeekOneComponent.vue';
import WeekTwoComponent from '../components/WeekTwoComponent.vue';
import WeekThreeComponent from '../components/WeekThreeComponent.vue';
import WeekFourComponent from '../components/WeekFourComponent.vue';
import WeekFiveComponent from '../components/WeekFiveComponent.vue';
import WeekSixComponent from '../components/WeekSixComponent.vue';
import WeekSevenComponent from '../components/WeekSevenComponent.vue';

const router = useRouter();
const options = computed(() => {
  // use store for this ffs
  const { currentRoute, options } = router;
  const { path } = currentRoute.value;
  const { routes } = router.options;
  const routeOptions = routes.find((route) => route.path === path);
  return routeOptions;
});

const model = computed(() => {
  const { content } = (options?.value || {});
  if (!content) return false;
  let output = {};
  switch (content) {
    case 'week1.yaml':
      output.content = week1;
      output.component = WeekOneComponent;
      break;
    case 'week2.yaml':
      output.content = week2;
      output.component = WeekTwoComponent;
      break;
    case 'week3.yaml':
      output.content = week3;
      output.component = WeekThreeComponent;
      break;
    case 'week4.yaml':
      output.content = week4;
      output.component = WeekFourComponent;
      break;
    case 'week5.yaml':
      output.content = week5;
      output.component = WeekFiveComponent;
      break;
    case 'week6.yaml':
      output.content = week6;
      output.component = WeekSixComponent;
      break;
    case 'week7.yaml':
      output.content = week7;
      output.component = WeekSevenComponent;
      break;
    default:
      console.log(`no match on ${content}`);
      break;
  }
  return output;
});

const asideModel = computed(() => {
  if (!model?.value?.content) return {};
  return { links: model.value.content.links };
})

const title = computed(() => {
  if (!model?.value?.content) return 'There was an issue loading this page';
  return model.value.content.heading;
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
