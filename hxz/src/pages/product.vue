<template>
    <div class="product">
        <div class="imgbody">
            
        </div>
        
            <productList></productList>
    </div>
</template>
<script>
import productList from "../components/productList"
export default {
  name:"product",
  data:function(){
      return {

      }
  },
  components:{productList}
}
</script>
<style lang="less" scoped>
    .product{
        background-color: #fff;

        .imgbody{
            width: 100%;
            
            img{
                width: 100%;
            }
        }
    }
</style>

