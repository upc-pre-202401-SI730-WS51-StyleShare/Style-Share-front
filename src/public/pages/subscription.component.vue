<script>
export default {
  name: "subscription",
  title:"Subscription"
}
</script>

<template>
  <div class="subscription-container">
    <div class="subscription-card premium provider">
      <div class="subscription-header">
        <h2>Suscripción Premium Proveedor</h2>
        <p>Destaca tu negocio y aumenta tus ventas.</p>
      </div>
      <ul class="subscription-features">
        <li>Publicaciones destacadas</li>
        <li>Acceso a análisis</li>
        <li>Soporte prioritario</li>
      </ul>
      <div class="subscription-price">
        <span>$50</span>
        <span>por mes</span>
      </div>
      <button class="btn-subscribe">Suscribirse</button>
    </div>

    <div class="subscription-card premium client">
      <div class="subscription-header">
        <h2>Suscripción Premium Cliente</h2>
        <p>Disfruta de descuentos exclusivos y alquileres ilimitados.</p>
      </div>
      <ul class="subscription-features">
        <li>Descuentos exclusivos</li>
        <li>Acceso a eventos exclusivos</li>
        <li>Alquileres ilimitados</li>
        <li>Soporte prioritario</li>
      </ul>
      <div class="subscription-price">
        <span>$20</span>
        <span>por mes</span>
      </div>
      <button class="btn-subscribe">Suscribirse</button>
    </div>
  </div>

</template>

<style scoped>



.subscription-container {
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #ffffff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin-top: 10px;
  padding: 200px;
}
.subscription-card {
  background-color: #174c4f;
  border-radius: 45px;
  box-shadow: 0 2px 5px rgba(237, 32, 32, 0.1);
  padding: 20px;
  text-align: center;
  margin: 100px ;
  width: 300px;
  height: 460px;
}


.subscription-header {
  margin-bottom: 20px;
}

.subscription-header h2 {
  font-size: 24px;
  font-weight: bold;
  color: #fdfbf0;
}

.subscription-header p {
  color: #fdfbf0;
}


.subscription-features {
  list-style: none;
  padding: 0;
  margin: 0;
}

.subscription-features li {
  margin-bottom: 10px;
  font-size: 16px;
  color: #fdfbf0;
}


.subscription-price {
  margin-top: 20px;
  font-size: 24px;
  font-weight: bold;
}

.subscription-price span:first-child {
  color: #fdfbf0;
}

.subscription-price span:last-child {
  color: #fdfbf0;
}


.btn-subscribe {
  display: block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #008973;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-left:74px;

}

.btn-subscribe:hover {
  background-color: #07201b;
}


.provider {
  background-color: #174c4f;
}


.client {
  background-color: #174c4f;
}

</style>