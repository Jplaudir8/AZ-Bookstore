<template>
  <div class="cart-table">
    <p class="table-head">Book</p>
    <p class="table-head">Title</p>
    <p class="table-head">Unit Price</p>
    <p class="table-head">Quantity</p>
    <p class="table-head">Amount</p>
    <template v-for="item in $store.state.cart.items">
      <img
        :key="item.book.bookId"
        :src="require('@/assets/images/books/' + bookImageFileName(item.book))"
        :alt="item.book.title"
      />
      <p :key="item.book.bookId">{{ item.book.title }}</p>
      <p :key="item.book.bookId">{{ item.book.price | asDollarsAndCents }}</p>
      <div :key="item.book.bookId" class="quantity-column">
        <button @click="updateCart(item.book, item.quantity - 1)">
          <i class="fas fa-minus-circle"></i>
        </button>
        <span>{{ item.quantity }}</span>
        <button @click="updateCart(item.book, item.quantity + 1)">
          <i class="fas fa-plus-circle"></i>
        </button>
      </div>
      <p :key="item.book.bookId">
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
  align-items: center;
}
.cart-table .table-head {
  background-color: #cccccc;
}
.quantity-column button {
  border: none;
  background-color: transparent;
  color: var(--tertiary-background-color);
  cursor: pointer;
}
.quantity-column button:hover {
  color: #596171;
}
.quantity-column span {
  padding: 0 0.3em;
}
</style>
