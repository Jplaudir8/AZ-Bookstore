<template>
  <header>
    <div class="logo-and-categories">
      <div id="logo-and-name">
        <router-link to="/"
          ><img
            src="@/assets/images/site/bookstore-logo.png"
            id="bookshelf-logo"
        /></router-link>
        <router-link to="/"
          ><h1 id="bookshelf-name">A-Z Bookshelf</h1></router-link
        >
      </div>
      <div class="categories-btn-and-list">
        <button class="categories-btn">
          <i class="fas fa-caret-down"></i>
          Categories
        </button>
        <header-dropdown-menu></header-dropdown-menu>
      </div>
    </div>
    <div class="searchBox-user-cart">
      <header-search-bar></header-search-bar>

      <button class="user-btn">JP</button>

      <button class="cart-btn">
        <i class="fas fa-shopping-cart"></i>
        <span class="counter-badge">{{ $store.state.cart.numberOfItems }}</span>
      </button>
    </div>
  </header>
</template>

<script>
import HeaderDropdownMenu from "@/components/HeaderDropdown";
import HeaderSearchBar from "@/components/HeaderSearchBar";
export default {
  name: "AppHeader",
  components: { HeaderDropdownMenu, HeaderSearchBar },
  component: {
    HeaderDropdownMenu,
  },
};
</script>

<style>
header {
  background-color: var(--primary-color);
  display: flex;
  justify-content: space-between;
}

#bookshelf-name {
  color: white;
  font-family: var(--title-font-family);
  font-weight: normal;
  font-size: 1.5em; /* 24px */
  margin: 0.3em 0 0 0;
}

#bookshelf-logo {
  width: 100px;
}

#logo-and-name {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1.25em 2.5em 1.25em 2.5em;
}

.logo-and-categories {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.categories-btn,
.user-btn,
.cart-btn {
  background: transparent;
  box-shadow: 0px 0px 0px transparent;
  border: 0px solid transparent;
  text-shadow: 0px 0px 0px transparent;
  cursor: pointer;

  color: white;
  font-family: var(--secondary-font-family);
  font-weight: 700;
}

.categories-btn:hover {
  background: transparent;
  box-shadow: 0px 0px 0px transparent;
  border: 0px solid transparent;
  text-shadow: 0px 0px 0px transparent;
}

.categories-btn:active,
.user-btn:active,
.cart-btn:active {
  outline: none;
  border: none;
}

/* Categories Button */

.categories-btn {
  position: relative;
  padding: 0 0 0.2em 0;
}

.categories-btn .fa-caret-down {
  margin-right: 0.4em;
  padding: 0.4em 0.1em;
}

/* Searchbox */

.searchBox-user-cart {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 3em 0 0;
  width: 60%;
}

/* User and Cart Buttons */
.searchBox-user-cart .user-btn {
  margin-left: 1em;
  padding: 0.4em;
}

.searchBox-user-cart .cart-btn {
  margin-left: 0.7em;
  padding: 0.2em;
}

.searchBox-user-cart .user-btn {
  border: 1px solid white;
  border-radius: 0.3em;
  padding: 0.45em 1em;
}

.searchBox-user-cart .cart-btn {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 30px;
  height: 30px; */
  font-size: 1.4em;
}

.searchBox-user-cart .cart-btn .counter-badge {
  position: absolute;
  top: -10px;
  right: -10px;
  width: 22px;
  height: 22px;
  padding: 0.01em;
  background-color: var(--primary-color-dark);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.6em;
}

.categories-list ul li {
  display: inline-block;
  width: 100%;
  color: #000;
}

.logo-and-categories .categories-list {
  z-index: 2;
  position: absolute;
  visibility: hidden;
  border: 1px solid #144d98;
  background-color: white;
}

/* reminder: this action only worked because what we are hovering on(.categories-btn-and-list) is the parent of .categories-list */
.logo-and-categories .categories-btn-and-list:hover .categories-list {
  visibility: visible;
}

.logo-and-categories .categories-list li {
  padding: 0.8em 1em;
  font-size: 0.9em;
  width: 78.9%;
}

ul.categories-list li:not(.selected):hover {
  /* background-color: #eaeaea; */
  background-color: var(--secondary-background-color);
}

@media (max-width: 880px) {
  header {
    flex-direction: column;
    align-items: center;
  }

  .logo-and-categories {
    flex-direction: column;
  }

  .searchBox-user-cart {
    flex-direction: column;
    padding: 0 0 0 0;
  }

  .searchBox-user-cart .user-btn {
    margin: 0.8em 0 0.8em;
  }

  .searchBox-user-cart .cart-btn {
    margin: 0.4em 0 0.8em;
  }
}
</style>
