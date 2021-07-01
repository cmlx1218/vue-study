<template>
  <div>
    <h2>这里是Home</h2>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view/>
    <h2>{{ message }}</h2>
  </div>


</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      message: 'xxx',
      path: '/home/news'
    }
  },
  // 组件被创建时执行
  created() {
    // document.title = '首页'
    // console.log("home创建")
  },
  // 当template等被挂载到dom上之后
  mounted() {
  },
  // 界面发生更新的时候,eg：message是响应式的，当其值发生改变的时候执行该方法
  updated() {
  },
  // 销毁的时候
  destroyed() {
    // console.log("home销毁")
  },
  activated() {
    this.$router.push(this.path)
  },
  beforeRouteLeave(to, from, next) {
    this.path = this.$route.path
    next()
  }
}
</script>

<style scoped>

</style>
