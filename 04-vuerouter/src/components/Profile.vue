<template>
  <div>
    <h2>我是Profile组件</h2>
    <!--    {{$route.query}}-->
    <ul>
      <li>{{ query }}</li>
      <li>{{ query.name }}</li>
      <li>{{ query.age }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return{
      query: this.$route.query
    }
  },
  // 组件内相关
  beforeRouteEnter(to, from, next) {
    // console.log("to")
    next()
  }
  // created() {
  //   document.title = '档案'
  // }
}
</script>

<style scoped>

</style>
