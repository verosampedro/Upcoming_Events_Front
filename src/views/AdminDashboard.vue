<script setup lang="ts">
import AdminCards from '@/components/AdminCards.vue';
import PastEventsAdmin from '@/components/PastEventsAdmin.vue';
import BtnNewEvent from '@/components/form/BtnNewEvent.vue';
import NewEventForm from '@/components/form/NewEventForm.vue';
import { usePopUpStore } from '@/stores/popUpStore';

const popUpStore = usePopUpStore();

</script>
<template>
    <div>

        <AdminCards />
        <PastEventsAdmin />
        <BtnNewEvent @click="popUpStore.toogleShowForm"/>
        <NewEventForm v-if="popUpStore.showForm"/>
        
    </div>
</template>
<style scoped lang="scss">
</style>