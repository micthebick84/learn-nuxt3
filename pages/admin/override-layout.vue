<template>
  <div>
    <NuxtLayout name="admin">
      <template #header>
        <q-header elevated class="bg-primary text-white">
          <q-toolbar>
            <q-toolbar-title>Vue & Nuxt Mastery Admin</q-toolbar-title>
          </q-toolbar>
        </q-header>
      </template>
      <div class="q-my-xl text-center">
        <PageTitle title="레이아웃 재정의" />
        <PageDescription description="Admin Layout" />
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  // layout: 'admin',
  layout: false,
});
</script>

<style scoped></style>
