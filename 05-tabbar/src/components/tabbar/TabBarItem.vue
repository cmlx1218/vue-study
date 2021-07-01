<template>
  <div class="tar_bar_item">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :class="{active: isActive}">
      <slot name="item-text"></slot>
    </div>

  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  data() {
    return {
      isActive: true
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

.active {
  color: red;
}

</style>
