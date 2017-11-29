<template>
  <div class="priductList">
    <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>产品服务</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="list">
        <div class="listbox" v-for = "list in lists" >
           <div class="borders">
            <div class="head">{{list.head}}</div>
            <img :src="list" alt="" >
            <p class="contant">{{list.contant}}</p>
            <el-button type="primary" >
                <router-link :to="list.links">查看更多</router-link>
            </el-button>
            
                 
           
          </div>   
        </div>
    </div>
    <!-- <relatedLinks></relatedLinks> -->
  </div>
</template>
<script>
import relatedLinks from "./relatedLinks"
import listPanel from "./listPanel"
export default {
  name:"priductList",
  data:function(){
      return{
        lists:[
            {
                head:"云照通电子证照共享平台系统",
                contant:"电子证照系统 依托地方电子证照规范开发的提供电子证照的制作，存储，信息查询，交换共享的信息系统，为地方电子政务提供服务。",
                src:"../assets/img/cpfw.jpg ",
                links:""
            }, {
                head:"鲜致网上农贸市场",
                contant:"提供网上订菜、当天配送、新鲜到家、货到付款的电子商务平台。主要以生鲜蔬菜、水果、家禽肉类、水产、粮油米面等为主流产品，辅以家庭日用品、饮料等向上向下垂直发展。通过将现代电子商务模式与传统线下零售业进行创新性融合，以现代化网络平台和呼叫中心为服务核心，配合卓越的供应链管理的方式及高效完善的配送，为消费者提供高品质的新鲜产品与服务保障。",
                src:"/123",
                links:""
            },{
                head:"学校收费管理系统",
                contant:"“学校收费管理系统”是遵循教育部《教育管理信息化标准规范》、《基础教育教学资源元数据规范》的要求，结合众多中小学在教育管理过程中的实际需求设计开发的教育管理系列软件系统",
                src:"/123",
                links:""
             },{
                head:"腾讯企业邮箱",
                contant:"腾讯企业邮箱是腾讯针对企业用户提供的企业邮局服务，用户可搭建属于企业自己的邮局，实现邮件收发等功能。企业将自己的域名按要求进行配置后，即可拥有一批以企业域名为后缀的邮箱帐号。并可根据需要对这些帐号进行自主的组织、管理和分配。",
                src:"/123",
                links:""
            },
        ]
      }
        

        
      
        
  },
  components:{relatedLinks,listPanel}

}
</script>
<style lang="less" scoped>
    .priductList{
        width: 1200px;
        margin: auto;
        .list{
            width: 100%;
            float: left;
                 .listbox{
                    width: 25%;
                    box-sizing: border-box;
                    padding: 0 10px;
                    display: flex;
                    float: left;
                   .borders{
                        width: 100%;
                        border: 1px solid #ccc;
                        display: flex;
                        flex-direction: column;
                        text-align: left;
                        margin: 12px auto;
                        padding:  10px;
                        float: left;
                        box-sizing: border-box;
                        .head{
                            font-size: 20px;
                            
                            color:#2783a7;
                            margin-bottom:10px; 
                            overflow: hidden;
                            line-height: 28px;
                            height: 28px;
                            font-weight: 600;
                        }
                        p{
                            text-indent: 2em;
                            font-size: 16px;
                            line-height: 22px;
                            height: 66px;
                            overflow: hidden;
                           margin-top: 10px;
                        }
                         a{
                                display: inline-block;
                                text-decoration: none;
                                color: #ffffff;
                            }
                        button{
                            margin: 12px 15px;
                        }    
                        img{
                            width: 260px;
                            height: 200px;
                        }
                        
                    }
                }
                   .borders:hover{
                       box-shadow: 0 0 8px #549fff;
                       border: 1px solid #549fff;
                   }
        }
    }
</style>
