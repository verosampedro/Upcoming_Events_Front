<script setup lang="ts">


import axios from 'axios';
import { ref } from 'vue';

interface cities {
    id_city : number;
    city_name: string;
}

const allCities = ref<cities[]>([]);

const fetchCities = async () => {
    const response = await axios.get("http://localhost:8080/api/v1/cities");
    allCities.value = response.data;
    console.log(response.data);
}

fetchCities();


</script>
<template>
  <div>
    <select v-model="fetchCities" multiple>
      <option v-for="cities in allCities" v-bind:value="cities.city_name" :key="cities.id_city">
        {{ cities.city_name }}
      </option>
    </select>
  </div>
</template>
<style scoped lang="scss"></style>
