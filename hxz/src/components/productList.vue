<template>
  <div class="priductList">
    
    <div class="list"v-for="n in lists">
        <div class="listbox"  >
           <div class="borders" >
            <div class="head">{{n.head}}</div>
            
            <p class="contant">{{n.contant}}</p>
            <el-button class="elbutton" type="primary" >
                <router-link to="/productDetail">查看更多</router-link>
                <!-- <a href="product/productDetail">dddddddddddd</a> -->
            </el-button>
          </div> 
          <img :src="n.src" alt="" >  
        </div>
    </div>
    
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
                src:"/static/img/chanPin-camoro.jpg ",
                links:"/productDetail"
            }, {
                head:"鲜致网上农贸市场",
                contant:"提供网上订菜、当天配送、新鲜到家、货到付款的电子商务平台。主要以生鲜蔬菜、水果、家禽肉类、水产、粮油米面等为主流产品，辅以家庭日用品、饮料等向上向下垂直发展。通过将现代电子商务模式与传统线下零售业进行创新性融合，以现代化网络平台和呼叫中心为服务核心，配合卓越的供应链管理的方式及高效完善的配送，为消费者提供高品质的新鲜产品与服务保障。",
                src:"/static/img/chanPin-xianzhi.jpg",
                links:""
            },{
                head:"学校收费管理系统",
                contant:"“学校收费管理系统”是遵循教育部《教育管理信息化标准规范》、《基础教育教学资源元数据规范》的要求，结合众多中小学在教育管理过程中的实际需求设计开发的教育管理系列软件系统",
                src:"/static/img/chanPin-schools.jpg",
                links:""
             },{
                head:"腾讯企业邮箱",
                contant:"腾讯企业邮箱是腾讯针对企业用户提供的企业邮局服务，用户可搭建属于企业自己的邮局，实现邮件收发等功能。企业将自己的域名按要求进行配置后，即可拥有一批以企业域名为后缀的邮箱帐号。并可根据需要对这些帐号进行自主的组织、管理和分配。",
                src:"/static/img/chanPin-email.jpg",
                links:""
            },
        ]
      }
        

        
      
        
  },
  beforeCreate: function() { 
         
console.log("创建前")            
console.log(this.a)            
console.log(this.$el)          
},         
 created: function() {
                console.log("创建之后");            
console.log(this.a)            
console.log(this.$el)          
},         
 beforeMount: function() {            
console.log("mount之前")            
console.log(this.a)            
console.log(this.$el)          
},          
mounted: function() {            
console.log("mount之后")            
console.log(this.a)            
console.log(this.$el)          
},          
beforeUpdate: function() {            
console.log("更新前");            
console.log(this.a)            
console.log(this.$el)          
},          
updated: function() {            
console.log("更新完成");            
console.log(this.a);            
console.log(this.$el)          
},          
beforeDestroy: function() {            
console.log("销毁前");            
console.log(this.a)            
console.log(this.$el)            
console.log(this.$el)          
},          
destroyed: function() {           
console.log("已销毁");          
console.log(this.a)          
console.log(this.$el)          
}   

}
</script>
<style lang="less" scoped>

    .priductList{
        width: 100%;
        margin:  auto;
        padding: 45px;
        box-sizing: border-box;
        
        .list{
           margin-top: 35px;

                 .listbox{
                    box-sizing: border-box;
                    padding: 0 ;
                    display: flex;
                     max-width: 1200px;
                     background-color: #fff;
                     background-color: #ffffff;

                   .borders{
                        display: flex;
                        flex-direction: column;
                        text-align: left;
                        padding:  5%;
                        box-sizing: border-box;
                        position: relative;

                        .head{
                            font-size: 20px;
                            color:#26323e;
                            text-align: center;
                            overflow: hidden;
                            line-height: 36px;
                            height: 36px;
                            font-weight: 600;
                        }
                        p{
                            text-indent: 2em;
                            font-size: 16px;
                            line-height: 22px;
                            height: 66px;
                            overflow: hidden;
                           margin-top: 10px;
                           padding: 0 10px;
                        }
                         a{
                                display: inline-block;
                                text-decoration: none;
                                color: #ffffff;
                            }
                        button{
                            margin: 12px auto;
                            background-color: #4ea3f3;
                            max-width: 120px;
                            position: absolute;
                            bottom: 30px;
                            right: 40px;

                        }    
                        img{
                            width: 100%;
                            min-height: 120px;
                        }
                        
                    }
                }
                
        }
        
    }
</style>
