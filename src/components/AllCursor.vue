<template>
  <div class='cursor'>
    <Slider></Slider>
    <div class="cursorWrap">
      <div class="cursorcontent" v-for='(item,index) in cursor' :key='index'>
        <div class="study">
          <div class="studyL lf">
            <img :src="'upload/'+ item.src" :alt="item.alt"/>
            <p>{{item.diff}}</p>
            <p>大约有 <b>{{item.number}}</b> 人学习了这门课程</p>
          </div>
          <div class='studyR lf'>
            <p>{{item.title}} <span class="rg">{{item.diff1}}</span></p>
            <p>
              {{item.description}}
            </p>
            <div tag='li' class="button" @click="lear(item.ref)">开始学习</div>
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import '../assets/css/cursor.css'
  import Slider from './Slider.vue'
  import Cookie from 'js-cookie'
  export default{
    components:{
      Slider
    },
    data(){
      return {
        cursor:[
        {
          url:'../assets/img/3.png',
          alt1:'抽奖转盘',
          diffi0:'难度：中等 时间：一天',
          time:'大约有1200人学习了这门课程',
          content:'基于CSS3实现抽奖大转盘',
          diffi1:'中级',
          contents:`本课程将 教会大家如何使用 CSS3 的特有属性 transform 制
                作抽奖转盘,过程简单且富有乐趣，并在课程中穿插了一些留
                给大家的思考题，希望大家积极参与并完成思考题，会有很多收获哦。
                掌握基本的CSS3transform，canvas，包括以下但不限于： 了解CSS3、
                的定义、概念发展简史 ；`,
          ref:'cursorContent.html'
        }]
      }
    },
    mounted(){
      this.fetchData();
    },
    methods:{
      fetchData(){
        this.$http.get('/course').then(res=>{
        this.cursor=res.data;
        // console.log(this.cursor);
        }).catch(err=>{
          console.log(err);
        })
      },
      lear(ref){
        //这里执行了
        if(!this.$store.state.username) return alert('您没有登录，请去登录')
        this.$http.post('/lear',{
          username: this.$store.state.username
        }).then((res) => {
          // 请求后的回调
          console.log(res);
          alert('支付成功开始学习');
          this.$router.push(ref)
        })
      }
    },
    
  }
</script>