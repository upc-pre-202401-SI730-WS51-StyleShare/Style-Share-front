<script>
import {Envio} from "@/shippinglist/model/envios.entity.js";
import {EnviosApiServices} from "@/shippinglist/services/envios-api.services.js";

export default {
  name: "shipping-list",
  computed: {
    Envio() {
      return Envio
    }
  },
  title: "Shipping List",
  data() {
    return {
      title: "Shipping List",
      envios: [],

    }
  },

  created(){
    this.enviosService = new EnviosApiServices
    this.enviosService.getAll()
        .then(response => {
          this.envios = response.data;
          console.log(this.envios);

        });


  },

  methods: {
  }

}
</script>

<template>

    <div class="cards">
      <pv-card v-for="envio in envios" :key="envio.id" class="m-2">
        <template #header>
          <img v-if="envio.imagen"  :src="envio.imagen" class="img"/>
          <h2 class="title">{{envio.nombre}}</h2>
        </template>
        <template #content>
          <p class="text-conteiner">
            {{ envio.descripcion }}<br />
            <strong>Vendedor: </strong> {{ envio.vendedor }}<br />
            <strong>Talla: </strong> {{ envio.talla }}<br />
            <strong>Fecha de Entrega: </strong> {{ envio.fechaEntrega }}<br />
            <strong>Seguimineto: </strong> {{ envio.seguimento }}<br />
            <strong>Direccion: </strong> {{ envio.direccion }}<br />

          </p>
          <pv-button class="bg-custom">Ver Producto</pv-button>
        </template>

      </pv-card>
    </div>
</template>


<style scoped>
.cards{
  padding-top: 200px; /* Add space above cards within the container */

}

.m-2 {
  background-color: white;
  border-radius: 4%; /* Make the card circular */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  padding: 20px;
  text-align: center; /* Center text content inside the card */
  display:flex;
  width: 1200px; /* Adjust as needed */
  height: 400px;
  margin-bottom: 80px !important; /* Agregar !important aquí */


}

.img {
  /* Image styles */
  border-radius: 7%; /* Make the card circular */
  width: 300px;
  height: 250px;
  margin-bottom: 30px; /* Add spacing below the image */

}

.title {
  /* Title styles */
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  color:black;
}

.text-conteiner {
  /* Content styles */
  font-size: 16px;
  line-height: 1.5;
  color: black;
  padding: 30px;
}

.bg-custom{
  background-color: #174C4F;
  margin-top: 30px;
  color:#FDFBF0;
}

</style>

