<template>
  <div class="category-list">
    <div v-for="category in categories" :key="category.id" class="category-card">
      <div class="card-header">
        <img v-if="category.image2" :src="category.image2" class="card-image" />
        <h2 class="card-id">Id: {{ category.id }}</h2>
        <h2 class="card-title">{{ category.price_range }}</h2>
        <h2 class="card-tit">Categoria: {{ category.category_name }}</h2>
      </div>
      <div class="card-content">
        <p class="card-description">{{ category.description }}</p>
        <p class="card-rate"><strong>Valoracion: </strong> {{ category.rate }}</p>
        <p class="card-type"><strong>Tipo: </strong> {{ category.category_type }}</p>

        <p class="card-favorite">
          <strong>Favorite: </strong>
          <span v-if="category.isfavorite">&#10004;</span>
          <span v-else>&#10060;</span>
        </p>

        <button class="view-category-btn">Ver Categoría</button>
      </div>

    </div>
  </div>
  <div class="navigation-buttons">
    <router-link :to="{ path: '/category/create' }" class="view-category-btn">Crear Categoría</router-link>
    <router-link :to="{ path: '/category/update' }" class="view-category-btn">Actualizar Categoría</router-link>
    <router-link :to="{ path: '/category/delete' }" class="view-category-btn">Eliminar Categoría</router-link>
    <router-link :to="{ path: '/category/favorites' }" class="view-category-btn">Obtener Favoritas</router-link>
    <router-link :to="{ path: '/category/getById' }" class="view-category-btn">Obtener por ID</router-link>
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
    CategoryApiServices.getAll()
        .then(response => {
          this.categories = response.data;
        })
        .catch(error => {
          console.error('Error fetching categories:', error);
        });
  }
};
</script>

<style scoped>
.category-list {
  display: flex;
  flex-wrap: nowrap; /* Evita que las tarjetas se envuelvan */
  overflow-x: auto; /* Permite desplazamiento horizontal si hay muchas categorías */
  padding: 20px 0;
  justify-content: center; /* Centra las tarjetas horizontalmente */
}

.category-card {
  background-color: white;
  border-radius: 5%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  padding-top: 100px;
  text-align: center;
  width: 400px;
  margin-right: 40px; /* Espacio entre las tarjetas */
}

.card-header {
  position: relative;
}

.card-image {
  border-radius: 7%;
  width: 250px;
  height: 290px;
  object-fit: cover;
}

.card-title {
  font-size: 20px;
  font-weight: bold;
  margin: 10px 0;
  color: black;
}

.card-content {
  padding: 10px 0;
}

.card-description {
  font-size: 19px;
  line-height: 1.5;
  color: black;
}

.card-rate {
  font-size: 18px;
  color: black;
  margin-top: 10px;
  margin-bottom: 10px;
}

.card-type {
  font-size: 18px;
  color: black;
  margin-bottom: 20px;
}

.card-favorite {
  font-size: 20px;
  color: black;
  margin-bottom: 20px;
}

.view-category-btn {
  background-color: #174c4f;
  color: #fdfbf0;
  border: none;
  border-radius: 100px;
  padding: 10px 50px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-bottom: 10px;
  text-decoration: none;
  text-align: center;
}

.view-category-btn:hover {
  background-color: #0e2e30;
}

.navigation-buttons {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
}

.navigation-buttons router-link {
  margin: 0 10px; /* Espacio entre los enlaces */
}

.navigation-buttons .view-category-btn {
  margin-bottom: 10px; /* Espacio entre los botones */
  display: block; /* Hace que cada botón ocupe todo el ancho disponible */
  text-decoration: none; /* Elimina la decoración de texto en los enlaces */
  text-align: center; /* Centra el texto dentro de los botones */
}

.card-id, .card-tit {
  color: black; /* Cambia el color de texto de Id y Categoria a negro */
}

</style>
