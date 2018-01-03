<template>
    <div class="modul-bn">
        <div class="inner">
            <h1>{{name}}</h1>
            <p>{{zynm}}</p>
        </div>
    </div>
</template>

<script>
export default {
  name:"banav",
  data:function(){
      return{
         name:'支持',
         zynm:'专业 · 创新 · 智能 · 普惠' 
      }
  }
}
</script>

<style lang="less" scoped>
    .modul-bn{
        height: 262px;
        background-color: rgb(55, 61, 65);
        background-image:url(../assets/img/banav1.png);
        background-repeat: no-repeat;
        background-position: center top;
        position: relative;
       .inner{
           width: 1100px;
           margin:0 auto;
           text-align: left;
           
           h1{
              height: 46px;
              line-height: 46px;
              font-size: 38px;
              font-weight: 400;
              color: #ffffff;
              padding:68px 30px 0 30px;
              overflow: hidden;
           }
           p{
              line-height: 36px;
              font-size: 24px;
              color: #ffffff;
              padding: 0 30px;
              margin-top:10px;
              overflow: hidden; 
           }
       }
      
    }
</style>


