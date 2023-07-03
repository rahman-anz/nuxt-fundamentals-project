<template>
  <form @submit.prevent="store.logIn">
    <h2>Login</h2>
    <label for="username">Username</label>
    <input type="email" />
    <label for="password">Password</label>
    <input type="password" />
    <button>Submit</button>
  </form>
</template>
<script setup>
definePageMeta({ layout: "plain" });
const store = useUserStore();
</script>
