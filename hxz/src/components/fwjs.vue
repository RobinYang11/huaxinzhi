<template>
  <div class="fw">
      <div class="psire">
          <dl class="dl">
              <dt>{{dtnam}}</dt>
              <dd v-for="dd in dldds">
                  <a href="javascript:;" v-on:click="getName()">{{ dd.text}}</a>
              </dd>
          </dl>
          <dl class="dlo">
              <dt>{{fw}}</dt>
              <dd v-for="dd in dlodds">
                  <a href="javascript:;">{{ dd.text}}</a>
              </dd>
          </dl>
          <dl class="dlt">
              <dt>{{js}}</dt>
              <dd v-for="dd in dds">
                 <a href="javascript:;"> {{ dd.text }}</a>
              </dd>
              
          </dl>
      </div>
  </div>
</template>

<script>
export default {
  name:"fwjs",
  data:function(){
      return{
        dtnam:'基础支持',
        fw: '服务支持',
        js:'技术支持',
    
        dldds:[
            {text: '文档与视屏'},
            {text: '自助工具'},
            {text: '新手学堂'},
            {text: '开发者资源'},
            {text: '云栖社区'},
            {text: '智能顾问'},
            {text: '公告'},
            {text: '联系客服'},
            {text: '聆听（提交建议）'}
        ]
        ,

        dlodds:[
            {text: '基础服务'},
            {text: '商业级服务'},
            {text: '企业标准服务'},
            {text: '企业至尊级服务'},
            {text: '专家服务'},
            {text: '国际服务'},
            {text: '区域服务（本地化服务）'}
        ]
        ,
        dds:[
            {text:'码农必备套件'},
            {text:'聆听，只为提供更优用户体验'},
            {text:'[全记录]2017云栖大会·北京峰会——企业云上业务优化专场'}
        ] 
      }
      
  },
   methods:{
            getName:function() {
               alert("hellow"+"这是函数测试"+'!')
            }
        }
}
</script>

<style lang="less" scoped>
    .fw{
        display: block;
        width: 1180px;
        margin: 0 auto;
        position: relative;
       .psire{
            position: relative;
            min-height: 135px;
            background-color: #fff;
            box-shadow: 0 0 15px rgba(0,0,0,.3);
            margin-top: -38px;
            .dl{
                width: 372px;
                text-align: left;
              }
            .dlo{
                width: 375px;
                text-align: left;
                dt{
                    width: 370px;
                }
              }
            .dlt{
                width: 350px;
                text-align: left;
                border-right: 0;
                dt{
                    width: 365px;
                }
                dd{
                    float: left;
                    display: inline-block;
                    width: 100%;
                    height: 16px;
                    line-height: 16px;
                    white-space: nowrap;
                    margin-bottom: 10px;
                    overflow: hidden;
                    a{
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                }
              }
            dl{
                float: left;
                display: inline-block;
                position: relative;
                margin: 12px 0 12px 22px;
                border-right: 1px solid #ebebec;
                
                dt{
                    display: block;
                    width: 380px;
                    height: 30px;
                    line-height: 30px;
                    font-size: 14px;
                    color: #9b9ea0;
                    padding-bottom:8px;
                    background-color: #fff;
                    font-weight: 400;
                    overflow: hidden;
                }
                dd{
                    float: left;
                    display:inline-block;
                    min-width: 33.3333%;
                    height: 16px;
                    line-height: 16px;
                    white-space: nowrap;
                    margin-bottom: 10px;
                    overflow: hidden;
                    a{
                        display: block;
                        font-size: 12px;
                        color:#373d41;
                        padding-right: 18px;
                        text-decoration: none;
                    }
                    a:hover{
                        color: #00c1de;
                    }
                } 
            }
       }
    }
</style>
