<template>
  <div>
    <app-header></app-header>
    <app-abilities></app-abilities>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Abilities from './components/Abilities.vue'
export default {
  components : {
    "app-header" : Header,
    "app-footer" : Footer,
    "app-abilities" : Abilities
  }
}
</script>
<style scoped>
  /*div {
    background-color : #009922
  }*/
</style>
