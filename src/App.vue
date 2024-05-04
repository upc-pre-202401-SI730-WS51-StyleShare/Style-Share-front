<script >

export default {
  name: "App",
  title: "StyleShare",
  data(){
    return{
      drawer: false,
      pages:[
        {label:"Home", to:  "/home"},
        {label: "Envios", to: "/envios"},
        {label: "Login", to: "/login"}
      ]

    }
  },

  methods: {
    toggleDrawer(){
      this.drawer=!this.drawer;
    }
  }
}

</script>

<template>
  <div>
    <header class="toolbar-header">
      <pv-toolbar class="bg-custom">
        <template #start>
          <router-link :to="{ path: '/home' }" router-link-exact>
            <a href="."><img class="logo" src="https://i.ibb.co/fGWV0b8/style-Shareser.png"></a>
          </router-link>
          <router-link :to="{ path: '/category' }" router-link-exact>
            <pv-button class="p-button-text text-white">Categories</pv-button>
          </router-link>

          <div class="header-content">
            <div class="search-bar">
              <input type="text" v-model="searchTerm" placeholder="Buscar..." />
              <button @click="search">Buscar</button>
            </div>

            <div class="user-section">
              <router-link :to="{ path: '/login' }" router-link-exact>
                <pv-button class="p-button-text text-white">
                  <a href="."><img class="user-icon" src="https://i.ibb.co/y53Jsvh/user-sign-white-icon-vector-15479703.png"></a>
                </pv-button>
              </router-link>
              <router-link :to="{ path: '/envios' }" router-link-exact>
                <a href="."><img class="user-icon" src="https://i.ibb.co/zVJg5RG/icono-envio1.png"></a>
              </router-link>
              <router-link :to="{ path: '/Buy' }" router-link-exact>
                <a href="."><img class="user-icon" src="https://png.pngtree.com/png-clipart/20221001/original/pngtree-shopping-cart-png-image_8648831.png"></a>
              </router-link>
            </div>
          </div>
        </template>
      </pv-toolbar>
    </header>
    <router-view></router-view>
  </div>
</template>


<style scoped>

.bg-custom {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: #174C4F
}

.logo{
  width: 150px;
  height: 90px;

}
.user-icon{
  width: 75px;
  height: 60px;

}

.header-content {
  display: flex;
  align-items: center;
}

.user-section {
  margin-left: auto;
  display: flex;
  gap: 10px;
}

.search-bar {
  background-color: #FDFBF0;
  border-radius: 100px;
  padding: 10px;
  display: flex;
  align-items: center;
  flex-grow: 1;
  width: 900px;
  height: 40px;
  margin-left:400px;
  margin-right: 80px;

}

.search-bar input {
  flex-grow: 1;
  border: none;
  outline: none;
  padding: 5px;
  font-size: 16px;
}

.search-bar button {
  background-color: #ffffff;
  color: #174C4F;
  border: none;
  cursor: pointer;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.search-bar button:hover {
  background-color: #ffffff;
}
</style>
