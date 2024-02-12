<script setup lang="ts">
import axios from "axios";
import { ref } from "vue";

interface cities {
  id_city: number;
  city_name: string;
}

const allCities = ref<cities[]>([]);

const fetchCities = async () => {
  const response = await axios.get("http://localhost:8080/api/v1/cities");
  allCities.value = response.data;
  console.log(response.data);
};

fetchCities();
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
        <input class="EventNameInput" type="text" />
      </div>
      <div class="combFrm">
        <label for="localidades" id="localidad">Localidades</label>
        <select v-model="fetchCities" id="comboForm">
          <option value="null">Seleccione localidad</option>
          <option
            v-for="cities in allCities"
            v-bind:value="cities.city_name"
            :key="cities.id_city"
            selected
          >
            {{ cities.city_name }}
          </option>
        </select>
      </div>
      <div class="dateContainer">
        <div id="dates">
          <label for="date" class="form-label">Fecha de inicio:</label>
          <input type="date" class="form-control" id="date" />
        </div>
        <div class="dates">
          <label for="date" class="form-label">Fecha fin:</label>
          <input type="date" class="form-control" id="date" />
        </div>
        <div class="participants">
          <label class="form-label" for="Participants">Participantes:</label>
          <input
            class="form-control"
            type="text"
            name="Participants"
            id="Participants"
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
        ></textarea>
      </div>
      <div class="mb-3">
        <label for="formFile" class="form-label">Imagen:</label>
        <input class="form-control" type="file" id="formFile" />
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.Container {
  align-items: center;
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
  padding: 1% 7%;
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
  width: 640px;
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
  width: 640px;
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
  color: white;
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
  width: 640px;
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
  width: 640px;
  gap: 1%;
  font-family: $first-font;
  @media screen and (max-width: 440px) {
    max-width: 360px;
    flex-direction: column;
  }

  .form-control {
    border-radius: 10px;
    border: solid 1;
    color: white;
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
  width: 640px;
  padding-left: 1%;
  margin-left: 1%;
  @media screen and (max-width: 440px) {
    max-width: 300px;
  }
}
.mb-3 {
  width: 640px;
  margin-left: 1%;
  color: $astur-blue;
  --bs-body-color: $astur-blue;
  --bs-tertiary-bg: $astur-blue;
  @media screen and (max-width: 440px) {
    max-width: 300px;
  }
}
</style>
