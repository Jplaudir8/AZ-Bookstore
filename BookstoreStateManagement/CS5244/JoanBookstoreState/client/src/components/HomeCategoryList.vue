<template>
  <div class="some-categories">
    <div class="a-category">
      <div>
        <template v-for="book in $store.state.suggestedCategoryBooksA">
          <img
            :src="require('@/assets/images/books/' + bookImageFileName(book))"
            :key="book.bookId"
            :alt="book.title"
            :title="book.title"
          />
        </template>
      </div>
      <button class="secondary-button">
        <router-link to="../category/Best Seller">Best Sellers</router-link>
      </button>
    </div>

    <div class="a-category">
      <div>
        <template v-for="book in $store.state.suggestedCategoryBooksB">
          <img
            :src="require('@/assets/images/books/' + bookImageFileName(book))"
            :key="book.bookId"
            :alt="book.title"
            :title="book.title"
          />
        </template>
      </div>
      <button class="secondary-button">
        <router-link to="../category/On Sale">On Sale</router-link>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeCategoryList",
  created: function () {
    this.$store.dispatch("fetchSuggestedBooks");
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
  },
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
