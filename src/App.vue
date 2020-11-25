<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <toDo text="Attention sa rajoute" />
</template>

<script>
import toDo from './components/ToDo.vue' 
export default {
  name: 'App',
  components: {
    toDo
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
