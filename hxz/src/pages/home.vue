<template>
     <div class="bc">
         <div class="wrapper">
              <div class="home">
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
                    <div class="animated zoomIn">
                       
                    </div>
            </div>
         </div>
     </div>
</template>
<script>
    import panel from '../components/panel';
    export default {
        name:'home',
        data:function(){
            return {
                banner:[
                    {
                        title:"如果暴力不是为了杀戮，那将毫无意义!",
                        img:[
                            "/static/img/banner1-1.png",
                            "/static/img/banner1-2.png",
                            "/static/img/banner1-3.png",  
                        ]
                    }, {
                        title:"如果暴力不是为了杀戮，那将毫无意义!",
                        img:[
                            "/static/img/banner1-1.png",
                            "/static/img/banner1-2.png",
                            "/static/img/banner1-3.png",  
                        ]
                    },
                     {
                        title:"如果暴力不是为了杀戮，那将毫无意义!",
                        img:[
                            "/static/img/banner1-1.png",
                            "/static/img/banner1-2.png",
                            "/static/img/banner1-3.png",  
                        ]
                    },
                     {
                        title:"如果暴力不是为了杀戮，那将毫无意义!",
                        img:[
                            "/static/img/banner1-1.png",
                            "/static/img/banner1-2.png",
                            "/static/img/banner1-3.png",  
                        ]
                    }
                ]
            }
        },
        components:{
            panel
        }
    }
</script>
<style lang="less" scoped>

    .bc{
        background-color:#041b3b;
    }

    .home{
         background-color:#041b3b;
        .slide-banner{
           .el-carousel{
                background-color:none !important;
                .el-carousel__item h3 {
                    position: relative;
                    left: -200px;
                    color: white;
                    font-size: 15px;
                    opacity: 0.75;
                    line-height: 180px;
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


