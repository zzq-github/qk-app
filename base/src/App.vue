<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      align="center"
      router
    >
      <el-menu-item index="/">
        首页
      </el-menu-item>
      <el-menu-item index="/mypage1">
        子应用1
      </el-menu-item>
      <el-menu-item index="/mypage2">
        子应用2
      </el-menu-item>
    </el-menu>
    我是首页的内容
    <router-view></router-view>
    <div id="container"></div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      activeIndex: '1'
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>