<template>
  <div id="app">
    <div class="top">
        <div class="wrapper">
          <navigationBar></navigationBar>
        </div>
    </div>
    <main>
        <router-view/>
    </main>
    <div>
       <foot></foot>
    </div>
  </div>
</template>

<script>
    import navigationBar from './components/navigationBar';
    import foot from './components/foot';
    export default {
      
      name: 'app',
      components:{
        navigationBar,
        foot
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
    li{
      list-style: none;
    }
    .btn-opcity{
       background: none;
       padding:5px;
       border-radius:6px;
       box-shadow:none;
       border-style: none;
       border:1px solid white;
       color: white;
    }
</style>
