let viewModel = new Vue({
  el : "#bag",
  data : {
    imgBagNormSource : "./assets/bag_norm.png",
    imgBagExplodeSource : "./assets/bag_explode.png",
    health : 5
  },
  computed : {
    getHealthWidth : function(){
      return {
        width : this.health * 20 + "%"
      }
    },
    getImageSrc : function(){
      return this.health > 0 ? this.imgBagNormSource : this.imgBagExplodeSource;
    }
  }
})
