import axios from 'axios';


const api = axios.create({
    baseURL: 'http://192.168.18.12:3333'
});

export default api;

//Aula parou em 01:01:11