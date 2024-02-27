<script setup lang="ts">
import AdminCards from '@/components/AdminCards.vue';
import PastEventsAdmin from '@/components/PastEventsAdmin.vue';
import BtnNewEvent from '@/components/form/BtnNewEvent.vue';
import NewEventForm from '@/components/form/NewEventForm.vue';
import { useEventsStore } from '@/stores/eventsStore';
import { usePopUpStore } from '@/stores/popUpStore';

const popUpStore = usePopUpStore();
const eventsStore = useEventsStore();

</script>
<template>
    <div>

        <div id="cards-container"  v-if="eventsStore.isLoaded">
      <AdminCards v-for="event in eventsStore.events" :key="event.id" :event="event"/>
        </div>
        <PastEventsAdmin />
        <BtnNewEvent @click="popUpStore.toogleShowForm"/>
        <NewEventForm v-if="popUpStore.showForm"/>
        
    </div>
</template>
<style scoped lang="scss">
</style>