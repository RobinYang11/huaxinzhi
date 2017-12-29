<template>
  <div id="app">
    <div class="top">
        <div class="wrapper">
          <navigationBar></navigationBar>
        </div>
    </div>
      <div>
         <router-view/>
      </div>
  </div>
</template>

<script>
    import navigationBar from './components/navigationBar';
    
    export default {
      name: 'app',
      components:{
        navigationBar
      }
    }
</script>

<style <style lang="less">
/*修改滚动条样式*/
    ::-webkit-scrollbar { width: 12px; } /* 滚动槽 */ 
    ::-webkit-scrollbar-track {  border-radius: 10px; } /* 滚动条滑块 */ 
    ::-webkit-scrollbar-thumb { border-radius: 10px; background: rgba(200,200,200,0.7);  } 
    ::-webkit-scrollbar-thumb:window-inactive { background: rgba(255,255,255,0.4); } 
    *{
      padding: 0 ;
      margin: 0 auto;
      .wrapper{
        max-width: 1200px;
      }
        
      #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        .top{
          background-color:#041b3b;
        }
        
      }
    }
    
</style>
