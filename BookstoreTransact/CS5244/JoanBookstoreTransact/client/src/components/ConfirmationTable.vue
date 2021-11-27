<template>
<!--  <table>-->
<!--    <tr-->
<!--      v-for="(item, index) in this.$store.state.orderDetails.lineItems"-->
<!--      :key="item.productId"-->
<!--    >-->
<!--      <td>-->
<!--        {{ $store.state.orderDetails.books[index].title }}-->
<!--      </td>-->
<!--      <td>x {{ item.quantity }}</td>-->
<!--      <td>{{ (item.quantity * $store.state.orderDetails.books[index].price) | asDollarsAndCents }}</td>-->
<!--    </tr>-->
<!--  </table>-->

  <div class="cart-table">
    <p class="table-head">Book</p>
    <p class="table-head">Quantity</p>
    <p class="table-head">Price</p>
    <template v-for="(item, index) in $store.state.orderDetails.lineItems">
      <p class="title-column" :key="index">{{ $store.state.orderDetails.books[index].title }}</p>
      <p class="quantity-column" :key="index">x {{ item.quantity }}</p>
      <p class="price-column" :key="index">{{ (item.quantity * $store.state.orderDetails.books[index].price) | asDollarsAndCents }}</p>
    </template>
  </div>
</template>

<script>
export default {
  name: "ConfirmationTable"
};
</script>

<style scoped>
.cart-table {
  display: grid;
  grid-template-columns: 1fr 0.2fr 0.2fr;
  grid-gap: 1em 0;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
  margin: 2em 0;
  padding: 0 0 2em 0;
}
.cart-table .table-head {
  background-color: #eaeaea;
  padding: 0.8em 1em;
  text-align: center;
}
.title-column {
  padding: 0.3em 0.5em 0.3em 1.2em;
}
.quantity-column {
  justify-self: center;
  text-align: center;
  padding: 1em 2em;
}
.price-column {
  justify-self: end;
  padding: 1em 1.5em;
}

</style>
