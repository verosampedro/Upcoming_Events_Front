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
  <input class="form-control" type="file" id="formFile">
</div>
</template>
<style scoped lang="scss">
.EventNameContainer {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1%;
  outline: 0;
  color: $astur-blue;
  font-family: $first-font;
}
.EventName {
  padding-left: 1%;
  font-size: 18px;
  font-weight: bold;
}

.EventNameInput {
  background-color: $astur-blue;
  width: 80%;
  border-radius: 10px;
  border: solid 1;
  color: white;
  padding-left: 1%;
}
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
.dateContainer {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  padding: 1%;
  width: 80%;
  font-family: $first-font;

  .form-control {
    width: 80%;
    border-radius: 10px;
    border: solid 1;
    color: $astur-blue;
    margin: 1%;
  }
}
.form-label {
  color: $astur-blue;
  font-size: 18px;
  font-weight: bold;
  padding-left: 1%;
}
#description {
  width: 80%;
  padding-left: 1%;
  margin-left: 1%;
}
.mb-3 {
    width: 80%;
    margin-left: 1%;
}
</style>
