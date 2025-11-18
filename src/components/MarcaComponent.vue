<template>
  <div>
    <h1>Cubos de la Marca{{ $route.params.nombre }}</h1>
    <div class="card-container">
        <div
            class="card-body"
            v-for="cubo in cubos"
            :key="cubo.idCubo"
        >
            <img :src="cubo.imagen" alt="cubo.nombre"/>
            <h5 class="card-title">{{ cubo.nombre }}</h5>
            <p class="card-text">
            Precio: {{ cubo.precio }}€
            </p>
        </div>
    </div>
  </div>
</template>

<script>
import ServiceCubos from '@/services/serviceCubos';

const service=new ServiceCubos();
export default {
    name: "MarcaComponent",
    data(){
        return{
            cubos:[]
        }
    },
    methods:{
        getCubos(){
            service.getCubosByMarca(this.$route.params.nombre).then((response)=>{
                this.cubos=response;
            }).catch((error)=>{
                console.log(error);
            });
        }
    },
    mounted(){
        this.getCubos();
    },
    watch:{
        '$route.params.nombre': function(newVal,oldVal){
            if(newVal!==oldVal) this.getCubos();
        }
    }
}
</script>

<style>
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
}

.card-body {
  flex: 1 1 calc(33.333% - 16px); /* 3 cards per row with spacing */
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  text-align: center;
}

.card-body img {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
}
</style>