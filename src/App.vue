<template>
  <router-view/>
  <!-- <navigation/> -->
  <spinners/>

  
</template>

<script>

import navigation from './components/navigation.vue';

export default {
  components:{
  
    navigation
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

nav {
  padding: 30px;


}

nav a {
  font-weight: bold;
  color: white !important;
}

nav a.router-link-exact-active {
  color: lawngreen !important;
}
</style>
