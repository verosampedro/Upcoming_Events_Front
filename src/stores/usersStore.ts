import type { IUpdatedUser } from "@/models/IUpdatedUser"
import UserRepository from "@/repositories/UserRepository"
import UserService from "@/services/UserService"
import { defineStore } from "pinia"
import { reactive } from "vue"

export const useUsersStore = defineStore('users', () => {

    const repository = new UserRepository()
    const service = new UserService(repository)
    let currentUser: IUpdatedUser = reactive({
        email: '',
        roles: [],
        events: []
    })

    async function updateUserEvents(eventId: number): Promise<IUpdatedUser> {

        const response = await service.updateEvent(eventId)
        console.log(response)
        currentUser = response;
        return response;
    }

    return { updateUserEvents, currentUser }
})