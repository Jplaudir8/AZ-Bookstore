import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/css/global.css";
import store, { CART_STORAGE_KEY } from "./store";
import Vuelidate from 'vuelidate'
import TreeView from 'vue-json-tree-view'

Vue.use(Vuelidate)
Vue.use(TreeView)

Vue.config.productionTip = false;

const PriceFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
});

Vue.filter("asDollarsAndCents", function (cents) {
  return PriceFormatter.format(cents / 100.0);
});

new Vue({
  router,
  store,
  render: function (h) {
    return h(App);
  },
  created() {
    const cartString = localStorage.getItem(CART_STORAGE_KEY);
    if (cartString) {
      const shoppingCart = JSON.parse(cartString);
      this.$store.commit("SET_CART", shoppingCart);
    }
  },
}).$mount("#app");
