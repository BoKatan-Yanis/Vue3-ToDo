<template>
<!-- compteur incrementer-->
  <p>Compteur : {{ i }}</p>
  <button @click="increment">{{ text }}</button>
  <br />
  <br />
  <!-- form d'ajout-->
  <input v-model="message" placeholder="modifiez-moi" />
  <button @click="push(message)">Ajout d'un message</button>
  <p>Le message est : {{ message }}</p>
  <!-- Boucle sur notre tableau renvoyer par la fonction composite -->
  <ul id="v-for-object" class="demo">
    <li v-for="value in table" v-bind:key="value.id">
      {{ value }}
    </li>
  </ul>
</template>

<script >
import { ref } from "vue";
import { useToDo, useIncrement } from "./composition/increment.js";
export default {
  data() {
    return {
      message: "Null",
    };
  },
  props: {
    text: String,
  },

  setup(props) {
    const [table, push] = useToDo();
    const [i, increment] = useIncrement();
    return {
      i,
      increment,
      table,
      push,
    };
  },
};
</script>

<style>
</style>