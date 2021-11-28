<template>
  <div id="confirmationView">
    <section v-if="!$store.state.orderDetails" id="confirmation-invalid">
      <h1>Nothing was ordered</h1>
    </section>
    <div id="card" v-else>
      <img
        id="confirmation-check"
        src="@/assets/images/confirmation-check.png"
      />
      <h1>Thank you for your order!</h1>

      <p class="top-info">
        Confirmation #:
        {{ $store.state.orderDetails.order.confirmationNumber }}
      </p>
      <p class="top-info">
        Time:
        {{
          transactionDateFormat(
            new Date($store.state.orderDetails.order.dateCreated)
          )
        }}
      </p>

      <div id="customerInfo">
        <h3>Your Information</h3>
        <p>{{ $store.state.orderDetails.customer.customerName }}</p>
        <p>{{ $store.state.orderDetails.customer.address }}</p>
        <p>{{ $store.state.orderDetails.customer.email }}</p>
        <p>
          {{ formatPhoneNumber($store.state.orderDetails.customer.phone) }}
        </p>
        <p>
          **** **** ****
          {{ retrieveLast4Digits($store.state.orderDetails.customer.ccNumber) }}
          ({{
            ccExpDateFormat(
              new Date($store.state.orderDetails.customer.ccExpDate)
            )
          }})
        </p>
      </div>

      <h3>What you ordered</h3>
      <confirmation-table> </confirmation-table>

      <div id="total-section">
        <div id="totals">
          <div class="totals-child">
            <p>Subtotal:</p>
            <p>
              {{
                ($store.state.orderDetails.order.amount -
                  $store.state.cart.surcharge)
                  | asDollarsAndCents
              }}
            </p>
          </div>
          <div class="totals-child">
            <p>Surcharge:</p>
            <p>{{ $store.state.cart.surcharge | asDollarsAndCents }}</p>
          </div>
          <div class="totals-child bold-font">
            <p>Total:</p>
            <p>
              {{ $store.state.orderDetails.order.amount | asDollarsAndCents }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ConfirmationTable from "@/components/ConfirmationTable";
// import mapState from "vuex";

export default {
  name: "Confirmation",
  components: { ConfirmationTable },
  methods: {
    transactionDateFormat(date) {
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
    },
    ccExpDateFormat(date) {
      return date.getMonth() + 1 + "-" + date.getFullYear();
    },
    retrieveLast4Digits(ccNumber) {
      var lastIdx = ccNumber.length - 1;
      var digits = "";
      for (var i = 0; i < 4; i++) {
        digits += ccNumber[lastIdx--];
      }
      return digits;
    },
    getSubtotal: function () {
      const subtotal = this.$store.state.cart.items.reduce(
        (accumulator, item) => {
          return accumulator + item.book.price * item.quantity;
        },
        0
      );
      return subtotal;
    },
    formatPhoneNumber(phoneNumber) {
      var firstTriplet = phoneNumber.substring(0, 3);
      var secondTriplet = phoneNumber.substring(3, 6);
      var lastFour = phoneNumber.substring(6, 10);
      return "(" + firstTriplet + ")" + " " + secondTriplet + "-" + lastFour;
    },
  },
  // computed: {
  //   ...mapState(["orderDetails"]),
  // },
};
</script>

<style scoped>
h1 {
  margin: 0.7em 0.8em 0.9em;
  font-size: 1.3em;
}

#confirmationView {
  flex-grow: 1;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h3 {
  align-self: start;
  margin: 0.8em 0;
}

#card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 2.25em 2em;
  padding: 2em;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);
}

#confirmation-check {
  margin: 0.5em 1em 1em;
  width: 50px;
}

#total-section {
  display: flex;
  justify-content: end;
  width: 100%;
  margin-right: 3em;
}

#totals {
  display: flex;
  flex-direction: column;
  min-width: 140px;
}

.totals-child {
  display: flex;
  justify-content: space-between;
  margin: 0.2em 0;
}

#customerInfo {
  display: flex;
  flex-direction: column;
  align-self: start;
  margin: 0.9em 0;
}

#customerInfo > p {
  margin: 0.15em 0;
}

.top-info {
  margin: 0.25em 0;
}

.bold-font {
  font-weight: 500;
}

#confirmation-invalid h1 {
  font-size: 1.3em;
}
</style>
