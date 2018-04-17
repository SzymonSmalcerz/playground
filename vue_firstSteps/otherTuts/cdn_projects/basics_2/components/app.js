// components are reusable piece of code, you use them as htmls tags
Vue.component("greeting", {
  template : "<p> name : {{name}} <button @click='name = `asd`'>click me</button></p>",
  data : function(){ // why function ? becasu objects are passed by reference but
    return {         // you dont want to have one component passed by reference
      name : "szymon"// so each time you use this "template" (component) you create new
    }                // thanks to this function ( it's like constructor )
  }
})
let vm1 = new Vue({
  el : "#vue_1"
})
let vm2 = new Vue({
  el : "#vue_2"
})
