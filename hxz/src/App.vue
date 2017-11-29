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
