<template>
  <div>
    <transition name="fade-fade">
      <div v-if="toggle" class="page-cover" @click="clicked"></div>
    </transition>
  </div>
</template>

<script>
export default {
  props: ["toggle"],
  methods: {
    clicked() {
        this.$emit('clicked')
    }
  }
};
</script>

<style scoped lang="less">
@styles: "../styles";
@import "@{styles}/common.less";
@import "@{styles}/variables.less";
@import "@{styles}/mixins/common.less";

.page-cover {
  position: fixed;
  background-color: @black;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  opacity: 0.4;
  z-index: 999;
}

.fade-fade-enter-active {
  transition: all 0.8s ease;
}
.fade-fade-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-fade-enter,
.fade-fade-leave-to {
  opacity: 0;
}
</style>
