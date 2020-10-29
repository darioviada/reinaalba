<template>
  <div>
    <Banner :foto="routeName"/>
    <article class="page container">
      <h1 class="title">PLANTA ELABORADORA</h1>
      <div class="title-line"></div>
      <p class="text">
        En <strong>Reina Alba</strong> todos los productos son artesanales,
        elaborados con pollo de campo bajo estrictas normas de calidad. Son
        pollos frescos pelados del día, a mano, sin colorantes, ni conservantes,
        elaborados con recetas de nuestra familia.
      </p>
      <p class="text">
        En <strong>Reina Alba</strong> te podes encontrar con:
      </p>
      <ul class="list">
        <li>Pollos enteros</li>
        <li>Pata muslo</li>
        <li>Bifes de pechuga y muslo</li>
        <li>Pollos deshuesados</li>
        <li>Milanesas de pollo en 10 variedades</li>
        <li>Hamburguesas</li>
        <li>Albóndigas</li>
        <li>Brochettes</li>
        <li>Chorizos</li>
        <li>Salchichas</li>
        <li>Roullets</li>
        <li>Arrollados</li>
        <li>Empanadas</li>
        <li>
          Además pollo relleno, empanadas árabes de pollo, carne cocida de pollo
          y distintos cortes de alas.
        </li>
      </ul>
      <p class="text ">
        La empresa fue la primera que elaboró estos tipos de productos en la
        ciudad y la única que elabora estos alimentos desde hace 30 años.
      </p>
      <p class="text ">
        Nuestro secreto para elaborar los productos más ricos es: <em> Utilizar las
        mejores materias primas e insumos y no alterar la receta familiar creada
        por Herminia la mamá de nuestra familia.</em>
      </p>
      <p class="text ">
        <strong>Reina Alba</strong> realiza además ventas mayoristas a locales gastronómicos,
        pollerías y empresas de alimentos.
      </p>
      
    </article>
  </div>
</template>
<script>
import Banner from "@/components/Banner.vue";
export default {
  name: 'Planta',
  components: {
    Banner
  },
  data(){
    return {
    routeName: this.$route.name
    };
  }
}
</script>