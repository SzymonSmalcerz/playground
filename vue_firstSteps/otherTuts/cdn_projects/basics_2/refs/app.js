let vm1 = new Vue({
  el : "#vue",
  data : {
    favouritePokemon : "szymon"
  },
  methods : {
    changeText : function(){
      this.favouritePokemon = this.$refs.myPokemonInput.value
    }
  }
})
