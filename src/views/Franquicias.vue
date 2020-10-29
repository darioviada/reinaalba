<template>
  <div>
    <Banner :foto="routeName"/>
    <article class="page container">
      <h1 class="title">FRANQUICIAS</h1>
      <div class="title-line"></div>
      <h2 class="sub-title">Franquicias de Alimentos</h2>
      <p class="text">
        Los emprendimientos vinculados a la industria alimenticia son
        emblemáticos dentro del modelo de negocios de las franquicias. Ya que
        con sus particularidades y características propias, las franquicias de
        alimentos han demostrado una y otra vez que éste es un <b>segmento que está
        destinado al éxito</b>.
      </p>
      <p class="text">
        La <b>alimentación es una necesidad básica</b>, más que un simple lujo o
        hábito, es una de las variables muy ventajosa de los emprendimientos
        vinculados al sector de la comida. La clientela está casi asegurada
        desde el minuto cero de apertura del local. Entrar al segmento de la
        mano de una franquicia permite no sólo aprovechar las oportunidades y
        bondades de este tipo de negocios, sino también aprovechar la
        experiencia, estrategias y asesoramiento de una <b>marca ya posicionada en
        el mercado</b>.
      </p>

      <h2 class="sub-title">El Negocio de la Comida</h2>
      <p class="text">
        <b>Reina Alba se encuentra en un mercado muy prometedor</b>. En los últimos 10
        años el consumo per cápita anual de carne de pollo viene en ascenso
        hasta en el 2020 igualar a la misma cantidad consumida que carne de
        vaca, tendencia que continúa en crecimiento, en consonancia con lo que
        ocurre en el resto del mundo.
      </p>
      <div class="d-flex justify-content-center py-4">
        <img width="250px"
          src="../assets/logo-reina-alba.png"
          alt="Reina Alba Logo"
          
        />
      </div>

      <div class="title-line"></div>
      <p class="text">
        Bienvenido a <strong> REINA ALBA </strong>. REINA ALBA es la Cadena de venta de elaborados
        de pollo más grande de la provincia de Córdoba. Acompañamos a nuestros
        clientes desde hace <b> más de 30 años </b> con productos de calidad a un precio
        justo.
      </p>
      <h2 class="sub-title">
        ¿Quien no probó un pollo o un arrollado de Reina Alba?
      </h2>
      <p class="text">
        Si aún no lo hiciste, estas a tiempo de notar la diferencia en comer
        productos ricos, sanos y frescos. Contamos con <b> 14 locales en la ciudad
        de Córdoba</b> que atienden con el formato <b>Mayorista y Minorista</b> pensado no
        solo para familias sino en los que tienen comercio para que puedan
        ofrecer productos 100% artesanales, elaborados con pollo de campo
        seleccionados y tratados bajo estrictas normas de calidad.
      </p>
      <p class="text">
        <b>Pollos frescos pelados cada día, a mano, tratados sin colorantes, sin
        conservantes ni aditivos</b>, respetando de esta forma el sabor original de
        la carne; todo en nuestra propia planta. Esta Calidad de elaboración y
        frescura de todos los productos los clientes lo saben y por eso nos
        elijen cada día.
      </p>
      <p class="text">
        <b>Sumarte a nuestra marca es elegir cooperación para un objetivo común</b>. La
        rentabilidad de tu negocio. <b>REINA ALBA</b> cuenta con dos conceptos de
        negocio bien definidos:
      </p>
      <p class="text">
        Una propuesta de <b>AUTO EMPLEO</b> para aquellos que desean ser dueños de su
        propio negocio con un concepto de bajo costo de inversión y excelente
        rentabilidad apoyando tu futuro en una marca reconocida.
      </p>
      <p class="text">
        Y el segundo es un formato de mayor dimensión para <b>INVERSORES</b> en donde
        al formato anterior le anexamos Venta Mayorista en la zona de influencia
        y reparto a domicilio.
      </p>
      <div class="d-flex justify-content-center py-5">
        <img class="autoempleo"
          src="../assets/autoempleo-franquicias-reina-alba.png"
          alt="Autoempleo"
          
        />
      </div>

      <p class="text-resalt mb-5">
        NOVEDADES: Monitoreamos constantemente la demanda de nuestras
        franquicias en donde detectamos oportunidades de productos, servicios y
        estrategias que vamos incorporando a nuestra marca: CONGELADOS, COCIDOS,
        OTRAS CARNES, COMBOS, PACKS, REPARTO A DOMICILIO.
      </p>
      <h2 class="sub-title">
        ¿Porque Unirte a la Cadena de Franquicias de Reina Alba?
      </h2>
      <ul class="list py-5">
        <li>Marca Reconocida</li>
        <li>Baja inversión y Alta Rentabilidad</li>
        <li>Equipo de trabajo integrado por profesionales que comparte información
          inicial y continuada con respecto a las áreas de: Administración,
          Comercial, Marketing, Gestión y Técnico.
        </li>
        <li>Variedad de productos exclusivos y de alta calidad</li>
        <li>Te ayudamos a gestionar las acciones necesarias para que tu franquicia
          funcione
        </li>
        <li>Competente distribución logística</li>
        <li>Promociones continuas que favorecen a la fidelización de clientes.
        </li>
      </ul>
      <h2 class="sub-title">
        Ventajas de ser Franquiciado Reina Alba
      </h2>
      <ul class="list py-5">
        <li>Licencia de Marca</li>
        <li>Territorio Exclusivo</li>
        <li>Análisis e Investigación de Zonas Potenciales</li>
        <li>Búsqueda y Selección de local</li>
        <li>Asistencia en la Negociación del Contrato de Alquiler</li>
        <li>Asistencia Legal e Impositiva</li>
        <li>Selección y Capacitación del personal.</li>
        <li>Proyecto y Dirección de Obra</li>
        <li>Inducción y Capacitación a todo el personal</li>
        <li>Manuales Operativos</li>
        <li>Asistencia Operativa al inicio del negocio</li>
      </ul>
       <h3 class="title">MAS INFORMACIÓN</h3>
      <p class="text-resalt text-contact">
        351 5074273 <br> franquicias@reinaalba.com.ar
      </p>
    </article>
  </div>
</template>
<script>
import Banner from "@/components/Banner.vue";
export default {
  name: 'Franquicias',
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

<style scoped>
.autoempleo{
  width: 350px;
}
  .text-contact{
    text-align: center;
    margin: auto;
    font-size: 1.5rem;
  }
  @media (max-width: 600px) {
    .text-contact{
      font-size: 1rem;
    }
    .autoempleo{
      width: 250px;
    }
  }
</style>