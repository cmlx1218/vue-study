<template>
  <div id="app">
    <h2>{{ message }}</h2>
    <h2>{{ $store.state.counter }}</h2>
    <!--    <button @click="$store.state.counter++">+</button>-->
    <!--    <button @click="$store.state.counter&#45;&#45;">-</button>-->
    <button @click="addCount(1)">+</button>
    <button @click="subCount">-</button>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>
    <button @click="addStudent">添加学生</button>
    <button @click="updateInfo">修改学生</button>
    <hello-vuex/>

    <h4>演示getters</h4>
    {{ $store.getters.powerCounter }}<br>
    {{ $store.getters.StuAgeMore }}<br>
    {{ $store.getters.StuAgeMoreLength }}<br>
    {{ $store.getters.StuAgeMoreInput(30) }}<br/>
    {{ $store.state.student }}<br>
    {{ $store.state.info }}

    <h4>演示module相关</h4>
    {{$store.state.ma.name}}<br>
    <button @click="updateName">修改名字</button><br>
    {{$store.getters.fullName1}}<br>
    {{$store.getters.fullName2}}<br>
    {{$store.getters.fullName3}}<br>
    <button @click="asyncUpdateName">异步修改名字</button>
  </div>
</template>

<script>

import HelloVuex from "./components/HelloVuex";
import {INCREMENT} from "./store/mutations-types";

export default {
  name: 'App',
  components: {
    HelloVuex
  },
  data() {
    return {
      message: '欢迎学习Vuex'
    }
  },
  methods: {
    addCount(count) {
      // this.$store.commit('increment', count)
      this.$store.commit({
        type: INCREMENT,
        count
      })
    },
    subCount() {
      this.$store.commit('decrement')
    },
    addStudent() {
      const stu = {id: 5, name: '关口里美', age: 25}
      this.$store.commit('addStudent', stu)
    },
    updateInfo() {
      // this.$store.commit('updateInfo')

      // this.$store.dispatch('aUpdateInfo','我是playload')

      // this.$store.dispatch('aUpdateInfo', {
      //   message: '我是携带的信息',
      //   success: () => {
      //     console.log("里面已经成功了")
      //   }
      // })

      // 利用Promise优雅的实现回调
      this.$store.dispatch('aUpdateInfo', '我是payload')
        .then(res => {
          console.log(res);
          console.log('里面完成了')
        })
    },
    updateName() {
      this.$store.commit('updateName')
    },
    asyncUpdateName() {
      this.$store.dispatch('aUpdateName','进入了')
    }
  }
}
</script>

<style>
/*#app {*/
/*  font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
/*  -webkit-font-smoothing: antialiased;*/
/*  -moz-osx-font-smoothing: grayscale;*/
/*  text-align: center;*/
/*  color: #2c3e50;*/
/*  margin-top: 60px;*/
/*}*/
</style>
