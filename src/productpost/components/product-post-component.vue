<script>
import { PostApiServices } from "@/productpost/services/productpost-api.services.js";
import { Post } from "@/productpost/model/post.entity.js";

export default {
  name: "product-post-component",
  data() {
    return {
      post: new Post(),
      api: new PostApiServices(),
      successMessage: "",
    };
  },
  methods: {
    async createPost() {
      try {
        await this.api.create(this.post);
        this.successMessage = "Post agregado correctamente!"; // Set success message
        setTimeout(() => {
          this.successMessage = ""; // Clear message after 5 seconds
        }, 5000);
        console.log("Nuevo post agregado:", this.post);
      } catch (error) {
        console.error("Error al agregar el post:", error);
        // Handle error (e.g., display error message)
      }
    }
  }
};
</script>

<template>

  <div class="contenidototal">
    <div class="product-post">
      <h1>Publicar Prenda</h1>
      <form @submit.prevent="createPost" class="post-form">
        <div class="form-group">
          <label for="title">Título:</label>
          <input v-model="post.title" id="title" type="text" placeholder="Título" required>
        </div>
        <div class="form-group">
          <label for="description">Descripción:</label>
          <textarea v-model="post.description" id="description" placeholder="Descripción" required></textarea>
        </div>
        <div class="form-group">
          <label for="category">Categoría:</label>
          <input v-model="post.category" id="category" type="text" placeholder="Categoría">
        </div>
        <div class="form-group">
          <label for="size">Talla:</label>
          <input v-model="post.size" id="size" type="text" placeholder="Talla">
        </div>
        <div class="form-group">
          <label for="material">Material:</label>
          <input v-model="post.material" id="material" type="text" placeholder="Material">
        </div>
        <div class="form-group">
          <label for="yearacquisition">Año de Adquisición:</label>
          <input v-model="post.yearacquisition" id="yearacquisition" type="text" placeholder="Año de Adquisición">
        </div>
        <div class="form-group">
          <label for="rentaldays">Días de Renta:</label>
          <input v-model="post.rentaldays" id="rentaldays" type="number" placeholder="Días de Renta">
        </div>
        <div class="form-group">
          <label for="specialcares">Cuidados Especiales:</label>
          <input v-model="post.specialcares" id="specialcares" type="text" placeholder="Cuidados Especiales">
        </div>
        <div class="form-group">
          <label for="img">Imagen (URL):</label>
          <input v-model="post.img" id="img" type="text" placeholder="Imagen (URL)">
        </div>
        <button class="agregar-button" >Agregar prenda</button>
      </form>
      <div v-if="successMessage" class="success-message">
        {{ successMessage }}
      </div>
    </div>
    </div>
</template>


<style>

  .contenidototal {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }


.product-post {
  width: 1000px;
  margin-right: 100px;

}

.post-form {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

input[type="text"],
input[type="number"],
textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

.agregar-button {
  background-color: #008973;
  color: #fff;
  border-radius: 40px;
  cursor: pointer;
  font-size: 25px;
  padding: 10px 20px;
  border: none;
}

button:hover {
  background-color: #0056b3;
}
  .success-message {
    background-color: #dff0d8;
    color: #3c763d;
    padding: 10px;
    border-radius: 4px;
    margin-top: 15px;
  }

</style>