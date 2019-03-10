<template>
  <b-container>
    <shopping-cart/>
    <b-row class="mb-4">
      <b-col>
        <h1 class="font-main font-xxl">Vue.cart Shop</h1>
        <p class="lead">You can add items below to the cart</p>
      </b-col>
    </b-row>

    <transition-group name="product-list" tag="b-row">
      <b-col class="product mb-5" cols="12" md="6" lg="4" v-for="product in products" :key="product.id">
        <carta>
          <template v-slot:header>{{product.title}}</template>
          <div class="text-left">
            Description: {{product.description}}
            <br>
            <br>Quantiy Remaining:
            <strong>{{product.inventory}}</strong>
            <br>Price:
            <strong>{{product.price}}</strong>
          </div>
          <template v-slot:button>
            <addTo class="rounded" :product="product"/>
          </template>
        </carta>
      </b-col>
    </transition-group>
  </b-container>
</template>

<script>
// @ is an alias to /src
import carta from "@/components/carta.vue";
import addTo from "@/components/add-to.vue";
import shoppingCart from "@/components/shopping-cart.vue";

import { mapState, mapActions } from "vuex";

export default {
  name: "shop",
  created() {
    this.$store.dispatch("products/getAllProducts");
  },
  components: {
    carta,
    addTo,
    shoppingCart
  },
  computed: mapState({
    products: state => state.products.all
  })
};
</script>

<style scoped lang="less">
@styles: "../styles";
@import "@{styles}/variables.less";
@import "@{styles}/common.less";

.product {
  transition: all 1s;
}
.product-list-enter,
.product-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.product-list-leave-active {
  position: absolute;
}

</style>