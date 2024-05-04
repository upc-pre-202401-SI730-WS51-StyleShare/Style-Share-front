<script >

export default {
  name: "App",
  title: "StyleShare",
  data(){
    return{
      drawer: false,
      pages:[
        {label:"Home", to:  "/home"},
        {label: "Category", to: "/categories"}
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
    <header class="toolbar-header" >
      <pv-toolbar class="bg-custom">
        <template #start>


          <router-link :to="{ path: '/home' }" router-link-exact>
            <a href="."><img class="logo" src="https://i.ibb.co/fGWV0b8/style-Shareser.png"></a>
          </router-link>

          <div class="flex-column">
            <router-link :to="{ path: '/home' }" router-link-exact>
              <pv-button class="p-button-text text-white">
                <a href="."><img class="user-icon" src="https://i.ibb.co/y53Jsvh/user-sign-white-icon-vector-15479703.png"></a>
              </pv-button>
            </router-link>
            <!-- Enlace para la página Envios -->
            <router-link :to="{ path: '/category' }" router-link-exact>
              <pv-button class="p-button-text text-white">Categories</pv-button>
            </router-link>
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


</style>
