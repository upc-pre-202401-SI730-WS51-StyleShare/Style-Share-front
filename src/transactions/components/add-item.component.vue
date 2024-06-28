<template>
  <div class="container">

  <p class="title">Agregar al carrito de compras</p>
  <div>
    <form @submit.prevent="submitForm">
      <label for="cuponDiscount">Descuento:</label>
      <input type="number" id="cuponDiscount" v-model="form.cuponDiscount">

      <label for="quantityProducts">Cantidad del producto:</label>
      <input type="number" id="quantityProducts" v-model="form.quantityProducts">

      <label for="subTotal">Sub Total:</label>
      <input type="number" id="subTotal" v-model="form.subTotal">

      <button type="submit">Crear carrito</button>
    </form>
  </div>

  <div>
    <form @submit.prevent="submitProductCartForm">
      <label for="productid">Identificador del producto:</label>
      <input type="number" id="productid" v-model="productCartForm.productid">

      <label for="cartid">Identificador del carrito:</label>
      <input type="number" id="cartid" v-model="productCartForm.cartid">

      <button type="submit">Agregar Producto</button>
    </form>
  </div>

    <router-link :to="{ path: '/Buy' }" router-link-exact>
      <button @click="completeOrder">Completar</button>
    </router-link>
  </div>

</template>

<script>
import axios from 'axios';

export default {
  name: "add-card",
  title: "Add Card",

  data() {
    return {
      title:"AddCard",
      form: {
        cuponDiscount: 0,
        quantityProducts: 0,
        subTotal: 0
      },
      productCartForm: {
        productid: 0,
        cartid: 0
      }
    }
  },
  methods: {
    submitForm() {
      axios.post('http://localhost:5010/api/v1/-carts', this.form)
          .then(response => {
            console.log(response);
          })
          .catch(error => {
            console.error(error);
          });
    },

    submitProductCartForm() {
      axios.post('http://localhost:5010/api/v1/-products-cart', this.productCartForm)
          .then(response => {
            console.log(response);
          })
          .catch(error => {
            console.error(error);
          });
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

form {
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 5px;
  background-color: #f2f2f2;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1);
}

label {
  margin: 10px 0;
  font-size: 1.2em;
}

input {
  margin-bottom: 10px;
  padding: 10px;
  font-size: 1em;
  border-radius: 5px;
  border: 1px solid #ccc;
}

button {
  padding: 10px 20px;
  font-size: 1em;
  color: #fff;
  background-color: #006973;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #004d4a;
}

.title{
  font-weight: bold;
  font-size: 3.5em;
  padding: 5px 0 20px 50px;
  text-align: center;
}
</style>