<template>
  <ul>
    <li v-for="(name,index) in names"> {{index}}.{{name}}</li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      names : ["szymon","bartek","adam","marek","zbyszek"]
    }
  }
}
</script>

<style>

</style>
