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
      items: []
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
            this.items = response.data;
            console.log(this.items);
            this.items.forEach((item) =>{
              this.total += item.price;
            })
          })
    },
    deleteItem(id){
      this.transactionsApiService.deleteItem(id);
      this.loadItems();
    }
  }
}
</script>

<template>

  <div class="buy-items">
    <div class="itemCards">
      <p class="title">CARRITO</p>
      <hr>
      <pv-card v-for="item in items" :key="item.id" class="item-card">
        <template #title class="card-title"></template>
        <template #content class="card-content">
          <div class="flex">
            <div class="col-2">
              <pv-button class="delete-button" icon="pi pi-times" rounded @click="deleteItem(item.id)"></pv-button>
            </div>
            <div class="col-3">
              <img v-if="item.name" :src="item.logo">
            </div>
            <div class="col right-card-column">
              <p>{{item.name}}</p>
              <p>S/.{{item.price}}</p>
              <p>Arrendador: {{item.lessor}}</p>
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
</style>