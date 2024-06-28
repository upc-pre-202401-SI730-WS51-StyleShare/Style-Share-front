<script>
import {Item} from "@/transactions/model/item.entity.js";
import {TransactionsApiService} from "@/transactions/services/transactions-api.service.js";

export default {
  name: "item-card",
  title: "Item Card",
  data(){
    return{
      title:"Item Card",
      total: 0,
      producto: [],
      carito: [],
      productoConCarito: []

    }
  },
  created() {
    this.loadItems();
  },
  methods: {

    loadItems(){
      this.transactionsApiService = new TransactionsApiService();
      this.transactionsApiService.getAllItems()
          .then((response) => {
            this.producto = response.data;

            this.transactionsApiService.getAllCarts()
                .then((response2) => {
                  this.carito= response2.data;

                  // Por cada producto, busca el carrito correspondiente y almacena los datos en productoConCarito
                  this.producto.forEach(producto => {
                    const caritoCorrespondiente = this.carito.find(carito => carito.id === producto.cartid);
                    if (caritoCorrespondiente) {
                      this.productoConCarito.push({
                        producto: producto,
                        carito: caritoCorrespondiente
                      });
                    }
                  });

                  console.log(this.productoConCarito); // Imprime los productos con sus carritos correspondientes
                })
          })
    },

  }
}
</script>

<template>
  <div class="buy-items">
    <div class="itemCards">
      <p class="title">CARRITO</p>
      <hr>
      <pv-card v-for="item in productoConCarito" :key="item.producto.id" class="item-card">
        <template #title class="card-title"></template>
        <template #content class="card-content">
          <div class="flex">
            <div class="col-2">
              <pv-button class="delete-button" icon="pi pi-times" rounded @click="deleteItem(item.producto.id)"></pv-button>
            </div>
            <div class="col-3">
              <img v-if="item.producto.name" :src="item.producto.logo">
            </div>
            <div class="col right-card-column">
              <p>Identidicador del producto: </p><p>{{item.producto.productid}}</p>
              <p>S/.{{item.carito.subTotal}}</p>
              <p>Cantida de elementos: {{item.carito.quantityProducts}}</p>
              <p>Identidicador del carrito: </p><p>{{item.carito.id}}</p>
              <!-- Aquí puedes agregar más datos del carrito si lo deseas -->
            </div>
          </div>
          <hr>
        </template>
      </pv-card>
    </div>
    <div>
      <buy-items></buy-items>
    </div>
  </div>
</template>

<style scoped>
  img{
    width: 100%;
  }

  hr{
    width: 90%;
    color: #006973;
    background-color: #006973;
    height: 5px;
    text-align: left;
    margin: 0;
  }

  pv-card{

  }

  .delete-button{
    top: 40%;
    min-height: 30px;
    height: 10%;
    text-align: center;
    color: white;
    background-color: #174C4F;
  }

  .itemCards{
    margin-top:130px;
    position: relative;
    text-align: left;
  }

  .item-card{
    color: black;
    background-color: #FFFFFF;
  }

  .title{
    font-weight: bold;
    font-size: 3.5em;
    padding: 5px 0 20px 50px
  }

  .right-card-column{
    font-size: 1.5em;
  }

  div.p-component{
    font-size: 20px;
  }

  .flex{


    width: 800px; /* Aumenta el ancho del formulario */

  }


</style>