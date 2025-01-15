<script lang="jsx">
import { useBalanceStore } from "@/store/balance";
import { computed, defineComponent, ref } from "vue";

export default defineComponent({
  name: "RecentExpenses",

  components: {},

  props: {},

  setup(props) {
    const balanceStore = useBalanceStore();
    const balanceHistory = computed(() => balanceStore.balanceHistory);
    const purchases = computed(() => {
      return balanceHistory.value.filter((transaction) => {
        return transaction.amount < 0;
      });
    });

    return { balanceHistory, purchases };
  },

  render() {
    const columnNames = (
      <div class="column-names">
        <div class="name">Name</div>
        <div class="type">Type</div>
        <div class="amount">Amount</div>
      </div>
    );

    console.log(this.purchases);

    const transaction = (
      <div class="transaction-container">
        {this.purchases.map((purchase, index) => (
          <div class="transaction">
            <div class="transaction__name">{purchase.name}</div>
            <div class="transaction__type">{purchase.type}</div>
            <div class="transaction__amount">
              $ &nbsp;
              <div class="amount">{purchase.amount}</div>
            </div>
          </div>
        ))}
      </div>
    );

    return (
      <div class="recent-expenses">
        <div class="header">Recent Expenses</div>
        {columnNames}
        {transaction}
      </div>
    );
  },
});
</script>

<style lang="scss" scoped>
.recent-expenses {
  width: 550px;
  height: 200px;
  border: 2px solid #434343;
  border-radius: 15px;
  box-sizing: border-box;
  background-color: #2b2b2b;
  padding: 10px;

  .header {
    height: 15%;
    align-content: center;
    color: white;
  }

  .column-names {
    width: 100%;
    height: 10%;
    display: flex;
    margin-top: 5px;
    margin-bottom: 5px;
    border-bottom: 2px solid #434343;
    .name {
      width: 45%;
      height: auto;
      color: white;
      font-size: 10px;
    }
    .type {
      width: 35%;
      height: auto;
      color: white;
      font-size: 10px;
    }
    .amount {
      color: white;
      width: 20%;
      height: auto;
      font-size: 10px;
    }
  }

  .transaction-container {
    width: 100%;
    height: 70%;

    .transaction {
      width: 100%;
      height: auto;
      display: flex;

      &__name {
        width: 45%;
        color: white;
      }
      &__type {
        width: 35%;
        color: white;
      }
      &__amount {
        display: flex;
        color: red;
      }

      &:hover {
        cursor: pointer;
        background-color: #434343;
      }
    }
  }
}
</style>
