<template>
    <div class="znz">
        <div class="inner">
            <ul class="list">
                <li>
                    <img :src="zgz.imgSrc" alt="图片">
                    <p class="title">{{zgz.da1}}</p>
                    <p class="text">{{zgz.da2}}</p>
                    <a href="javascript:;" target="_blank">{{zgz.da3}}</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  props:['zgz'],
  name:"znz",
  data:function(){
      return{

      };
  }
}
</script>

<style lang="less">
    .znz{
        background-color: #fafbff;
        .inner{
            width:1180px; 
            margin:0 auto;
            h3{
                height: 44px;
                line-height: 44px;
                font-size: 30px;
                color: #373d41;
                text-align: center;
                font-weight: 400;
                margin-top: 60px;
                overflow: hidden;
            }
            .list{
                width:1200px;
                margin-top:34px;
                margin-bottom: 26px;
                li:hover{
                    transform: scale(1.1)
                }
                li{
                    float: left;
                    display:inline-block;
                    width: 380px;
                    height: 244px;
                    background-color: #fff;
                    box-shadow: 0 25px 35px rgba(165,165,189,.3);
                    margin-right: 20px;
                    margin-bottom: 40px;
                    transition: all .3s ease-in-out;
                    img{
                        display: block;
                        width: 54px;
                        height: 54px;
                        margin:28px auto 0;
                    }
                    .title{
                        height: 30px;
                        line-height: 30px;
                        font-size: 20px;
                        color:#00cle0;
                        text-align:center;
                        margin-top:14px;
                        overflow: hidden;
                    }
                    .text{
                        height: 24px;
                        line-height: 24px;
                        font-size: 16px;
                        color: #73777a;
                        text-align: center;
                        margin-top: 8px;
                        overflow: hidden;
                    }
                    a{
                        display: block;
                        width: 118px;
                        height: 32px;
                        line-height: 32px;
                        font-size: 14px;
                        color: #00c1e0;
                        text-align: center;
                        border: 1px solid #00c1e0;
                        margin: 22px auto 0;
                        overflow: hidden;
                        transition: all .3s ease-in-out;
                        text-decoration: none;
                    }
                    a:hover{
                        background-color: #00c1e0;
                        color: #ffffff;
                    }
                }
            }
        }
    }
</style>


