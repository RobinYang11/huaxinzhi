<template>
  <div class="about">
      <juMu v-bind:pdata="pdata"></juMu>
      <div class="concstus">
          <div class="linebox">
               <p>关于华信智</p>
               <div class="line"></div>
          </div>
          <p>银川华信智信息技术有限公司自成立以来始终致力于企业信息化事业的发展
              ，以提高企业信息化运营效能为己任。主要业务涵盖，IT服务外包、软件开发、
              电子商务及系统集成，是专业企业信息管理系统一体化方案提供商、
              软件开发商及软件服务提供商，以专业的信息系统集成、专家级管理咨询、
              专业的顾问团队为企业的信息化建设、提高企业核心竞争力及发展保驾护航。
               公司长期关注信息化管理在制造业和农业的发展趋势，在和宁夏多家品牌制
               造企业合作的基础之上，成功打造了一套先进的涵盖外资企业经营管理同时
               又适合中国国情的制造业信息管控系统平台---云智造信息化管控平台软件。我们始
               终坚信“客户的成功，才是我们的成功！”，为制造-创造-智造的快速转变提供智力支持，将
               华信智信息打造成区内乃至中国制造业信息化知名品牌！ 华信智信息以智能化、人性化
               和软件即服务为首要目标，充分考虑柔性化和扩展性，为装备制造行业企业打造成了一个成
               熟的、全新的、符合行业发展需要的、全面无缝集成的管理平台，并结合企业实际情况，
               通过平台化的柔性扩展，做到真正符合企业实际的智能信息管理系统平台。</p>
      </div>
      <div class="workers">
         <h3>公司各类产品图示</h3>
         <el-carousel :interval="3000" type="card" height="400px">
            <el-carousel-item >
                <img src="/static/img/persons.jpg" alt="" srcset="">
            </el-carousel-item>
            <el-carousel-item >
                <img src="/static/img/chanPin-email.jpg" alt="" srcset="">
            </el-carousel-item>
            <el-carousel-item >
                <img src="/static/img/chanPin-schools.jpg" alt="" srcset="">
            </el-carousel-item>
            <el-carousel-item >
                <img src="/static/img/persons.jpg" alt="" srcset="">
            </el-carousel-item>
            <el-carousel-item >
                <img src="/static/img/persons.jpg" alt="" srcset="">
            </el-carousel-item>
        </el-carousel>
        
     </div>
      <div class="aboutfoot">
          <div class="wrapper">
            
            <div class="hotlinks">
                <h3>相关连接</h3>
                <ul>
                    <li><a >2012年公司成立庆典</a></li>
                    <li><a >2013年公司荣获宁夏回族自治区先进集体</a></li>
                    <li><a >2014年公司产值超过800万</a></li>
                    <li><a >2012年公司参加xxx设计大赛获奖</a></li>
                    <li><a >2012年公司参加xxx设计大赛获奖</a></li>

                </ul>
            </div>
            <div class="constus">
                <h3>请联系我们</h3>
                <form action="" method="post">
                    <input type="text" placeholder="姓名或公司名称">
                    <input type="email" name="" id=""placeholder="邮箱地址">
                    <textarea name="" id="" cols="30" rows="4"placeholder="简短的留言"></textarea>
                    <input class="submit" type="submit" value="发送">
                </form>
            </div>

          </div>
         
      </div>
  </div>
</template>
<script>
import juMu from "../components/detailComponents/juMu"
export default {
  name:"about",
  data:function(){
      return{
          pdata:{
              h1:"关于华信智",
              p1:"我们秉承认真做事认真做人全心全意为顾客服务的理念",
              p2:"专注　专业　至臻　至善"
          }
      }
  },
  components:{
      juMu
  }
}
</script>
<style lang="less" scoped>
    .about{
        .workers{
            margin: 50px auto;
            max-width: 1200px;
                h3{
                    margin: 45px auto 25px;
                }
                img{
                    
                }
            }
        .aboutfoot{
            width: 100%;
            background-color: #16233e;
            padding: 30px;
            

            .wrapper{
                display: flex;
                display: -webkit-flex;
                flex-direction: row;
                color: #ebebeb;
                font-size: 16px;
                form{
                    display: flex;
                    display: -webkit-flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    input{
                        width: 200px;
                        margin-top: 15px;
                        padding: 10px;
                        box-sizing: border-box;
                    }
                    textarea{
                        width: 200px;
                        margin-top: 15px;
                        box-sizing: border-box;
                        padding: 5px;
                    }
                    
                    .submit{
                        background-color: #ffd105;
                        border: 1px solid #16233e;
                    }
                    .submit:hover{
                        border: 1px solid #ffd105;
                        background-color: #16233e;
                        color: #ffd105;
                        cursor: pointer;
                    }

                }
            }
            
            .hotlinks{
                width: 33%;
                color:#ebebeb;
                ul{
                    list-style: inside;
                    padding: 25px;
                        li{
                    list-style: inside;
                    text-align: left;
                    margin-top: 15px;
                        a{
                        color:#ebebeb ;  
                        }
                        a:active{
                            color: #ebebeb;
                        }
                        a:hover{
                            color: #ffd105;
                            cursor: pointer;
                            text-decoration: underline;
                        }
                    }
                }
                
            }
            .constus{
                padding: 50px;
               background-color: #121e37;
            }
        }
        .concstus{
            width: 1200px;
            padding: 20px 0;
            .linebox{
                display: flex;
                display: -webkit-flex;
                flex-direction: row;
                margin-top: 30px;
                align-items: center;
                margin-bottom: 20px;
                p{
                    font-size: 32px;
                    font-weight: 700;
                    text-indent: 0;
                }
                .line{
                    border: 1px solid #999;
                    box-sizing: border-box;
                    height: 1px;
                    flex-grow: 1;
                }
            }
            p{
                text-align: justify;
                text-indent: 2em;
                letter-spacing: 1.14px;
                line-height: 28px;
                font-size: 16px;
            }
        }
    }
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
