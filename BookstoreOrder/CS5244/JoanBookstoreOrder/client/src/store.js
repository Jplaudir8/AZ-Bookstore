import Vue from "vue";
import Vuex from "vuex";
import ApiService from "@/services/ApiService";
import { ShoppingCart } from "@/models/ShoppingCart";

Vue.use(Vuex);
export const CART_STORAGE_KEY = "cart";
export default new Vuex.Store({
  state: {
    categories: [],
    selectedCategoryName: "",
    selectedCategoryBooks: [],
    cart: new ShoppingCart(),
    suggestedCategoryBooksA: [],
    suggestedCategoryBooksB: [],
  },
  mutations: {
    SET_CATEGORIES(state, newCategories) {
      state.categories = newCategories;
    },
    ADD_TO_CART(state, book) {
      state.cart.addItem(book, 1);
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(this.state.cart));
    },
    SELECT_CATEGORY(state, newSelectedCategoryName) {
      state.selectedCategoryName = newSelectedCategoryName;
    },
    SET_SELECTED_CATEGORY_BOOKS(state, newSelectedCategoryBooks) {
      state.selectedCategoryBooks = newSelectedCategoryBooks;
    },
    UPDATE_CART(state, { book, quantity }) {
      state.cart.update(book, quantity);
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(this.state.cart));
    },
    SET_CART(state, shoppingCart) {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(shoppingCart));
      let newCart = new ShoppingCart();
      shoppingCart.items.forEach((item) => {
        newCart.addItem(item.book, item.quantity);
      });
      state.cart = newCart;
    },
    CLEAR_CART() {
      this.state.cart.clear();
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(this.state.cart));
    },
    SET_SUGGESTED_CATEGORIES_A(state, suggestedCategoryBooksA) {
      state.suggestedCategoryBooksA = suggestedCategoryBooksA;
    },
    SET_SUGGESTED_CATEGORIES_B(state, suggestedCategoryBooksB) {
      state.suggestedCategoryBooksB = suggestedCategoryBooksB;
    },
  },
  actions: {
    fetchCategories(context) {
      ApiService.fetchCategories()
        .then((categories) => {
          console.log("Data: " + categories);
          context.commit("SET_CATEGORIES", categories);
        })
        .catch((reason) => {
          console.log("Error: " + reason);
        });
    },
    addToCart(context, book) {
      context.commit("ADD_TO_CART", book);
    },
    selectCategory(context, categoryName) {
      context.commit("SELECT_CATEGORY", categoryName);
    },
    updateCart(context, { book, quantity }) {
      context.commit("UPDATE_CART", { book, quantity });
    },
    clearCart(context) {
      context.commit("CLEAR_CART");
    },
    fetchSelectedCategoryBooks(context) {
      ApiService.fetchSelectedCategoryBooks(this.state.selectedCategoryName)
        .then((selectedBooks) => {
          console.log("Data: " + selectedBooks);
          context.commit("SET_SELECTED_CATEGORY_BOOKS", selectedBooks);
        })
        .catch((reason) => {
          console.log("Error: " + reason);
        });
    },
    fetchSuggestedBooks(context) {
      ApiService.fetchSuggestedBooksLimit2("Best Seller")
        .then((suggestedCategory) => {
          console.log("Data: " + suggestedCategory);
          context.commit("SET_SUGGESTED_CATEGORIES_A", suggestedCategory);
        })
        .catch((reason) => {
          console.log("Error: " + reason);
        });

      ApiService.fetchSuggestedBooksLimit2("On Sale")
        .then((suggestedCategory) => {
          console.log("Data: " + suggestedCategory);
          context.commit("SET_SUGGESTED_CATEGORIES_B", suggestedCategory);
        })
        .catch((reason) => {
          console.log("Error: " + reason);
        });
    },
  },
});
