<template>
  <div id="abilities">
    <ul id="warriors">
      <li id="warrior" v-for="warrior in warriors" v-on:click="warrior.show = !warrior.show" :style="{backgroundImage : warrior.imgUrl}">
        {{warrior.name}}
        <span v-if="warrior.show">
          <br>
          abilitiy:
          <br>
          {{warrior.speciality}}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      warriors : [
        { name : "Goku", speciality : "combat",show : false, imgUrl : "url('http://collectoys.es/9243-large_default/figura-son-goku-dragon-ball-collection-vol-3-banpresto.jpg')"},
        { name : "Bolek", speciality : "having fun", show : false, imgUrl : "url('http://www.radiownet.pl/system/post_gallery_images/images/87669/normal/Bolek%20i%20Lolek0001.jpg?1456680467')"},
        { name : "Reksio", speciality : "barking", show : false, imgUrl : "url('https://image.ceneostatic.pl/data/products/16516784/i-tissotoys-figurka-reksio-na-czterech-lapach-11013.jpg')"},
        { name : "Rick", speciality : "intelligence", show : false, imgUrl : "url('https://vignette.wikia.nocookie.net/fictionalcrossover/images/6/60/Rick_and_Morty.png/revision/latest?cb=20150515130110')"},
        { name : "Vegeta", speciality : "combat", show : false, imgUrl : "url('https://aa1a5178aef33568e9c4-a77ea51e8d8892c1eb8348eb6b3663f6.ssl.cf5.rackcdn.com/p/full/e7ca1d2e-8e00-4b5b-8de1-2512885998aa.jpg')"},
        { name : "Johny", speciality : "hard training", show : false, imgUrl : "url('https://magicznelata90.pl/wp-content/uploads/2015/09/johnny-bravo.jpg')"}
      ]
    }
  }
}
</script>

<style scoped>
#abilities{
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}
#warriors{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
#warrior{
    cursor : pointer;
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 90px;
    border: 1px solid #222;
    margin: 10px;
    font-size: 60px;
    color : #2222FF;
}
</style>
