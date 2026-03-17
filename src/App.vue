<template>
  <HeaderComponent/>
    <main>
    <RouterView />
  </main>
  <FooterComponent/>
</template>

<script setup>
import FooterComponent from './components/Footer-component.vue';
import HeaderComponent from './components/Header-component.vue';
</script>

<style>
#app{
min-height:100vh;
display:flex;
flex-direction:column;
}

main{
flex:1;
}
</style>