import type { IUpdatedUser } from "@/models/IUpdatedUser"
import User from "@/models/User"
import UserRepository from "@/repositories/UserRepository"
import { useUsersStore } from "@/stores/usersStore"

export default class EventService {

    repository = new UserRepository()

    constructor (repository: any){
        this.repository = repository
    }

    async updateEvent(id: number): Promise<IUpdatedUser> {
        const usersStore = useUsersStore()

        const json = await this.repository.putEvent(id)

        const user = new User(json.id, json.email, json.roles, json.events)

        usersStore.currentUser.email = user.getEmail()
        usersStore.currentUser.roles = user.getRoles()
        usersStore.currentUser.events = user.getEvents()
        
        const updatedUser: IUpdatedUser = {
            email: user.getEmail(),
            roles: user.getRoles(),
            events: user.getEvents()
        }

        return updatedUser
    }
}