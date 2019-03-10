<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <div class="px-3 mb-5">
      <h1 class="font-main font-xxl">Welcome to Vue.cart</h1>
      <p class="lead">
        A simple shopping cart application built by Jamie Paul Moffatt
      </p>
      <h3 class="font-main mb-2">Installed CLI Plugins</h3>
      <ul>
        <li>
          <a
            href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
            target="_blank"
            rel="noopener"
          >eslint</a>
        </li>
        <li>
          <a
            href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-mocha"
            target="_blank"
            rel="noopener"
          >unit-mocha</a>
        </li>
      </ul>
      <h3 class="font-main mb-2">Using</h3>
      <ul>
        <li>
          <a href="https://vuex.vuejs.org/" target="_blank" rel="noopener">Vuex</a>
        </li>
        <li>
          <a href="https://router.vuejs.org/" target="_blank" rel="noopener">Vue Router</a>
        </li>
        <li>
          <a href="https://bootstrap-vue.netlify.com/" target="_blank" rel="noopener">Bootstap+Vue</a>
        </li>
        <li>
          <a href="https://fontawesome.com/" target="_blank" rel="noopener">Font Awesome Pro</a>
        </li>
        <li>
          <a href="https://fonts.google.com/specimen/Bree+Serif?selection.family=Bree+Serif" target="_blank" rel="noopener">Google Fonts</a>
        </li>
      </ul>
      <h3 class="font-main mb-2 ">Need to mention</h3>
      <p class="lead">With inspiration from the Vuex shopping cart example</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {

  }
};
</script>

<style scoped lang="less">

@styles: "../styles";
@import "@{styles}/variables.less";
@import "@{styles}/common.less";

h3 {
  margin: 3.4rem 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 1.2rem;
}
a {
  color: @light-green;
}
</style>
