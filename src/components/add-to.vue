<template>
  <div class="add-to" @click="addProductToCart(product)">
    <div>
      <div class="icon">
        <i class="fal fa-fw fa-plus"></i>
      </div>
      <div class="text">Add To Cart</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "addTo",
  props: {
    product: {
      required: true
    }
  },
  data: function() {
    return {
      count: 0
    };
  },
  methods: mapActions("cart", ["addProductToCart"])
};
</script>

<style scoped lang="less">
@styles: "../styles";
@import "@{styles}/common.less";
@import "@{styles}/variables.less";
@import "@{styles}/mixins/common.less";

.add-to {
  background-color: @dark-blue;
  display: flex;
  flex-grow: 1;
  flex-shrink: 0;
  position: relative;
  color: @white;
  justify-content: center;
  .font-main();
  margin: 0.4rem 0.6rem;
  padding: 0.2rem;
  cursor: pointer;

  .text,
  .icon {
    .transition();
  }

  .icon {
    position: absolute;
    left: 50%;
    opacity: 0;
    transform: translate(-50%, 2rem);
  }

  &:hover {
    .icon {
      opacity: 1;
      color: @white;
      transform: translate(-50%, 0);
    }

    .text {
      opacity: 0;
    }
  }

  &.rounded {
    border-radius: 0.4rem;
  }
}
</style>
