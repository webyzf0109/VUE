<template>
    <div>
        <p slot="title" class="card-title">
            <Icon type="android-map"></Icon>
            上周每日来访量统计
        </p>
        <div class="data-source-row" style="height:500px;">
            <v-visiteVolume></v-visiteVolume>
        </div>
    </div>
</template>
<script>
import visiteVolume from '@/components/echart/echart1.vue'; 
export default{
    data(){
        return{

        }
    },
     components: {
       'v-visiteVolume':visiteVolume,
    },
}   
</script>
<style>

</style>