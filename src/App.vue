<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { useEventsStore } from './stores/eventsStore';
import { onBeforeMount } from 'vue'
import FooterTemplate from '@/components/Home/FooterTemplate.vue';
import HeaderTemplate from '@/components/Home/HeaderTemplate.vue';

const eventsStore = useEventsStore()

onBeforeMount (async () => {
  await eventsStore.setEvents()
})
</script>

<template>
  
    <div class="wrapper">

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
        <RouterLink to="/user-dashboard">User Dasboard</RouterLink>
        <RouterLink to="/admin-dashboard">Admin Dasboard</RouterLink>
      </nav>
    </div>
 
  
  <HeaderTemplate />
  <FooterTemplate />
  <RouterView />
</template>

<style scoped lang="scss">
</style>
