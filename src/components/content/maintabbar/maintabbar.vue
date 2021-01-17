<template>
  <tabbar>
    <tabbaritem link="/home">
      <img slot="tab-bar-item-icon" src="~assets/img/tabbar/home.svg">
      <img slot="tab-bar-item-icon-active" src="~assets/img/tabbar/home_active.svg">
      <div slot="tab-bar-item-text">首页</div>
    </tabbaritem>
    <tabbaritem link="/category">
      <img slot="tab-bar-item-icon" src="~assets/img/tabbar/category.svg">
      <img slot="tab-bar-item-icon-active" src="~assets/img/tabbar/category_active.svg">
      <div slot="tab-bar-item-text">分类</div>
    </tabbaritem>
    <tabbaritem link="/cart">
      <img slot="tab-bar-item-icon" src="~assets/img/tabbar/cart.svg">
      <img slot="tab-bar-item-icon-active" src="~assets/img/tabbar/cart_active.svg">
      <div slot="tab-bar-item-text">购物车</div>
    </tabbaritem>
    <tabbaritem link="/profileinfo">
      <img slot="tab-bar-item-icon" src="~assets/img/tabbar/profile.svg">
      <img slot="tab-bar-item-icon-active" src="~assets/img/tabbar/profile_active.svg">
      <div slot="tab-bar-item-text">我的</div>
    </tabbaritem>
  </tabbar>
</template>

<script>
  import tabbar from 'components/common/tabbar/tabbar.vue'
  import tabbaritem from 'components/common/tabbar/tabbaritem.vue'

  export default {
    name: "maintabbar",
    components: {
      tabbar,
      tabbaritem
    }
  }
</script>

<style scoped>

</style>
