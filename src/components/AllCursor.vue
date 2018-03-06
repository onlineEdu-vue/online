<template>
  <div class='cursor'>
    <Slider></Slider>
    <div class="cursorWrap" v-if='count'>
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
            <div tag='li' class="button" @click="lear(item.href)">开始学习</div>
            <router-view></router-view>
          </div>
        </div>
      </div>
      <Page 
        :page-index="currentPage" 
        :totla="count" 
        :page-size="pageSize" 
        @change="pageChange">
      </Page>
    </div>
  </div>
</template>
<script>
  import '../assets/css/cursor.css'
  import Slider from './Slider.vue'
  import Page from './Page.vue'
  export default{
    components:{
      Slider,
      Page
    },
    data () {
      return {
        pageSize : 6 , //每页显示20条数据
        currentPage : 0, //当前页码
        count : 10, //总记录数
        cursor : []
      }
  },
    mounted(){
      this.fetchData(this.currentPage,this.pageSize);
    },
    methods:{
      fetchData(currentPage,pageSize){
        const _params={};
        _params.offset=this.currentPage;
        _params.limit=this.pageSize;
        //console.log(_params);
        //接口有问题需要重新写
        this.$http.post('/course',_params).then(res=>{
        this.cursor=res.data;//
        //this.count=res.data.ID.length;//记录总的记录数
         console.log(this.cursor);
        }).catch(err=>{
          console.log(err);
        })
      },
      lear(href){
        if(!this.$store.state.username) return alert('您没有登录，请去登录')
        this.$http.post('/lear',{
          username: this.$store.state.username
        }).then((res) => {
          // 请求后的回调
          console.log(res);
          //这里要写
          alert('你现在有????积分，学习将要扣除100积分')
          alert('您已扣除100积分，目前还剩？？？？积分，开始学习');
          this.$router.push(href)
        })
      }
    },
    
  }
</script>