<template>
  <div>
    <h3>{{hello}} from app !</h3>
    <h3>{{greetings()}}</h3>
    <names></names>
  </div>
</template>

<script>
export default {
  data () {
    return {
      hello : 'hello'
    }
  },
  methods : {
    greetings : function(){
      return "hello ! :)"
    }
  }
}
</script>

<style scoped>
  h3{
    color : purple
  }
</style>
