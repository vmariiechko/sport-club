import axios from 'axios';

export const baseUrl = 'https://sport-club-dev.herokuapp.com/api';

const instance = axios.create({
    baseUrl,
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default instance;