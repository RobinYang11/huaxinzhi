<template>
  <div class="timg">
      <h3>鲜致网上农贸市场</h3>
      <div class="cbox">
        
        <p>鲜致，生鲜食材类一站式公共服务平台，由宁夏银川华信智信息技术有限公司开
            发创建，以六年多时间对生鲜食材行业的关注，以平价、优质、高效为遵旨，全力打
            造以销售绿色生态、安全优质、营养健康的农产品，通过整合农副产品企业与品牌经销商，
            为商家和消费者之间架设网络购物的桥梁。鲜致电子商务平台吸收全国优质农产品商家加入，
            面向全国的消费者，产品类目包括：绿色有机、休闲食品、粮油干货、生鲜食品、营养保健等。<br>
            　　旨在为广大消费者提供丰富的优质农产品。鲜致电子商务平台重点开拓移动端市场，简化购物
            流程，与微信深度合作，结合微信登录、微信下单支付、商家入驻、供应商管理、物流配送等
            功能，方便用户以快捷的方式在鲜致商城快速入驻、让顾客快速下单，努力做到让每一个
            客户买的放心，吃的放心。</p>
      </div>
  </div>
</template>
<script>
export default {
  name:"timg"
}
</script>
<style lang="less" scoped>
    .timg{
        background-image: url("/static/img/tdsbg.jpg");
        background-repeat: no-repeat;
        background-position:100% 100%; 
        
        max-width: 1200px;
        h3{
            margin: 35px 0 20px;
        }
        .cbox{
            width: 50%;
            margin: 0;
            padding: 25px;
            p{
                text-align: justify;
                text-indent: 2em;
            }
        }
    }
</style>
