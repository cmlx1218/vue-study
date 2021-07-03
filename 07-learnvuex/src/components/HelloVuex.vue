<template>
<div>
  <h2>Hello Vuex</h2>
  <h2>{{$store.state.counter}}</h2>

  <h4>演示getters</h4>
  {{$store.getters.powerCounter}}
</div>
</template>

<script>
export default {
  name: "HelloVuex"
}
</script>

<style scoped>

</style>
