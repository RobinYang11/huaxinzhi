<template>
    <div class="product">
        
        <juMu></juMu>
        <div class="bg">
        <div class="contantbox">
             <div class="pbox">
                <productList></productList>
                <productList></productList>
                <productList></productList>
                <productList></productList>
            </div>
                
            <!-- <div class="hot_box">
            <relatedLinks></relatedLinks>
            </div> -->
        </div>
        </div>
    </div>
</template>
<script>
import productList from "../components/productList"
import relatedLinks from "../components/relatedLinks"
import juMu from "../components/detailComponents/juMu"
export default {
  name:"product",
  data:function(){
      return {

      }
  },
  components:{productList,relatedLinks,juMu}
}
</script>
<style lang="less" scoped>
    .product{
        background-color: #fff;
        
        margin:  auto;
        


        .bg{
            background-color: #f2f2f2;
            width: 100%
        }
        .contantbox{
            width: 100%;
            display: flex;
            justify-content: flex-start;
            flex-direction: row;
            padding: 20px 0;
            
            background-color: #e2e4e7;
        
            .imgbody{
                width: 100%;
                img{
                    width: 100%;
                }
            }
            .pbox{
                width: 100%;
                display: flex;
                 flex-direction: column;
                justify-content: flex-start;

            }
            .hot_box{
                float: right;
                width:25%; 
            }
        }
        
    }
</style>

