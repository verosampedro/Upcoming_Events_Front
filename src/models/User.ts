export default class User {

    private id: number
    private email: string
    private roles: object[]
    private events: object[]

    constructor (id:number, email: string, roles: object[], events: object[]) {

        this.id = id
        this.email = email
        this.roles = roles
        this.events = events
    }

    getId() {
        return this.id 
    }

    getEmail() {
        return this.email
    }

    getRoles() {
        return this.roles
    }

    getEvents() {{
        return this.events
    }}
}