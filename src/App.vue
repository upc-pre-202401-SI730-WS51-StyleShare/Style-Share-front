<script>
export default {
  name: "App",
  title: "StyleShare",
  data() {
    return {
      drawer: false,
      sidebarVisible: false,
      pages: [
        { label: "Home", to: "/home" },
        { label: "Envios", to: "/envios" },
        { label: "Login", to: "/login" },
        { label: "Lista de Productos", to: "/product-list" },
        {label :"Categorias", to: "/category"}

      ]
    };
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
    toggleSidebar() {
      this.sidebarVisible = !this.sidebarVisible;
    },
    closeSidebar() {
      this.sidebarVisible = false;
    },
    handleClickOutside() {
      this.closeSidebar();
    }
  }
}
</script>

<template>
  <div>
    <header class="toolbar-header">
      <pv-toolbar class="bg-custom">
        <template #start>

          <div class="header-logo">
            <router-link :to="{ path: '/home' }" router-link-exact>
              <a href="."><img class="logo" src="https://i.ibb.co/fGWV0b8/style-Shareser.png"></a>
            </router-link>
          </div>

          <div class="SideBar">
            <pv-sidebar v-bind:visible="sidebarVisible" @click.stop="handleClickOutside">
              <div class="flex align-items-center justify-content-center mr-2">
                <ul class="sidebar-list">
                  <router-link v-for="page in pages" :key="page.label"
                               v-slot="{ navigate, href }" :to="page.to" custom>
                    <li>
                      <pv-button :href="href" class="p-button-text text-white" @click="navigate">
                        {{ page.label }}
                      </pv-button>
                    </li>
                  </router-link>
                </ul>
              </div>
            </pv-sidebar>
            <button @click="toggleSidebar" class="toggle-button">☰</button>
          </div>

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
  background-color: #174C4F;
}

.logo {
  width: 150px;
  height: 90px;
}

.user-icon {
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
  margin-left: 400px;
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

.toggle-button {
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 999;
  background-color: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: white;
}


.sidebar-list {
  list-style: none;
  padding: 0;
}

.header-logo {
  margin-left: 50px;
}
</style>
