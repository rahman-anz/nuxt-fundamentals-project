<template>
  <nav>
    <nuxt-link to="/">Home</nuxt-link>
    <nuxt-link to="/movies">Movies</nuxt-link>
    <nuxt-link to="htttps://vueschool.io">Vue School</nuxt-link>
    <nuxt-link v-if="!store.isLoggedIn" to="/login">Login</nuxt-link>
    <a href="#" v-else @click.prevent="store.isLoggedIn = false">Logout</a>
  </nav>
  <slot></slot>
</template>

<script setup>
const store = useUserStore();
</script>
