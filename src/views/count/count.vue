<template>
    <div>
        <CountTo :endVal="2534" :mainStyle="mainStyle" :countStyle="countStyle">
            <span slot="leftText">Total:&nbsp;</span>
            <span slot="rightText">&nbsp;times</span>
        </CountTo>
    </div>
</template>
<script>
 import CountTo from '@/components/count/CountTo.vue';   
 export default{
     components: {
        CountTo
    },
    data(){
        return{
            mainStyle: {
                fontSize: '30px',
                color:'orange',
            },
            countStyle: {
                fontSize: '50px',
                color: '#dc9387'
            },
        }
    },

 }
</script>
<style>

</style>
