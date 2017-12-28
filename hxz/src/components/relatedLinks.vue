<template>
    <div  class="relatedLinks">
        <div class="m_box">
            <div class="box_head">公司动态</div>
            <ul>
                <li v-for="link in links">
                    <a :href="link.ahref">华信智的动态华信智的动态华信智的动态华信智的动态华信智的动态</a>
                </li>
            </ul>
        </div>


    </div>
</template>
<script>
export default {
  name:"relatedLinks",
  data:function () {
      return{
        links:[
            {title:"",ahref:""},
            {title:"",ahref:""},
            {title:"",ahref:""},
            {title:"",ahref:""}
        ]
      }
  }
}
</script>
<style lang="less" scoped>
  .relatedLinks{
    margin-top: 12px;
    padding-left: 15px;
    width: 100%;
    box-sizing: border-box;
    .m_box{
      border: 1px solid #cccccc;
      
      .box_head{
        width: 100%;
        line-height: 36px;
        text-align: left;
        padding: 0 15px;
        box-sizing: border-box;
        color:#fff;
        font-size: 18px;
        font-weight: 600;
        border-bottom: 1px solid #cccccc;
        background-color: #0ecce7;
      }
      ul{
          padding: 10px;
          box-sizing: border-box;
        li{
          line-height: 24px;
          font-size: 16px;
          list-style-position: inside;
          height: 48px;
          margin-bottom: 15px;
          
          a{
            text-decoration: none;
            color: #565656;
            transition: all .3s;
          }
        }
        li:hover{
            color: #0ecce7;
            
            a{
              color: #0ecce7;
              background-color: #eee;
            }
          }
      }
    }
  }
</style>
