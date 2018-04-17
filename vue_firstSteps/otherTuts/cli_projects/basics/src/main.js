import Vue from 'vue'
import App from './App.vue'
import Names from './Names.vue'

Vue.component("names",Names);
new Vue({
  el: '#app',
  render: h => h(App)
})
