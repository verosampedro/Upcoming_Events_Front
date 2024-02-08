import type { IAuthUser } from "@/models/IAuthUser"
import type { ILoggedInUser } from "@/models/ILoggedInUser"
import AuthRepository from "@/repositories/AuthRepository"

export default class AuthService {

    repository: AuthRepository = new AuthRepository()

    async login(data: IAuthUser): Promise<ILoggedInUser> {

        // const json = await this.repository.authenticateAxios(data)
        const json = await this.repository.authenticate(data)
        
        const user: ILoggedInUser = {
            email: json.email,
            roles: json.roles,
            isAuthenticated: true
        }

        return user
        
    }

}