<template>
   <div>
    <h1>Bienvenido a la tienda de cubos</h1>
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
    name: 'HomeComponent',
    data(){
        return{
            cubos:[]
        }
    },
    methods:{
        getCubos(){
            service.getCubos().then((response)=>{
                this.cubos=response;
            }).catch((error)=>{
                console.log(error); 
            })
        }
    },
    mounted(){
        this.getCubos();
    }
}
</script>

<style>

</style>