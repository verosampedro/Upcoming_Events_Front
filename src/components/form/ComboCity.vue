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
  <div class="combFrm">
    <label for="localidades" id="localidad">Localidades</label>
    <select v-model="fetchCities" id="comboForm">
      <option value="null">Seleccione localidad</option>
      <option v-for="cities in allCities" v-bind:value="cities.city_name" :key="cities.id_city" selected>
        {{ cities.city_name }}
      </option>
    </select>
  </div>
</template>

<style scoped lang="scss">

#localidad {
  padding-left: 1%;
  font-size: 18px;
  font-weight: bold;
}
.combFrm {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1%;
  outline: 0;
  color: $astur-blue;
  font-family: $first-font;
}

select {
  background-color: $astur-blue;
  width: 80%;
  border-radius: 10px;
  border: solid 1;
  color: white;
}
</style>
