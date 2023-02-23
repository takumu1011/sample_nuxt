<template>
  <NuxtLayout :name="layout">
    <NuxtPage />
  </NuxtLayout>
</template>
<script setup>
const admin = true;
const layout = admin ? 'custom' : 'default';
</script>
