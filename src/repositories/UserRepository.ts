import axios from 'axios';

export default class UserRepository {

    uri: string = import.meta.env.VITE_API_ENDPOINT_USERS

    async putEvent(id: number): Promise<any> {

        try {
            const response = await axios.put(this.uri + '/eventSignUp/' + id, {}, { withCredentials: true });
            return response.data;
        } catch (error) {
            alert ('The maximum numbers of participants is reached');
        }
    }
}