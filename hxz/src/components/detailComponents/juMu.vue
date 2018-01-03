<template>
    <div class="juMu">
        <div class="wrapper padding50">
            <h1 >{{pdata.h1}}</h1>
            <p>{{pdata.p1}}</p>
            <p>{{pdata.p2}}</p>
        </div>
    </div>
</template>
<script>
export default {
  name:"juMu",
  props:['pdata']
}
</script>
<style lang="less" scoped>
    .juMu{
        background-color: #243a58;
        color: #efefee;
        text-align: left;
        padding: 60px;
       

        .padding50{
            padding-left: 50px;
        }
        h1{
            margin-top: 15px;
        }
        p{
            margin-top: 30px;
        }
    }
</style>
