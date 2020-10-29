<template>
  <div>
    <Banner :foto="routeName"/>
    <article class="page container">
      <h1 class="title">CONTACTO</h1>
      <div class="title-line"></div>
      <form id="formulario" ref="form" @submit="send" class="py-4">

        <div class="row form-group">
          <div class="col input-group flex-nowrap">
            <span ref="inputName" class="input-group-text" id="addon-wrapping"><font-awesome-icon icon="user"></font-awesome-icon></span>
            <input @focus="focusInputName" @blur="blurInputName"
              ref="formNombre"
              type="text"
              class="form-control"
              placeholder="Nombre"
              name="nombre"
              id="nombre"
              maxlength="60"
            />
          </div>
          <div class="col input-group flex-nowrap">
            <span ref="inputTel" class="input-group-text" id="addon-wrapping"><font-awesome-icon icon="mobile-alt"></font-awesome-icon></span>
            <input @focus="focusInputTel" @blur="blurInputTel"
              ref="formTelefono"
              type="tel"
              class="form-control"
              placeholder="Teléfono"
              name="telefono"
              id="telefono"
              maxlength="15"
            />
          </div>
        </div>
        <div class="input-group flex-nowrap p-3">
          <span ref="inputMail" class="input-group-text " id="addon-wrapping"><font-awesome-icon icon="envelope"></font-awesome-icon></span>
          <input @focus="focusInputMail" @blur="blurInputMail"
            ref="formEmail"
            type="email"
            class="form-control"
            name="email"
            id="email"
            maxlength="40"
            placeholder="Correo Electrónico"
          />
        </div>
        <div class="form-group p-3">
          <textarea
            ref="formMensaje"
            class="form-control"
            rows="6"
            name="mensaje"
            id="mensaje"
            maxlength="1500"
          ></textarea>
        </div>
        <div class="form-group p-3 politica-datos ">
          <small class="small"
            >Los datos de carácter personal que nos proporcionas serán tratados
            por Reina Alba. La finalidad es enviarte información noticias,
            vídeos, promociones de productos y servicios.</small
          >
        </div>
        <div class="form-group px-3 text-center text-md-right pb-4">
          <button
            type="submit"
            value="Enviar"
            name="enviar"
            id="enviar"
            @click="submit"
            class="btn btn-primary"
          >
            ENVIAR
          </button>
        </div>
      </form>
      <div
        ref="exito"
        class="mensaje-hide flex-column align-items-center my-5"
        
      >
        <font-awesome-icon icon="check-circle" class="check-circle"></font-awesome-icon>
        <h4 class="text-center mensaje-text">El mensaje fue enviado con éxito</h4>
        <a role="button" @click="reSend" class="link" id="volverEnviado"
          >enviar otro mensaje</a
        >
      </div>
      <div
        ref="error"
        class="mensaje-hide flex-column align-items-center my-5"
        id="mensaje-error"
      >
        <font-awesome-icon icon="exclamation-circle" class="exclamation-circle"></font-awesome-icon>
        <h4 class="text-center mensaje-text">Error al enviar el mensaje</h4>
        <a role="button" @click="reSend" class="link" id="volverError"
          >volver a intentar</a
        >
      </div>
      <div
        ref="loading"
        class="mensaje-hide flex-column align-items-center my-5"
        
      >
        <b-icon icon="three-dots" animation="cylon" font-scale="4" class="loading"></b-icon>
        <h4 class="text-center my-5 mensaje-text">Enviando mensaje</h4>
      </div>

      <div class="mt-3" id="alerta"></div>
      <div class="cuadro">
        <div class="sub-cuadro">
          <h2>Oficinas</h2>
          <small>Córdoba</small>
          <div class="d-flex align-items-center py-2">
            <font-awesome-icon icon="phone"></font-awesome-icon>
            <p class="pl-2">0351 4588498</p>
          </div>
          <div class="d-flex align-items-center py-2">
            <font-awesome-icon icon="map-marker-alt"></font-awesome-icon>
            <p class="pl-2">Av. Sabattini 2280</p>
          </div>
        </div>
        <div class="sub-cuadro">
          <h2>Planta Elaboradora</h2>
          <small>Córdoba</small>
          <div class="d-flex align-items-center py-2">
            <font-awesome-icon :icon="['fab', 'whatsapp']"></font-awesome-icon>
            <p class="pl-2">351 7670406</p>
          </div>
        </div>
        <div class="circulo-verde">
          <div class="circulo-blanco">
            <div class="circulo-amarillo">
              <font-awesome-icon
                icon="map-marker-alt"
                class="icon"
              ></font-awesome-icon>
            </div>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";
export default {
  name: 'Contacto',
  components: {
    Banner
  },
  data(){
    return {
    routeName: this.$route.name
    };
  },
  methods: {
    submit() {
      this.$refs.form.addEventListener("submit", event => {
        event.preventDefault();
      });
      this.$refs.loading.classList.remove("mensaje-hide");
      this.$refs.loading.classList.add("mensaje-show");
      this.$refs.form.classList.add("mensaje-hide");
    },
    send() {
      var datos = new FormData(this.$refs.form);

      console.log(datos);
      fetch("http://reinaalba.com.ar/post.php", {
        method: "POST",
        body: datos
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data === "error-datos") {
            this.$refs.error.classList.remove("mensaje-hide");
            this.$refs.error.classList.add("mensaje-show");
            this.$refs.loading.classList.add("mensaje-hide");
            this.$refs.loading.classList.remove("mensaje-show");
          } else {
            if (data === "enviado") {
              this.$refs.exito.classList.remove("mensaje-hide");
              this.$refs.exito.classList.add("mensaje-show");
              this.$refs.loading.classList.add("mensaje-hide");
              this.$refs.loading.classList.remove("mensaje-show");
            } else {
              this.$refs.error.classList.remove("mensaje-hide");
              this.$refs.error.classList.add("mensaje-show");
              this.$refs.loading.classList.add("mensaje-hide");
              this.$refs.loading.classList.remove("mensaje-show");
            }
          }
        });
    },
    reSend() {
      this.$refs.form.classList.add("mensaje-show-form");
      this.$refs.form.classList.remove("mensaje-hide");
      this.$refs.error.classList.remove("mensaje-show");
      this.$refs.error.classList.add("mensaje-hide");
      this.$refs.exito.classList.remove("mensaje-show");
      this.$refs.exito.classList.add("mensaje-hide");
      // this.$refs.formNombre.innerHTML = ``;
      this.$refs.formNombre.value = "";
      this.$refs.formTelefono.value = "";
      this.$refs.formEmail.value = "";
      this.$refs.formMensaje.value = "";
    },
    focusInputMail(){
      this.$refs.inputMail.classList.add("input-group-text-focus")
    },
    blurInputMail(){
      this.$refs.inputMail.classList.remove("input-group-text-focus")
    },
        focusInputName(){
      this.$refs.inputName.classList.add("input-group-text-focus")
    },
    blurInputName(){
      this.$refs.inputName.classList.remove("input-group-text-focus")
    },
        focusInputTel(){
      this.$refs.inputTel.classList.add("input-group-text-focus")
    },
    blurInputTel(){
      this.$refs.inputTel.classList.remove("input-group-text-focus")
    },
  }
};
</script>

<style scoped>
.exclamation-circle{
  font-size: 3.8rem;
  margin-bottom: 20px;
  color: darkorange;
}
.check-circle{
  font-size: 3.8rem;
  margin-bottom: 20px;
  color: #99cc33;
}
.loading{
  color: #d3aa2d;
}
.mensaje-text{
  font-family: "Montserrat", sans-serif;
}
.circulo-verde {
  background-color: #103426;
  height: 80px;
  width: 80px;
  border-radius: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  position: absolute;
  left: -40px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0;
}
.circulo-verde .circulo-blanco {
  background-color: #ffffff;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.circulo-verde .circulo-amarillo {
  background-color: #d3aa2d;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.circulo-verde .circulo-amarillo .icon {
  color: #ffffff;
  font-size: 1.8rem;
}
.cuadro {
  display: flex;
  align-items: flex-start;
  -webkit-box-shadow: 0px 0px 10px -1px rgba(0, 0, 0, 0.41);
  -moz-box-shadow: 0px 0px 10px -1px rgba(0, 0, 0, 0.41);
  box-shadow: 0px 0px 10px -1px rgba(0, 0, 0, 0.41);
  padding: 20px 40px;
  width: 70%;
  max-width: 600px;
  margin: 30px auto;
  position: relative;
  flex-wrap: wrap;
}
.sub-cuadro {
  width: 50%;
  padding: 10px 20px;
}
.sub-cuadro:first-child {
  border-right: 1px solid #cccccc;
}
.sub-cuadro:nth-child(2) {
  padding-left: 40px;
}
.sub-cuadro h2 {
  font-size: 1.2rem;
  font-weight: 600;
  color: #333333;
  text-align: left;
  font-family: "Montserrat", sans-serif;
  margin-bottom: 0;
}
.sub-cuadro p {
  font-size: 1rem;
  color: #4d4d4d;
  font-family: "Montserrat", sans-serif;
  margin: 0;
}
.sub-cuadro small {
  font-size: 0.8rem;
  color: #808080;
  font-family: "Montserrat", sans-serif;
}
.form-group, .input-group {
  margin: auto;
  max-width: 600px;
}
.icon-ok {
  font-size: 6rem;
  color: #99cc33;
}
.icon-error {
  font-size: 6rem;
  color: #f52900;
}

.mensaje-show {
  display: flex;
}
.mensaje-show-form {
  display: block;
}
.mensaje-hide {
  display: none;
}

@media (max-width: 600px) {
  .form-group, .input-group {
    padding: 20px 10px;
  }
  .sub-cuadro {
    width: 100%;
    padding: 20px 10px;
  }
  .sub-cuadro:first-child {
    border-right: none;
    border-bottom: 1px solid #cccccc;
  }
  .sub-cuadro:nth-child(2) {
    padding-right: 20px;
  }
  .circulo-verde {
    top: -40px;
    left: 50%;
    transform: translateX(-50%);
  }
  .cuadro {
    padding: 40px 20px;
  }
}
</style>