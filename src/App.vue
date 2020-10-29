<template>
  <div id="app">
    <Header />
    <!-- <Banner foto="routeName" /> -->
    
    <router-view />
    
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Banner from "@/components/Banner.vue";


export default {
  name: "App",
  components: {
    Header,
    Footer,
    Banner,
  
  }
};
</script>


<style>
</style>
