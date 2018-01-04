<template>
  <div class="timg">
      <h3>{{tdata.h3}}</h3>
      <div class="cbox">
        
        <p>{{tdata.pcontant}}</p>
      </div>
  </div>
</template>
<script>
export default {
  name:"timg",
   props:["tdata"],
  data:function(){
     
      return{
         
      }
  }
}
</script>
<style lang="less" scoped>
    .timg{
        background-image: url("/static/img/tdsbg.jpg");
        background-repeat: no-repeat;
        background-position:100% 100%; 
        min-height: 500px;
        max-width: 1200px;
        h3{
            margin: 35px 0 20px;
        }
        .cbox{
            width: 100%;
            margin: 0;
            padding: 25px;
            box-sizing: border-box;
            p{
                text-align: justify;
                text-indent: 2em;
            }
        }
    }
</style>
