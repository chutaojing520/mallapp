<template>
  <div id="app">
    <router-view></router-view>
    <maintabbar></maintabbar>
  </div>
</template>
<script>
  import maintabbar from 'components/content/maintabbar/maintabbar.vue'
  export default {
    name: "app",
    components: {
      maintabbar
    }
  }
</script>
<style scoped>
</style>
