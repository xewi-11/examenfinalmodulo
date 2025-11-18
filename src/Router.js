import { createRouter, createWebHistory } from "vue-router";
import MarcaComponent from "./components/MarcaComponent.vue";
import HomeComponent from "./components/HomeComponent.vue";
import LoginComponent from "./components/LoginComponent.vue";
import PerfilUser from "./components/PerfilUser.vue";
import ComprasUser from "./components/ComprasUser.vue";
import PedidosUser from "./components/PedidosUser.vue";





const myRoutes=[
    {
        path:"/", component:HomeComponent
    },
    {
        path:'/marcas/:nombre', component:MarcaComponent
    }
    ,
    {
        path:'/login', component:LoginComponent
    }
    ,
    {
        path:'/perfil', component:PerfilUser
    }
    ,
    {
        path:'/pedidos', component:PedidosUser
    }
    ,
    {
        path:'/compras', component:ComprasUser
    }
    
]
const router=createRouter({
    history:createWebHistory(),
    routes:myRoutes
})
export default router;