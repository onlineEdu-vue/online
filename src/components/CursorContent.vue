<template>
  <div>
    <Slider></Slider>
    <div class="cursorWrap">
      <div class="cursorcontent">
        <div class="study">
          <div class="studyL lf">
            <img :src="'upload/'+ mycursor.src" :alt="mycursor.alt"/>
            <p>{{mycursor.diff}}</p>
            <p>大约有 <b>{{mycursor.number}}</b> 人学习了这门课程</p>
          </div>
          <div class='studyR lf'>
            <p>{{mycursor.title}} <span class="rg">{{mycursor.diff1}}</span></p>
            <p>{{mycursor.description}}</p>
            <p><span>{{mycursor.tag1}}</span><span>{{mycursor.tag2}}</span></p>
          </div>
        </div>
        <div class="aim">
          <p class="comp">{{mycursor.aim}}</p>
          <ul class="comli">
            <li>{{mycursor.aim1}}</li>
            <li>{{mycursor.aim2}}</li>
            <li>{{mycursor.aim3}}</li>
            <li>{{mycursor.aim4}}</li>
            <li>{{mycursor.aim5}}</li>
            <li>{{mycursor.aim6}}</li>
            <li>{{mycursor.aim7}}</li>
            <li>{{mycursor.aim8}}</li>
          </ul>
        </div>
        <div class="describe">
          <p class="comp">{{mycursor.task}}</p>
          <p>{{mycursor.task1}}</p>
        </div>
        <div class='path'>
          <p class="comp">{{mycursor.idel}}</p>
          <ul class="comli">
            <li>{{mycursor.idel1}}</li>
            <li>{{mycursor.idel2}}</li>
            <li>{{mycursor.idel3}}</li>
            <li>{{mycursor.idel4}}</li>
            <li>{{mycursor.idel5}}</li>
            <li>{{mycursor.idel6}}</li>
            <li>{{mycursor.idel7}}</li>
            <li>{{mycursor.idel8}}</li>
          </ul>
        </div>
        <div class='data'>
          <p class="comp">{{mycursor.reference}}</p>
          <ul class="comli">
            <li><a :href="mycursor.reference1">MDN HTML入门</a></li>
            <li><a :href="mycursor.reference2">MDN CSS3入门教程</a></li>
            <li><a :href="mycursor.reference3">w3cplus</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import '../assets/css/cursorContent.css'
  import Slider from './Slider.vue'
  export default{
    data(){
      return{
        mycursor:[]
      }
    },
    components:{
      Slider
    },
    mounted(){
      this.fetchData();
    },
    methods:{
      fetchData(){
        this.$http.get('/coursecontent').then(res=>{
        this.mycursor=res.data;
        }).catch(err=>{
          console.log(err);
        })
      }
    }
  }
</script>