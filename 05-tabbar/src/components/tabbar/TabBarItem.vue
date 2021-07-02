<template>
  <div class="tar_bar_item" @click="btnClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
<!--    <div :class="{active: isActive}">-->
<!--      <slot name="item-text"></slot>-->
<!--    </div>-->
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  data() {
    return {
      // isActive: true,
      // path: '/home'
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  props: {
    path: String,
    activeColor:{
      type: String,
      default: 'red'
    }
  },
  methods: {
    btnClick() {
      if (this.$route.path !== this.path) {
        this.$router.replace(this.path)
      }
    }
  }
}
</script>

<style scoped>

.tar_bar_item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 12px;
}

.tar_bar_item img {
  width: 30px;
  height: 30px;
  margin-top: 3px;
  vertical-align: middle;
}

/*.active {*/
/*  color: red;*/
/*}*/

</style>
