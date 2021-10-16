<template>
  <div class="searchBox">
    <form action="#">
      <input
        type="search"
        name=""
        id=""
        placeholder="Search by author, title, ISBN"
      />
      <input type="submit" value="" />
    </form>
  </div>
</template>

<script>
export default {
  name: "HeaderSearchBar",
};
</script>

<style scoped>
input[type="text"] {
  margin: 0.5em 0;
  width: 12em;
}
</style>
