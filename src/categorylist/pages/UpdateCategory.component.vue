<template>
  <div class="category-form">
    <form @submit.prevent="updateCategory" class="form-container">
      <h2 class="form-title">Update Category</h2>

      <div class="form-group">
        <label for="id">Category ID:</label>
        <input id="id" v-model.number="category.id" type="number" placeholder="Enter category ID" class="form-input" />
      </div>

      <div class="form-group">
        <label for="price_range">Price Range:</label>
        <input id="price_range" v-model.number="category.price_range"  type="number" placeholder="Enter price range" class="form-input" />
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
        <textarea id="description" v-model="category.description" placeholder="Enter description" rows="3" class="form-input"></textarea>
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

      <button type="submit" class="submit-btn">Update Category</button>

      <div v-if="showSuccessMessage" class="success-message">
        Category updated successfully!
      </div>

      <router-link to="/category" class="return-btn">Return to Categories</router-link>
    </form>
  </div>
</template>

<script>
import { CategoryApiServices } from "@/categorylist/services/category-api.services.js";

export default {
  name: "UpdateCategory",
  data() {
    return {
      id: '',
      category: {
        price_range: 0  ,
        category_type: '',
        category_name: '',
        image2: '',
        description: '',
        rate: 0,
        isfavorite: false
      },
      showSuccessMessage: false
    };
  },
  methods: {
    updateCategory() {
      CategoryApiServices.update(this.id, this.category).then(response => {
        console.log('Category updated:', response.data);
        this.showSuccessMessage = true; // Show success message
        setTimeout(() => {
          this.showSuccessMessage = false; // Hide message after 3 seconds
        }, 3000);
      }).catch(error => {
        console.error('Error updating category:', error);
      });
    }
  }
};
</script>

<style scoped>
/* Contenedor del formulario */
.category-form {
  max-width: 600px;
  margin: 0 auto;
  padding: 30px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

/* Título del formulario */
.form-title {
  font-size: 28px;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 20px;
}

/* Grupo de campos */
.form-group {
  margin-bottom: 20px;
}

/* Etiqueta del campo */
.form-group label {
  display: block;
  font-size: 18px;
  margin-bottom: 5px;
  color: #555;
}

/* Entrada del formulario */
.form-input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

/* Botón de envío */
.submit-btn {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 12px 20px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s;
  width: 100%;
}

.submit-btn:hover {
  background-color: #0056b3;
}

.success-message {
  margin-top: 20px;
  font-size: 18px;
  color: #008000;
  text-align: center;
}

.return-btn {
  display: block;
  text-align: center;
  margin-top: 20px;
  font-size: 16px;
  color: #007bff;
  text-decoration: none;
}

.return-btn:hover {
  text-decoration: underline;
}
</style>
