import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import EventRepository from '@/repositories/EventRepository'
import EventService from '@/services/EventService'
import type Event from '@/models/Event'


export const useEventsStore = defineStore('events', () => {

    const repository = new EventRepository()
    const service = new EventService(repository)

    const events: Event[] = reactive([])
    const isLoaded = ref(false)

    async function setEvents(this: any): Promise<void> {

        this.events = await service.index()
        isLoaded.value = true
    }

    return { events, isLoaded, setEvents}
})