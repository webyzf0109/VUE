<template>
<div>
    <div>
        <button @click="add">增加</button>
        <button @click="stract">减少</button>
    </div>
    <div>{{$store.state.count}}</div>
    <v-vuexstudyone></v-vuexstudyone>
    <v-vuexstudytwo></v-vuexstudytwo>
</div>
    
</template>
<script>
import  vuexstudyone from '@/components/vuex/vuexstudyone.vue'
import  vuexstudytwo from '@/components/vuex/vuexstudytwo.vue'
export default{
    data(){
        return{

        }
    },
    methods:{
        add(){
            this.$store.commit('addcount')
        },
        stract(){
            this.$store.commit('stractcount')
        }
    },
    components:{
        'v-vuexstudyone':vuexstudyone,
        'v-vuexstudytwo':vuexstudytwo
    }
}    
</script>
<style>

</style>
