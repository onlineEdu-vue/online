<template>
  <div>
    <Slider></Slider>
    <div class="cursorWrap">
      <div class="cursorcontent">
        <div class="msg">
          <p class="comp">{{information.message}}</p>
          <ul class="comli">
            
            <li>{{information.message1}}</li>
            <li>{{information.message2}}</li>
            <li>{{information.message3}}</li>
            <li>{{information.message4}}</li>
            <li>{{information.message5}}</li>
            <li>{{information.message6}}</li>
            <li>{{information.message7}}</li>
            <li>{{information.message8}}</li>
            <li>{{information.message9}}</li>
            <li>{{information.message10}}</li>
          </ul>
        </div>
        <div class='project'>
          <p class="comp">{{information.product}}</p>
          <ul class="comli">
            <li>{{information.product1}}</li>
            <li>{{information.product2}}</li>
            <li>{{information.product3}}</li>
            <li>{{information.product4}}</li>
            <li>{{information.product5}}</li>
            <li>{{information.product6}}</li>
            <li>{{information.product7}}</li>
            <li>{{information.product8}}</li>
            <li>{{information.product9}}</li>
          </ul>
        </div>
        <div class='financing'>
          <p class="comp">{{information.finance}}</p>
          <ul class="comli">
            <li>{{information.finance1}}</li>
            <li>{{information.finance2}}</li>
            <li>{{information.finance3}}</li>
            <li>{{information.finance4}}</li>
            <li>{{information.finance5}}</li>
            <li>{{information.finance6}}</li>
            <li>{{information.finance7}}</li>
            <li>{{information.finance8}}</li>
            <li>{{information.finance9}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import '../assets/css/message.css'
  import Slider from './Slider'
  export default{
    data(){
      return{
        information:[]
      }
    },
    components:{
      Slider,
    },
    mounted(){
      this.fetchData();
    },
    methods:{
      fetchData(){
        this.$http.get('/message').then(res=>{
          //console.log(res.data);
        this.information=res.data;
        //console.log(this.information.message)
        }).catch(err=>{
          console.log(err);
        })
      }
    }
  }
</script>