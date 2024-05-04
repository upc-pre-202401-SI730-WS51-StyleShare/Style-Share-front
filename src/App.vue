<script setup>

import ItemCard from "@/transactions/components/item-card.component.vue";
import HeaderComponent from "@/public/header.component.vue";
import BuyItems from "@/transactions/components/buy-items.component.vue";
</script>

<template>
    <header-component></header-component>
  <div class="transactions-component">
    <div class="flex">
      <div class="col-7">
        <item-card></item-card>
      </div>
      <div class="col">
        <buy-items></buy-items>
      </div>
    </div>
  </div>

</template>

<style scoped>

.transactions-component{
  padding: 0 0 0 3%
}

div#app{
  margin: 0 0;
}

</style>
