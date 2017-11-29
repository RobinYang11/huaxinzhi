<template>
    <div class="container">
       HelloWorld
       <el-button>
         hello
       </el-button>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<style lang="less" scoped>
    .container{
       background-color: red;

    }
</style>