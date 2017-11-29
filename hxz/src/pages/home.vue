<template>
     <div class="bc">
         <div class="home">
            <div class="slide-banner">
                <el-carousel indicator-position="outside">
                    <el-carousel-item v-for="(item,index) in banner" :key="index">
                        <div class="img-item">
                            <img :src="item.img[0]" alt="">
                        </div>
                        <div class="img-item">
                            <img :src="item.img[1]" alt="">
                        </div>
                        <div class="img-item" >
                            <img :src="item.img[2]" alt="">
                        </div>
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div>
                <ul>
                    <li>
                        <transition-group name="fadeLeft" tag="h3">
                        <h3>hellllooooooooo</h3>
                        </transition-group>
                    </li>
                    <li>2</li>
                </ul>
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
                        title:"banner1",
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
                color: #475669;
                font-size: 18px;
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


