import http from "@/shared/services/http-common.js";
import axios from "axios";

const apiClient = axios.create({
    withCredentials: false, // This is the default
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

export class CategoryApiServices {
    static getAll(){
        return apiClient.get(`http://localhost:5010/`);
    }

    static create(category) {
        console.log('Data being sent:', category); // Añade este console.log para verificar los datos antes de enviar la solicitud
        return apiClient.post(`http://localhost:5010/`, category);
    }

    static update (id, category) {
        return apiClient.put(`http://localhost:5010/${id}`, category);
    }

    static delete(id) {
        return apiClient.delete(`http://localhost:5010/${id}`);
    }

    static getFavorites() {
        return apiClient.get('http://localhost:5010/favorites');
    }

    static getById(id) {
        return apiClient.get(`http://localhost:5010/${id}`);
    }

}