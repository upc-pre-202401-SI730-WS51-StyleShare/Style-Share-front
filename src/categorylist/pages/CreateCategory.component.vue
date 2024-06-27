<template>
  <div class="category-form">
    <form @submit.prevent="createCategory" class="form-container">
      <h2 class="form-title">Create New Category</h2>



      <div class="form-group">
        <label for="price_range">Price Range:</label>
        <input id="price_range" v-model.number="category.price_range" type="number" placeholder="Enter price range" class="form-input" />
      </div>

      <div class="form-group">
        <label for="category_type">Category Type:</label>
        <input id="category_type" v-model="category.category_type" placeholder="Enter category type" class="form-input" />
      </div>

      <div class="form-group">
        <label for="category_name">Category Name:</label>
        <input id="category_name" v-model="category.category_name" placeholder="Enter category name" class="form-input" />
      </div>

      <div class="form-group">
        <label for="image2">Image URL:</label>
        <input id="image2" v-model="category.image2" placeholder="Enter image URL" class="form-input" />
      </div>

      <div class="form-group">
        <label for="description">Description:</label>
        <textarea id="description" v-model="category.description" placeholder="Little Description" class="form-input"></textarea>
      </div>

      <div class="form-group">
        <label for="rate">Rate:</label>
        <input id="rate" v-model.number="category.rate" type="number" placeholder="Enter rate" class="form-input" />
      </div>

      <div class="form-group">
        <label>
          <input type="checkbox" v-model="category.isfavorite" />
          Favorite
        </label>
      </div>

      <button type="submit" class="submit-btn">Create Category</button>

      <div v-if="categoryCreated" class="success-message">
        Category "{{ category.category_name }}" created successfully!
      </div>

      <router-link :to="{ path: '/category' }" class="back-link">Volver a Categorías</router-link>

    </form>
  </div>
</template>

<script>
import { CategoryApiServices } from "@/categorylist/services/category-api.services.js";


export default {
  name: "CreateCategory",
  data() {
    return {
      category: {
        id:'',
        price_range: '',
        category_type: '',
        category_name: '',
        image2: '',
        description: '',
        rate: '',
        isfavorite: false
      },
      categoryCreated: false
    };
  },
  methods: {
    createCategory() {
      CategoryApiServices.create(this.category)
          .then(response => {
            console.log('Category created successfully:', response.data);
            this.categoryCreated = true; // Marca la categoría como creada con éxito
          })
          .catch(error => {
            console.error('Error creating category:', error);
          });
    }
  }
};
</script>

<style scoped>
.form-container {
  max-width: 700px;
  margin-top:  150px;
  padding: 50px;
  background-color: #f0f0f0;
  border-radius: 50px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Form Title */
.form-title {
  font-size: 35px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 30px;
  color: #333;
}

/* Form Group */
.form-group {
  margin-bottom: 25px;
  color: black;
}

/* Form Input */
.form-input {
  width: 100%;
  padding: 10px;
  font-size: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

/* Checkbox Label */
.form-group label {
  display: block;
  margin-bottom: 10px;
}

/* Submit Button */
.submit-btn {
  background-color: #174c4f;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 12px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 100%;
}

.submit-btn:hover {
  background-color: #0e2e30;
}

.success-message {
  margin-top: 20px;
  padding: 10px;
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
  border-radius: 4px;
  text-align: center;
}
.back-link {
  display: block;
  text-align: center;
  margin-top: 20px;
  color: black;
}

.back-link a {
  color: #007bff; /* Color azul para el texto del enlace */
  text-decoration: none; /* Sin subrayado */
}

.back-link a:hover {
  text-decoration: underline; /* Subrayado al pasar el cursor */
}
</style>
