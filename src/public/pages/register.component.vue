<script>
import axios from 'axios';
export default {
  name: "register",
  title:"Register",
  data(){
    return{
      drawer: false,
      pages:[
        {label:"Login", to:  "/login"},
        {label: "Register", to:"/register"}
      ],
      formData: {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
      errorMessage: '',
    };
  },
  computed: {
    canRegister() {
      return (
          this.formData.username !== '' &&
          this.formData.email !== '' &&
          this.formData.password !== '' &&
          this.formData.confirmPassword !== '' &&
          this.formData.password === this.formData.confirmPassword
      );
    },
  },
  methods: {
    async register() {
      if (!this.canRegister) {
        this.errorMessage = 'Por favor, llena todos los campos.';
        return;
      }


      const userData = {
        username: this.formData.username,
        email: this.formData.email,
        password: this.formData.password,
      };

      try {
        if (axios) {
          const response = await axios.post('http://localhost:3000/users', userData);
          console.log('User created successfully:', response.data);
          alert('¡Cuenta creada exitosamente!');
          this.$router.push({ path: '/login' });
        } else {
          console.warn('axios not available for sending data.');

        }
      } catch (error) {
        console.error('Error creating user:', error);
        this.errorMessage = 'Error al crear la cuenta.';
      }
    },
  },
};
</script>

<template>
  <div style="text-align: center;">
    <img src="@/assets/img/StyleShare.png" alt="StyleShare logo"  class="singin-logo">
  </div>
  <div class="singin-box">
    <input type="text" placeholder="Nombre de usuario" class="singin-input-box" v-model="formData.username" required>
    <br>
    <input type="text" placeholder="Correo" class="singin-input-box" v-model="formData.email" required>
    <br>
    <input type="password" placeholder="Contraseña" class="singin-input-box" v-model="formData.password" required>
    <br>
    <input type="password" placeholder="Confirmar contraseña" class="singin-input-box" v-model="formData.confirmPassword" required>
    <br>
    <button class="singin-button" @click="register" :disabled="!canRegister">Crear cuenta</button>
    <br>
    <span v-if="errorMessage">{{ errorMessage }}</span>
    <router-link :to="{path:'/login'}" router-link-exact>
      <button class="singin-button2" style="width: 40%;">Iniciar sesión</button>
    </router-link>
  </div>


</template>

<style scoped>
body {
  font-family: Arial, sans-serif;
}

.singin-logo {
  width: 90%;
  margin: 20px 10px 20px;

}

.singin-box {
  width: 400px;
  padding: 20px;
  background-color: #008973;
  border-radius: 45px;
  border: 1px solid #174C4F;
  margin: 20px auto 0;
}

.singin-input-box::placeholder{
  color: #174C4F;
}

.singin-input-box {
  display: block;
  width: 90%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #FDFBF0;
  border-radius: 45px;
  margin-left: 20px;
}

.singin-button {
  background-color: #174C4F;
  color: #FDFBF0;
  padding: 15px 5px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-size: 18px;
  width: 40%;
  margin-bottom: 10px;
  margin-left:100px;

}

.singin-button:hover {
  opacity: 0.8;
}

.singin-button2{
  background-color: #174C4F;
  color: #FDFBF0;
  padding: 15px 5px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-size: 18px;
  width: 40%;
  margin-bottom: 10px;
  margin-left:100px;
}

</style>