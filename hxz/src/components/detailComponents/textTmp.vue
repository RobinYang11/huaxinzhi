<template>
  <div class="textTmp">
      <div class=" maintop cont">
          <div class="wrapper">
              <div class="topbox">
                    <div class="dsc">
                        <h2>{{topdes.des}}</h2>
                        <ul >
                            <li v-for="n in topdes.ulist">{{n.li}}</li>
                            
                        </ul>
                    </div>
                    <div class="picbox">
                        <img :src="topdes.imgSrc" alt="" srcset="">
                    </div>
              </div>
          </div>
      </div>
      <timg v-bind:tdata="tdata"></timg>
      <div class=" main">
          <div class="wrapper cont">
            <div class="tbox" v-for="n in maintext">
                <h1>{{n.h1}}</h1>
                <p>{{n.pcnt}}</p>
            </div>
           
          </div>
      </div>
      <div class=" mainbom cont">
          <div class="wrapper">
              <div class="topbox">
                    <div class="dsc">
                        <h2>{{bomdes.des}}</h2>
                        <ul >
                            <li v-for="n in bomdes.ulist">{{n.li}}</li>
                        </ul>
                    </div>
                    <div class="picbox">
                        <img :src="bomdes.imgSrc" alt="" srcset="">
                    </div>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
import timg from "./timg";
export default {
  name: "textTmp",
  data: function() {
    return {
      topdes: {
        des: "我们的产品至臻致美",
        ulist: [
          { li: "为用户量身打造" },
          { li: "以用户的利益为基准" },
          { li: "用心为您服务" },
          { li: "您的需求就是我们的目标" }
        ],
        imgSrc: "/static/img/product1.png"
      },
      maintext: [
        {
          h1: "证照",
          pcnt: `政府部门和取得法定资质的第三方服务
                        机构依法形成出具的具有法律效力的各类批文、
                        证件、执（牌）照、鉴定报告、出证明材料等文件`
        },
        {
          h1: "证照",
          pcnt: `政府部门和取得法定资质的第三方服务
                        机构依法形成出具的具有法律效力的各类批文、
                        证件、执（牌）照、鉴定报告、出证明材料等文件`
        },
        {
          h1: "证照",
          pcnt: `政府部门和取得法定资质的第三方服务
                        机构依法形成出具的具有法律效力的各类批文、
                        证件、执（牌）照、鉴定报告、出证明材料等文件`
        }
      ],
      bomdes: {
        des: "我们的产品至臻致美",
        ulist: [
          { li: "为用户量身打造" },
          { li: "以用户的利益为基准" },
          { li: "用心为您服务" },
          { li: "您的需求就是我们的目标" }
        ],
        imgSrc: "/static/img/product1.png"
      },
      tdata: {
        h3: "鲜致网上农贸市场",
        pcontant: `鲜致，生鲜食材类一站式公共服务平台，由宁夏银川华信智信息技术有限公司开
            发创建，以六年多时间对生鲜食材行业的关注，以平价、优质、高效为遵旨，全力打
            造以销售绿色生态、安全优质、营养健康的农产品，通过整合农副产品企业与品牌经销商，
            为商家和消费者之间架设网络购物的桥梁。鲜致电子商务平台吸收全国优质农产品商家加入，
            面向全国的消费者，产品类目包括：绿色有机、休闲食品、粮油干货、生鲜食品、营养保健等。<a></a>
            　　旨在为广大消费者提供丰富的优质农产品。鲜致电子商务平台重点开拓移动端市场，简化购物
            流程，与微信深度合作，结合微信登录、微信下单支付、商家入驻、供应商管理、物流配送等
            功能，方便用户以快捷的方式在鲜致商城快速入驻、让顾客快速下单，努力做到让每一个
            客户买的放心，吃的放心。`
      }
    };
  },
  components: { timg }
};
</script>
<style lang="less" scoped>
.textTmp {
  width: 100%;
  margin: 0px 0;

  .cont {
    display: flex;
    flex-direction: row;
    width: 1200px;
    justify-content: space-between;
  }
  .maintop {
    display: flex;
    display: -webkit-flex;
    background-image: url("/static/img/tbg.png");
    background-repeat: no-repeat;
    background-position: center;
    min-height: 580px;
    // margin-bottom: 55px;
    width: 100%;

    .topbox {
      display: flex;
      display: -webkit-flex;
      flex-direction: row;
      position: relative;
      margin: 0 auto;
      width: 1057px;
      height: 402px;
      top: 165px;
      text-align: center;
      background: #ffffff;
      border-radius: 7px;
      box-shadow: 0px 26px 49px 0px rgba(229, 79, 86, 0.23);

      .dsc {
        width: 60%;
        padding: 25px 55px 0px 45px;

        h2 {
          padding: 15px;
          width: 100%;
        }
        ul {
          margin-top: 15px;
          display: inline-block;

          li {
            text-align: left;
            list-style: inside;
          }
          li:hover {
            text-shadow: 0px 2px 9px rgba(229, 79, 86, 0.23);
          }
        }
      }
      .picbox {
        width: 40%;
      }
    }
  }
  .main {
    display: flex;
    display: -webkit-flex;
    background-image: url("/static/img/textbg.jpg");
    margin-top: 65px;
    .tbox {
      padding: 45px 0;
      letter-spacing: 1.2px;

      width: 300px;
      color: aliceblue;

      h1 {
        margin-bottom: 25px;
        text-shadow: 2px 2px 5px #243a58;
        border-bottom: 1.5px solid #a48e8e;
        padding-bottom: 10px;
      }
      p {
        color: #bfb7b7;
        text-align: left;
        text-indent: 2em;
      }
    }
  }
  .mainbom {
    display: flex;
    display: -webkit-flex;
    background-image: url("/static/img/bombg.png");
    background-repeat: no-repeat;
    background-position: 100% 100%;
    min-height: 600px;
    margin-top: 55px;
    width: 100%;
    ul {
      li {
        margin-top: 10px;
      }
    }
  }
}
</style>