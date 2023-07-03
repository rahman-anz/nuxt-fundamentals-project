<template>
  <h2>
    {{ msg }}
  </h2>
</template>
<script setup>
const route = useRoute();
const msg = computed(
  () => `I am on ${route.params.teamslug} team with userid
    ${route.params.userid}`
);
onMounted(() => console.log(msg));
</script>
