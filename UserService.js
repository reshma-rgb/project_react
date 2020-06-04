import axios from 'axios';
const API_URL = 'http://localhost:8000';
export default class UsersService{

    constructor(){}
    getUsers() {
        const url = `${API_URL}/api/`;
        return axios.get(url).then(response => response.data);
    }
    deleteUsers(user){
        const url = `${API_URL}/api/${user.pk}`;
        return axios.delete(url);
    }
    createUsers(user){
        const url = `${API_URL}/api/`;
        return axios.post(url,user);
    }
}
