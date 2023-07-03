<template>
  <div>
    <h2>Welcome to nuxt</h2>
    <NuxtLayout><NuxtPage /></NuxtLayout>
  </div>
</template>
<script setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Movie Page` : "Movie Page";
  },
});
</script>
