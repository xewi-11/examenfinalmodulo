<template>
     
    <div>
       <MenuComponent/>
     <router-view/>
    </div>
    
</template>

<script>
import MenuComponent from './components/MenuComponent.vue';
import Global from './Global';



export default {
  name: 'App',
  components: {
    MenuComponent,
  },
  data(){
    return{
      token:Global.tokenUser
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
