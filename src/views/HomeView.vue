<script setup lang="ts">
import CarrouselTemplate from '@/components/Home/CarrouselTemplate.vue';
import PastEventsUser from '@/components/PastEventsUser.vue';
import UserCards from '@/components/UserCards.vue';
import { useEventsStore } from '@/stores/eventsStore';

const eventsStore = useEventsStore()
</script>

<template>
  <main>

    <CarrouselTemplate />
  
    <h2 class="event-titles">Eventos en curso</h2>
    <div id="cards-container"  v-if="eventsStore.isLoaded">
      <UserCards v-for="event in eventsStore.events" :key="event.id" :event="event"/>
    </div>
    <h2 class="event-titles">Eventos pasados</h2>
    <PastEventsUser />
  </main>
  </template>

<style scoped lang="scss">
#cards-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.event-titles {
  color: $astur-green;
  font-family: 'Raleway', sans-serif;
  font-weight: bold;
  text-align: center;
  margin-top: 2%;
}

@media only screen and (min-width: 768px) {
  #cards-container {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }

  .event-titles {
  text-align: left;
  margin-left: 3%;
  margin-top: 1%;
}
}
</style>