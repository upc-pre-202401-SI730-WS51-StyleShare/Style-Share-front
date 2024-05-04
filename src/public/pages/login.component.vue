<script>
import axios from 'axios';

export default {
  name: "login",
  title: "Login",
  data(){
    return{
      drawer: false,
      pages:[
        {label:"Login", to:  "/login"},
        {label: "Register", to:"/register"},
        {label: "Home", to:"/home"}
      ],
      loginData: {
        email: '',
        password: '',
      },
      errorMessage:'',

    }
  },
  methods: {
    async login() {
      if (!this.loginData.email || !this.loginData.password) {
        this.errorMessage = 'Por favor, ingresa tu correo y contraseña.';
        return;
      }

      try {
        const response = await axios.get('https://my-json-server.typicode.com/upc-pre-202401-SI730-WS51-StyleShare/db-server/users'); // Get all users

        const user = response.data.find(user =>
            user.email === this.loginData.email && user.password === this.loginData.password
        );

        if (user) {
          alert('¡Inicio de sesión exitoso!');
          this.loginData = { // Clear login data after successful login (optional)
            email: '',
            password: '',
          };
          this.errorMessage = '';
          // Redirect to home page after successful login (replace with your logic)
          this.$router.push({ path: '/home' }); // Assuming you have a home page route
        } else {
          this.errorMessage = 'Correo o contraseña incorrectos.';
        }
      } catch (error) {
        console.error('Error al iniciar sesión:', error);
        this.errorMessage = 'Error al iniciar sesión.';
      }
    },
  },
};
</script>

<template>

  <div class="backgroundcolor">

    <div class="singin-logo">
      <img src="@/assets/img/StyleShare.png" alt="StyleShare logo">
    </div>
    <br>
    <div class="singin2-box">
      <label for="email">Ingresa tu correo</label>
      <input type="text" id="email" v-model="loginData.email" class="singin-input-box">
      <label for="password">Contraseña</label>
      <input type="password" id="password" v-model="loginData.password" class="singin-input-box">

      <button class="singin-button" @click="login">Iniciar sesión</button>
      <span class="error-message" v-if="errorMessage">{{ errorMessage }}</span>

      <router-link :to="{path:'/register'}" router-link-exact>
        <button class="singin-button">Crear cuenta</button>
      </router-link>
    </div>

  </div>


</template>

<style>

.backgroundcolor {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #174C4F;
}


.singin2-box {
  background-color: #008973;
  padding: 40px;
  border-radius: 45px;
  text-align: center;
  width:500px;
  margin-left:750px;
  margin-top:10px;

}

.singin-logo{
  width: 10%;
  margin-top: 200px;
  margin-left: 850px;

}


.singin-input-box {
  width: 100%;
  padding: 15px;
  background-color: #FDFBF0;
  border: 1px solid #174C4F;
  border-radius: 20px;
  margin-bottom: 20px;
  font-size: 16px;
  color: #174C4F;

}

.singin-input-box::placeholder{
  color: #174C4F;
}

.singin-button, router-link.singin-button {
  background-color: #174C4F;

  padding: 15px 5px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-size: 18px;
  width: 40%;
  margin-bottom: 10px;
  text-decoration: none;

}


</style>
