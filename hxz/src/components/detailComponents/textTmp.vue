<template>
  <div class="textTmp">
      <div class=" maintop cont">
          <div class="wrapper">
              <div class="topbox">
                    <div class="dsc">
                        <h2>我们的产品至臻致美</h2>
                        <ul>
                            <li>为用户量身打造</li>
                            <li>以用户的利益为基准</li>
                            <li>用心为您服务</li>
                            <li>您的需求就是我们的目标</li>
                        </ul>
                    </div>
                    <div class="picbox">
                        <img src="/static/img/product1.png" alt="" srcset="">
                    </div>
              </div>
          </div>
      </div>
      <timg></timg>
      <div class=" main">
          <div class="wrapper cont">
            <div class="tbox">
                <h1>证照</h1>
                <p>政府部门和取得法定资质的第三方服务机构依法形成出具的具有法律效力的各类批文、证件、执（牌）照、鉴定报告、出证明材料等文件</p>
            </div>
            <div class="tbox">
                <h1>证照</h1>
                <p>政府部门和取得法定资质的第三方服务机构依法形成出具的具有法律效力的各类批文、证件、执（牌）照、鉴定报告、出证明材料等文件</p>
            </div>
            <div class="tbox">
                <h1>证照</h1>
                <p>政府部门和取得法定资质的第三方服务机构依法形成出具的具有法律效力的各类批文、证件、执（牌）照、鉴定报告、出证明材料等文件</p>
            </div>
          </div>
      </div>
      <div class=" mainbom cont">
          <div class="wrapper">
              <div class="topbox">
                    <div class="dsc">
                        <h2>我们的产品至臻致美</h2>
                        <ul>
                            <li>为用户量身打造</li>
                            <li>以用户的利益为基准</li>
                            <li>用心为您服务</li>
                            <li>您的需求就是我们的目标</li>
                        </ul>
                    </div>
                    <div class="picbox">
                        <img src="/static/img/product1.png" alt="" srcset="">
                    </div>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
import timg from "./timg"
export default {
  name:"textTmp",
  data:function(){
      return{

      }
  },
  components:{timg}
}
</script>
<style lang="less" scoped>
.textTmp{
    width: 100%;
    margin: 0px 0;
    

    .cont{
        display: flex;
        flex-direction: row;
        width: 1200px;
        justify-content: space-between;
    }
    .maintop{
        display: flex;
        display:-webkit-flex;
        background-image: url("/static/img/tbg.png");
        background-repeat: no-repeat;
        background-position: center;
        min-height: 580px;
        // margin-bottom: 55px;
        width: 100%;
        
        .topbox{
            display: flex;
            display:-webkit-flex;
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

            .dsc{
                width: 60%;
                padding:25px 55px 0px 45px;

                h2{
                    padding: 15px;
                    width: 100%;
                }
                ul{
                    margin-top: 15px;
                    display: inline-block;
                   
                    li{
                        text-align: left;
                        list-style: inside;
                    }
                    li:hover{
                        text-shadow: 0px 2px 9px  rgba(229, 79, 86, 0.23);
                    }
                }
            }
            .picbox{
                width: 40%;
            }
        }
    }
    .main{
        display: flex;
        display:-webkit-flex;
        background-image: url("/static/img/textbg.jpg");
        margin-top: 65px;
        .tbox{
            padding: 45px 0;
            letter-spacing: 1.2px;
            
            width:300px;
            color: aliceblue;

        h1{
              margin-bottom: 25px;
             text-shadow: 2px 2px 5px #243a58;
             border-bottom: 1.5px solid #a48e8e;
             padding-bottom:10px; 
        }
        p{
            color: #bfb7b7;
            text-align: left;
            text-indent: 2em;
        }
      
        }
    }
    .mainbom{
         display: flex;
        display:-webkit-flex;
        background-image: url("/static/img/bombg.png");
        background-repeat: no-repeat;
        background-position: center;
        min-height: 640px;
         margin-top: 55px;
        width: 100%;
        ul{

            li{
                margin-top: 10px;
            }
        }
    }
}
</style>