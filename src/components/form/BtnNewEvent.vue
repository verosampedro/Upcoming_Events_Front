<script setup lang="ts">
import { ref } from 'vue';
import NewEventForm from './NewEventForm.vue';


const isFormOpened = ref(false);

const openForm = () => {
    isFormOpened.value = true;
};
const closeForm = () => {
    isFormOpened.value = false;
};

</script>
<template>
    <div>
        <button @click="openForm">Crear nuevo Evento</button>
    </div>
    <NewEventForm :isOpen="isFormOpened" @modal-close="closeForm"/>
</template>
<style scoped lang="scss">
</style>