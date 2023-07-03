<template>
  <div>
    <pre>{{ data }}</pre>
  </div>
</template>
<script setup>
const route = useRoute();
const { data } = await useFetch(
  `http://www.omdbapi.com/?apikey=2b2de079&i=${route.params.id}`,
  {
    pick: ["Title", "Plot", "Error"],
  }
);
if (data.value.Error === "Incorrect IMDb ID.") {
  showError({ statusCode: 404, statusMessage: "Page not found" });
}
useHead({ title: data.value.Title });
// const { data } = useAsyncData(
//   () => {
//     return $fetch(
//       `http://www.omdbapi.com/?apikey=2b2de079&i=${route.params.id}`
//     );
//   },
//   { pick: ["Title", "Plot"] }
// {
//   transform(data) {
//     return { Title: data.Title, Plot: data.Plot };
//   },
// }
// );
</script>
