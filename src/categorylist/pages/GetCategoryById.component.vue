<template>
  <div class="category-details">
    <form @submit.prevent="getCategoryById" class="form-container">
      <input v-model="id" placeholder="Category ID" class="form-input" />
      <button type="submit" class="submit-btn">Get Category</button>
    </form>

    <div v-if="category" class="category-info">
      <h2>{{ category.category_name }}</h2>
      <p><strong>Price Range:</strong> {{ category.price_range }}</p>
      <p><strong>Rate:</strong> {{ category.rate }}</p>
      <p><strong>Favorite:</strong> {{ category.isfavorite ? 'Yes' : 'No' }}</p>
      <img v-if="category.image2" :src="category.image2" alt="Category Image" class="category-image" />
      <p>{{ category.description }}</p>


      <router-link to="/category" class="back-btn">Volver</router-link>
    </div>

    <div v-else-if="isLoading" class="loading-message">
      <p>Loading...</p>
    </div>

    <div v-else class="error-message">
      <p>Error: No category found with ID {{ id }}</p>
    </div>
  </div>
</template>

<script>
import { CategoryApiServices } from "@/categorylist/services/category-api.services.js";

export default {
  name: "GetCategoryById",
  data() {
    return {
      id: '',
      category: null,
      isLoading: false
    };
  },
  methods: {
    getCategoryById() {
      this.isLoading = true;
      CategoryApiServices.getById(this.id).then(response => {
        this.category = response.data;
        this.isLoading = false;
      }).catch(error => {
        console.error('Error fetching category:', error);
        this.isLoading = false;
      });
    }
  }
};
</script>
<style scoped>
.form-container {
  max-width: 500px;
  margin: 0 auto;
  padding: 30px;
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.form-input {
  width: calc(100% - 100px);
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
}

.submit-btn {
  background-color: #174c4f;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 12px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-btn:hover {
  background-color: #0e2e30;
}

.category-info {
  margin-top: 20px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.category-info h2 {
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
}

.category-info p {
  font-size: 16px;
  color: #666;
  line-height: 1.6;
}

.category-image {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-top: 10px;
}

.back-btn {
  background-color: #2196f3;
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 4px;
  margin-top: 20px;
  display: inline-block;
  transition: background-color 0.3s;
}

.back-btn:hover {
  background-color: #0d47a1;
}

.loading-message, .error-message {
  text-align: center;
  margin-top: 20px;
}

.error-message {
  color: red;
}
</style>
