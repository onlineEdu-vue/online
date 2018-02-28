<template>
  <div id='person'>
      <!-- 個人信息 -->
    <div class="personalInfoContainer">
      <div class="personalInfo">
        <div class="touxiang"><img src="../assets/img/top.jpg" alt="" width="157" height="162"></div>
        <div class="xinxi">
          <div class="container">
            <p class="one-floor">张敏</p>
            <p class="two-floor"><label>ID:&nbsp;</label>123456</p>
            <p class="three-floor"><span><label>积分：</label>1000</span><span><label>等级：</label><i class="icon-level"></i></span></p>
            <p class="four-floor">
              <span><label>消息</label>（<i>未读+</i>）</span>
              <span><label>关注者：</label>120</span>
              <span><label>关注：</label>12</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- 功能展示 -->
    <div class="featureContainer">
      <div class='feature'>
        <ul>
          <router-link tag='li' class='featureList' v-for='(list,index) in lists' :key='index'
           :to='list.ref' :class="{menu:list.routeName==$route.name}">
          {{list.routeName}}
          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      lists:[
       {
         ref:'/Person/Mycourses',
        name:'我的课程',
        routeName:'我的课程'
       },
       {
         ref:'/Person/Myevaluate',
        name:'我的评价',
        routeName:'我的评价'
       },
       {
         ref:'/Person/Information',
        name:'我的信息',
        routeName:'我的信息'
       },
       {
         ref:'/Person/Mymessage',
        name:'我的消息',
        routeName:'我的消息'
       }
      ]
    }
  }
}
</script>

<style>
  .personalInfoContainer{
    width: 100%;
    background: url(../assets/img/person.png) ;
    background-size: cover;
    height: 200px;
  }
  .personalInfo{
    width: 960px;
    margin: 0 auto;
    display: flex;
    color:#fff;
  }
  .touxiang{
    width: 200px;
    border-radius: 50%;
    /*text-align: center;*/
    padding-top: 20px;
    padding-right: 20px;
  }
  .touxiang img{
    display: inline;
    border-radius: 50%;
  }
  .xinxi{
    flex: 1 0 auto;
    width: 100%;
    height: 251px;
  }
  .icon-level:before {
      content: "\e903";
      color: #d81e06;
  }
  .container{
    /*display: flex;
    flex-direction: column;*/
    width:960px;
    margin: 0 auto;
    height: calc(100% - 49px);
    padding-top: 49px;
    padding-left: 11px;
    /*height: 100%;*/
  }
  div.container p{
    margin-top: 10px;
    height: 14px;
  }
  p.one-floor{
    margin-top: 0;
  }
  div.container p span{
    display: inline-block;
    margin-right: 5px;
  }
  div.container span>label{
    margin-right: 2px;
  }
  div.featureContainer {
    width: 100%;
    padding-top: 30px;
    background: #eee;
  }
  .feature{
    width:960px;
    margin: 0 auto;
    font-size: 18px;
    color: #454545;
  }
  .feature ul{
    display: flex;
    background:#fff;
    line-height: 48px;
    box-shadow: 2px 2px 2px #888888;
    margin-bottom: 20px;
  }
  .featureList{
    flex: auto;
    text-align: center;
  }
</style>