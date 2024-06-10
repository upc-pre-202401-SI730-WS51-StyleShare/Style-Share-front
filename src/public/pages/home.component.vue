<script>

import {ProductDetailsApiServices} from "@/details/services/product-details-api.services.js";
import {EnviosApiServices} from "@/shippinglist/services/envios-api.services.js";
import {ProductListApiServices} from "@/products/services/product-list-api.services.js";

export default {
  name: "home",
  components: {},
  data() {
    return {

      details_image: [],
      drawer: false,
      pages: [
        { label: "ProductDetails", to: "/product-detail" },
      ]
    };
  },
  created(){
    this.DetailsService = new ProductListApiServices
    this.DetailsService.getAll()
        .then(response => {
          this.details_image = response.data;
          console.log(this.details_image);

        });
  },
}



</script>

<template>

  <div class="image-container">
    <router-link :to="{ path: '/subscription' }" router-link-exact>
      <img src="https://i.ibb.co/xHPnffP/image-20.png" alt="Banner Image" class="banner-image">
    </router-link>
  </div>
  <div class="button-container">
    <router-link :to="{ path: '/post' }" router-link-exact>
      <button class="publish-button">Publicar prenda</button>
    </router-link>
  </div>


  <div class="seccion-titulo">
    <h1 class="titulo-publicaciones">Novedades</h1>
    <div class="underline-rectangle"></div>
  </div>

  <div class="div-imgs">

    <pv-card v-for="details in details_image" :key="details.id" class="m-2">
      <template #content>
        <router-link :to="{ path: '/product-detail' }" router-link-exact>
          <img class="img-home" v-if="details.image"  :src="details.image"/>
        </router-link>
      </template>

    </pv-card>


  </div>

  <div class="button-section">
    <div class="button-box">
      <p class="button-text">        Tiene una reunion formal?</p>
      <button class="action-button">ver mas</button>
    </div>
    <div class="button-box">
      <p class="button-text">      Mejores accesorios </p>
      <button class="action-button">ver mas</button>
    </div>
  </div>

</template>

<style>

.action-button{
  background-color: #008973;

}

.button-text{

  text-align: center;
  color:white;

}
.button-box{
  background-color: #174C4F;
  margin-left:30px;
  border-radius:30px;
  width: 650px;
  height: 150px;
}

.div-imgs{
  background-color: white;
  display: flex;
  width: 200px;
}



.img-home{

  border-radius: 50%;
  padding: 20px;
  width: 400px;
  height: 300px;
  background-color: transparent;

}
.image-container{

  margin-top: 60px;
  margin-bottom: 50px;
  margin-right: 200px;



}

.banner-image {
  width: 1448px;
  height: 144px;

}

.button-container {
  text-align: center; /* Center the button horizontally */
  margin-top: 20px; /* Add spacing between image and button */
}

.publish-button {
  background-color: #174C4F;
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-size: 16px;
}

.seccion-titulo {
  position: relative;
  transform: translate(-50%, 0);
  width: 80%;
  max-width: 1000px;
  margin: 0 auto;
}
.underline-rectangle {
  width: 350px;
  height: 5px;
  background-color: #174C4F;
  margin-top: 5px;
}

.button-section{
  display:flex;

}

</style>