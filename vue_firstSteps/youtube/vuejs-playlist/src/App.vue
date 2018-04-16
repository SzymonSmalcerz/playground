<template>
  <div>
    <h3>{{hello}}</h3>
    <h3>{{greetings()}}</h3>
    <names></names>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title : 'hello'
    }
  },
  methods : {
    greetings : function(){
      return "hello ! :)"
    }
  }
}
</script>

<style>

</style>
