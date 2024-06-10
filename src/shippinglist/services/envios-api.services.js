import http from "@/shared/services/http-common.js";

export class EnviosApiServices{
    getAll(){
        return http.get('/envios')
    }


}