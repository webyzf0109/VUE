<template>
    <ul class="mui-table-view" v-infinite-scroll="loadMore" infinite-scroll-disabled="moreLoading" infinite-scroll-distance="0" infinite-scroll-immediate-check="false">
        <!--li数据遍历循环部分-->
        <li class="mui-table-view-cell" v-for="item in list">
            <a class="mui-navigate-right">
            <span class="mui-pull-left">{{item.name}}</span>
            <span class="mui-pull-right">{{item.date}}</span>
        </a>    
        </li>
            <!--底部判断是加载图标还是提示“全部加载”-->
            <li class="more_loading" v-show="!queryLoading">
            <mt-spinner type="snake" color="#00ccff" :size="20" v-show="moreLoading&&!allLoaded"></mt-spinner>
            <span v-show="allLoaded">已全部加载</span>
        </li>
    </ul>
</template>
<script>
 export default {
  data() {
   return {
    //初始化无限加载相关参数
    queryLoading: false,
    moreLoading: false,
    allLoaded: false,
    totalNum: 0,
    pageSize: 20,
    pageNum: 1,
    list:[
        {name:'111',date:'222'},
        {name:'111',date:'222'},
        {name:'111',date:'222'},
        {name:'111',date:'222'},
        {name:'111',date:'222'},
        {name:'111',date:'222'},{name:'111',date:'222'},
        {name:'111',date:'222'},
        {name:'111',date:'222'},
        {name:'111',date:'222'},
        {name:'111',date:'222'},
        {name:'111',date:'222'},
        {name:'111',date:'222'},
        {name:'111',date:'222'},
        {name:'111',date:'222'},
        {name:'111',date:'222'},
        {name:'111',date:'222'},
        {name:'111',date:'222'},
    ],
   }
  },
  computed: {
   params() {
    return{
     //这里先定义要传递给后台的数据
     //然后将每次请求20条的参数一起提交给后台
     pageSize: this.pageSize
     }
   }
  },
  methods: {
   //无限加载函数
   loadMore() {
    if(this.allLoaded){
     this.moreLoading = true;
     return;
    }
    if(this.queryLoading){
     return;
    }
    this.moreLoading = !this.queryLoading;
    this.pageNum++;
     setTimeout(() => {
    for (let i = 1; i <= 10; i++) {
      this.list.push({name:"张三",date:"123456789"});
    //   this.allLoaded = this.debtList.length==this.totalNum;
    }
    this.moreLoading = this.allLoaded;
  }, 1000);
   }
  },
 }
</script>
<style>
    li{
        height:40px;
    }
</style>


