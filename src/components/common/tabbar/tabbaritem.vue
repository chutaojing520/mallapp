<template>
  <div class="tab-bar-item" @click="tabbaritemclick">
    <div>
      <slot name="tab-bar-item-icon" v-if="!isActivated"></slot>
      <slot name="tab-bar-item-icon-active" v-else></slot>
    </div>
    <div :style="calactivateColor">
      <slot name="tab-bar-item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "tabbaritem",
    props: {
      //组件跳转路径由外界传入
      link: {
        type: String
      },
      activateColor: {
        type: String,
        default: 'red'
      }
    },
    methods: {
      tabbaritemclick() {
        this.$router.push(this.link);
      }
    },
    computed: {
      isActivated(){
        return this.$route.path.indexOf(this.link) != -1;
      },
      calactivateColor(){
        return this.isActivated ? {color: this.activateColor} : {};
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
  }

  .tab-bar-item img {
    height: 24px;
    width: 24px;
   /*距离顶端距离 */
  margin-top: 3px;
  /*取消图片底部距离的默认3px */
  vertical-align: middle;
  /*图片底部距离设置为1px */
  margin-bottom: 1px;
  }
</style>
