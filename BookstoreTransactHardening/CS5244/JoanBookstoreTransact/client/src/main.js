import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/css/global.css";
import store, { CART_STORAGE_KEY, ORDER_DETAILS_STORAGE_KEY } from "./store";
import Vuelidate from "vuelidate";
import TreeView from "vue-json-tree-view";

Vue.use(Vuelidate);
Vue.use(TreeView);

Vue.config.productionTip = false;

const PriceFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
});

Vue.filter("asDollarsAndCents", function (cents) {
  return PriceFormatter.format(cents / 100.0);
});

Vue.filter("retrieveLast4DigitsOfCard", function (ccNumber) {
  var lastIdx = ccNumber.length - 1;
  var digits = "";
  for (var i = 0; i < 4; i++) {
    digits += ccNumber[lastIdx--];
  }
  return digits;
});

Vue.filter("transactionDateFormat", function (date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  var strTime = hours + ":" + minutes + ":" + seconds;
  return (
    date.getFullYear() +
    "-" +
    (date.getMonth() + 1) +
    "-" +
    date.getDate() +
    "  " +
    strTime
  );
});

Vue.filter("formatPhoneNumber", function (phoneNumber) {
  var firstTriplet = phoneNumber.substring(0, 3);
  var secondTriplet = phoneNumber.substring(3, 6);
  var lastFour = phoneNumber.substring(6, 10);
  return "(" + firstTriplet + ")" + " " + secondTriplet + "-" + lastFour;
});

Vue.filter("ccExpDateFormat", function (date) {
  return date.getMonth() + 1 + "-" + date.getFullYear();
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
    const orderDetailsString = sessionStorage.getItem(
      ORDER_DETAILS_STORAGE_KEY
    );
    if (orderDetailsString) {
      const orderDetailsData = JSON.parse(orderDetailsString);
      this.$store.commit("SET_ORDER_DETAILS", orderDetailsData);
    }
  },
}).$mount("#app");
