import Vue from "vue";
import Vuex from "vuex";
import ApiService from "@/services/ApiService";
import { ShoppingCart } from "@/models/ShoppingCart";

Vue.use(Vuex);

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
    },
    SELECT_CATEGORY(state, newSelectedCategoryName) {
      state.selectedCategoryName = newSelectedCategoryName;
    },
    SET_SELECTED_CATEGORY_BOOKS(state, newSelectedCategoryBooks) {
      state.selectedCategoryBooks = newSelectedCategoryBooks;
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
