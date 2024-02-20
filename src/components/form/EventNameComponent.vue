<script setup lang="ts"></script>
<template>
  <div class="EventNameContainer">
    <label class="EventName" for="EventName">Nombre del Evento:</label>
    <input class="EventNameInput" type="text" />
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
</style>
