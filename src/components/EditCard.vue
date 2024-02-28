<script setup lang="ts">
import { ref} from 'vue';
import axios from 'axios';
import { useEditStore } from '@/stores/editStore';

const props = defineProps<{
    event: Event
}>()

const editStore = useEditStore();
const existingEvent = ref(null);

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

/* const fetchExistingEvent = async (eventId) => {
  try {
    const response = await axios.get(`http://localhost:8080/api/v1/events/${eventId}`);
    existingEvent.value = response.data;
  } catch (error) {
    console.error('Error fetching existing event:', error);
  }
}; */

/* // Watch for changes in the eventId prop
watch(() => props.eventId, (newEventId, oldEventId) => {
  if (newEventId !== oldEventId) {
    // Fetch existing event data when the eventId changes
    fetchExistingEvent(newEventId);
  }
}); */

const event_title = ref <string>();
const start_date = ref <number>();
const finish_date = ref <number>();
const event_image = ref <number>();
const max_participants = ref <number>();
const description = ref <string>();
const cityName = ref <string>();

const submitForm = async () => {

  fillForm();

  try {
      await axios.put(`http://localhost:8080/api/v1/events/${props.event.id}`, {
        id: props.event.id,
        event_title: event_title.value,
        start_date: start_date.value,
        finish_date: finish_date.value,
        event_image: event_image.value,
        max_participants: max_participants.value,
        description: description.value,
        cityName: cityName.value
      }, 
      {
        headers: {
            "Content-Type": "application/json"
        },
        withCredentials:true
      });
      alert('Evento actualizado con éxito');
  
    editStore.toggleShowForm();
  } catch (error) {
    alert('Error al procesar el formulario');
    console.error('Form submission error:', error);
  }
};

const fillForm = () => {
  
  event_title.value = props.event.event_title
  start_date.value = props.event.start_date
  finish_date.value = props.event.finish_date
  event_image.value = props.event.event_image
  max_participants.value = props.event.max_participants
  description.value = props.event.description
  cityName.value = props.event.cityName

}

</script>

<template>
  <div class="Container">
    <div class="titleContainer">
      <label class="x">x</label>
      <label class="title" for="title">{{ existingEvent ? 'Editar Evento' : 'Crear nuevo Evento' }}</label>
      <button class="btnX" @click="editStore.toggleShowForm">
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
          stroke-linejoin="round"       >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M18 6l-12 12" />
          <path d="M6 6l12 12" />
        </svg>
      </button>
      </div>
      <form ref="eventForm" @submit.prevent="submitForm">
      <div class="EventNameContainer">
        <label class="EventName" for="EventName">Nombre del Evento:</label>
        <input class="EventNameInput" type="text" v-model="event_title" />
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
          rows="8"
          v-model="description"
        ></textarea>
      </div>
      <div class="mb-3">
        <label for="formFile" class="form-label">Imagen:</label>
        <input class="form-control" type="file" id="formFile" />
      </div>
      <div class="SubmitButton">
        <button class="subBtn" type="submit" @click="submitForm">
        </button>
      </div>
      </form>
    </div>
</template>

<style scoped lang="scss">

.Container {
    align-items: center;
    position: absolute;
    top: 16%;
    left: $left-popUp;
    z-index: 99;
    @media screen and (max-width: 440px) {
        top: 10%;
        left: 5%;
      }
  }
  
  .titleContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 2%;
    padding-top: 2%;
  }
  .x {
    color: $astur-blue;
    size: 40px;
  }
  .FormNewEvent {
    background-color: $astur-blue;
    max-width: 800px;
    border-radius: 10px;
    justify-content: center;
    align-self: center;
    padding: 1% 5%;
    .title {
      font-family: $second-font;
      color: $astur-yellow;
      font-size: 40px;
      text-justify: center;
      @media screen and (max-width: 440px) {
        font-size: 30px;
      }
    }
  
    @media screen and (max-width: 440px) {
      max-width: 360px;
    }
  }
  .EventNameContainer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1%;
    outline: 0;
    color: white;
    font-family: $first-font;
  }
  .EventName {
    padding-left: 1%;
    font-size: 18px;
    font-weight: bold;
  }
  
  .EventNameInput {
    background-color: white;
    width: 570px;
    border-radius: 10px;
    border: solid 1;
    color: $astur-blue;
    padding-left: 1%;
    @media screen and (max-width: 440px) {
      width: 300px;
    }
  }
  #localidad {
    padding-left: 1%;
    font-size: 18px;
    font-weight: bold;
    color: white;
    width: 570px;
    @media screen and (max-width: 440px) {
      max-width: 360px;
    }
  }
  .combFrm {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1%;
    outline: 0;
    color: $astur-blue;
    font-family: $first-font;
    font-size: 18px;
    width: 640px;
    @media screen and (max-width: 440px) {
      max-width: 360px;
    }
  }
  
  select {
    background-color: white;
    border-radius: 10px;
    border: solid 1;
    color: $astur-blue;
    width: 570px;
    @media screen and (max-width: 440px) {
      max-width: 300px;
    }
  }
  .dateContainer {
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: space-between;
    padding: 1%;
    width: 580px;
    gap: 1%;
    font-family: $first-font;
    @media screen and (max-width: 440px) {
      max-width: 360px;
      flex-direction: column;
    }
  
    .form-control {
      border-radius: 10px;
      border: solid 1;
      color: $astur-blue;
      margin: 1%;
      width: 250;
      @media screen and (max-width: 440px) {
        max-width: 300px;
      }
    }
  }
  .form-label {
    color: white;
    font-size: 18px;
    font-weight: bold;
    padding-left: 1%;
  }
  #description {
    width: 570px;
    padding-left: 1%;
    margin-left: 1%;
    @media screen and (max-width: 440px) {
      max-width: 300px;
    }
  }
  
  #SubmitButton {
    display: block ;
    align-items: center;
  }

  button {
      background-color: $astur-green;
      color: white;
      border-radius: 5px;
      padding: 1% 2%;
      text-align: center;
      font-family: $first-font;
    }
    
  .mb-3 {
    width: 570px;
    margin-left: 1%;
    color: $astur-blue;
    --bs-body-color: $astur-blue;
    --bs-tertiary-bg: $astur-blue;
    @media screen and (max-width: 440px) {
      max-width: 300px;
    }
    
  }
</style>
