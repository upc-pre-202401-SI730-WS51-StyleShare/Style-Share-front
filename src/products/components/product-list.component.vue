<script>
import { ProductListApiServices } from "@/products/services/product-list-api.services.js";

export default {
  name: "ProductsList",
  data() {
    return {
      title: "Productos para ti",
      products_list: [],
    };
  },
  created() {
    this.listService = new ProductListApiServices();
    this.listService.getAll().then(response => {
      this.products_list = response.data;
      console.log(this.products_list);
    });
  },
};
</script>

<template>
  <div class="divCars">
    <h1>{{ title }}</h1>
    <div class="products-container">
      <div v-for="product in products_list" :key="product.id" class="product-card">
        <div class="product-image-container">
          <img :src="product.image" alt="Product Image" class="product-image"/>
        </div>
        <div class="product-details">
          <h2>{{ product.title }}</h2>
          <p>{{ product.description }}</p>
          <p><strong>Precio:</strong> S/.{{ product.price }}</p>
          <div class="product-footer">
            <button class="add-to-cart-button">Agregar al Carrito</button>
            <p><strong>Rating:</strong> {{ product.rating }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.divCars{

  height: 692px;
}

.products-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
}

.product-card {
  width: 1300px;
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background-color: white;
  padding: 20px;

}

.product-image-container {
  flex: 0 0 200px;
  height: 200px;
  overflow: hidden;
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product-details {
  flex: 1;
  padding: 20px;
}

.product-details h2 {
  font-size: 1.5em;
  margin: 0 0 10px;
}

.product-details p {
  margin: 0 0 10px;
}

.product-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.add-to-cart-button {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.add-to-cart-button:hover {
  background-color: #45a049;
}
</style>
