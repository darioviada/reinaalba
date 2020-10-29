<template>
  <div class="">
    <div :class="foto" class="banner position-relative">
      <a class="btn btn-primary btn-store" href="https://m.demo.itxsoftware.com/" role="link" target="_blank">
        <i class="icon-store"></i>
        <p>TIENDA ONLINE</p>
        
      </a>
    </div>

    <div class="container botonera">
      <div class="d-flex flex-nowrap">
        <b-nav-item :to="{ name: 'planta' }">
          <div class="circulo-verde">
            <div class="circulo-blanco">
              <div class="circulo-amarillo">
                <i class="icon-planta"></i>
              </div>
            </div>
          </div>
        </b-nav-item>
        <b-nav-item :to="{ name: 'locales' }">
          <div class="circulo-verde">
            <div class="circulo-blanco">
              <div class="circulo-amarillo">
                <i class="icon-locales"></i>
              </div>
            </div>
          </div>
        </b-nav-item>
      </div>
      <div class="d-flex flex-nowrap">
        <b-nav-item :to="{ name: 'franquicias' }">
          <div class="circulo-verde">
            <div class="circulo-blanco">
              <div class="circulo-amarillo">
                <i class="icon-franquicia"></i>
              </div>
            </div>
          </div>
        </b-nav-item>
        <b-nav-item :to="{ name: 'contacto' }">
          <div class="circulo-verde">
            <div class="circulo-blanco">
              <div class="circulo-amarillo">
                <i class="icon-contacto"></i>
              </div>
            </div>
          </div>
        </b-nav-item>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  props: {
    foto: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.btn-store {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 600 !important;
  font-size: 1.2rem !important;
  background-color: #f7941e!important;
    -webkit-box-shadow: 0px 0px 10px -1px rgba(0, 0, 0, 0.41);
  -moz-box-shadow: 0px 0px 10px -1px rgba(0, 0, 0, 0.41);
  box-shadow: 0px 0px 10px -1px rgba(0, 0, 0, 0.41);
  display: flex!important;
  align-items: center;
  flex-wrap: nowrap;
  padding: 2px 15px 5px 15px!important;
  max-width: 390px ;
}
.btn-store .icon-store{
  font-size: 1.5rem!important;
  margin-right: 10px;
  height: 28px;
}
.btn-store p{
  margin-bottom: 0;
}
.btn-store:hover {
  background-color: #ffffff!important;
  color: #f7941e!important;
      -webkit-box-shadow: 0px 0px 10px -1px rgba(0, 0, 0, 0.81);
  -moz-box-shadow: 0px 0px 10px -1px rgba(0, 0, 0, 0.81);
  box-shadow: 0px 0px 10px -1px rgba(0, 0, 0, 0.81);
  transition: all  0.3s ease-in-out;
}
.banner {
  width: 100%;
  height: 500px;
  background-color: #103426;
  background-size: cover;
  background-position-x: center;
  opacity: 0;
  transition: opacity .5s ease, visibility .5s ease;

}
.home {
  background-image: url("../assets/banner-home.jpg");
  opacity: 1;
}
.planta {
  background-image: url("../assets/banner-planta.jpg");
  opacity: 1;
}
.locales {
  background-image: url("../assets/banner-locales.jpg");
  opacity: 1;
}
.franquicias {
  background-image: url("../assets/banner-franquicias.jpg");
  opacity: 1;
}
.contacto {
  background-image: url("../assets/banner-contacto.jpg");
  opacity: 1;
}
.botonera {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: -80px;
}
.botonera .circulo-verde {
  background-color: #103426;
  height: 110px;
  width: 110px;
  border-radius: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
}
.botonera .icon-planta {
  color: #ffffff;
  font-size: 4rem;
  padding-top: 12px;
  padding-left: 5px;
}
.botonera .icon-locales {
  color: #ffffff;
  font-size: 4.1rem;
  padding-top: 17px;
  padding-left: 0px;
}
.botonera .icon-franquicia {
  color: #ffffff;
  font-size: 3.2rem;
  padding-top: 7px;
  padding-left: 3px;
}
.botonera .icon-contacto {
  color: #ffffff;
  font-size: 3.2rem;
  padding-top: 6px;
  padding-left: 2px;
}
.botonera .circulo-verde .circulo-blanco {
  background-color: #ffffff;
  height: 90px;
  width: 90px;
  border-radius: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.botonera .circulo-verde .circulo-amarillo {
  background-color: #d3aa2d;
  height: 80px;
  width: 80px;
  border-radius: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
li.nav-item {
  list-style: none;
}
a.nav-link:hover .circulo-amarillo {
  background-color: #f7941e;
  transition: all  0.3s ease-in-out;
}
.nav-link.router-link-exact-active.router-link-active .circulo-amarillo {
  background-color: #f7941e;
}


@media (max-width: 600px) {
  .banner {
    height: 350px;
  }
  .home {
    background-image: url("../assets/banner-home-res.png");
  }
  .planta {
    background-image: url("../assets/banner-planta-res.png");
  }
  .locales {
    background-image: url("../assets/banner-locales-res.png");
  }
  .franquicias {
    background-image: url("../assets/banner-franquicias-res.png");
  }
  .contacto {
    background-image: url("../assets/banner-contacto-res.png");
  }
  .btn-store{
    font-size: 1.3rem;
    min-width: 215px;
  }
}
</style>
