import http from "@/shared/services/http-common.js";

export class ProductListApiServices{
    getAll(){
        return http.get('https://my-json-server.typicode.com/upc-pre-202401-SI730-WS51-StyleShare/db-server2/products')
    }
}
