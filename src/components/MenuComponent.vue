<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/"
                >Cubos</router-link
              >
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Marcas
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li v-for="marca in marcas" :key="marca">
                  <router-link
                    class="dropdown-item"
                    :to="'/marcas/' + marca"
                    >{{ marca }}</router-link>
                  
                </li>
              </ul>
            </li>
             <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Seguridad
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li v-if="tokenUser==''">
                  <router-link
                    class="dropdown-item"
                    :to="'/login'"
                    >Iniciar Sesion</router-link>
                </li>
                <li v-if="tokenUser!=''">
                  <button @click="cerrarSesion()">Cerrar Sesion</button>
                </li>
              </ul>
            </li>
             <li v-if="tokenUser" class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Usuario
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <router-link
                    class="dropdown-item"
                    :to="'/perfil'"
                    >Perfil</router-link>
                </li>
                <li>
                  <router-link
                    class="dropdown-item"
                    :to="'/pedidos'"
                    >Realizar pedido</router-link>
                </li>
                <li>
                  <router-link
                    class="dropdown-item"
                    :to="'/compras'"
                    >Ver compras</router-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>

import Global from '@/Global';
import ServiceCubos from '@/services/serviceCubos';

const service=new ServiceCubos();
export default {
  name: "MenuComponent",
  data() {
    return {
      marcas: [],
      tokenUser:Global.tokenUser
    };
  },
  methods:{
    cargarMarcas(){
      service.getMarcas().then((response)=>{
        this.marcas=response;
      }).catch((error)=>{
        console.log(error);
      });
    },cerrarSesion(){
      Global.tokenUser='';
      this.tokenUser='';
      this.$router.push({path:"/"});
    }
  },
  mounted(){
    this.cargarMarcas();
  },
  watch:{
    '$route': function(){
      this.tokenUser=Global.tokenUser;
    }
  }
};
</script>

<style></style>
