<template>
  <header class="header">
    <div class="header__container">
      <h1 class="h1">Dry Creek Computer Science Workshop</h1>
      <img
        class="header__logo"
        src="/logo.png"
      >
    </div>
  </header>
</template>

<script setup lang="ts">
</script>

<style>
.header {
  height: var(--header-height);
  background-color: var(--blue);
  overflow: hidden;
  color: var(--white);
}

.header__container {
  display: flex;
  padding: 1.6rem;
  width: 100%;
  margin: 0 auto;
  max-width: var(--content-width);
  height: 100%;
}

.header__logo {
  margin-left: auto;
}
</style>
