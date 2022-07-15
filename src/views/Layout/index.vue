<template>
  <div>
    <router-view></router-view>
    <van-tabbar route>
      <van-tabbar-item to="/home" icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item to="/home/list" icon="search">找房</van-tabbar-item>
      <van-tabbar-item to="/home/news" icon="newspaper-o">资讯</van-tabbar-item>
      <van-tabbar-item to="/home/profile" icon="contact">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style scoped lang="less">
.van-tabbar-item--active {
  color: #21b97a;
}
</style>
