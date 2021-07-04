<template>
  <div id="app">
    {{$store.state.token}}<br>
    {{$store.state.message}}
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
