<template>
  <div class="NotFound">
    <b-row class="container m-auto">
      <b-col cols="12" md="8">
        <h1>Oops!</h1>
        <h2>La página que buscas no existe</h2>
        <h3>ERROR: 404 - PAGE NOT FOUND</h3>
        <p>Puedes probar visitando otra de nuestras paginas</p>
        <div>
          <nav>
            <ul>
              <li>
                <router-link to="/">Home</router-link>
              </li>
              <li>
                <router-link to="/planta">Planta Elaboradora</router-link>
              </li>
              <li>
                <router-link to="/locales">Locales</router-link>
              </li>
              <li>
                <router-link to="/franquicias">Franquicias</router-link>
              </li>
              <li>
                <router-link to="/contacto">Contacto</router-link>
              </li>
            </ul>
          </nav>
        </div>
      </b-col>
      <b-col cols="12" md="4">
          <img src="../assets/404.png" alt="Error 404" class="img-404">
      </b-col>
    </b-row>
  </div>
</template>

<style>
.NotFound {
  padding: 60px 30px;
  display: flex;
  align-items: center;
}
.NotFound h1 {
  font-size: 2.5rem;
  font-weight: 600;
  color: #103426;
  }
.NotFound h2 {
  font-size: 1.8rem;
  font-weight: 500;
  color: #4D4D4D;
  }
.NotFound h3 {
  font-size: 0.8rem;
  color: #4D4D4D;
  }
.NotFound h1 , .NotFound h2, .NotFound h3{
font-family: "Montserrat", sans-serif;
margin-bottom: 20px;
}
.NotFound p {
  font-size: 1.2rem;
  color: #4D4D4D;
  font-family: "Montserrat", sans-serif;
}
.NotFound a {
  font-size: 1rem;
  color:  #00973a;
  font-family: "Montserrat", sans-serif;
}
.NotFound a:hover {
  font-size: 1rem;
  color:  #103426;
  font-family: "Montserrat", sans-serif;
}
.NotFound .img-404 {
    width: 100%;
}
@media (max-width: 600px) {
.NotFound {
  padding: 60px 10px;
}
}
</style>