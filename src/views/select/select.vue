<template>
    <div>
        <Select @on-change="changevalue" v-model="provise" size="small" style="width:100px">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.value }}</Option>
        </Select>
        <Select v-model="city" size="small" style="width:100px">
            <Option v-for="item in children" :value="item.value" :key="item.value">{{ item.value }}</Option>
        </Select>
    </div>

</template>
<script>
export default {
  data() {
    return {
      provise: "山西",
      city:"",
      children:[],
      cityList: [
        {
          value: "山西",
          label: "山西",
          children:[
              {id:1,value:'太原'},
              {id:2,value:'运城'},
          ]
        },
        {
          value: "河南",
          label: "河南",
          children:[
              {id:1,value:'郑州'},
              {id:2,value:'商丘'},
              {id:3,value:'三门峡'},
          ]
        },
        {
          value: "浙江",
          label: "浙江",
          children:[
              {id:1,value:'杭州'},
              {id:2,value:'台州'},
          ]
        },
      ]
    };
  },
  created(){
      this.changevalue(this.provise);
  },
  methods:{
      changevalue(value){
          var index=this.cityList.find(function(val){
            return val.value==value;
        })
        this.children=index.children;
        this.city=this.children[0].value;
      }
  },
};
</script>
<style>
</style>
