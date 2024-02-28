<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue';

interface cities {
    id_city : number;
    nameOfCity: string;
}

const allCities = ref<cities[]>([]);

const fetchCities = async () => {
    const response = await axios.get("http://localhost:8080/api/v1/cities", {withCredentials:true});
    allCities.value = response.data;
    console.log(response.data);
}

fetchCities();


let event_title ='';
let start_date = '';
let finish_date ='';
let max_participants='';
let description='';
let cityName: '';
let event_image = '';
const submitForm = () => {
  axios.post("http://localhost:8080/api/v1/events",{
   
    event_title: event_title,
    start_date: start_date,
    finish_date: finish_date,
    max_participants: max_participants,
    description: description,
    cityName: cityName,
    event_image: event_image
  }) 
  
  .then(response => {
    console.log(response, "Se ha añadido el evento");
  })
  .catch(error => {
    console.log(error, "necesita estar logueado");
  });
}

</script>

<template>
  <div class="Container">
    <div class="FormNewEvent">
      <div class="titleContainer">
        <label class="x">x</label>
        <label class="title" for="title">Crear nuevo Evento</label>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-x"
          width="35"
          height="35"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="#ffffff"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M18 6l-12 12" />
          <path d="M6 6l12 12" />
        </svg>
      </div>
      <div class="EventNameContainer">
        <label class="EventName" for="EventName">Nombre del Evento:</label>
        <input class="EventNameInput" type="text" v-model="event_title"/>
      </div>
      <div class="combFrm">
        <label for="localidades" id="localidad">Localidades</label>
    <select @click="fetchCities" id="comboForm" v-model="cityName">
      <option value="null">Seleccione localidad</option>
      <option v-for="cities in allCities" v-bind:value="cities.nameOfCity" :key="cities.id_city" selected >
        {{ cities.nameOfCity }}
      </option>
    </select>
        
      </div>
      <div class="dateContainer">
        <div id="dates">
          <label for="date" class="form-label">Fecha de inicio:</label>
          <input type="date" class="form-control" id="date" v-model="start_date"/>
        </div>
        <div class="dates">
          <label for="date" class="form-label">Fecha fin:</label>
          <input type="date" class="form-control" id="date" v-model="finish_date"/>
        </div>
        <div class="participants">
          <label class="form-label" for="Participants">Participantes:</label>
          <input
            class="form-control"
            type="text"
            name="Participants"
            id="Participants"
            v-model="max_participants"
          />
        </div>
      </div>
      <div class="textArea-box">
        <label class="form-label" for="description">Descripción:</label>
        <textarea
          class="form-control"
          name="description"
          id="description"
          cols="20"
          rows="10"
          v-model="description"
        ></textarea>
      </div>
      <div class="mb-3">
        <label for="formFile" class="form-label">Imagen:</label>
        <input class="form-control" type="file" id="formFile" />
      </div>
      <div class="SubmitButton">
        <button class="subBtn" type="submit" @click="submitForm">Guardar</button>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
</style>