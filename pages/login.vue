<template>
  <q-page padding>
    <div class="flex flex-center column q-pt-xl">
      <PageAuthTitle title="LOGIN" />
      <PageAuthDescription description="Hello :)" />
      <FormLogin style="width: 400px" @success="handleLoginSuccess" />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import PageAuthDescription from '~/components/PageAuthDescription.vue';
import PageAuthTitle from '~/components/PageAuthTitle.vue';

definePageMeta({
  middleware: ['guest-only'],
});

const handleLoginSuccess = async () => {
  const { isAdmin } = useAuthUser();
  const redirect = isAdmin.value ? '/admin' : '/';
  await navigateTo(redirect);
};
</script>
