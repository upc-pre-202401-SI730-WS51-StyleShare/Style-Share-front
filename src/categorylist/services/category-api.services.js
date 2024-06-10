import http from "@/shared/services/http-common.js";

export class CategoryApiServices {
    getAll(){
        return http.get('/category')
    }


}