<template>
  <div v-if="productDetails" class="product-details-container">
    <div class="product-header">
      <img :src="productDetails.image" alt="Product Image" class="product-image" />
      <div class="product-info">
        <h1>{{ productDetails.title }}</h1>
        <p>{{ productDetails.description }}</p>
        <p class="product-price">S/. {{ productDetails.price }}</p>
        <div class="product-rating">
          <span>★</span> {{ productDetails.rating.value }}/5 ({{ productDetails.rating.quantity }})
        </div>
        <button class="buy-now-button">Comprar ahora</button>
        <button class="add-to-cart-button">Añadir al carro</button>
      </div>
    </div>
    <div class="product-characteristics">
      <h2>Características:</h2>
      <ul>
        <li v-for="(characteristic, index) in productDetails.characteristics" :key="index">
          <strong>{{ characteristic.name }}:</strong> {{ characteristic.content }}
        </li>
      </ul>
    </div>
    <div class="product-lessor">
      <img :src="productDetails.lessor.image" alt="Lessor Image" class="lessor-image" />
      <div>
        <p>{{ productDetails.lessor.name }}</p>
        <p>{{ productDetails.lessor.rentals }} alquileres realizados en los últimos 3 meses</p>
        <button class="chat-button">Chatea con el arrendador</button>
      </div>
    </div>
    <div class="product-comments">
      <h2>Comentarios:</h2>
      <ul>
        <li v-for="(comment, index) in productDetails.comments" :key="index">
          <p><strong>{{ comment.user }}</strong>: {{ comment.commentary }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ProductDetailsApiServices } from "@/details/services/product-details-api.services.js";

export default {
  name: "ProductDetails",
  data() {
    return {
      productDetails: null,
    };
  },
  created() {
    this.detailsService = new ProductDetailsApiServices();
    this.detailsService.getAll().then((response) => {
      this.productDetails = response.data;
      console.log(this.productDetails);
    });
  },
};
</script>

<style scoped>
.product-details-container {
  margin: 20px auto;
  width: 1300px; /**/
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  margin-top:180px;/**/

}

.product-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.product-image {
  max-width: 300px;
  border-radius: 8px;
}

.product-info {
  flex: 1;
  margin-left: 20px;
}

.product-price {
  font-size: 24px;
  color: #333;
}

.product-rating {
  display: flex;
  align-items: center;
  font-size: 18px;
  margin-top: 10px;
}

.product-rating span {
  color: gold;
  margin-right: 5px;
}

.buy-now-button, .add-to-cart-button, .chat-button {
  display: inline-block;
  padding: 10px 20px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.buy-now-button {
  background-color: #4CAF50;
  color: white;
}

.add-to-cart-button {
  background-color: #2196F3;
  color: white;
  margin-left: 10px;
}

.product-characteristics, .product-comments {
  margin-top: 20px;
}

.product-comments ul, .product-characteristics ul {
  list-style-type: none;
  padding: 0;
}

.product-comments li, .product-characteristics li {
  margin-bottom: 10px;
}

.product-lessor {
  display: flex;
  align-items: center;
  margin-top: 20px;
}

.lessor-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
}

.chat-button {
  background-color: #FF9800;
  color: white;
}
</style>
