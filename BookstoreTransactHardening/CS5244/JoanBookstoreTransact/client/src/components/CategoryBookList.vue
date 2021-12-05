<template>
  <div class="grid-books">
    <template v-for="book in $store.state.selectedCategoryBooks">
      <category-book-list-item
        :book="book"
        :key="book.bookId"
      ></category-book-list-item>
    </template>
  </div>
</template>

<script>
import CategoryBookListItem from "./CategoryBookListItem";
export default {
  name: "CategoryBookList",
  components: {
    CategoryBookListItem,
  },
};
</script>

<style>
.grid-books {
  display: grid;
  justify-items: center;
  grid-template: 1fr 1fr / repeat(auto-fit, minmax(200px, 2fr));
  gap: 2em;
  padding: 0 5em 3em;
}
</style>
