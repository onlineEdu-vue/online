<template>
    <ul class="mo-paging">
        <!-- prev -->
        <li
        :class="['paging-item', 'paging-item--prev', {'paging-item--disabled' : index === 1}]"
        @click="prev">prev</li>
        
        <!-- first -->
        <li
        :class="['paging-item', 'paging-item--first', {'paging-item--disabled' : index === 1}]"
        @click="first">first</li>
        
        <li
        :class="['paging-item', 'paging-item--more']"
        v-if="showPrevMore">...</li>

        <li
        :class="['paging-item', {'paging-item--current' :index === pager}]"
        v-for="(pager,indexs) in pagers" :key='indexs'
        @click="go(pager)">{{ pager }}</li>

        <li
        :class="['paging-item', 'paging-item--more']"
        v-if="showNextMore">...</li>
        
        <!-- last -->
        <li
        :class="['paging-item', 'paging-item--last', {'paging-item--disabled' : index === pages}]"
        @click="last">last</li>

        <!-- next -->
        <li
        :class="['paging-item', 'paging-item--next', {'paging-item--disabled' : index === pages}]"
        @click="next">next</li>
    </ul>
</template>
<script>
export default {
  props:{
    //页面中可见的页码，其他的用...代替，必须是奇数
    perPages:{
      type: Number,
      default(){
        return 5
      }
    },
    //当前页码
    pageIndex:{
      type:Number,
      default(){
        return 1
      }
    },
    //每页显示条数
    pageSize:{
      type:Number,
      default(){
        return 3
      }
    },
    //总记录数
    total:{
      type:Number,
      default(){
        return 19
      }
    }
  },
  data(){
    return {
      index:this.pageIndex,
      limit:this.pageSize,
      size: this.total||1,
      showPrevMore:false,
      showNextMore:false
    }
  },
  methods:{
    go(page){
      if(this.index!==page){
        this.index=page
        //父组件通过change方法接受当前的页码
        this.$emit('change',this.index)
      }
    },
    prev(){
      if(this.index>1){
        this.go(this.index-1)
      }
    },
    next(){
      if(this.index<this.pages){
        this.go(this.index+1)
      }
    },
    first(){
      if(this.index!==1){
        this.go(1)
      }
    },
    last(){
      if(this.index!=this.pages){
        this.go(this.pages)
      }
    }
  },
  computed:{
     //计算总页码
    pages(){
      return Math.ceil(this.size / this.limit)
    },
    //计算页码，当count等变化时自动计算
    pagers(){
      const array=[],perPages=this.perPages,pageCount=this.pages;
      let current=this.index;
      const _offset=(perPages-1)/2;//从当前页开始，往后移动个数据
      console.log('_______');
      console.log(_offset);
      const offset={
        start:current-_offset,
        end:current+_offset
      };//展示的数据从第几页到第几页，从0开始计数
      console.log('_______');
      console.log(offset);
      if(offset.start<1){
        offset.end=offset.end+(1-offset.start);
        offset.start=1
      }
      if (offset.end > pageCount) {
        offset.start = offset.start - (offset.end - pageCount)
        offset.end = pageCount
      }
      if (offset.start < 1) offset.start = 1

      this.showPrevMore = (offset.start > 1)
      this.showNextMore = (offset.end < pageCount)

      for (let i = offset.start; i <= offset.end; i++) {
          array.push(i)
      }
      return array
    }

  },
  watch : {
      pageIndex(val) {
          this.index = val || 1
      },
      pageSize(val) {
          this.limit = val || 6
      },
      total(val) {
          this.size = val || 18
      }
  }
}
</script>

<style>
.mo-paging {
  display: inline-block;
  padding: 0;
  margin: 1rem 0;
  font-size: 0;
  list-style: none;
  user-select: none;
}
.paging-item {
  display: inline;
  font-size: 14px;
  position: relative;
  padding: 6px 12px;
  line-height: 1.42857143;
  text-decoration: none;
  border: 1px solid #ccc;
  background-color: #fff;
  margin-left: -1px;
  cursor: pointer;
  color: #0275d8;
}
.paging-item:first-child {
    margin-left: 0;
}
.paging-item:hover {
    background-color: #f0f0f0;
    color: #0275d8;
}
.paging-item--disabled,
.paging-item--more{
  background-color: #fff;
  color: #505050;
 }
.paging-item--disabled {
  cursor: not-allowed;
  opacity: .75;
}
.paging-item--more,
.paging-item--current {
  cursor: default;
}
.mo-paging .paging-item--current {
  background-color: #0275d8;
  color:#fff;
  position: relative;
  z-index: 1;
  border-color: #0275d8;
}
</style>