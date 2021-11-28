<template>
  <div class="cart-table">
    <p class="table-head">Book</p>
    <p class="table-head">Title</p>
    <p class="unit-price-column-header">Unit Price</p>
    <p class="table-head">Quantity</p>
    <p class="amount-column-header">Amount</p>
    <template v-for="item in $store.state.cart.items">
      <img
        :key="item.book.bookId"
        :src="require('@/assets/images/books/' + bookImageFileName(item.book))"
        :alt="item.book.title"
        class="book-image"
      />
      <p :key="item.book.bookId" class="title-column">{{ item.book.title }}</p>
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
  grid-template-columns: 1fr 1fr 1fr 1fr 0.1fr;
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
.cart-table img {
  width: 50%;
  min-width: 70px;
  max-width: 100px;
  margin: 0 auto;
  padding: 0.3em 0.5em;
}
.title-column {
  padding: 0.3em 0.5em;
}
.unit-price-column-header {
  background-color: #eaeaea;
  padding: 0.8em 1.2em;
  text-align: right;
}
.unit-price-column {
  justify-self: end;
  padding: 1em 2em;
}
.quantity-column {
  justify-self: center;
  padding: 1em 2em;
}
.quantity-column button {
  border: none;
  background-color: transparent;
  color: var(--tertiary-background-color);
  cursor: pointer;
}
.fa-minus-circle {
  color: #868fa1;
}
.fa-minus-circle:hover {
  color: var(--tertiary-background-color-on-hover);
}
.amount-column-header {
  background-color: #eaeaea;
  padding: 0.8em 2em;
  text-align: right;
}
.amount-column {
  justify-self: end;
  padding: 1em 2em;
}
.quantity-column button:hover {
  color: var(--tertiary-background-color-on-hover);
}
.quantity-column span {
  padding: 0 0.3em;
}
</style>
