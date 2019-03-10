<template>
  <div>
    <pageCover :toggle="toggle" @clicked="toggle = !toggle"/>
    <div class="shopping-cart">
      <div class="icon" :class="[{'has-items': products.length }]" @click="toggle = !toggle">
        <i class="fal fa-fw fa-shopping-cart"></i>
      </div>
      <transition name="slide-fade">
        <div v-if="toggle" class="cart-items">
          <carta>
            <template v-slot:header>Your Cart</template>
            <span v-if="!products.length" class="font-main font-md">Cart is empty</span>
            <div v-else class="text-right">
              <ul>
                <li v-for="product in products" :key="product.id">
                  {{ product.title }} -
                  <strong>
                    <i class="fal fa-fw fa-pound-sign"></i>
                    {{ product.price }} x {{ product.quantity }}
                  </strong>
                </li>
              </ul>
              <hr>
              <span class="font-md">
                <i class="fas fa-fw fa-pound-sign"></i>
                <strong>{{total}}</strong>
              </span>
            </div>
            <template v-slot:button>
              <div v-if="products.length" class="check-out-button" @click="checkout(products)">
                <div class="icon">
                  <i class="fal fa-fw fa-credit-card"></i>
                </div>
                <div class="text">Checkout</div>
              </div>
              <p
                v-show="checkoutStatus"
                class="pt-2 lead font-md"
                :class="[checkoutStatus == 'successful' ? 'color-vue-green' : 'text-danger']"
              >Checkout {{ checkoutStatus }}.</p>
            </template>
          </carta>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import carta from "@/components/carta.vue";
import pageCover from "@/components/page-cover.vue";

import { mapGetters, mapState } from "vuex";

export default {
  name: "shopping-cart",
  components: {
    carta,
    pageCover
  },
  data: function() {
    return {
      toggle: false
    };
  },
  computed: {
    ...mapState({
      checkoutStatus: state => state.cart.checkoutStatus
    }),
    ...mapGetters("cart", {
      products: "cartProducts",
      total: "cartTotalPrice",
      count: "cartTotalCount"
    })
  },
  methods: {
    checkout(products) {
      this.$store.dispatch("cart/checkout", products);
    }
  }
};
</script>

<style scoped lang="less">
@styles: "../styles";
@import "@{styles}/common.less";
@import "@{styles}/variables.less";
@import "@{styles}/mixins/common.less";


.shopping-cart {
  position: fixed;
  top: 3rem;
  right: 6rem;
  z-index: 1001;

  > .icon {
    font-size: 1.4rem;
    width: 4.4rem;
    height: 4.4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    .transition();
    color: @white;
    opacity: 0.6;
    background-color: lighten(@dark-blue, 40);

    &.has-items {
      opacity: 1;
      background-color: @dark-blue;
      cursor: pointer;

      &:hover {
        color: @dark-blue;
        background-color: @light-green;
      }
    }
  }

  .cart-items {
    top: 5.2rem;
    right: 1.2rem;
    position: absolute;
    border-radius: 0.4rem;
    width: 30rem;

    ul {
      list-style-type: none;
      padding: 0;
    }
    li {
      margin: 0.4rem 1.2rem;
    }
  }

  .check-out-button {
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
    border-radius: 0.4rem;

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
  }

  .slide-fade-enter-active {
    transition: all 0.8s ease;
  }
  .slide-fade-leave-active {
    transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
  }
  .slide-fade-enter,
  .slide-fade-leave-to {
    transform: translateY(-10px);
    opacity: 0;
  }
}

// Small devices (landscape phones, less than 768px)
@media (max-width: 767.98px) {
  .shopping-cart {
    top: auto;
    bottom: 3rem;
    right: 3rem;

    .cart-items {
      top: auto;
      right: 1.2rem;
      bottom: 5.2rem;
      position: absolute;
      border-radius: 0.4rem;
      width: 30rem;
    }
  }
}

// Small devices (landscape phones, less than 768px)
@media (max-width: 575.98px) {
  .shopping-cart {
    top: auto;
    bottom: 3rem;
    right: 0.2rem;

    .cart-items {
      top: auto;
      right: 0.6rem;
      bottom: 5.2rem;
      position: absolute;
      border-radius: 0.4rem;
      width: 92vw;
    }
  }
}
</style>
