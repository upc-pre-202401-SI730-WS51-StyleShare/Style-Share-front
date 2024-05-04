import axios from "axios";

const API_BASE_URL = 'https://my-json-server.typicode.com/upc-pre-202401-SI730-WS51-StyleShare/db-server';
const http = axios.create({
    baseURL: API_BASE_URL, header:{ //tipo de formate que va a leer la api
        'Content-type': 'application/json',
    }
})

export default http;