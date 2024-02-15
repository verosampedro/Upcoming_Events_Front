<script setup lang="ts">

import { useAuthStore } from '@/stores/authStore';
import { useEventsStore } from '@/stores/eventsStore';
import { useUsersStore } from '@/stores/usersStore';
import { ref } from 'vue';

const isSigned = ref(false);

const toggleSignedUp = () => {
  isSigned.value = !isSigned.value;
};

defineProps<{
    event: any
}>()

const usersStore = useUsersStore()
const authStore = useAuthStore()
const eventsStore = useEventsStore()

</script>

<template>
  <div id="cards">
    <img src="/src/assets/img/Jornadas-de-la-Matanza-2024-FIT-Amieva.jpg" alt="" class="mainImage">
    <h2>{{ event.event_title }}</h2>

    <div class="location">
      <img src="/src/assets/img/place-svgrepo-com.svg" alt="">
      <p>{{ event.city.city_name }}</p>
    </div>

    <div class="date">
      <img src="/src/assets/img/calendar-days-svgrepo-com.svg" alt="">
      <p>{{ event.start_date }} ~ 04/02/24</p>
    </div>

    <button @click="toggleSignedUp(), usersStore.updateUserEvents(event.id)">
      {{ isSigned ? '¡ME DESAPUNTO!' : '¡ME APUNTO!' }}
    </button>

  </div>

</template>

<style scoped lang="scss">

#cards {
  width: 60%;
  border: 2px solid #27a138;
  border-radius: 5%;
  padding: 10px;
  text-align: center;
  font-family: 'Raleway', sans-serif;
  margin: 2%;

  .location,
  .date {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .mainImage {
    width: 60%;
    padding: 10px;
  }

  img {
    width: 10%;
  }

  h2 {
    font-weight: bold;
    padding: 5px;
  }

  p {
    color: #27a138;
    font-weight: bold;
    padding: 5px;
  }

  button {
    background-color: #27a138;
    color: white;
    font-weight: bold;
    border-radius: 15px;
    padding: 9px;
    margin-top: 10px;
    margin-left: 30%;
  }

}


@media only screen and (min-width: 768px) {

#cards {
  width: 15%;

  h2 {
    font-size: 1rem;
  }

  img {
    width: 10%;
  }

  .mainImage {
    width: 40%;
  }

  button {
    border-radius: 10px;
    padding: 5px;
    margin-top: 5px;
    margin-left: 30%;
  }
}
}

</style>