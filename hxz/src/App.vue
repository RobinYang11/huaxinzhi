<template>
  <div id="app">
    <div class="wrapper">
        <navigationBar></navigationBar>
    </div>
    <div class="wrapper">
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
        min-width: 1200px;
      }
      #app {
        background-color:#fff;
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
      
      }
    }
    
</style>
