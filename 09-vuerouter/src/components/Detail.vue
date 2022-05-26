<template>
  <div>
    <h2>This is detail page!!!</h2>
    <h3>{{msg}}</h3>
  </div>
</template>

<script>
export default {
  name: "Detail",
  data() {
    return {
      msg: "xxx",
    }
  },
  props: ['msg']
}
</script>

<style scoped>

</style>