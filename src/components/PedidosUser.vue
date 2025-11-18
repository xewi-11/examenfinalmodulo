<template>
  <div class="pedidos-container">
        <form class="pedidos-form">
            <label for="select">Seleccione un cubo:</label>
            <select v-model="selectedCubo" id="select">
                <option v-for="cubo in cubos" :key="cubo.idCubo" :value="cubo">
                    {{cubo.nombre}} - {{cubo.precio}}€
                </option>
            </select>
            <button class="btn" @click.prevent="realizarCompra">Realizar Pedido</button>
        </form>
  </div>
</template>

<script>
import router from '@/Router';
import ServiceCubos from '@/services/serviceCubos';

const service=new ServiceCubos();
export default {
    name: "PedidosUser",
    data(){
        return{
            cubos:[],
            selectedCubo:null
        }
    },
    methods:{
        getCubos(){
            service.getCubos().then((response)=>{
                this.cubos=response;
            }).catch((error)=>{
                console.log(error); 
            })
        },
        realizarCompra(){
            service.RealizarPedido(this.selectedCubo).then((response)=>{
                console.log(response);
                alert("Pedido realizado con exito");
                router.push({path:"/compras"});
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
.pedidos-container {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 20px auto;
}

.pedidos-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.pedidos-form label {
  font-weight: bold;
}

.pedidos-form select {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.btn {
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
}

.btn:hover {
  background-color: #0056b3;
}
</style>