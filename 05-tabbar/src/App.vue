<template>
  <div id="app">
    <tab-bar>
      <tab-bar-item>
        <img slot="item-icon" src="./assets/img/tabbar/home.png" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/home_active.png" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item>
        <img slot="item-icon" src="./assets/img/tabbar/categories.png" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/categories_active.png" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item>
        <img slot="item-icon" src="./assets/img/tabbar/shopcart.png" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/shopcart_active.png" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item>
        <img slot="item-icon" src="./assets/img/tabbar/profile.png" alt="">
        <img slot="item-icon-active" src="./assets/img/tabbar/profile_active.png" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
<!--      <div class="tar_bar_item">-->
<!--        <img src="../../assets/img/tabbar/home.png" alt="">-->
<!--        <div>首页</div>-->
<!--      </div>-->
<!--      <div class="tar_bar_item">-->
<!--        <img src="../../assets/img/tabbar/home.png" alt="">-->
<!--        <div>分类</div>-->
<!--      </div>-->
<!--      <div class="tar_bar_item">-->
<!--        <img src="../../assets/img/tabbar/home.png" alt="">-->
<!--        <div>购物车</div>-->
<!--      </div>-->
<!--      <div class="tar_bar_item">-->
<!--        <img src="../../assets/img/tabbar/home.png" alt="">-->
<!--        <div>我的</div>-->
<!--      </div>-->
    </tab-bar>
  </div>
</template>

<script>

import TabBar from "./components/tabbar/TabBar";
import TabBarItem from "./components/tabbar/TabBarItem";


export default {
  name: 'App',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>
@import "./assets/css/base.css";
</style>
