import axios from 'axios';


const api = axios.create({
    baseURL: 'http://192.168.18.1:3333'
});

export default api;

//Aula parou em 48:35