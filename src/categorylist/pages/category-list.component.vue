<template>
  <div class="category-list">
    <div v-for="category in categories" :key="category.id" class="category-card">
      <div class="card-header">
        <img v-if="category.image" :src="category.image" class="card-image" />
        <img v-if="category.image2" :src="category.image2" class="card-image" />
        <h2 class="card-title">{{ category.price_range }}</h2>
        <h2 class="card-tit">Categoria: {{ category.category_type }}</h2>
      </div>
      <div class="card-content">
        <p class="card-description">{{ category.description }}</p>
        <p class="card-rate"><strong>Comentarios: </strong> {{ category.rate }}</p>
        <p class="card-type"><strong>Tipo: </strong> Vestimenta</p>
        <button class="view-category-btn">Ver Categoría</button>
      </div>
    </div>
  </div>
</template>

<script>
import { CategoryApiServices } from "@/categorylist/services/category-api.services.js";

export default {
  name: "category-list",
  data() {
    return {
      categories: []
    };
  },
  created() {
    this.categoryService = new CategoryApiServices();
    this.categoryService.getAll().then(response => {
      this.categories = response.data;
    });
  }
};
</script>

<style scoped>
.category-list {
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  padding-right: 40px;
  overflow-x: auto;
}

.category-card {
  background-color: white;
  border-radius: 4%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  padding: 20px;
  text-align: center;
  width: 350px;
  margin-right: 50px;
  margin-top: 125px;
}

.card-header {
  position: relative;
}

.card-image {
  border-radius: 7%;
  width: 220px;
  height: 230px;
  object-fit: cover;
}

.card-title {
  font-size: 20px;
  font-weight: bold;
  margin: 10px 0;
  color: black;
}

.card-content {
  padding: 20px 0;
}

.card-description {
  font-size: 16px;
  line-height: 1.5;
  color: black;
}

.view-category-btn {
  background-color: #174c4f;
  color: #fdfbf0;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.view-category-btn:hover {
  background-color: #0e2e30;
}

.card-tit{
  color:#181818;
}
.card-rate {
  font-size:18px;
  color: black;
  margin-top: 10px;
  margin-bottom: 10px;
}

.card-type {
  font-size:18px;
  color: black;
  margin-bottom: 20px;
}

</style>
