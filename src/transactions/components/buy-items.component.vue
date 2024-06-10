<script>

import {TransactionsApiService} from "@/transactions/services/transactions-api.service.js";

export default {
  name: "buy-items",
  title: "Buy Items",
  data(){
    return{
      title:"Buy Items",
      items: [],
      total: 0
    }
  },
  created() {
    this.transactionsApiService = new TransactionsApiService();
    this.transactionsApiService.getAllItems()
        .then((response) => {
          this.items = response.data;
          this.items.forEach((item) =>{
            this.total += item.price;
          })
        })
  }
}
</script>

<template>
  <div class="buy-items">
    <div id="amount">Total: S/.{{total}}</div>
    <pv-button class="p-button-text text-white" id="payButton" label="Pagar" raised></pv-button>
  </div>
</template>

<style scoped>

.buy-items{
  position: relative;
  text-align: center;
}

#amount{
  font-size: 2.5em;
  color: white;
  background-color: #006973;
  width: 60%;
  margin: 25px auto 25px auto;
}

#payButton{
  font-size: 3.3em;
  color: white;
  background-color: #006973;
  width: 50%;
  margin: 20px auto 20px auto;
  border-radius: 40px;
  text-align: center;
  display: block;
}

</style>