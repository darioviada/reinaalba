<template>
  <footer>
    <div class="slogan">
      <img class="slogan_img "
        src="../assets/pollos-cerquita-de-tu-casa.svg"
        alt="Pollos de Campo Cerquita de tu Casa"
      />

    </div>
    <div class="footer-logo">
            <img
        src="../assets/logo-footer.svg"
        alt="Logo Reina alba"
        class="logo-footer"
      />
    </div>
    <div class="contact">
      <b-container class="contact-block">
        <div>
          <nav>
            <ul>
              <li>
                <router-link to="/">HOME</router-link>
              </li>
              <li>
                <router-link to="/planta">PLANTA ELABORADORA</router-link>
              </li>
              <li>
                <router-link to="/locales">LOCALES</router-link>
              </li>
              <li>
                <router-link to="/franquicias">FRANQUICIAS</router-link>
              </li>
              <li>
                <router-link to="/contacto">CONTACTO</router-link>
              </li>
            </ul>
          </nav>
        </div>
        <div class="address">
          <div>
            <p><b>Oficina:</b></p>
          </div>
          <div>
            <p>0351 - 4588498</p>
            <font-awesome-icon icon="phone"></font-awesome-icon>
          </div>
          <div>
            <p>Av.Sabattini 2280 - Córdoba</p>
            <font-awesome-icon icon="map-marker-alt"></font-awesome-icon>
          </div>
        </div>
      </b-container>
    </div>

    <div class="puente">
      <div class="puente-yellow"></div>
      <div class="container puente-black">
        <p>Desarrollado por:</p>
        <h6>
          <a href="http://puenteb.com.ar/" target="_blank">puente.b</a>
        </h6>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style>
.footer-logo{
  background-color: #103426;
  width: 100%;
  padding: 10px;
  padding-top: 50px;
  text-align: center;
}
.footer-logo .logo-footer {
  margin: auto;
  width: 300px;
}
.slogan_img{
  display: block;
  text-align: center;
  width: 300px;
  margin: auto;
  margin-top: auto;
  margin-bottom: auto;
  margin-bottom: 50px;
  margin-top: 50px;
}
.slogan {
  background-color: #5B8A6E;
  width: 100%;
  padding: 30px;
  text-align: center;
}
.slogan h5 {
  width: 100%;
  max-width: 800px;
  margin: auto;
  padding: 30px 100px;
  text-align: center;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  font-style: italic;
  line-height: 1.4;
}

.address {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.address div {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 5px 0;
}
.address p {
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-size: 0.8rem;
  margin-bottom: 0;
  margin-right: 5px;
}

.address svg {
  color: #fff;
}
.contact {
  width: 100%;
  padding: 10px;
  padding-top: 80px;
  margin-top: -50px;
  background-color: #103426;
}
.contact-block {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}
.contact-block ul {
  list-style: none;
  padding-left: 0;
}
.contact-block ul li {
  padding: 5px 0;
}
.contact-block ul li a {
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-size: 0.8rem;
  text-decoration: none;
}
.contact-block ul li a:hover,
.contact-block ul li a:focus,
.contact-block ul li a:active,
.contact-block ul li a:visited {
  color: #fff;
  text-decoration: none;
}
.puente {
  background-color: #000000;
  width: 100%;
}
.puente-yellow {
  width: 100%;
  background-color: #ffde59;
  height: 3px;
}
.puente-black {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px;
}
.puente p {
  font-family: "Montserrat", sans-serif;
  color: #fff;
  margin-bottom: 0;
  margin-right: 15px;
  font-size: 12px;
}
.puente h6 {
  color: #fff;
  font-size: 1.5rem;
  font-family: "Abril Fatface", cursive;
}
.puente h6 a {
  color: #fff;
  text-decoration: none;
}
.puente h6 a:hover {
  color: #ffde59 !important;
  text-decoration: none;
}
.puente h6 a:focus,
.puente h6 a:active,
.puente h6 a:visited {
  color: #fff;
  text-decoration: none;
}

@media (max-width: 600px) {
  .contact-block {
    justify-content: center;
  }
  .contact-block div {
    width: 100%;
  }
  .contact-block ul li {
    text-align: center;
  }
  .address div {
    justify-content: center;
  }
  .slogan h5 {
    max-width: 100%;
    padding: 30px 20px;
  }
  .puente-black {
    justify-content: center;
  }
  .slogan_img{
    width: 200px;
}
}
</style>