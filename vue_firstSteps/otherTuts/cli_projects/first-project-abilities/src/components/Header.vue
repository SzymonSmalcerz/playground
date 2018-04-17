<template>
  <header>
    <h1> {{ title }} </h1>
  </header>
</template>

<script>
export default {
  data () {
    return {
      title : 'Discover hidden abilities !'
    }
  }
}
</script>

<style scoped>
  header  {
    background-color: #8888FF;
    text-align: center;
    padding: 30px;
  }

  h1  {
    color : #333;
  }
</style>
