<template>
  <nav>
    <router-link to="../category/best-sellers" class="nav-link"
      >Best Sellers</router-link
    >
    <router-link to="../category/on-sale" class="nav-link">On Sale</router-link>
    <router-link to="../category/business" class="nav-link selected"
      >Business</router-link
    >
    <router-link to="../category/mystery" class="nav-link">Mystery</router-link>
    <router-link to="../category/science-fiction" class="nav-link"
      >Science Fiction</router-link
    >
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
  background-color: var(--primary-color-dark);
  color: var(--secondary-background-color);
}

nav .selected {
  color: var(--primary-color);
  border-bottom: 3.5px solid var(--primary-color);
}
</style>
