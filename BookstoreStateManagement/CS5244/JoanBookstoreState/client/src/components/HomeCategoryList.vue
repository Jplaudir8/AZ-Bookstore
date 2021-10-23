<template>
  <div class="some-categories">
    <div class="a-category">
      <div>
        <template v-for="book in categoryAbooks">
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
        <template v-for="book in categoryBbooks">
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
import ApiService from "@/services/ApiService";

export default {
  name: "HomeCategoryList",
  data: function () {
    return {
      categoryAbooks: [],
      categoryBbooks: [],
    };
  },
  created: function () {
    this.fetchSelectedBooksLimit2("Best Seller", "On Sale");
  },
  methods: {
    fetchSelectedBooksLimit2(categoryAName, categoryBName) {
      const vm = this; // vm stands for view model
      ApiService.fetchSuggestedBooksLimit2(categoryAName)
        .then((data) => {
          console.log("Data: " + data);
          vm.categoryAbooks = data;
        })
        .catch((reason) => {
          console.log("Error: " + reason);
        });

      ApiService.fetchSuggestedBooksLimit2(categoryBName)
        .then((data) => {
          console.log("Data: " + data);
          vm.categoryBbooks = data;
        })
        .catch((reason) => {
          console.log("Error: " + reason);
        });
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
