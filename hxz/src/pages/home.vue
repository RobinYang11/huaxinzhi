<template>
   <div>
        <el-carousel indicator-position="outside">
            <el-carousel-item v-for="item in title" :key="item">
             <h3>{{ item }}</h3>
            </el-carousel-item>
        </el-carousel>
   </div>
</template>
<script>
    export default {
    name:'home',
    data:function(){
        return {
            title:[
               "hello",
                "this",
                "test",
                "robin"
            ]
        }
    }
    }
</script>
<style lang="less" scoped>

</style>


