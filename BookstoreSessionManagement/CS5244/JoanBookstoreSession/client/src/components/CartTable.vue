<template>
  <div class="cart-table">
    <p class="table-head">Book</p>
    <p class="table-head">Title</p>
    <p class="table-head unit-price-column-header">Unit Price</p>
    <p class="table-head">Quantity</p>
    <p class="table-head amount-column-header">Amount</p>
    <template v-for="item in $store.state.cart.items">
      <img
        :key="item.book.bookId"
        :src="require('@/assets/images/books/' + bookImageFileName(item.book))"
        :alt="item.book.title"
        class="book-image"
      />
      <p :key="item.book.bookId">{{ item.book.title }}</p>
      <p :key="item.book.bookId" class="unit-price-column">
        {{ item.book.price | asDollarsAndCents }}
      </p>
      <div :key="item.book.bookId" class="quantity-column">
        <button @click="updateCart(item.book, item.quantity - 1)">
          <i class="fas fa-minus-circle"></i>
        </button>
        <span>{{ item.quantity }}</span>
        <button @click="updateCart(item.book, item.quantity + 1)">
          <i class="fas fa-plus-circle"></i>
        </button>
      </div>
      <p :key="item.book.bookId" class="amount-column">
        {{ (item.book.price * item.quantity) | asDollarsAndCents }}
      </p>
    </template>
  </div>
</template>

<script>
export default {
  name: "CartTable",
  methods: {
    bookImageFileName: function (book) {
      let name = book.title.toLowerCase();
      name = name.replace(/ /g, "-");
      name = name.replace(":", "");
      name = name.replace(".", "");
      name = name.replace("#", "");
      return `${name}.png`;
    },
    updateCart(book, quantity) {
      this.$store.dispatch("updateCart", { book, quantity });
    },
  },
};
</script>

<style>
.cart-table {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 1em 0;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
  padding: 0 0 1em 0;
}
.cart-table .table-head {
  background-color: #eaeaea;
  padding: 0.8em 1em;
  text-align: center;
}
.cart-table img {
  width: 50%;
  min-width: 70px;
  margin: 0 auto;
}
.unit-price-column-header {
  text-align: right;
  padding: 0 3em;
}
.unit-price-column {
  justify-self: end;
  padding: 1em 2em;
}
.quantity-column {
  justify-self: center;
}
.quantity-column button {
  border: none;
  background-color: transparent;
  color: var(--tertiary-background-color);
  cursor: pointer;
}
.amount-column-header {
  text-align: right;
  padding: 0 2em;
}
.amount-column {
  justify-self: end;
  padding: 1em 2em;
}
.quantity-column button:hover {
  color: #596171;
}
.quantity-column span {
  padding: 0 0.3em;
}
</style>
