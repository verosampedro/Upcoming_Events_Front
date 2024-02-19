<script setup lang="ts">
import UserCards from '@/components/UserCards.vue';
import { useUsersStore } from '@/stores/usersStore';

const usersStore = useUsersStore()
</script>
<template>
    <div id="cards-container">
        <UserCards v-for="event in usersStore.currentUser.events" :key="event.id" :event="event" />
    </div>
</template>
<style scoped lang="scss">
#cards-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

@media only screen and (min-width: 768px) {
    #cards-container {
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
}
}
</style>