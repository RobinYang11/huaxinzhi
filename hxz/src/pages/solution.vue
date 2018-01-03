<template>
    <div class="solution">
        <juMu v-bind:pdata="pdata"></juMu>
        <h1>我们拥有成套的解决方案</h1>
        <div class="rowbox">
            <div class="imgbody">
              
                <!-- <solutionModel></solutionModel>
                <solutionModel></solutionModel>
                <solutionModel></solutionModel>
                <solutionModel></solutionModel>
                <solutionModel></solutionModel>
                <solutionModel></solutionModel> -->
            <textTmp></textTmp>
            
            </div>
            
        </div>    
    </div>
</template>
<script>
import juMu from "../components/detailComponents/juMu"
import relatedLinks from "../components/relatedLinks"
import solutionModel from "../components/solutionModel"
import textTmp from "../components/detailComponents/textTmp"
export default {
  name:"solution",
  data:function(){
      return {
          pdata:{
              h1:"解决方案",
              p1:"我们秉承认真做事认真做人全心全意为顾客服务的理念",
              p2:"专注　专业　至臻　至善"
          }
      }
  },
  components:{relatedLinks,solutionModel,textTmp,juMu}
}
</script>
<style lang="less" scoped>
    .solution{
        background-color: #fff;
        display: block;
        box-sizing: border-box;

            h1{
                margin-top: 35px;
            }
        .rowbox{
            display: flex;
            display: -webkit-flex;
            
            h3{
            width: 100%;
            text-align: center;
            margin-bottom: 15px;
            }
            .imgbody{
                display: flex;
                display: -webkit-flex;
                width: 100%;
                img{
                    width: 100%;
                }
            }
            .hotlinks{
                width: 25%;
                float: right;
                box-sizing: border-box;
            }
        }
        
    }
</style>

