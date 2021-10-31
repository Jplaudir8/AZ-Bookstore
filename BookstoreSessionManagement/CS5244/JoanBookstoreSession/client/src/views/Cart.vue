<template>
  <div class="cart-page">
    <section v-if="$store.state.cart.numberOfItems === 0" class="empty-cart">
      <h1>Your cart is empty... What about we grab some books?</h1>
      <img src="@/assets/images/empty-cart-image.png" />
    </section>
    <section v-else>
      <div>
        <h2>Your cart for Today:</h2>
        <cart-table></cart-table>
        <h3>Summary</h3>
        <p>Summary div card goes here</p>
      </div>
    </section>
  </div>
</template>

<script>
import CartTable from "@/components/CartTable";
export default {
  name: "Cart",
  components: { CartTable },
};
</script>

<style>
.cart-page {
  flex-grow: 1;
  overflow: auto;
}

.empty-cart {
  text-align: center;
  font-size: 1.6em;
  margin: 5em 0 3em;
}

.empty-cart h1 {
  line-height: 1.5em;
}

.empty-cart img {
  width: 350px;
  margin: 4em 0;
}
</style>
