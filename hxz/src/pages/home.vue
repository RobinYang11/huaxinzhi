<template>
    <div>
        <div class="home bc">
            <div class="wrapper">
                <div class="slide-banner">
                    <el-carousel indicator-position="outside">
                        <el-carousel-item v-for="(item,index) in banner" :key="index">
                            
                            <div class="img-item animated zoomIn">
                                <img :src="item.img[0]" alt="">
                            </div>
                            <div class="img-item animated fadeIn ">
                                <img :src="item.img[1]" alt="">
                            </div>
                            <div class="img-item animated zoomIn" >
                                <img :src="item.img[2]" alt="">
                            </div>
                            <h3 class="animated rotateIn">{{item.title}}</h3>
                        </el-carousel-item>
                    </el-carousel>
                </div>
            </div>
        </div>
        <div class="item-title">
            <div>
                <!-- <img src="static/img/ddd.png" alt=""> -->
                <h3>海纳百川，精选打造高品质软件与服务</h3>
                <p>智能制造 互联网电商 互联网党建 政企事业</p>
            </div>
        </div>
        <div class="main">
           <div class="panel-container" >
                <div v-for=" key in datas " >
                     <panel v-bind:msg="key"></panel>
                </div>
           </div>
        </div>
        <div class="item-title">
            <div >
                <!-- <img src="static/img/ddd.png" alt=""> -->
                <h3>海纳百川，精选全球的高品质软件与服务</h3>
                <p>智能制造 互联网电商 互联网党建 政企事业</p>
            </div>
        </div>
        <div class="cases">
            <div class="wrapper">
                <leftRightPanel></leftRightPanel>
            </div>
        </div>
    </div>
    
</template>
<script>
    import panel from '../components/panel';
    import leftRightPanel  from "../components/leftRightPanel"
    export default {
        name:'home',
        data:function(){
            return {
                datas:[
                    {
                    "t1":"华信智教育",
                    "t2":"Huaxinzhi Education",
                    "des":`华信智教育注重教育的过程，数量不等于质量
                    ，我们只做精品教育，所有课程全部为20人以
                    内的精品班，保证每个学员都是就业精英。`,
                    "imgSrc":"static/img/hxz-edu-bg.png"
                    },
                    {
                    "t1":"华信智教育",
                    "t2":"Huaxinzhi Education",
                    "des":`华信智教育注重教育的过程，数量不等于质量
                    ，我们只做精品教育，所有课程全部为20人以
                    内的精品班，保证每个学员都是就业精英。`,
                    "imgSrc":"static/img/hxz-xz-bg.png"
                    },
                    {
                    "t1":"华信智教育",
                    "t2":"Huaxinzhi Education",
                    "des":`华信智教育注重教育的过程，数量不等于质量
                    ，我们只做精品教育，所有课程全部为20人以
                    内的精品班，保证每个学员都是就业精英。`,
                    "imgSrc":"static/img/hxz-bz-bg.png"
                    },
                    {
                    "t1":"华信智教育",
                    "t2":"Huaxinzhi Education",
                    "des":`华信智教育注重教育的过程，数量不等于质量
                    ，我们只做精品教育，所有课程全部为20人以
                    内的精品班，保证每个学员都是就业精英。`,
                    "imgSrc":"static/img/hxz-zz-bg.png"
                    }
                    ]
                ,
                banner:[
                    {
                        title:"华信智 胜在用心 所有的灵感源自对企业的理解 所有的成就来自企业的认同",
                        img:[
                            "/static/img/banner1-1.png",
                            "/static/img/banner1-2.png",
                            "/static/img/banner1-3.png",  
                        ]
                    }, {
                        title:"",
                        img:[
                            "/static/img/banner2-1.png",
                            "/static/img/banner2-2.png",
                            "/static/img/banner2-3.png",  
                        ]
                    },
                     {
                        title:"",
                        img:[
                            "/static/img/banner3-1.png",
                            "/static/img/banner3-2.png",
                            "/static/img/banner3-3.png",  
                        ]
                    },
                     {
                        title:"",
                        img:[
                            "/static/img/banner4-1.png",
                            "/static/img/banner4-2.png",
                            "/static/img/banner4-3.png",  
                        ]
                    }
                ]
            }
        },
        components:{
            panel,
            leftRightPanel
        }
    }
</script>
<style lang="less" scoped>

    .bc{
        background-color:#041b3b;
    }
     .cases{
         background: #f7f7f7;
        padding: 50px;
     }
     .item-title{
        
         div{
             padding:30px;
         }
        //  display: flex;
        //  justify-content: center;
        //  align-items: center;
        //  background: #e0e0e0;
         h3{
             color:#565656;
         }
         p{
             color:#565656;
         }
            
    }

    .main{
         padding: 50px;
        background: #f7f7f7;
         .panel-container{
             margin-top:20px;
             display: flex;
             justify-content: center;
             align-self: center;
         }
    }
    .home{
         background-color:#041b3b;
        .slide-banner{
           .el-carousel{
                background-color:none !important;
                .el-carousel__item h3 {
                    position: relative;
                    font-family: Arial, Helvetica, sans-serif;
                    font-weight: 100;
                    color: white;
                    font-size: 15px;
                    opacity: 0.75;
                    line-height: 300px;
                    margin: 0;
                }
                .el-carousel__item .img-item{
                    position: absolute;
                    top: 0px;
                    img {
                        width:50%;
                    } 
                }
                .img-item:hover{
                    top:10px;
                }

                 .el-carousel__item{
                     background-color: transparent !important;
                 }
                .el-carousel__item:nth-child(2n) {
                    background-color: #99a9bf;
                }

                .el-carousel__item:nth-child(2n+1) {
                    background-color: #d3dce6;
                }
           }
        }   
    }
</style>


