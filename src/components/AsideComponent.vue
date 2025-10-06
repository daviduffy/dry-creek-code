<template>
  <aside class="links">
    <h3>Links</h3>
    <ul>
      <li
        v-for="(link, index) in links"
      >
        <a
          :href="link.url"
          :target="`blank${index}`"
          class="link"
        >
          {{ link.text }}
        </a>
      </li>
    </ul>
  </aside>
</template>

<script setup lang="ts">
defineProps({
  links: {
    type: Object,
    required: true,
  }
});
</script>
