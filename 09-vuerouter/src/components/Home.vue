<template>
  <h2>This is Home Page!!! </h2>
  <button @click="addCount">加加加</button>
  {{ count }}
  <Detail :msg="msg"></Detail>
</template>

<script>

import Detail from "@/components/Detail";

export default {
  name: "Home",
  data() {
    return {
      count: 1,
      msg: "xxxxx"
    }
  },
  methods: {
    addCount() {
      this.count++
    }
  },
  components: {
    Detail
  }
}

</script>

<style scoped>

</style>