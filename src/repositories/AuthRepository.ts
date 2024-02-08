import type { IAuthUser } from "@/models/IAuthUser"
import type { ILoggedInUser } from "@/models/ILoggedInUser"
import axios from "axios"

export default class AuthRepository {

    uri: string = import.meta.env.VITE_API_ENDPOINT_GENERAL

    async authenticate(data: IAuthUser): Promise<ILoggedInUser> {
        try {
            const config = {
                auth: {
                    username: data.email,
                    password: data.password
                },
                withCredentials: true
            }
            const response = await axios.get(this.uri + '/login', config)
            return response.data
        } catch (error) {
            throw new Error('API does not respond: ' + error)
        }
    }
}