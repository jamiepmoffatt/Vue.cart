<template>
  <div id="app">  
    <navigation />
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import navigation from "@/components/navigation.vue";

export default {
  name: "app",
  components: {
    navigation
  }
};
</script>

<style lang="less">

@styles: "./styles";
@import "@{styles}/variables.less";

html {
  font-size: 14px;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: @dark-blue;
}

</style>
