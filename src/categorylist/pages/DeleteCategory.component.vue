<template>
  <div class="category-delete">
    <form @submit.prevent="deleteCategory" class="form-container">
      <h2 class="form-title">Delete Category</h2>

      <div class="form-group">
        <label for="id">Category ID:</label>
        <input id="id" v-model="id" placeholder="Enter category ID" class="form-input" />
      </div>

      <button type="submit" class="submit-btn">Delete Category</button>

      <div v-if="showSuccessMessage" class="success-message">
        Category deleted successfully!
      </div>

      <router-link to="/category" class="return-btn">Return to Categories</router-link>
    </form>
  </div>
</template>

<script>
import { CategoryApiServices } from "@/categorylist/services/category-api.services.js";

export default {
  name: "DeleteCategory",
  data() {
    return {
      id: '',
      showSuccessMessage: false
    };
  },
  methods: {
    deleteCategory() {
      CategoryApiServices.delete(this.id).then(response => {
        console.log('Category deleted:', response.data);
        this.showSuccessMessage = true; // Show success message
        setTimeout(() => {
          this.showSuccessMessage = false; // Hide message after 3 seconds
        }, 3000);
      }).catch(error => {
        console.error('Error deleting category:', error);
      });
    }
  }
};
</script>

<style scoped>
/* Estilos elegantes */

.form-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 40px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.form-title {
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.form-group {
  margin-bottom: 20px;
  color: black;
  font-size: 20px;
}

.form-input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.submit-btn {
  background-color: #dc3545;
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
  background-color: #c82333;
}

.success-message {
  margin-top: 20px;
  font-size: 18px;
  color: #28a745;
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
