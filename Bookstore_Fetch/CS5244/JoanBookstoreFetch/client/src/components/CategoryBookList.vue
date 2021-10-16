<template>
  <div class="grid-books">
    <category-book-list-item :book="books[0]"></category-book-list-item>
    <category-book-list-item :book="books[1]"></category-book-list-item>
    <category-book-list-item :book="books[2]"></category-book-list-item>
    <category-book-list-item :book="books[3]"></category-book-list-item>
    <category-book-list-item :book="books[4]"></category-book-list-item>
    <category-book-list-item :book="books[5]"></category-book-list-item>
    <category-book-list-item :book="books[6]"></category-book-list-item>
    <category-book-list-item :book="books[7]"></category-book-list-item>
  </div>
</template>

<script>
import CategoryBookListItem from "./CategoryBookListItem";

export default {
  name: "CategoryBookList",
  props: {
    books: {
      type: Array,
      required: true,
    },
  },
  components: {
    CategoryBookListItem,
  },
};
</script>

<style>
.grid-books {
  display: grid;
  justify-items: center;
  /* grid-template: 1fr 1fr / repeat(4, 2fr); */
  grid-template: 1fr 1fr / repeat(auto-fit, minmax(200px, 2fr));
  gap: 2em;
  padding: 0 5em 3em;
}
</style>
