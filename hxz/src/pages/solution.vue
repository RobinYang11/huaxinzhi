<template>
    <div class="solution">
        <h3>我们拥有成套的解决方案</h3>
        <div class="rowbox">
            <div class="imgbody">
                <solutionModel></solutionModel>
                <solutionModel></solutionModel>
                <solutionModel></solutionModel>
                <solutionModel></solutionModel>
                <solutionModel></solutionModel>
                <solutionModel></solutionModel>

            </div>
            <div class="hotlinks">
                <relatedLinks></relatedLinks>
            </div>
        </div>    
    </div>
</template>
<script>
import relatedLinks from "../components/relatedLinks"
import solutionModel from "../components/solutionModel"
export default {
  name:"solution",
  data:function(){
      return {

      }
  },
  components:{relatedLinks,solutionModel}
}
</script>
<style lang="less" scoped>
    .solution{
        width: 1200px;
        background-color: #fff;
        display: block;
        box-sizing: border-box;
        margin-top: 30px;
        .rowbox{
            display: flex;
            display: -webkit-flex;
            flex-direction: row;
            h3{
            width: 100%;
            text-align: center;
            margin-bottom: 15px;
            }
            .imgbody{
                width: 75%;
                display: flex;
                display: -webkit-flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: flex-start;
                
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

