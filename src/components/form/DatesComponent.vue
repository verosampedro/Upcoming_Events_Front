<script setup lang="ts">
</script>
<template>
  <div class="dateContainer">
    <div id="dates">
      <label for="date" class="form-label">Fecha de inicio:</label>
      <input type="date" class="form-control" id="date" />
    </div>
    <div class="dates">
      <label for="date" class="form-label">Fecha fin:</label>
      <input type="date" class="form-control" id="date" />
    </div>
  </div>
</template>
<style scoped lang="scss">
.dateContainer {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 1%;
  gap: 10px;
  font-family: $first-font;

  .form-control   {
    width: 200px;
    border-radius:10px;
    border: solid 1;
    color: $astur-blue;
    margin: 1%;
  }
  .form-label {
    color: $astur-blue;
    font-size: 18px;
    font-weight: bold;
    padding-left: 1%;
  }
}
</style>
