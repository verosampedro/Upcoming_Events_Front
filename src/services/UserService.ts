import type { IUpdatedUser } from "@/models/IUpdatedUser"
import User from "@/models/User"
import UserRepository from "@/repositories/UserRepository"

export default class EventService {

    repository = new UserRepository()

    constructor (repository: any){
        this.repository = repository
    }

    async updateEvent(id: number): Promise<IUpdatedUser> {
        const json = await this.repository.putEvent(id)

        const user = new User(json.id, json.email, json.roles, json.events)
        
        const updatedUser: IUpdatedUser = {
            email: user.getEmail(),
            roles: user.getRoles(),
            events: user.getEvents()
        }

        return updatedUser
    }
}