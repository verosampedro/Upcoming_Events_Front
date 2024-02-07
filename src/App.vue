<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/Home/Header.vue'
import Footer from '@/components/Home/Footer.vue'

</script>

<template>
  
  <header>
   

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/login">Login</RouterLink>
        <RouterLink to="/user-dashboard">User Dasboard</RouterLink>
        <RouterLink to="/admin-dashboard">Admin Dasboard</RouterLink>
      </nav>
    </div>
  </header>
  
  <Header />
  <Footer />
  <RouterView />
</template>

<style scoped lang="scss">
</style>
