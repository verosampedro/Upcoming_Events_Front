<script setup lang="ts">
<<<<<<< HEAD
import NewEventForm from '@/components/form/NewEventForm.vue';


</script>
<template>
  <body>
    <div>
        <NewEventForm/>
    </div>
  </body>
</template>
<style scoped lang="scss">
</style>
=======
import UserCards from '@/components/UserCards.vue';
import { useUsersStore } from '@/stores/usersStore';

const usersStore = useUsersStore()
</script>
<template>
    <h2 class="event-titles">Eventos en curso</h2>
    <div id="cards-container">
        <UserCards v-for="event in usersStore.currentUser.events" :key="event.id" :event="event" />
    </div>
    <h2 class="event-titles">Eventos pasados</h2>
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
>>>>>>> feature/user-dashboard
