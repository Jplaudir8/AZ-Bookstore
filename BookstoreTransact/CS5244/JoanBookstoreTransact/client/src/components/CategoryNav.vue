<template>
  <nav>
    <template v-for="category in $store.state.categories">
      <router-link
        v-if="category.name === $store.state.selectedCategoryName"
        :key="category.categoryId"
        :to="'/category/' + category.name"
        class="nav-link selected"
      >
        {{ category.name }}
      </router-link>

      <router-link
        v-else
        :key="category.categoryId"
        :to="'/category/' + category.name"
        class="nav-link"
      >
        {{ category.name }}
      </router-link>
    </template>
  </nav>
</template>

<script>
export default {
  name: "CategoryNav",
};
</script>

<style>
nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 0 2em;
  padding: 0 3em;
  background-color: var(--secondary-background-color);
}

nav .nav-link {
  padding: 1em 1em;
}

nav .nav-link:not(.selected):hover {
  /* so that underlined color doesnt change for selected item */
  transition: background-color 160ms ease-in;
  background-color: var(--primary-color-dark);
  color: var(--secondary-background-color);
}

nav .selected {
  color: var(--primary-color);
  border-bottom: 3.5px solid var(--primary-color);
}
</style>
