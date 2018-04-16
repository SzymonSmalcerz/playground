
//objects used to control components
let viewModel = new Vue({
  el : "#vue-app", //which element will be controlled by this model
  data : { // data stores aour data which is used in our component
    name : "szymon",
    age : 25,
    proffesion : "student",
    website : "http://www.google.com",
    websiteTag :"<a href ='http://www.google.com'>google</a>",
    x : 0,
    y : 0,
    a : 0,
    b : 0,
    greenBck : false,
    nearbyElement : false
  },
  methods : {
    greet : function(time) {

      console.log("greet triggered")
      return `Good ${time} ${this.name} !` // you can use propertis from data in function
                                           // vue leave them at the top of scope so this.{property_name} return property :)
    },
    subtract : function(n){
      console.log("substract triggered")
      n = n === parseFloat(n) ? n : 1;
      this.age-=n;
    },
    updateXY : function(event){
      console.log("updateXY triggered")
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    togglecase : function(){
      console.log("togglecase triggered")
      this.name = this.name.toUpperCase() === this.name ? this.name.toLowerCase() : this.name.toUpperCase();
    }
  },
  computed : {
    addToA : function(){
      console.log("addToA triggered")
      return this.a + this.age;
    },
    addToB : function(){
      console.log("addToB triggered")
      return this.b + this.age;
    },
    setClasses : function(){
      return {
        greenBackground : this.greenBck,
        nearby : this.nearbyElement
      }
    }
  }
})
