<script setup lang="ts">
import PastEventsUser from '@/components/PastEventsUser.vue';
import UserCards from '@/components/UserCards.vue';
import { useEventsStore } from '@/stores/eventsStore';

const eventsStore = useEventsStore()
</script>

<template>

  <main>
  <h1></h1>
  <h1>Holaaaa</h1>
    <button @click="console.log(eventsStore.events)">Print Data</button>
  <UserCards v-for="event in eventsStore.events" :key="event.id" :event="event" />
  <PastEventsUser />
  </main>
  
</template>
