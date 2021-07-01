<template>
  <div>
    <h2>这里是用户个人主页</h2>
    <h2>{{ userId }}</h2>
    <h2>{{ $route.params.userId }}</h2>
  </div>
</template>

<script>
export default {
  name: "User",
  computed: {
    userId() {
      return this.$route.params.userId
    }
  },
  // created() {
  //   document.title = '用户'
  // }
}
</script>

<style scoped>

</style>
