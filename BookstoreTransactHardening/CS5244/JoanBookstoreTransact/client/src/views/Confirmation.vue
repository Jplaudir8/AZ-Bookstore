<template>
  <div id="confirmation-view">
    <section v-if="!orderDetails">
      <h1>No order has been placed yet...</h1>
      <button class="cta-button cta-small-empty">
        <router-link :to="{ path: '../category/Business' }"
          >Continue Shopping</router-link
        >
      </button>
    </section>
    <div id="card" v-else>
      <img
        id="confirmation-check"
        src="@/assets/images/confirmation-check.png"
      />
      <h1>Thank you for your order!</h1>

      <p>
        Confirmation #:
        {{ orderDetails.order.confirmationNumber }}
      </p>
      <p>
        Time:
        {{ new Date(orderDetails.order.dateCreated) | transactionDateFormat }}
      </p>

      <div id="customer-info">
        <h3>Your Information</h3>
        <p>{{ orderDetails.customer.customerName }}</p>
        <p>{{ orderDetails.customer.address }}</p>
        <p>{{ orderDetails.customer.email }}</p>
        <p>
          {{ orderDetails.customer.phone | formatPhoneNumber }}
        </p>
        <p>
          **** **** ****
          {{ orderDetails.customer.ccNumber | retrieveLast4DigitsOfCard }}
          ({{ new Date(orderDetails.customer.ccExpDate) | ccExpDateFormat }})
        </p>
      </div>

      <h3>What you ordered</h3>
      <confirmation-table> </confirmation-table>

      <div id="totals-section">
        <div>
          <p>Subtotal:</p>
          <p>
            {{
              (orderDetails.order.amount - cart.surcharge) | asDollarsAndCents
            }}
          </p>
        </div>
        <div>
          <p>Surcharge:</p>
          <p>{{ cart.surcharge | asDollarsAndCents }}</p>
        </div>
        <div>
          <p>Total:</p>
          <p>
            {{ orderDetails.order.amount | asDollarsAndCents }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ConfirmationTable from "@/components/ConfirmationTable";
import { mapState } from "vuex";

export default {
  name: "Confirmation",
  components: { ConfirmationTable },
  computed: mapState(["orderDetails", "cart"]),
};
</script>

<style scoped>
h1 {
  margin: 0.7em 0.8em 0.9em;
  font-size: 1.3em;
}

#confirmation-view {
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

#card > p {
  margin: 0.25em 0;
}

#confirmation-check {
  margin: 0.5em 1em 1em;
  width: 50px;
}

#totals-section {
  display: flex;
  justify-content: end;
  width: 10em;
  margin-right: 1.5em;
  align-self: end;
  flex-direction: column;
  min-width: 140px;
}

#totals-section > div {
  display: flex;
  justify-content: space-between;
  margin: 0.2em 0;
}

#totals-section > div:last-child {
  font-weight: 500;
}

#customer-info {
  display: flex;
  flex-direction: column;
  align-self: start;
  margin: 0.9em 0;
}

#customer-info > p {
  margin: 0.15em 0;
}

section {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.6em;
}

section h1 {
  margin: 1em;
  line-height: 1.5em;
  margin: 6em 0.4em 3em;
  font-size: 1em;
}
</style>
