<template>
  <div class="solutionModel">
      <div class="modelbox">
          <router-link to="" class="imgbox">
            <img src="/static/img/log.png" alt="">
            <div class="hoverAnimates">
                <p>我有很多解决方案我有很多解决方案我有很多解决方案我有很多解决方案</p>
            </div>
          </router-link>
          
      </div>
  </div>
</template>
<script>
export default {
  name:"solutionModel",
  data:function(){
      return{

      }
  }
}
</script>
<style lang="less" scoped>
    .solutionModel{
        width: 33%;
        float: left;
        .modelbox{
            padding: 15px;
            box-sizing: border-box;
            .imgbox{
                position: relative; 
                width: 100%;
                float: left;
                display: inline-block;
            img{
                min-height: 200px;
                border: 1px solid #999;
                width: 100%;
                box-sizing: border-box;
            }
            .hoverAnimates{
                width: 100%;
                position: absolute;
                bottom: 0;
                left: 0;
                height: 0;
                overflow: hidden;
                transition: all 0.3s;
                color: #fff;
                background-color: #0ecce7;
                text-align: left;
                
                text-indent: 2em;
                font-size: 16px;
                line-height: 25px;
                p{
                    padding: 15px;
                }
            }
        }
        .imgbox:hover{
                
                .hoverAnimates{
                    height: 100%;
                    cursor: default;
                }
            }
        }
        
    }
</style>

