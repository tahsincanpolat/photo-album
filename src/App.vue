<template>
  <div>
    <Header />
    <Home/>
    <Footer />
  </div>   
</template>
<script>
import Home from './views/Home.vue'
import Header from './design/Header.vue'
import Footer from './design/Footer.vue'
 export default {
   components: { Home, Header, Footer }
 }
</script>

<style>

</style>
