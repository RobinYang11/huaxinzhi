<template>
    <div class="leftRightPanel">
            <el-row>
                <el-col :span="12" class="left">
                     <p>
                         鲜致电商平台
                     </p>
                </el-col>
                <el-col :span="12" class="right">
                    <div>
                        <h4>鲜致电商平台</h4>
                        <p>
                         
前身麦可网，2014年，麦可网完成千万级A轮融资，并更名为”麦子学院“，同时通过“麦子圈”IT职业实名社交圈——提供包括企业招聘对接，猎头，项目外包，经验分享，职业交友等一系列增值服务。
做在线职业教育示范学院，将教育和课程做到极致。除了提供高质量的课程学习之外，也提供包括就业推荐，职业交友，项目外包，创业服务等全面的增值服务，并且线上线下结合，移动设备和传
                        </p>
                    </div>
                    <div class="link">
                         <a href="">see more <i class="el-icon-d-arrow-right"></i></a>
                    </div>
                </el-col>
            </el-row>
    </div>
</template>
<script>
    export default {
    name:"leftRightPanel"
    }
</script>
<style lang="less" scoped>
    .leftRightPanel{
        overflow: hidden;
        .el-row{
             overflow: hidden;
            text-align: left;
            background: #fff;
            max-width: 500px;
            .left{
                padding: 10px;
                background: #eaeaea;
                height: 300px;
               
                // border-right: 1px dashed #d2d2d2;
            }
            .right{
                padding: 10px;
                 overflow: hidden;
                 h4{
                     color:#2fda9c;
                 }
                 p{
                    color: #444141;
                    font-size: 14px;
                }
                .link{
                    position: absolute;
                    right: 13px;
                    bottom: 5px;
                    /* text-align: right; */
                    line-height: 50px;
                    a{
                        text-decoration: none;
                        color: #69da9c;
                    }
                }
            }
        }
       
}
</style>


