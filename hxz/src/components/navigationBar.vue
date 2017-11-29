<template>
    <div class="navgationBar">
        <div>
            <img src="../assets/img/log.png" alt="">
        </div>
        <div>
            <ul>
                <li><a href="/">首页</a></li>
                <li><a href="/product">产品服务</a></li>
                <li><a href="/solution">解决方案</a></li>
                <li><a href="/service">技术支持</a></li>
                <li><a href="/about">关于我们</a></li>
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
  name:"navgationBar"
}
</script>
<style lang="less" scoped>
    .navgationBar{
        padding: 10px;
        background-color: #041b3b;
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
            }
        }
    }
</style>


