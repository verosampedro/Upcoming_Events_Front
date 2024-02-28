import type { ILoggedInUser } from "@/models/ILoggedInUser"
import type { IRegisterUser } from "@/models/IRegisterUser"
import { defineStore } from "pinia"
import { reactive } from "vue"



export const useAuthStore = defineStore('auth', () => {

    const user: ILoggedInUser= reactive({
        email: '',
        roles: '',
        isAuthenticated: false

    })
    const newUser: IRegisterUser= reactive ({
        email: '',
        password: '',
        roles: '',
        isAuthenticated: false  
    })
    
    return { user, newUser }
})


