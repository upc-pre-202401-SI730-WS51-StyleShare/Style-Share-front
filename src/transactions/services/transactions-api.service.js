import http from "@/shared/services/http-common.js";
import {Item} from "@/transactions/model/item.entity.js";

export class TransactionsApiService {

    getAllItems(){
        return http.get('http://localhost:5035/api/v1/-products-cart')
    }

    getAllCarts(){
        return http.get('http://localhost:5035/api/v1/-carts')
    }

    deleteItem(id){
        return http.delete(`/cartItems/${id}`)
    }
}