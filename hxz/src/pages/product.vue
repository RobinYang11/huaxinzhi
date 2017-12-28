<template>
    <div class="product">
        <div class="imgbody">
            
        </div>
        <div class="pbox">
            <productList></productList>
            <productList></productList>
            <productList></productList>
            <productList></productList>
        </div>
            
    <div class="hot_box">
       <relatedLinks></relatedLinks>
    </div>
    </div>
</template>
<script>
import productList from "../components/productList"
import relatedLinks from "../components/relatedLinks"
export default {
  name:"product",
  data:function(){
      return {

      }
  },
  components:{productList,relatedLinks}
}
</script>
<style lang="less" scoped>
    .product{
        background-color: #fff;
        width: 1200px;
        margin: 30px auto;
        .imgbody{
            width: 100%;
            img{
                width: 100%;
            }
        }
        .pbox{
            width: 900px;
            float: left;
        }
        .hot_box{
            float: right;
            width:25%; 
        }
    }
</style>

