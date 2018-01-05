<template>
   <div class="foot">
       <div class="aboutfoot">
          <div class="wrapper">
            <div class="hotlinks">
                <h3>相关连接</h3>
                <ul>
                    <li>
                        <router-link to="/news" target="_blank">
                        2012年公司成立庆典</router-link>
                    </li>
                    <li>
                        <router-link to="/news" target="_blank">
                        2013年公司荣获宁夏回族自治区先获宁夏回族获宁夏回族自治区先获宁夏回族自治区先自治区先进集体</router-link>
                    </li>
                    <li>
                        <router-link to="/news" target="_blank">
                        2014年公司产值超过800万</router-link>
                    </li>
                    <li>
                        <router-link to="/news" target="_blank">
                        2012年公司参加xxx设计大赛获奖</router-link>
                    </li>
                    <li>
                        <router-link to="/news" target="_blank">
                        2012年公司参加xxx设计大赛获奖</router-link>
                    </li>
                </ul>
            </div>
            <div class="constus">
                <h3>请联系我们</h3>
                <form action="" method="post">
                    <input type="text" placeholder="姓名或公司名称">
                    <input type="email" name="" id="" placeholder="邮箱地址">
                    <textarea name="" id="" cols="30" rows="4" placeholder="简短的留言"></textarea>
                    <input class="submit" type="submit" value="发送">
                </form>
            </div>
            <div class="imgbody">
                <img src="/static/img/erweima.jpg" width="200" height="200" alt="" srcset="">
                <p>微信公众号</p>
            </div>
          </div>
      </div>
       <div class="wrapper">
           <el-container>
                <el-aside>
                    <img src="static/img/tel.png" alt="">
                    <div>
                       <span>
                            咨询热线 <br>
                            0951-<h2>6996116</h2>
                       </span>  
                    </div>
                </el-aside>
                <el-main>
                    <ul>
                         <li>联系我们</li>
                         <li>合作伙伴</li>
                         <li>友情链接</li>
                         <li>招贤纳士</li>
                         <li>后台登陆</li>
                    </ul>
                    <div class="bt">
                            版权所有：银川华信智信息技术有限公司 宁ICP备14001007号-2 
                    </div>
                      
                </el-main>
               
           </el-container>
        
           
       </div>
   </div>

</template>
<script>
    import panel from "@/components/panel"
    export default {
        name:"foot",
        created:function(){
            // json=$.get("url")
            // this.name=json.name;
        },
        //公用数据
        data:function(){
            return {
                name:"robin",
                age:33
            }
        },
        //共同方法
        methods:{
            getname:function () {
                console.log("hhhh")
            }
        },//
        //依赖组件
        components:{
            panel

        }
    }
</script>

<style lang="less" scoped>
        
        .foot{
            display: flex;
            flex-direction: column;
            color:#a7a7a7;
            font-size: 16px;
            background-color:#1d2c40;
            .el-aside{
                margin-top:20px;
                img{
                   width:26%;
                   opacity: 0.5;
                }
                h2{
                    color:white;
                }
            }
            .wrapper{
                width: 1200px;
            }
            .el-container{
                padding-bottom: 30px;
            }
            .el-main{
                
                ul{
                    display:flex;
                    flex-direction: row;
                    justify-content: space-around;
                    box-sizing: border-box;
                    padding: 0 60px;
                    width: 100%;
                    li{
                       line-height: 100px;
                        box-sizing:border-box;
                        
                    }
                }
            }
            .bt{
                
                text-align: center;
                align-items: center;
                
            }
            .aboutfoot{
            width: 100%;
            background-color: #16233e;
            padding: 30px;
            display: flex;
            align-items: center;
            box-sizing: border-box;

            .imgbody{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                p{
                    font-size: 20px;
                    line-height: 50px;
                }
            }
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
                padding-top: 30px;
                .router-link-active{
                    border: none !important;
                }
                ul{
                    
                    padding: 25px;
                        li{
                            
                            text-align: left;
                            height: 38px;
                    
                        a{
                            color:#ebebeb ;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;  
                            display: block;
                            width: 100%;
                            text-decoration: none;
                            line-height: 38px;
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
                padding: 30px;
               background-color: #121e37;
            }
        }
        }
        
</style>

