<template>
  <div class="some-categories">
    <div class="a-category">
      <div>
        <img
          src="@/assets/images/books/book-1.png"
          alt="101 essays that will change the way you think"
          title="101 essays that will change the way you think"
        />
        <img
          src="@/assets/images/books/book-2.png"
          alt="comedy comedy comedy drama: a memoir"
          title="comedy comedy comedy drama: a memoir"
        />
      </div>
      <button class="secondary-button">
        <router-link to="../category/best-sellers">Best Sellers</router-link>
      </button>
    </div>

    <div class="a-category">
      <div>
        <img
          src="@/assets/images/books/book-3.png"
          alt="grit: the power of passion and perseverance"
          title="grit: thepower of passion and perseverance"
        />
        <img
          src="@/assets/images/books/book-4.png"
          alt="atomic habits"
          title="atomic habits"
        />
      </div>
      <button class="secondary-button">
        <router-link to="../category/on-sale">On Sale</router-link>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeCategoryList",
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
