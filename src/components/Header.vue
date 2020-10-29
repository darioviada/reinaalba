<template>
  <header>
    <b-container class="text-center header-container">
      <b-nav-item :to="{ name: 'home' }">
        <img
          src="../assets/logo-reina-alba.svg"
          alt="Reina Alba Logo"
          class="logo-header"
        />
      </b-nav-item>
    </b-container>
    <b-navbar toggleable="lg" type="dark" variant="primario-alba">
      <b-container>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item :to="{ name: 'home' }">HOME</b-nav-item>
            <b-nav-item :to="{ name: 'planta' }">PLANTA ELABORADORA</b-nav-item>
            <b-nav-item :to="{ name: 'locales' }"
              >LOCALES</b-nav-item
            >
            <b-nav-item :to="{ name: 'franquicias' }">FRANQUICIAS</b-nav-item>
            <b-nav-item :to="{ name: 'contacto' }">CONTACTO</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
        <div class="redes">
          <a href="https://www.facebook.com/reinalbaok" target="_blank">
            <font-awesome-icon
              :icon="['fab', 'facebook-f']"
              class="icon-face"
            ></font-awesome-icon>
          </a>
          <a href="https://www.instagram.com/reinaalbaok/" target="_blank">
            <font-awesome-icon
              :icon="['fab', 'instagram']"
              class="icon-insta"
            ></font-awesome-icon>
          </a>
          <a href="https://m.demo.itxsoftware.com/" target="_blank">
            <font-awesome-icon
              icon="shopping-cart"
              class="icon-store"
            ></font-awesome-icon>
          </a>
        </div>
      </b-container>
    </b-navbar>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.navbar-collapse {
  flex-grow: 0 !important;
}
.navbar .container {
  justify-content: center !important;
}
.redes {
  display: flex;
  align-items: center;
}
.redes a svg {
  color: #fff;
  font-size: 1.3rem;
  margin-left: 10px;
  margin-right: 5px;
}

.redes a .icon-store {
  font-size: 1.1rem;
}
.redes a:hover svg {
  color: #d7ae2d;
}
.redes a,
.redes a:focus,
.redes a:active {
  text-decoration: none !important;
}
header {
  background-color: #d7ae2d;
}
.header-container {
  padding: 1.5rem;
}
.logo-header {
  width: 270px;
}
.navbar {
  padding: 0.8rem 1rem;
}
.navbar-nav {
  width: 100%;
  justify-content: center;
}
.navbar-dark .navbar-nav .nav-link {
  color: #fff !important;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  border-right: 1.5px solid #fff;
}
.navbar-dark .navbar-nav .nav-link:hover,
.navbar-dark .navbar-nav .nav-link:focus {
  color: #d7ae2d !important;
}
.nav-link.router-link-exact-active.router-link-active {
  color: #d7ae2d !important;
}

.nav-link {
  padding: 0rem 1rem;
}
@media (min-width: 992px) {
  .navbar-expand-lg .navbar-nav .nav-link {
    padding-right: 1.5rem;
    padding-left: 1.5rem;
  }
}
@media (max-width: 992px) {
  .navbar-dark .navbar-toggler {
    border: none !important;
  }
  .navbar-dark .navbar-toggler-icon {
    background-image: url("../assets/icon-menu.svg") !important;
  }
  .navbar-toggler-icon {
    width: 1.2em !important;
    height: 1.2em !important;
  }
  .navbar-toggler:focus {
    outline: none;
  }
  .navbar-nav .nav-link {
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: center;
  }
  .navbar-dark .navbar-nav .nav-link {
    border-right: none;
  }
  .navbar-collapse {
    order: 3;
  }
  .navbar .container {
    justify-content: space-between !important;
  }
}
@media (max-width: 600px) {
  .logo-header {
    width: 100%;
    max-width: 300px;
  }

  .header-container {
    padding: 1.5rem 0.5rem;
  }
  .redes {
    justify-content: center;
  }
}
</style>
