<template>
  <div class="checkout-page">
    <section class="checkout-page-body" v-if="!cart.empty">
      <form @submit.prevent="submitOrder">

        <div class="name-section">
          <div>
            <label for="name">Name</label>
            <input
              type="text"
              size="20"
              id="name"
              name="name"
              v-model.lazy="$v.name.$model"
            />
          </div>
          <template v-if="$v.name.$error">
            <span class="error" v-if="!$v.name.required">Name is required</span>
            <span class="error" v-else-if="!$v.name.minLength">
              <em>Name must have at least
              {{ $v.name.$params.minLength.min }} letters.</em>
            </span>
            <span class="error" v-else-if="!$v.name.maxLength">
              <em>Name can have at most
                {{ $v.name.$params.maxLength.max }} letters.</em>
            </span>
            <span class="error" v-else><em>An unexpected error occurred.</em></span>
          </template>
        </div>


        <div class="address-section">
          <div>
            <label for="address">Address</label>
            <input
                type="text"
                size="20"
                id="address"
                name="address"
                v-model.lazy="$v.address.$model"
            />
          </div>
          <template v-if="$v.address.$error">
            <span class="error" v-if="!$v.address.required"><em>Address is required</em></span>
            <span class="error" v-else-if="!$v.address.minLength">
              <em>Address must have at least
                {{ $v.name.$params.minLength.min }} letters.</em>
            </span>
            <span class="error" v-else-if="!$v.name.maxLength">
              <em>Address can have at most
                {{ $v.name.$params.maxLength.max }} letters.</em>
            </span>
            <span class="error" v-else><em>An unexpected error occurred. </em></span>
          </template>
        </div>



        <div class="phone-section">
          <div>
            <label for="phone">Phone</label>
            <input
              class="textField"
              type="text"
              size="20"
              id="phone"
              name="phone"
              v-model.lazy="$v.phone.$model"
            />
          </div>
          <template v-if="$v.phone.$error">
            <span class="error" v-if="!$v.phone.required"><em>Phone is required</em></span>
            <span class="error" v-else-if="!$v.phone.phone">
              <em>Please enter a valid phone number.</em>
            </span>
            <span class="error" v-else><em>An unexpected error occurred.</em></span>
          </template>
        </div>



        <div class="email-section">
          <div>
            <label for="email">Email</label>
            <input type="text" size="20" id="email" name="email" v-model.lazy="$v.email.$model"/>
          </div>
          <template v-if="$v.email.$error">
            <span class="error" v-if="!$v.email.required"><em>E-mail is required</em></span>
            <span class="error" v-else-if="!$v.email.email">
              <em>Please enter a valid email address.</em>
            </span>
            <span class="error" v-else><em>An unexpected error occurred.</em></span>
          </template>
        </div>




        <div class="credit-card-section">
          <div>
            <label for="ccNumber">Credit card</label>
            <input type="text" size="20" id="ccNumber" name="ccNumber" v-model.lazy="$v.ccNumber.$model"/>
          </div>
          <template v-if="$v.ccNumber.$error">
            <span class="error" v-if="!$v.ccNumber.required"><em>A credit card is required</em></span>
            <span class="error" v-else-if="!$v.ccNumber.creditCard">
              <em>Must enter a valid card number.</em>
            </span>
            <span class="error" v-else><em> An unexpected error occurred. </em></span>
          </template>
        </div>



        <div>
          <div class="exp-date-section">
            <label>Exp Date</label>
            <select v-model="ccExpiryMonth">
              <option
                v-for="(month, index) in months"
                :key="index"
                :value="index + 1"
              >
                {{ month }} ({{ index + 1 }})
              </option>
            </select>
            <span class="exp-date-separator">/</span>
            <select>
              <option
                  v-for="(year, index) in 15" :key="index" :value="index"
              >
                {{ yearFrom(index) }}
              </option>
            </select>
          </div>
        </div>

        <input
          type="submit"
          name="submit"
          class="button"
          :disabled="checkoutStatus == 'PENDING'"
          value="Complete Purchase"
        />
        <!-- TODO (style): The submit button should not take up the entire width of the form. -->
        <!-- TODO (style): The submit button should be styled consistent with your own site. -->
      </form>


      <!-- TODO (style): Fix error message placement so they nearer to the correct fields. -->
      <!-- TODO (style): HINT: Use another <div> and label, input, and error, and use flexbox to style. -->

      <div
        style="
          border: 1px solid black;
          padding: 1em;
          margin-left: 1em;
          text-align: left;
        "
      >
        <tree-view
          :data="$v"
          :options="{ rootObjectKey: '$v', maxDepth: 1 }"
        ></tree-view>
      </div>

      <!-- TODO: Display the cart total, subtotal and surcharge. -->
      Your credit card will be charged {{ (cart.subtotal + cart.surcharge) | asDollarsAndCents }}
      <section v-show="checkoutStatus != ''" class="checkoutStatusBox">
        <div v-if="checkoutStatus == 'ERROR'">
          Error: Please fix the problems above and try again.
        </div>

        <div v-else-if="checkoutStatus == 'PENDING'">Processing...</div>

        <div v-else-if="checkoutStatus == 'OK'">Order placed...</div>

        <div v-else>
          <!-- "checkoutStatus == 'SERVER_ERROR'" -->
          An unexpected error occurred, please try again.
        </div>
      </section>
    </section>

    <section v-else class="empty-cart-checkout-page">
      <h1>You need to add an item to your cart to checkout, explore what we have!</h1>
      <button class="cta-button cta-small-empty">
        <router-link to="../category/Business">Continue Shopping</router-link>
      </button>
    </section>
  </div>
</template>

<script>
import {
  required,
  email,
  minLength,
  maxLength,
} from "vuelidate/lib/validators";

import isCreditCard from "validator/lib/isCreditCard";
import isMobilePhone from "validator/lib/isMobilePhone";

const phone = value => isMobilePhone(value, "en-US");
const creditCard = value => isCreditCard(value);

export default {
  data() {
    return {
      name: "",
      address: "",
      phone: "",
      email: "",
      ccNumber: "",
      ccExpiryMonth: new Date().getMonth() + 1,
      ccExpiryYear: new Date().getFullYear(),
      checkoutStatus: "",
    };
  },
  validations: {
    name: {
      required,
      minLength: minLength(4),
      maxLength: maxLength(45),
    },
    address: {
      required,
      minLength: minLength(4),
      maxLength: maxLength(45),
    },
    phone: {
      required,
      phone
    },
    email: {
      required,
      email,
    },
    ccNumber: {
      required,
      creditCard
    }

  },

  computed: {
    cart() {
      return this.$store.state.cart;
    },
    months() {
      return [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
    },
  },

  methods: {
    submitOrder() {
      console.log("Submit order");
    },

    /* NOTE: For example yearFrom(0) == 2021 */
    yearFrom(index) {
      return new Date().getFullYear() + index;
    },
  },
};
</script>

<style scoped>

.exp-date-section {
  display: flex;
  align-items: center;
}

.exp-date-section .exp-date-separator {
  margin: .2em .4em .2em .6em;
}

.name-section {
  display: flex;
  flex-direction: column;

}

.empty-cart-checkout-page {
  text-align: center;
  font-size: 1.6em;
}

.empty-cart-checkout-page h1 {
  line-height: 1.5em;
  margin: 3em .4em;
}

.checkout-page {

  flex-grow: 1;
  overflow: auto;
}
.checkout-page-body {
  display: flex;
  flex-direction: column;
  padding: 1em;
  align-items: center;
}

form {
  display: flex;
  flex-direction: column;
}

form > div {
  text-align: right;
  margin: .6em .3em;
}

form > div > div {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 0.2em;
}

form > div > div > input,
form > div > div > select {
  background-color: #f3f3f3;

  margin: .5em 0 .5em .5em;
  padding: 2px 10px;
  border: 1px solid #8a8b8d;
  border-radius: .3em;
  height: 1.8em;
  min-width: 132px;
}

form > div > .error {
  color: red;
}

.checkoutStatusBox {
  margin: 1em;
  padding: 1em;
  text-align: center;
}
</style>
