import axios from "axios";

const API_BASE_URL = 'http://localhost:3000/';
const http = axios.create({
    baseURL: API_BASE_URL, headers:{ //tipo de formate que va a leer la api
        'content-type': 'application/json',
    }
})

export default http;