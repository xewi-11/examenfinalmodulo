<template>
  <div class="profile-container">
    <h1>Tus compras</h1>
    <table class="profile-table">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{{user.nombre}}</td>
                <td>{{user.email}}</td>
            </tr>
        </tbody>
    </table>
    <button class="btn" @click="irACompras">Ver compras</button>
  </div>
</template>

<script>
import Global from '@/Global';
import router from '@/Router';
import ServiceCubos from '@/services/serviceCubos';
const service=new ServiceCubos();
export default {
    name: "PerfilUser",
    data(){
        return{
            tokenUser:Global.tokenUser,
            user:[]
        }
    },
    methods:{
        cargarInformacionUser(){
            service.getUserByToken().then((response)=>{
                console.log(response);
                this.user=response;
            }).catch((error)=>{
                console.log(error);
            });
        },
        irACompras(){
            router.push({path:"/compras"});
        }
    },
    mounted(){
        this.cargarInformacionUser();
    }
}
</script>

<style>
.profile-container {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 20px auto;
}

.profile-container h1 {
  text-align: center;
  margin-bottom: 20px;
}

.profile-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

.profile-table th, .profile-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.profile-table th {
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