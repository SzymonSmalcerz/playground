<template>
  <div>
    <ul>
      <li v-for="(name,index) in names"> {{index}}.{{name}}</li>
      <h3>Hello from names !</h3>
    </ul>
  </div>
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

<style scoped>
  h3{
    color : pink
  }
</style>
