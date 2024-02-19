export default class Event {

    id:number
    event_title:string 
    start_date:number
    finish_date:number
    event_image:number
    max_participants:number
    description:string
    city:object
    

    constructor (id:number, event_title:string, start_date:number, finish_date:number, event_image:number, max_participants:number, description:string, city:object) {

        this.id = id
        this.event_title = event_title
        this.start_date = start_date
        this.finish_date = finish_date
        this.event_image = event_image
        this.max_participants = max_participants
        this.description = description
        this.city = city
    }

    getId() {
        return this.id 
    }

    getEvent_title() {
        return this.event_title 
    }

    getStart_date() {
        return this.start_date
    }

    getFinish_date() {
        return this.finish_date
    }

    getEvent_image() {
        return this.event_image
    }

    getMax_participants() {
        return this.max_participants
    }

    getDescription() {
        return this.description
    }

    getCity() {
        return this.city
    }


}