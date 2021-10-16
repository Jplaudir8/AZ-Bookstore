<template>
  <ul class="categories-list">
    <router-link to="../category/best-sellers" tag="li"
      >Best Sellers</router-link
    >
    <router-link to="../category/on-sale" tag="li">On Sale</router-link>
    <router-link to="../category/business" tag="li">Business</router-link>
    <router-link to="../category/mystery" tag="li">Mystery</router-link>
    <router-link to="../category/science-fiction" tag="li"
      >Science Fiction</router-link
    >
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
