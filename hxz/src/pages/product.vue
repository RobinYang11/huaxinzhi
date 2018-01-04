<template>
    <div class="product">
        <juMu　v-bind:pdata="pdata"></juMu>
        <div class="bg">
            <div class="contantbox">
                <div class="pbox">
                    <productList></productList>
                </div>
                
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
          pdata:{
              h1:"华信智的产品",
              p1:"我们秉承认真做事认真做人全心全意为顾客服务的理念",
              p2:"专注　专业　至臻　至善"
          }
      }
  },
  components:{productList,relatedLinks,juMu}
}
</script>
<style lang="less" scoped>
    .product{
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

