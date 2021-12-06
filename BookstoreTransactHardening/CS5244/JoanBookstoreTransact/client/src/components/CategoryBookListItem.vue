<template v-for="book in selectedCategoryBooks">
  <div class="grid-item">
    <div class="book-and-read-now">
      <img
        :src="require('@/assets/images/books/' + this.bookImageFileName(book))"
        :alt="book.title"
      />
      <span v-if="book.isPublic" class="read-now-btn"
        ><a href="/">READ NOW</a></span
      >
    </div>

    <div class="grid-info-and-buttons">
      <div>
        <p class="book-title">{{ book.title }}</p>
        <p class="book-author">
          by<span> {{ book.author }}</span>
        </p>
        <p class="book-price">{{ book.price | asDollarsAndCents }}</p>
      </div>
      <div>
        <button class="icon-w-text-btn">
          Add to Wishlist <i class="fas fa-heart"></i>
        </button>
        <button class="cta-button cta-card" @click="addToCart(book)">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "categoryBookListItem",
  props: {
    book: {
      type: Object,
      required: true,
    },
  },
  created: function () {},
  computed: mapState(["selectedCategoryBooks"]),
  methods: {
    addToCart(book) {
      this.$store.dispatch("addToCart", book);
    },
    bookImageFileName: function (book) {
      let name = book.title.toLowerCase();
      name = name.replace(/ /g, "-");
      name = name.replace(":", "");
      name = name.replace(".", "");
      name = name.replace("#", "");
      return `${name}.png`;
    },
  },
};
</script>
<style scoped>
.grid-books .grid-item {
  padding: 0.9em 0.8em 1.1em;
  max-width: 135px;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
  transition: transform 400ms ease, box-shadow 500ms ease;
}

.grid-item:hover {
  transform: scale(1.03);
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.2);
}

.grid-books .book-and-read-now {
  position: relative;
}

.grid-books .book-and-read-now .read-now-btn {
  position: absolute;
  top: 3px;
  right: 3px;
  width: 50px;
  height: 50px;
  background-color: rgba(0, 0, 0, 0.685);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.7em;
  text-align: center;
}

.grid-books .book-and-read-now .read-now-btn:hover {
  background-color: rgba(0, 0, 0, 0.62);
}

.grid-books .book-and-read-now .read-now-btn a {
  color: white;
  line-height: 1.1em;
  font-weight: 400;
  color: yellow;
  padding: 0.9em 0.2em;
}

.grid-books .book-and-read-now .read-now-btn a:hover {
  font-weight: 500;
}

.grid-books .grid-item .book-title {
  margin: 1.2em 0 0.4em;
  font-size: 0.8125em;
  font-weight: 500;
  letter-spacing: 0.02em;
  line-height: 1.2em;
  color: var(--primary-color);
}

.grid-books .grid-item .book-author {
  margin: 0.625em 0;
  font-size: 0.75em;
  font-style: italic;
  line-height: 1.2em;
}

.grid-books .grid-item .book-author span {
  color: var(--primary-color);
}

.grid-books .grid-item .book-price {
  font-weight: 500;
  margin: 0 0 0.2em;
}

.grid-books .cta-card {
  margin: 0.2em 0 0.5em;
  padding: 1em 0.7em;
  width: 100%;
  box-shadow: none;
  font-size: 0.8em;
}

.grid-info-and-buttons {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 56%;
}
</style>
