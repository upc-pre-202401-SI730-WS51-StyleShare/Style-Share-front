import http from "@/shared/services/http-common.js";

export class ProductDetailsApiServices{
    getAll(){
        return http.get('/productDetails')
    }
}