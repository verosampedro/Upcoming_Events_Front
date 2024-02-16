import Event from "@/models/Event";
import EventRepository from "@/repositories/EventRepository";
import axios from 'axios';

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

    async update(id: number, event: Record<string, any>): Promise<Array<Record<string, any>>> {
        try {
          
          const response = await axios.get(`${this.repository}/events`);
          const events: Array<Record<string, any>> = response.data;
    
         
          await axios.put(`${this.repository}/events/${id}`, event);
    
          
          const indexOfEvent = events.findIndex((element) => element.id === id);
    
          
          events[indexOfEvent] = event;
    
          return events;
        } catch (error) {
          console.error('Error al actualizar el ticket:', error);
          throw error;
        }
      }
    }