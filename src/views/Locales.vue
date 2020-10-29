<template>
  <div>
    <Banner :foto="routeName" />
    <article class="page container" id="locales">
      <h1 class="title">LOCALES</h1>
      <div class="title-line"></div>
      <form>
        <div class="row form-group">
          <div class="col input-group flex-nowrap">
            <span ref="inputSearch" class="input-group-text" id="addon-wrapping"
              ><font-awesome-icon icon="search"></font-awesome-icon
            ></span>
            <input
              v-model="searchText"
              type="text"
              class="form-control"
              placeholder="Buscar"
              @focus="focusInputSearch"
              @blur="blurInputSearch"
            />
          </div>
          <div class="col">
            <select class="form-control" v-model="selected">
              <option disabled value="">Seleccione Localidad</option>
              <option>Todas</option>
              <option v-for="(item, index) in localidadesUnicas" :key="index">{{
                item
              }}</option>
            </select>
          </div>
        </div>
      </form>
      <div class="card-deck py-5">
        <div class="card" v-for="(item, index) in searchLocal" :key="index">
          <div class="circulo-verde">
            <div class="circulo-blanco">
              <div class="circulo-amarillo">
                <i class="icon-franquicia icon"></i>
              </div>
            </div>
          </div>
          <div class="card-body">
            <h5 class="card-title">{{ item.direccion }}</h5>
            <small class="small mb-5">{{ item.localidad }}</small>
            <div class="d-flex align-items-center pb-2 pt-3">
              <font-awesome-icon
                class="wa-icon"
                :icon="['fab', 'whatsapp']"
              ></font-awesome-icon>
              <p class="mb-0 pl-2">{{ item.telefono }}</p>
            </div>
            <div class="d-flex align-items-start py-2">
              <font-awesome-icon
                class="clock-icon"
                :icon="['far', 'clock']"
              ></font-awesome-icon>
              <p class="mb-0 pl-2 text-left">{{ item.horario }}</p>
            </div>
            <b-button
              v-b-modal="'modal-mapa'"
              class="my-4"
              @click="cargarMapa(item.geo)"
              >VER MAPA</b-button
            >
          </div>
        </div>

        <div class="card">
          <div class="circulo-verde">
            <div class="circulo-blanco">
              <div class="circulo-amarillo">
                <i class="icon-franquicia icon"></i>
              </div>
            </div>
          </div>
          <div class="card-body">
            <h5 class="card-title">Muy Pronto</h5>
            <small class="small mb-5">Nueva Sucursal</small>
            <div class="d-flex align-items-center justify-content-center pb-2 pt-3">
             <i class="icon-locales nuevo-local"></i>
              
            </div>
          </div>
        </div>
      </div>

      <b-modal id="modal-mapa" ok-only ok-title="CERRAR">
        <span v-html="mapa"></span>
      </b-modal>
      <div v-bind:class="{ showEmpty: empty, hideEmpty: !empty }">
        <font-awesome-icon
          icon="exclamation-circle"
          class="exclamation-circle"
        ></font-awesome-icon>
        <h4>No hay locales que coincidan con la busqueda</h4>
      </div>
    </article>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Banner from "@/components/Banner.vue";
export default {
  name: "locales",
  components: {
    Banner
  },
  data() {
    return {
      mapa: "",
      searchText: "",
      localidades: [],
      localidadesUnicas: [],
      localesFiltrados: [],
      selected: "",
      empty: 0,
      routeName: this.$route.name
    };
  },

  mounted() {},

  computed: {
    ...mapState(["locales"]),

    searchLocal() {
      this.localesFiltrados = this.locales.filter(item =>
        item.direccion.toLowerCase().includes(this.searchText.toLowerCase())
      );
      this.locales.forEach(element => {
        this.localidades.push(element.localidad);
      });
      this.localidadesUnicas = this.localidades.filter(
        (value, index, self) => self.indexOf(value) === index
      );
      if (this.selected === "" || this.selected === "Todas") {
        this.localesFiltrados = this.localesFiltrados;
      } else {
        this.localesFiltrados = this.localesFiltrados.filter(
          item => item.localidad === this.selected
        );
      }
      if (this.localesFiltrados.length == 0) {
        this.empty = 1;
      } else {
        this.empty = 0;
      }

      return this.localesFiltrados;
    }
  },
  methods: {
    focusInputSearch() {
      this.$refs.inputSearch.classList.add("input-group-text-focus");
    },
    blurInputSearch() {
      this.$refs.inputSearch.classList.remove("input-group-text-focus");
    },
    cargarMapa(geo) {
      this.mapa = geo;
    }
  }
};
</script>

<style scoped>
.nuevo-local{
  font-size: 6rem;
  color: c4c4c4;
}
.exclamation-circle {
  font-size: 3.8rem;
  margin-bottom: 20px;
  color: darkorange;
}
.wa-icon {
  font-size: 1.5rem !important;
}
.clock-icon {
  font-size: 1.4rem !important;
}
.card .small {
  font-size: 1rem !important;
}
.card{
  background-color: #FFFADB!important;
}
.form-group,
.input-group {
  margin: auto;
  max-width: 600px;
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
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
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
  font-size: 2rem;
  top: 2px;
  position: absolute;
}
.hideEmpty {
  display: none;
}
.showEmpty {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 50px;
}
@media (max-width: 600px) {
  .form-group,
  .input-group {
    padding: 20px 10px;
  }
}
</style>
