<script setup lang="ts">
import CarrouseltwoTemplate from '@/components/Home/CarrouseltwoTemplate.vue';
import PastEventsUser from '@/components/PastEventsUser.vue';
import UserCards from '@/components/UserCards.vue';
import { useEventsStore } from '@/stores/eventsStore';

const eventsStore = useEventsStore()
</script>

<template>

  <main>
  <h1></h1>
  <h1></h1>
  <CarrouseltwoTemplate />
    <button @click="console.log(eventsStore.events)">Print Data</button>
  <UserCards v-for="event in eventsStore.events" :key="event.id" :event="event" />
  <PastEventsUser />
  </main>
  
</template>
