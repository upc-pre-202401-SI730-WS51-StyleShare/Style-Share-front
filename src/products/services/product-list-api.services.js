import http from "@/shared/services/http-common.js";

export class ProductListApiServices{
    getAll(){
        return http.get('/products')
    }
}