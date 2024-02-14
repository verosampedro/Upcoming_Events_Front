import type { IUpdatedUser } from "@/models/IUpdatedUser"
import UserRepository from "@/repositories/UserRepository"
import UserService from "@/services/UserService"
import { defineStore } from "pinia"

export const useUsersStore = defineStore('users', () => {

    const repository = new UserRepository()
    const service = new UserService(repository)

    async function updateUserEvents(eventId: number): Promise<IUpdatedUser> {

        const response = await service.updateEvent(eventId)
        console.log(response)
        return response;
    }

    return { updateUserEvents }
})