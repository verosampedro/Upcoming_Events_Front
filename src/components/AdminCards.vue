<script setup lang="ts">
import { ref } from 'vue';
import { useEditStore } from '@/stores/editStore';
import EditCard from './EditCard.vue';

const props = defineProps<{
    event: Event
}>()

const editStore = useEditStore();
const eventId = ref<number>(); 

const onEditButtonClick = (id: number | undefined) => {
  eventId.value = id;
  editStore.toggleShowForm();
};


</script>

<template>

    <div id="cards">

        <img src="/src/assets/img/Jornadas-de-la-Matanza-2024-FIT-Amieva.jpg" alt="" class="mainImage">

        <h2>{{ props.event.event_title}}</h2>

        <div class="location">

            <img src="/src/assets/img/place-svgrepo-com.svg" alt="">
            <p>{{ props.event.city.nameOfCity }}</p>

        </div>

        <div class="date">

            <img src="/src/assets/img/calendar-days-svgrepo-com.svg" alt="">
            <p>{{props.event.start_date}} ~ {{props.event.finish_date}}</p>

        </div>

        <div class="buttonContainer">

            <img src="/src/assets/img/star-svgrepo-com.svg" alt="">
            <button @click="onEditButtonClick(props.event.id)">EDITAR</button>

            <template v-if="editStore.isEditing">

            <EditCard :event="props.event" />

            </template>

            <img src="/src/assets/img/trash-svgrepo-com.svg" alt="">

        </div>

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

    .location, .date {
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

    .buttonContainer {

        display: flex;
        justify-content: space-between;
        padding: 5px;

        img {
            width: 12%;
        }
    
    button {
        background-color: #27a138;
        color: white;
        font-weight: bold;
        border-radius: 15px;
        padding: 10px;
        margin-top: 10px;
    }

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
}
}
</style>