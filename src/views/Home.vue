<template>
  <div>
    <Banner :foto="routeName" />
    <article class="page container">
      <h1 class="title">NOSOTROS</h1>
      <div class="title-line"></div>
      <p class="text text-center">
        Somos una Empresa Familiar Líder en Córdoba. Hace más de 30 años que
        fabricamos Elaborados de Pollo en nuestra Planta Elaboradora. 
      </p>
      <p class="text text-center">
        Los productos tienen el Máximo nivel de sanidad. Contamos con una Cadena de 14 locales en la Ciudad.
      </p>
    </article>
  </div>
</template>


<script>
import Banner from "@/components/Banner.vue";
export default {
  name: "Home",
  components: {
    Banner
  },
  data() {
    return {
      routeName: this.$route.name
    };
  }
};
</script>
<style scoped>
/* @media (max-width: 600px) {
   {
    width: 80%;
  }
} */
</style>