<template>
  <div class="favorite-categories">
    <h2>Favorite Categories</h2>
    <div v-if="favoriteCategories.length > 0">
      <div v-for="category in favoriteCategories" :key="category.id" class="category-card">
        <div class="card-header">
          <img v-if="category.image2" :src="category.image2" class="card-image" />
          <h2 class="card-id">Id: {{ category.id }}</h2>
          <h2 class="card-title">Price Range: {{ category.price_range }}</h2>
          <h2 class="card-tit">Category: {{ category.category_name }}</h2>
        </div>
        <div class="card-content">
          <p class="card-description"><strong>Description:</strong> {{ category.description }}</p>
          <p class="card-rate"><strong>Rate:</strong> {{ category.rate }}</p>
          <p class="card-type"><strong>Type:</strong> {{ category.category_type }}</p>
          <p class="card-favorite"><strong>Favorite:</strong> {{ category.isfavorite ? 'Yes' : 'No' }}</p>
          <!-- Aquí puedes añadir más detalles según sea necesario -->
        </div>
      </div>
    </div>
    <p v-else>No favorite categories found.</p>
  </div>
</template>

<script>
import { CategoryApiServices } from "@/categorylist/services/category-api.services.js";

export default {
  name: "GetFavoriteCategories",
  data() {
    return {
      favoriteCategories: []
    };
  },
  created() {
    CategoryApiServices.getFavorites().then(response => {
      console.log('All categories:', response.data); // Verificar todas las categorías devueltas

      // Filtrar las categorías favoritas (isfavorite == true)
      this.favoriteCategories = response.data.filter(category => category.isfavorite);

      console.log('Favorite categories:', this.favoriteCategories); // Verificar las categorías favoritas filtradas
    }).catch(error => {
      console.error('Error fetching favorite categories:', error);
    });
  }
};
</script>

<style scoped>
.favorite-categories {
  margin-top: 20px;
  text-align: center; /* Alineación centrada para el contenido */
}

.favorite-categories h2 {
  font-size: 24px;
  margin-bottom: 10px;
  color: black; /* Color negro para el título */
}

.category-card {
  background-color: white;
  border-radius: 10px;
  margin-top: 100px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-bottom: 10px;
  padding: 20px;
  max-width: 500px;
  text-align: left; /* Alineación izquierda para el contenido dentro del card */
}

.card-header {
  position: relative;
}

.card-image {
  border-radius: 7px;
  width: 100%;
  height: auto;
  max-height: 200px;
  object-fit: cover;
}

.card-title, .card-tit, .card-description, .card-rate, .card-type, .card-favorite {
  font-size: 18px;
  margin-bottom: 10px;
  color: black; /* Color negro para todos los textos */
}

.card-favorite {
  font-weight: bold;
}
</style>
