<template>
  <footer>
    <p> {{ copyright }} </p>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      copyright : 'Copyright Szymon Smalcerz 17.04.2018'
    }
  }
}
</script>

<style scoped>
  footer  {
    background-color: #8888FF;
    text-align: center;
    padding: 20px;
  }

  p {
    color : #333;
    font-size: 20px;
  }
</style>
