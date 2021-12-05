<template>
  <section class="home-page-content">
    <h1>
      <span>We have them all from A to Z.</span><br />
      <span>Your best bookstore of all times.</span>
    </h1>
    <button class="cta-button">
      <router-link to="../category/Business">Explore the Shelf</router-link>
    </button>

    <home-category-list></home-category-list>
  </section>
</template>

<script>
import HomeCategoryList from "@/components/HomeCategoryList";
export default {
  name: "Home",
  components: { HomeCategoryList },
};
</script>

<style>
.home-page-content {
  background-image: url(../assets/images/hero-img12.png);
  text-align: center;
  background-position: center top;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0.3em;

  flex-grow: 1;
  overflow: auto;
}

.home-page-content h1 {
  font-family: var(--secondary-font-family);
  font-weight: bolder;
  font-size: 2rem;
  margin: 2em auto 0.4em;
}

.home-page-content h1 span {
  background: black;
  opacity: 0.8;
  color: white;
  padding: 0.2em 0.5em;
  line-height: 1.7em;
  box-shadow: 0 4px 4px 0 var(--drop-shadow-1);
}

@media (max-width: 880px) and (min-width: 400px) {
  .home-page-content h1 {
    font-size: 1.5em;
  }

  .cta-button {
    font-size: 0.9em;
  }

  .secondary-button {
    font-size: 0.9em;
  }
}

@media (max-width: 980px) and (min-width: 880px) {
  .home-page-content h1 {
    font-size: 1.7em;
  }

  .cta-button {
    font-size: 1em;
  }
}

@media (max-width: 980px) {
  .home-page-content {
    overflow: unset;
  }
}

@media (min-width: 980px) {
  .cta-button {
    font-size: 1.1em;
  }
}
</style>
