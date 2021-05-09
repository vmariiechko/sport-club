import axios from 'axios';

export const baseUrl = 'https://sport-club-dev.herokuapp.com/api';

const token = localStorage.getItem('token');

const instance = axios.create({
    baseURL,
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': token ? 'Bearer ' + token : ''
    }
});

export default instance;