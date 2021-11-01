import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/css/global.css";
import store from "./store";

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
}).$mount("#app");
