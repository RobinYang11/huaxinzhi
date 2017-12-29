<template>
    <div class="panel">
         <!-- <div class="panel-heading">
         </div> -->
         <div class="panel-heading">    
              <div>
                 <img  :src="msg.imgSrc" alt="">
              </div>
         </div>
         <div class="panel-body">
              <h4>{{msg.t1}}</h4>
              <h6>{{msg.t2}}</h6>
              <p>
                  {{msg.des}}
              </p>
              <div style="text-align:right">
                  <button class="btn-opcity" >
                    查看详情
                  </button>
              </div>
         </div>
      
    </div>
</template>
<script>
export default {
  props:['msg'],
  name:'panel',
  data:function(){
      return {
          
      }
  }
}
</script>
<style lang="less" scoped>
    .panel{
        color: white;
        position: relative;
        max-width: 295px;
        height: 180px;
        overflow: hidden;
        box-shadow: 0 12px 24px 0 rgba(7,17,27,.2);
        border-radius: 6px;
        .panel-heading{
            overflow: hidden;   
        }
        .panel-body{
            padding: 7px;
            text-align: left;
            z-index: 100;
            position: absolute;
            top:26px;
            left:10px;
            p{
                    font-size: 14px;
            }
        }
       }
</style>

