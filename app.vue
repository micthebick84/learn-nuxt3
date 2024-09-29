<template>
  <NuxtLayout>
    <NuxtPage />
    <!-- <RouterView /> -->
  </NuxtLayout>
</template>
<script setup lang="ts">
const nuxtApp = useNuxtApp();
console.log(nuxtApp);

// nuxtApp.provide('hello', (msg: string) => `hello ${msg}`);
</script>
