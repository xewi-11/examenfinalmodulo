<template>
  <div class="login-container">
    <form class="login-form">
        <h2>Iniciar Sesión</h2>
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" id="exampleInputEmail1" v-model="cajaEmail" />
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" id="exampleInputPassword1" v-model="cajaPassword" />
        </div>
        <button @click.prevent="login()" type="submit" class="btn">Submit</button>
    </form>
  </div>
</template>

<script>
import ServiceCubos from '@/services/serviceCubos';
import router from '@/Router';
import Global from '@/Global';
const service=new ServiceCubos();
export default {
    name: "LoginComponent",
    data(){
        return{
            cajaEmail:'',
            cajaPassword:''
        }
    },
    methods:{
        login(){
              service.loginUser(this.cajaEmail,this.cajaPassword).then((response)=>{
                  console.log(response);
                  Global.tokenUser=response;
                  router.push({path:"/"});
              }).catch((error)=>{
                  console.log(error);
              });
        } 
    },
}
</script>

<style>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f9f9f9;
}

.login-form {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

.login-form h2 {
  margin-bottom: 20px;
  text-align: center;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-group input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.btn {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn:hover {
  background-color: #0056b3;
}
</style>