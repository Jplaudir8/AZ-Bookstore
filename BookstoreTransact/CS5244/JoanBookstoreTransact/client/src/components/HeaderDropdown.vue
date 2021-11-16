<template>
  <ul class="categories-list">
    <template v-for="category in $store.state.categories">
      <router-link
        :key="category.categoryId"
        :to="'../category/' + category.name"
        tag="li"
      >
        {{ category.name }}
      </router-link>
    </template>
  </ul>
</template>

<script>
export default {
  name: "HeaderDropdownMenu",
};
</script>

<style>
li {
  cursor: pointer;
}
</style>
