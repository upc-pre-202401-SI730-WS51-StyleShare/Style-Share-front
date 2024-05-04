<script>

export default {
  name: "home",
  components: {},

}



</script>

<template>

  <div class="image-container">
    <router-link :to="{ path: '/subscription' }" router-link-exact>
    <img src="https://i.ibb.co/xHPnffP/image-20.png" alt="Banner Image" class="banner-image">
    </router-link>
  </div>
  <div class="button-container">
    <router-link :to="{ path: '/post' }" router-link-exact>
      <button class="publish-button">Publicar prenda</button>
    </router-link>
  </div>


  <div class="seccion-titulo">
    <h1 class="titulo-publicaciones">Novedades</h1>
    <div class="underline-rectangle"></div>
  </div>
  
  <div class="div-imgs">

    <img class="img-home" src="https://i0.wp.com/amandaperu.com/wp-content/uploads/2022/07/raisa1.jpg?fit=1477%2C1842&ssl=1" alt="drees">
    <img class="img-home" src="https://www.corbataslester.com/magazine/wp-content/uploads/2018/10/escoger-un-traje-01.jpg" alt="drees">
    <img class="img-home" src="https://us-tuna-sounds-images.voicemod.net/1a693ec3-120d-40b7-bdb5-b857fc178680-1679736103177.jpg" alt="drees">

  </div>

  <div class="button-section">
    <div class="button-box">
      <p class="button-text">        Tiene una reunion formal?</p>
      <button class="action-button">ver mas</button>
    </div>
    <div class="button-box">
      <p class="button-text">      Mejores accesorios </p>
      <button class="action-button">ver mas</button>
    </div>
  </div>

</template>

<style>

.action-button{
  background-color: #008973;

}

.button-text{

  text-align: center;
  color:white;

}
.button-box{
  background-color: #174C4F;
  margin-left:30px;
  border-radius:30px;
  width: 650px;
  height: 150px;
}

.div-imgs{

  display: flex;
  width: 200px;
}



.img-home{

  border-radius: 1000px;
  padding: 70px;
  width: 600px;
  height: 500px;

}
.image-container{

  margin-top: 60px;


}

.banner-image {
  width: 1448px;
  height: 144px;

}

.button-container {
  text-align: center; /* Center the button horizontally */
  margin-top: 20px; /* Add spacing between image and button */
}

.publish-button {
  background-color: #174C4F;
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-size: 16px;
}

.seccion-titulo {
  position: relative;
  transform: translate(-50%, 0);
  width: 80%;
  max-width: 1000px;
  margin: 0 auto;
}
.underline-rectangle {
  width: 350px;
  height: 5px;
  background-color: #174C4F;
  margin-top: 5px;
}

.button-section{
  display:flex;

}

</style>
