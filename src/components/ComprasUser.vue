<template>
  <div class="compras-container">
    <h1>Tus compras</h1>
    <table class="compras-table">
      <thead>
          <tr>
              <th>ID Pedido</th>
              <th>ID Cubo</th>
              <th>Fecha del Pedido</th>
          </tr>
      </thead>
      <tbody>
          <tr v-for="compra in compras" :key="compra.idPedido">
              <td>{{ compra.idPedido }}</td>
              <td>{{ compra.idCubo }}</td>
              <td>{{ compra.fechaPedido }}</td>
          </tr>
      </tbody>
    </table>
    <button class="btn" @click="irARealizarPedido">Realizar Pedido</button>
  </div>
</template>

<script>
import ServiceCubos from '@/services/serviceCubos';

const service=new ServiceCubos();   
export default  {
    name: "ComprasUser",
    data(){
        return{
            compras:[]
        }
    },
    methods:{
        cargarComprasUser(){
            service.getComprasUser().then((response)=>{
                console.log(response);
                this.compras=response;
            }).catch((error)=>{
                console.log(error);
            });
        },
        irARealizarPedido(){
            this.$router.push({path:"/pedidos"});
        }
    },
    mounted(){
        this.cargarComprasUser();
    }
}
</script>

<style>
.compras-container {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 20px auto;
}

.compras-container h1 {
  text-align: center;
  margin-bottom: 20px;
}

.compras-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

.compras-table th, .compras-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.compras-table th {
  background-color: #007bff;
  color: white;
}

.btn {
  display: block;
  width: 100%;
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