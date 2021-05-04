import axios from 'axios';


const api = axios.create({
    baseURL: 'http://192.168.18.12:3333'
});

export default api;


//Aula 04 parou em: 01:41:00
//Comando para ativar json-server:
//json-server ./src/services/server.json --host 192.168.18.12 --port 3333