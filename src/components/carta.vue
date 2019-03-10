<template>
  <div class="carta">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <div class="main">
      <slot></slot>
    </div>
    <div v-if="hasFooter" class="footer">
      <slot name="footer"></slot>
    </div>
    <div v-if="hasButton" class="button">
      <slot name="button"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "carta",
  computed: {
    hasFooter() {
      return !!this.$slots["footer"] || !!this.$scopedSlots["footer"];
    },
    hasButton() {
      return !!this.$slots["button"] || !!this.$scopedSlots["button"];
    }
  }
};
</script>

<style scoped lang="less">
@styles: "../styles";
@import "@{styles}/common.less";
@import "@{styles}/variables.less";
@import "@{styles}/mixins/common.less";

.carta {
  display: flex;
  flex-direction: column;
  height: 100%;

  &.landscape {
    flex-direction: row;
  }

  .header {
    color: @white;
    font-size: 2rem;
    background-color: @light-green;
    border-top-left-radius: 0.4rem;
    border-top-right-radius: 0.4rem;
    padding: 0.4rem 0.6rem;
    border: 1px solid @light-green;
    border-bottom: none;
    .font-main();
  }

  .main {
    padding: 0.4rem 0.6rem;
    border-left: 1px solid @light-grey;
    border-right: 1px solid @light-grey;
    background-color: lighten(@light-grey, 4);
    flex-grow: 1;
  }

  .footer {
    background-color: @white;
    font-size: 1.4rem;
    padding: 0.4rem 0.6rem;
    border: 1px solid @light-grey;
    border-top: none;
    border-bottom-left-radius: 0.4rem;
    border-bottom-right-radius: 0.4rem;
  }

  .button {
    background-color: @white;
    font-size: 1.4rem;
    border: 1px solid @light-grey;
    border-bottom-left-radius: 0.4rem;
    border-bottom-right-radius: 0.4rem;
    overflow: hidden;
  }
}
</style>
