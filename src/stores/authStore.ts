import type { ILoggedInUser } from "@/models/ILoggedInUser"
import { defineStore } from "pinia"
import { reactive } from "vue"



export const useAuthStore = defineStore('auth', () => {

    const user: ILoggedInUser= reactive({
        email: '',
        roles: '',
        isAuthenticated: false
    })
    
    return { user }
})