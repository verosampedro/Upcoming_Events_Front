<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useEventsStore } from './stores/eventsStore';
import { onBeforeMount } from 'vue'

const eventsStore = useEventsStore()

onBeforeMount (async () => {
  await eventsStore.setEvents()
})
</script>

<template>
  <header>
    

    <div class="wrapper">

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
        <RouterLink to="/user-dashboard">User Dasboard</RouterLink>
        <RouterLink to="/admin-dashboard">Admin Dasboard</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped lang="scss">
</style>
