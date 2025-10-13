<template>
  <header-component :class="headerClasses" />
  <main :class="classes">
    <section class="section">
      <breadcrumbs v-if="!isHome" />
      <RouterView />
      <footer class="footer">
        
      </footer>
    </section>
  </main>
</template>

<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router'
import { computed, onMounted, reactive, ref } from 'vue';
import HeaderComponent from './components/HeaderComponent.vue';
import Breadcrumbs from './components/BreadcrumbsComponent.vue';

const params = reactive({});
const hideCSS = computed(() => params?.value?.hidecss === 'true');

const classes = computed(() => ({
  body: true,
  'body--no-css': hideCSS.value,
}));

const headerClasses = computed(() => ({
  'header--no-css': hideCSS.value,
}));

const route = useRoute()
const isHome = computed(() => route.path === '/');
const getParams = (dirty) => dirty.slice(1).split('&')
  .reduce((obj, curr) => {
    const [key, val] = curr.split('=');
    if (key) {
      const nextObj = { ...obj, [key]: val }
      return nextObj;
    }
    return obj;
  }, {});

onMounted(() => {
  if (typeof window !== 'undefined' && window?.location?.search) {
    try {
      const nextParams = getParams(window.location.search);
      console.log(nextParams)
      params.value = nextParams;
    } catch (e) {
      console.error(e);
    }
  }
});
</script>
