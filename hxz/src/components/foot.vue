<template>
   <div class="foot">
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
            height: 200px;
            color:#a7a7a7;
            font-size: 13px;
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
            .el-main{
                line-height: 140px;
                ul{
                    
                    li{
                        float: left;
                        box-sizing:border-box;
                        padding:0px 20px 20px 0;
                    }
                }
            }
            .bt{
                box-sizing:border-box;
                padding:0px 20px 20px 0;
            }
        }
        
</style>

