<script lang="jsx">
import { useBalanceStore } from "@/store/balance";
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "AccountBalance",

  components: {},

  props: {},

  setup() {
    const balanceStore = useBalanceStore();
    const currentBalance = computed(() => balanceStore.accountBalance);
    const balanceHistory = computed(() => balanceStore.balanceHistory);

    const showNegativeBalance = computed(() =>
      currentBalance.value < 0 ? "negative" : "positive"
    );

    return { currentBalance, balanceHistory, showNegativeBalance };
  },

  render() {
    function negativeTransaction(num) {
      return num < 0 ? "negative" : "positive";
    }

    const { currentBalance, balanceHistory } = this;

    const header = (
      <div class="header">
        <div class="header__title">Account Balance:</div>
        <div class={["header__amount", `${this.showNegativeBalance}`]}>
          {currentBalance}
        </div>
      </div>
    );

    const columnNames = (
      <div class="column-names">
        <div class="name">Name</div>
        <div class="type">Type</div>
        <div class="amount">Amount</div>
      </div>
    );

    const transaction = (
      <div class="transaction-container">
        {balanceHistory.map((balance, index) => (
          <div class="transaction">
            <div class="transaction__name">{balance.name}</div>
            <div class="transaction__type">{balance.type}</div>
            <div class="transaction__amount">
              $ &nbsp;
              <div class={`amount-${negativeTransaction(balance.amount)}`}>
                {balance.amount}
              </div>
            </div>
          </div>
        ))}
      </div>
    );

    return (
      <div class="account-balance">
        {header}
        {columnNames}
        {transaction}
      </div>
    );
  },
});
</script>

<style lang="scss" scoped>
.account-balance {
  width: 500px;
  height: 200px;
  border: 2px solid #434343;
  border-radius: 15px;
  box-sizing: border-box;
  background-color: #2b2b2b;
  padding: 10px;

  .header {
    width: 100%;
    height: 15%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;

    &__amount {
      &.positive {
        color: lightgreen;
      }
      &.negative {
        color: red;
      }
    }
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
        color: white;
        .amount-positive {
          color: lightgreen;
        }
        .amount-negative {
          color: red;
        }
      }

      &:hover {
        cursor: pointer;
        background-color: #434343;
      }
    }
  }
}
</style>
