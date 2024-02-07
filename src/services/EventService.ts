import Event from "@/models/Event";
import EventRepository from "@/repositories/EventRepository";

export default class EventService {

    repository = new EventRepository()
    events: Event[] = []

    constructor (repository: any){
        this.repository = repository
    }

    async index(): Promise<Event[]> {
        const events = await this.repository.getAll()

        events.forEach((event: any) => {

            const eventToAdd = new Event(event.id, event.event_title, event.start_date, event.finish_date, event.event_image, event.max_participants, event.description, event.city)
            this.events.push(eventToAdd)
        })

        return this.events
    }
}