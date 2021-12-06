<template>
  <div class="some-categories">
    <div class="a-category">
      <div>
        <template v-for="book in suggestedCategoryBooksA">
          <img
            :src="require('@/assets/images/books/' + bookImageFileName(book))"
            :key="book.bookId"
            :alt="book.title"
            :title="book.title"
          />
        </template>
      </div>
      <button class="secondary-button">
        <router-link :to="{ path: '../category/Best Seller' }"
          >Best Sellers</router-link
        >
      </button>
    </div>

    <div class="a-category">
      <div>
        <template v-for="book in suggestedCategoryBooksB">
          <img
            :src="require('@/assets/images/books/' + bookImageFileName(book))"
            :key="book.bookId"
            :alt="book.title"
            :title="book.title"
          />
        </template>
      </div>
      <button class="secondary-button">
        <router-link :to="{ path: '../category/On Sale' }">On Sale</router-link>
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "HomeCategoryList",
  created: function () {
    this.fetchSuggestedBooks();
  },
  methods: {
    bookImageFileName: function (book) {
      let name = book.title.toLowerCase();
      name = name.replace(/ /g, "-");
      name = name.replace(":", "");
      name = name.replace(".", "");
      name = name.replace("#", "");
      return `${name}.png`;
    },
    ...mapActions(["fetchSuggestedBooks"]),
  },
  computed: mapState(["suggestedCategoryBooksA", "suggestedCategoryBooksB"]),
};
</script>

<style>
.home-page-content .some-categories {
  display: flex;
  justify-content: space-between;
  margin: 1em 4em;
}

.home-page-content .some-categories .a-category {
  display: flex;
  flex-direction: column;
}

.home-page-content .some-categories img {
  margin: 1em 0.5em 0.5em;
}

.home-page-content .some-categories button {
  margin: 1em 0.5em;
}
@media (max-width: 970px) {
  .home-page-content .some-categories img {
    width: 110px;
  }
}
</style>
