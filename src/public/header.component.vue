<script>
export default {
  name: "header-component"
}
</script>

<template>
  <header class="toolbar-header" >
    <pv-toolbar class="bg-custom">
      <template #start>
        <a href="."><img class="logo" src="https://i.ibb.co/fGWV0b8/style-Shareser.png"></a>

        <div class="flex-column">
          <pv-button class="p-button-text text-white">
            <a href="."><img class="user-icon" src="https://i.ibb.co/y53Jsvh/user-sign-white-icon-vector-15479703.png"></a>
          </pv-button>
          <pv-button class="p-button-text text-white">Carrito</pv-button>
        </div>
      </template>
    </pv-toolbar>
  </header>
</template>

<style scoped>

header{
  width: 100%;
}

.bg-custom {
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  background-color: #174C4F;
  border-radius: 0px;
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