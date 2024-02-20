import axios from 'axios';

export default class EventRepository {

    uri:string = 'http://localhost:8080/api/v1/events'

    async getAll(): Promise<any> {

        try {
            const response = await axios.get(this.uri);
            return response.data;
            console.log(response.data);
        } catch (error) {
            throw new Error('Error occurred during API fetch GET request to the Events table');
        }
    }

    async update(id: number, data: Object) {
        try {
            const response = await axios.put(`${this.uri}/${id}`, data, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials:true
            });
    
            console.log(response.data);
        } catch (error) {
            console.error('Error occurred during API fetch PUT request:', error);
            throw error; 
        }
    }
}