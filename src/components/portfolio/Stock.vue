<template>
  <div class="col-sm-6 col-md-4">
    <div class="panel panel-info">
      <div class="panel-heading">
        <h3 class="panel-title">
          {{stock.name}}
          <small>(Price: {{stock.price}}) | Quantity: {{ stock.quantity }}</small>
        </h3>
      </div>
      <div class="panel-body">
        <div class="pull-left">
          <input
            class="form-control"
            type="number"
            placeholder="Quantity"
            v-model="quantity"
            :class="{danger: insufficientQuantity}"
          />
        </div>
        <div class="pull-right">
          <button
            class="btn btn-danger"
            @click="sellStock"
            :disabled="quantity <= 0 || insufficientQuantity"
          >{{insufficientQuantity ? 'Not enough' : 'Sell'}}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  computed: {
    insufficientQuantity() {
      return this.quantity > this.stock.quantity;
    }
  },
  methods: {
    ...mapActions({
      placeSellOrder: "sellStock" //mapiran na onaj iz store-a
    }),
    sellStock() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantity: Number(this.quantity)   //jer data iz nekog razloga pravi String umjesto Number
      };
      this.placeSellOrder(order); //umjesto this.$store.dispatch
      this.quantity = 0;
    }
  }
};
</script>

<style scoped>
.danger {
  border: 1px solid red;
}
</style>