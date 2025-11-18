import axios from "axios";
import Global from "@/Global";
export default class ServiceCubos {
  getCubos() {
    return new Promise(function (resolve) {
      var request = "api/Cubos";
      let url = Global.urlCubos + request;
      axios.get(url).then((response) => {
        resolve(response.data);
      });
    });
  }
  getMarcas() {
    return new Promise(function (resolve) {
      var request = "api/Cubos/Marcas";
      let url = Global.urlCubos + request;
      axios.get(url).then((response) => {
        resolve(response.data);
      });
    });
  }
  getCubosByMarca(nombre) {
    return new Promise(function (resolve) {
      var request = "api/Cubos/CubosMarca/" + nombre;
      let url = Global.urlCubos + request;
      axios.get(url).then((response) => {
        resolve(response.data);
      });
    });
  }
  loginUser(correo, password) {
    return new Promise(function (resolve) {
      var request = "api/Manage/Login";
      var url = Global.urlCubos + request;
      var body = {
        email: correo,
        password: password,
      };
      axios.post(url, body).then((response) => {
        console.log(response);
        resolve(response.data.response);
      });
    });
  }
  getUserByToken() {
    return new Promise(function (resolve) {
      var request = "api/Manage/PerfilUsuario";
      let url = Global.urlCubos + request;
      axios
        .get(url, {
          headers: {
            Authorization: "bearer " + Global.tokenUser,
          },
        })
        .then((response) => {
          resolve(response.data);
        });
    });
  }
  getComprasUser(){
    return new Promise(function (resolve) {
      var request = "api/Compra/ComprasUsuario";
      let url = Global.urlCubos + request;
      axios
        .get(url, {
          headers: {
            Authorization: "bearer " + Global.tokenUser,
          },
        })
        .then((response) => {
          resolve(response.data);
        });
    });
  }
  RealizarPedido(cubo){
    console.log(cubo);
    return new Promise(function(resolve){
        
        var request='api/Compra/InsertarPedido/'+cubo.idCubo;
        let url=Global.urlCubos+request;
        axios.post(url,cubo,{
            headers:{
                Authorization:"bearer "+Global.tokenUser
            }
        }).then((response)=>{
            resolve(response.data);
        });
    });
  }
}
