<template>
  <div class='mycourses'>
    <Person></Person>
    <p class='empty'>暂无内容</p>
  </div>
</template>
<script>
import Person from './Person'
export default {
  components:{
    Person
  }
}
</script>

<style>
.mycourses{background: #eee;}
  .empty{
  width: 960px;
  line-height: 400px;
  font-size: 14px;
  color: #000;
  margin: 20px auto;
  background: #fff;
  text-align: center;
  box-shadow: 2px 2px 2px #888888;
  border: 1px #eee solid;
}
</style>