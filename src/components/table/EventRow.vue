<script setup lang="ts">
import type Event from '../../models/Event';
defineProps<{
    events: Event
}>()
</script>

<template>
 <tr>
    <td>{{events?.id}}</td>
    <td>{{events?.event_title}}</td>
    <td>{{events?.start_date}}</td>
    <td>{{events?.finish_date}}</td>
    <td>{{events?.event_image}}</td>
    <td>{{events?.max_participants}}</td>
    <td>{{events?.description}}</td>
    <td>{{events?.city}}</td>
 </tr>
</template>

<style lang="scss" scoped>
td {
    border: 1px solid black;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-style: normal;
}
</style>