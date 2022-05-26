<template>
  <h2>THis is about Page</h2>
  <h2>{{ num }}</h2>
  <button @click="addNum">+</button>
  <button @click="devNum">-</button>
</template>

<script>
import {mapState,mapMutations} from 'vuex'

export default {
  name: "About",
  computed: {
    // num: function () {
    //   return this.$store.state.num
    // }
    ...mapState({
      num: state => state.num
    })
  },
  methods: {
    ...mapMutations(['addNum','devNum'])
  }
}
</script>

<style scoped>

</style>