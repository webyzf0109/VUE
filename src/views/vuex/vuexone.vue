<template>
<div>
    <div>
        <button @click="add">增加</button>
        <button @click="stract">减少</button>
    </div>
    <div>{{$store.state.count}}</div>
    <v-vuexstudyone></v-vuexstudyone>
    <v-vuexstudytwo></v-vuexstudytwo>
    <v-vuexstudythree></v-vuexstudythree>
</div>
    
</template>
<script>
import  vuexstudyone from '@/components/vuex/vuexstudyone.vue'
import  vuexstudytwo from '@/components/vuex/vuexstudytwo.vue'
import  vuexstudythree from '@/components/vuex/vuexstudythree.vue'
export default{
    data(){
        return{

        }
    },
    methods:{
        add(){
            // this.$store.commit('addcount')  getters
            this.$store.dispatch('addcount')  //actions
        },
        stract(){
            this.$store.commit('stractcount')
        }
    },
    components:{
        'v-vuexstudyone':vuexstudyone,
        'v-vuexstudytwo':vuexstudytwo,
        'v-vuexstudythree':vuexstudythree
    }
}    
</script>
<style>

</style>
