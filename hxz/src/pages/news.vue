<template>
  <div class="news">
      <juMu v-bind:pdata="pdata"></juMu>
      <div class="newsbody">
          <h1 >{{title}}</h1>
          <ul>
              <li>发布日期：{{date}}</li>
              <li>作者：{{author}}</li>
          </ul>
          <div class="newstext">
              <p>{{contantHead}}</p>
              <img :src="imgSrc" alt="" srcset="">
              <p>{{contantBody}}</p>
          </div>
      </div>
  </div>
</template>
<script>
import juMu from "../components/detailComponents/juMu"
export default {
  name:"news",
  data:function(){
      return{
          pdata:{
              h1:"华信智的产品",
              p1:"我们秉承认真做事认真做人全心全意为顾客服务的理念",
              p2:"专注　专业　至臻　至善"
          },
          title:"苗圩出席中国发展高层论坛2017年会并发表主题演讲",
          date:"2017-03-29 00:00:00",
          author:"新华社报道",
          imgSrc:"/static/img/chanPin-camoro.jpg",
          contantHead:"2017年3月18－20日，由国务院发展研究中心主办的“中国发展高层论坛2017年会”在京举行。中共中央政治局常委、国务院副总理张高丽出席开幕式并发表主旨演讲。3月19日，工业和信息化部党组书记、部长苗圩出席高层论坛，并以“创新驱动制造业转型升级”为题发表主题演讲。",
          contantBody:`苗圩在演讲中指出，国际金融危机后，全球经济持续深度调整，中国经济发展进入新常态，
                        制造业发展进入转型升级的关键时期，创新成为制造业转型升级的主引擎。近年来，以企业为主体、产学研
                        用相结合的创新体系正在形成，重大创新成果不断涌现。但是中国制造业创新的体制机制还不完善，在扶持
                        政策、激励机制、服务体系、社会环境等方面仍存在一些制约创新的弊端，需要通过制度和政策改进逐步解决。
                        苗圩强调，工业和信息化部将深入落实党中央、国务院的战略部署，以新发展理念为指引
                        ，以深化供给侧结构性改革为主线，以创新驱动发展为主题，全面实施“中国制造2025”战略，
                        加快制造业提质增效升级，重点做好以下六方面工作：一是完善国家制造业创新体系，突出体
                        制机制创新，加快推进新材料、机器人等创新中心建设，开展共性关键技术研究和产业化应用
                        示范。二是加强关键核心技术攻关，继续实施国家科技重大专项，启动实施重点新材料研发及应
                        用重大工程，在战略必争领域抢占未来发展制高点。三是夯实工业基础能力，突破重点领域发展
                        的基础性瓶颈，完善首台（套）、首批次政策，布局和组建一批“四基”研究中心。四是实施军民深
                        度融合发展战略，建立健全小核心、大协作、专业化、开放型武器装备科研生产体系，促进军民两
                        用技术双向转化。五是加强创新人才队伍建设，培养一大批具有创新精神和国际视野的企业家人才、
                        技术创新专家型人才和高级经营管理人才。六是深化体制机制改革，推进“放管服”改革，加快政府职
                        能转变，打破行政性垄断和行业壁垒，完善激励机制，提高科技成果转化效率。
                        演讲结束后，苗圩还就“外国企业参与‘中国制造2025’”、“促进制造业投资”及“制造业人才
                        发展”等问题回答了现场提问。`
      }
  },
  components:{
      juMu
  }
}
</script>

<style lang="less" scoped>
.router-link-active{
    border: none;
}
.news{
    background-color: #efefef;
    padding: 0 0 55px 0;

    .newsbody{
        max-width: 1200px;

        h1{
            margin-top: 65px;
        }
        ul{
            display: flex;
            flex-direction: row;
            margin: 25px 0 10px;
            padding: 20px 0;
            border-top: 2px solid #777;
            border-bottom: 0.5px solid #aaa;
            justify-content: space-around;
            li{
                color: #888;
                font-size: 14px;
            }
        }
        .newstext{
            line-height: 32px;
            letter-spacing: 1px;
            text-align: justify;
            padding-bottom: 35px;
            border-bottom:  2px solid #777;
            img{
                display: block;
                min-width: 800px;
                max-width: 1150px;
                height: 450px;
                margin: 20px auto;
            }
            p{
                text-indent: 2em;
                color: #565656;
                font-size: 18px;
                padding: 0 10px;
            }
        }

    }
}
</style>
