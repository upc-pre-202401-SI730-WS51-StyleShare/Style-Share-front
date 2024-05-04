import http from "@/shared/services/http-common.js";

export class PostApiServices{
    getAll(){
        return http.get('/clothes')
    }
    create(postData) {
        return http.post('/clothes', postData);
    }


}