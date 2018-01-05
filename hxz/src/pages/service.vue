<template>
    <div class="service">
        <banav></banav>
        <fwjs></fwjs> 
        <hti></hti>
        <div v-for="key in datas" >
           <znz  v-bind:zgz="key"></znz> 
        </div>
        <div class="content">
            <div>
                <div class="lef">
                    <h3>{{nameh3}}</h3>
                    <div class="p">
                       {{nmcot}}
                    </div>
                </div>
                <div class="lef">
                    <h3>{{lefh3}}</h3>
                    <div class="p">
                        {{nmpcot}}
                    </div>
                </div>
            </div>
            <div class="rig">
                <h4>{{gsname}}</h4>
                <div class="nr">
                    <p>· 刘利华出席中国面向南亚东南亚辐射中心——国际信息通信枢纽发展论坛并致辞<p>
                    <p>· 银川市召开再生资源回收站点清理整顿工作推进会</p>
                    <p>· 工业机器人市场亟需中国制造</p>
                    <p>· 智能化时代带来了复杂的安全挑战</p>
                    <p>· 市商务局赴无锡学习考察重要产品追溯体系建设工作</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import banav from "../components/banav";
import fwjs from "../components/fwjs";
import hti from "../components/hti";
import znz from "../components/znz";
export default {
  name: "service",
  data: function() {
    return {
        nameh3:"工作流引擎",
        lefh3:"研发平台",
        gsname:"公司动态",
        nmcot:"益信通工作流是基于WFMC工作流参考模型，其核心组件包括：工作流引擎、流程弹性定制工具、工作流外围组件、表单弹性定制工具等，涵盖了对企业业务流程需求分析，设计，快速开发部署，运行维护，更新和发布，流程绩效分析和管理，流程改进等企业绩效管理全生命周期支持。 工作流引擎作为益信通工作流的核心部分，主要提供了对于工作流定义的解析以及流程流转的支持。工作流定义文件描述了业务的交互逻辑，工作流引擎通过解析此工作流定义文件按照业务的交互逻辑进行业务的流转，工作流引擎通常通过参考某种模型来进行设计，通过调度算法来进行流程的流转(流程的启动、终止、挂起、恢复等)，通过各种环节调度算法(SPLIT、AND、OR等)来实现对于环节的流转(环节的合并、分叉、选择、条件性的选择等。",
        nmpcot:"益信通软件开发平台（以下简称平台）是基于泛MDA（模型驱动）架构，拥有灵活可插拔插件体系的业务基础软件平台。其插件采用Java、JavaScript等原生语言编写，对原生语言的使用没有任何限制。它强调平台服务于开发人员而非业务人员，着眼于将软件开发者从繁复的软件工作中解放出来，以关注那些需要个性化处理的开发工作，提高软件生产力。 平台基于Java EE语言平台，采用了Spring，Hibernate，Quartz、EXT、dhtmlx等开源技术框架，拥有一套自行研发的Web组件库。 由基础模块、业务模块、报表模块、信息模块、任务调度、文件服务等几大模块组成。",
       datas:[
            {
                "da1":'智能顾问',
                "da2":'智能诊断，多端触达，即时应答的云产品顾问',
                "da3":'开始对话',
                "imgSrc":"/static/img/znz1.png"
            },
            {
                "da1":'云享（专家分享）',
                "da2":'多年云计算服务经验和技术分享',
                "da3":'查看详情',
                "imgSrc":"/static/img/znz2.png"
            },
            {
                "da1":'文档与视频',
                "da2":'丰富的产品介绍文档和视频',
                "da3":'查看详情',
                "imgSrc":"/static/img/znz3.png"
            }
        ]
    };
  },
  components: { banav, fwjs,hti,znz }
};
</script>

<style lang="less" scoped>
    .service {
        width: 100%;
        overflow: hidden;
        margin-bottom: 30px;
        .content {
            width: 1100px;
            margin: 10px auto;
            div {
            width: 660px;
            float: left;
            padding: 20px;

            .lef {
                width: 100%;
                display: block;
                padding: 0;

                h3 {
                text-align: left;
                margin:10px 0 20px 0;
                }
                .p {
                text-indent: 2em;
                font-size: 14px;
                text-align: left;
                padding: 0;
                }
            }
            }
            .rig {
            padding: 0;
            width: 280px;
            float: right;
            border: 1px solid #ddd;
            position: relative;
            display: inline-block;
            h4 {
                padding: 0 0 0 5px;
                width: 275px;
                font-size: 14px;
                height: 31px;
                line-height: 31px;
                text-align: left;
                background-color: #ddd;
            }
            .nr {
                width: 260px;
                padding: 10px;
                text-align: left;
                font-size: 14px;

                p {
                margin: 15px auto;
                line-height: 34px;
                }
            }
            }
        }
        }
</style>

