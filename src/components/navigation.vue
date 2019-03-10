<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <span class="divide">|</span>
    <router-link to="/about">About</router-link>
    <span class="divide">|</span>
    <router-link to="/shop">Shop
      <transition name="slide-fade">
        <div v-if="getCartCount > 0" class="notification">{{ getCartCount }}</div>
      </transition>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "navigation",
  computed: {
    getCartCount() {
      // Use store to get the products count
      return this.$store.getters["cart/cartTotalCount"];
    }
  }
};
</script>

<style scoped lang="less">
@styles: "../styles";
@import "@{styles}/common.less";
@import "@{styles}/variables.less";
@import "@{styles}/mixins/common.less";

#nav {
  padding: 30px;
  font-size: 2rem;
  .font-main();
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    font-weight: bold;
    color: @dark-blue;
    position: relative;
    &.router-link-exact-active {
      color: @light-green;
    }
  }

  .divide {
    padding: 0 .6rem;
    font-size: 2.8rem;
  }

  .notification {
    position: absolute;
    display: flex;
    align-content: center;
    color: @white;
    top: 0px;
    right: -1.8rem;
    padding: .2rem .6rem;
    font-size: .8rem;
    border-radius: 1rem;
    text-align: center;
    background: @dark-blue;
    text-decoration: none;
  }
}

.slide-fade-enter-active {
  transition: all .8s ease;
}
.slide-fade-leave-active {
  transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}
</style>
