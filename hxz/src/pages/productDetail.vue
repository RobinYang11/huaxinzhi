<template>
  <div class="productDetail">
      
      <juMu v-bind:pdata="pdata"></juMu>
      <textTmp></textTmp>
      
      
      <!-- <div class="contantbox">
            <div class="giantScreenBox">
                <img src="/static/img/banner1.png" alt="" srcset="">
            </div>
            <div class="titleBox">
                <h2> 
                云照通电子证照共享平台系统
                </h2> 
                <div class="line"></div>  
            </div>
            <div v-for="c in contant" class="chrildren">
                <div class="titleBox">
                    <h5>{{c.title}}</h5>
                    <div class="line"></div>
                </div>
                
                <p class="contant">{{c.contantp}}</p>
            </div>
            <div class="imgBox">
                <div class="title">
                    <h3>服务对象</h3>
                    <div class="line"></div>  
                </div>
                <div class="imgbox" >
                    <img src="/static/img/banner4-1.png" alt="" srcset="">
                </div>
                
            </div>
            <div class="imgBox" >
                <div class="title">
                    <h3>总体框架图</h3>
                    <div class="line"></div>  
                </div>
                <div class="imgbox">
                    <img src="/static/img/banner4-1.png" alt="" srcset="">
                </div>
            </div>
            <div v-for="c in contant" class="chrildren">
                <div class="titleBox">
                    <h5>{{c.title}}</h5>
                    <div class="line"></div>
                </div>
                
                <p class="contant">{{c.contantp}}</p>
            </div>
      </div>
       -->
  </div>

</template>
<script>
import juMu from "../components/detailComponents/juMu"
 import textTmp from "../components/detailComponents/textTmp"

export default {
  name:"productDetail",
  data:function () {
      return{
        contant:[
            {title:"证照",contantp:"政府部门和取得法定资质的第三方服务机构依法形成出具的具有法律效力的各类批文、证件、执（牌）照、鉴定报告、出证明材料等文件。"},
            {title:"电子证照",contantp:"遵循相关安全和技术规范的可信任的、数字形态的证照，由计算机等电子设备形成、办理、传输和储存的证照信息记录。"},
            {title:"电子证照系统",contantp:"依托地方电子证照规范开发的提供电子证照的制作，存储，信息查询，交换共享的信息系统，为地方电子政务提供服务。"}
        ],
        datalist:[
            {
                titleBox:"",
                imgshow:"",
                contantshow:"",
                imglist:[{src:"",contantp:""},{src:"",contantp:""}],
                contantlist:[{h5:"",contantp:""},{h5:"",contantp:""}]
                },
            {
                titleBox:"",
                imgshow:"",
                contantshow:"",
                imglist:[{src:"",contantp:""},{src:"",contantp:""}],
                contantlist:[{h5:"",contantp:""},{h5:"",contantp:""}]
                }
        ],
        pdata:{
              h1:"关于华信智",
              p1:"我们秉承认真做事认真做人全心全意为顾客服务的理念",
              p2:"专注　专业　至臻　至善"
          }
      }
 
 },
    components:{juMu,textTmp}
}
</script>
<style lang="less" scoped>
    .productDetail{
        
        margin: 10 auto;

        .contantbox{
            width: 1200px;
            .chrildren{
            width: 100%;
            margin-top: 45px;
            
            }
            .titleBox{
                display: flex;
                display: -webkit-flex;
                align-items: center;
                flex-direction: row;
                justify-content: space-between;
                margin: 20px auto;
                .title{
                    color: #000;
                    font-size: 22px;
                    font-weight: 500;
                    width: 100%;
                }
                .line{
                    flex-grow: 1;
                    height: 1px;
                    box-sizing: border-box;
                    border-top: 1px solid #dddddd;
                }
            }
            
            .imgBox{
                margin-top: 45px;
                width: 100%;
                h3{
                    margin-bottom: 20px;
                }
                .title{
                    color: #000;
                    font-size: 22px;
                    font-weight: 500;
                    width: 100%;
                }
                img{
                    width: 100%;
                    border: 1px solid #999;
                }
            }

            .giantScreenBox{
                img{
                    width: 100%;
                    height: auto;
                }
            }
            .contant{//正文样式
                    font-size: 16px;
                    letter-spacing: 1.1PX;
                    line-height: 26px;
                    text-align: left;
                    text-indent: 2em;
            }
        }
        
    }
</style>
