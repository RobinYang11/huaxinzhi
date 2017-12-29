<template>
    <div class="leftRightPanel">
            <el-row>
                <el-col :span="12" class="left">
                     <p>
                         鲜致电商平台
                     </p>
                </el-col>
                <el-col :span="12">
                 
                        <p>
                            慕课网(IMOOC)是IT技能学习平台。慕课网(IMOOC)提供了丰富的移动端开发、php开发、web前端、android开发以及html5等视频教程资源公开课。并且富有交互性及趣味性
                        </p>
                   
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
        .el-row{
            background: #fff;
            max-width: 500px;
        
            .left{
                background: #eaeaea;
               
                height: 300px;
            
                // border-right: 1px dashed #d2d2d2;
            }
        }
       
}
</style>


