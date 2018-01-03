<template>
    <div class="navgationBar">
        <div>
            <img src="../assets/img/log.png" alt="">
        </div>
        <div>
            <ul>
                <li><router-link to="/">首页</router-link></li>
                <li><router-link to="/product">产品服务</router-link></li>
                <li><router-link to="/solution">解决方案</router-link></li>
                <li><router-link to="/service">技术支持</router-link></li>
                <li><router-link to="/about">关于我们</router-link></li>
            </ul>
        </div>
        <div>
            <ul>
                <li><a href="" style="font-size:10px;color:#549fff">管理中心</a></li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
  name:"navgationBar",


 
}
</script>
<style lang="less" scoped>
    .navgationBar{
        padding: 15px;
        font-size: 15px;
        color: rgb(64, 164, 195);
        display: flex;
        display: -webkit-flex;
        align-items: center;
        justify-content: center;
        ul{
            li{
                float: left;
                list-style: none;
                a{
                    padding:10px;
                    text-decoration: none;
                    color:white;
                }
                a:hover{
                    border-bottom: 1px solid rgb(84, 159, 255);
                }
            }
        }
        
    }
</style>


