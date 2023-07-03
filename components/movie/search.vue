<template>
  <div>
    <h2>welcome to movies</h2>
    <form @submit.prevent="search">
      <input type="text" placeholder="Enter the name" v-model="searchTerm" />
      <button>Submit</button>
    </form>
    <ul v-if="movieResults">
      <li v-for="movie in movieResults" :key="movie.imdbID">
        <nuxt-link :to="{ name: 'movies-id', params: { id: movie.imdbID } }"
          ><img :src="movie.Poster" :alt="movie.Title" />
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
const searchTerm = ref("batman");
const movieResults = ref([]);
const search = async () => {
  const { Search } = await $fetch(
    `http://www.omdbapi.com/?apikey=2b2de079&s=${searchTerm.value}`
  );
  movieResults.value = Search;
};
search();
</script>
<style scoped>
ul {
  display: grid;
  max-width: 120rem;
  margin: 2rem auto;
  list-style: none;
  grid-template-columns: repeat(4, 1fr);
}
</style>
