<template>
  <div class="cart-page">
    <section v-if="$store.state.cart.numberOfItems === 0" class="empty-cart">
      <h1>Your cart is empty... What about we grab some books?</h1>
      <img src="@/assets/images/empty-cart-image.png" />
      <button class="cta-button cta-small-empty">
        <router-link to="../category/Business">Explore the Shelf</router-link>
      </button>
    </section>
    <section v-else class="outer-layout">
      <div class="layout-1">
        <h2 class="cart-left-title">Your cart for Today:</h2>
        <cart-table></cart-table>
        <div class="clear-cart-subtotal">
          <button class="tertiary-button" @click="clearCart()">
            Clear Cart
          </button>
          <p class="bigger-subtitle">
            <span class="subtitle">Subtotal: </span
            >{{ this.getSubtotal() | asDollarsAndCents }}
          </p>
        </div>
      </div>
      <div class="layout-2">
        <h2 class="cart-right-title">Summary</h2>
        <div class="summary-card">
          <div class="details-subtitles">
            <p>
              <span class="subtitle">Items in total:</span>
              {{ $store.state.cart.numberOfItems }}
            </p>
            <p>
              <span class="subtitle">Subtotal:</span>
              {{ this.getSubtotal() | asDollarsAndCents }}
            </p>
          </div>
          <button class="cta-button-cart">
            <router-link :to="'/checkout'">Checkout</router-link>
          </button>
          <button class="secondary-button-cart">
            <router-link :to="'/category/' + $store.state.selectedCategoryName"
              >Continue Shopping</router-link
            >
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import CartTable from "@/components/CartTable";
export default {
  name: "Cart",
  components: { CartTable },
  methods: {
    getSubtotal: function () {
      const subtotal = this.$store.state.cart.items.reduce(
        (accumulator, item) => {
          return accumulator + item.book.price * item.quantity;
        },
        0
      );
      return subtotal;
    },
    clearCart() {
      this.$store.dispatch("clearCart");
    },
  },
};
</script>

<style>
.cta-button-cart {
  margin: 0.8em 0;
  padding: 0.8em 1.3em;
  background-color: var(--cta-color);
  border: 0;
  border-radius: 0.2em;
  cursor: pointer;
}
.secondary-button-cart {
  padding: 0.8em;
  background-color: var(--secondary-background-color);
  border: 0;
  border-radius: 0.3em;
  cursor: pointer;
}
.cta-button-cart:hover {
  background-color: var(--cta-color-on-hover);
}
.cta-small-empty {
  font-size: 0.6em;
}

.secondary-button-cart:hover {
  background-color: var(--secondary-background-color-on-hover);
}
.cart-page {
  flex-grow: 1;
  overflow: auto;
}
.empty-cart {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 1.6em;
  margin: 5em 0 3em;
}
.empty-cart h1 {
  line-height: 1.5em;
}

.empty-cart img {
  width: 350px;
  margin: 4em 0 2.5em;
}
.outer-layout {
  display: flex;
  justify-content: space-between;
  margin: 3em 11em;
}
.outer-layout h2 {
  font-size: 1.2em;
}
.layout-1 {
  padding: 0.5em;
  width: 75%;
}
.cart-left-title {
  margin: 0.8em 0;
}
.clear-cart-subtotal {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.clear-cart-subtotal p {
  padding: 1em 2em;
}
.layout-2 {
  padding: 0.5em;
}
.cart-right-title {
  margin: 0.8em 0;
}
.summary-card {
  display: flex;
  flex-direction: column;
  width: 12em;
  text-align: left;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
  padding: 1em;
  margin: 2em 0;
}
.details-subtitles {
  margin: 0.5em 0;
}
.details-subtitles p {
  display: flex;
  justify-content: space-between;
}
.subtitle {
  font-weight: 500;
}
.bigger-subtitle {
  font-size: 1.1em;
}
.summary-card p {
  margin: 0.4em 0;
}

@media (max-width: 1330px) {
  .outer-layout {
    flex-direction: column;
  }
  .layout-1 {
    width: 100%;
  }
}
</style>
