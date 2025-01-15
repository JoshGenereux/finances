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

    return { currentBalance, balanceHistory };
  },

  render() {
    const { currentBalance, balanceHistory } = this;
    const header = (
      <div class="header">
        <div class="header__title">Account Balance:</div>
        <div class="header__amount">{currentBalance}</div>
      </div>
    );

    const nameColumn = (
      <div class="name-column">
        <div class="column-header">Name:</div>
        <ul class="balance-history">
          {balanceHistory.map((b, i) => (
            <li class="balance-history__line" key={`name-${i}`}>
              {b.name}
            </li>
          ))}
        </ul>
      </div>
    );

    const typeColumn = (
      <div class="type-column">
        <div class="column-header">Type:</div>
        <ul class="balance-history">
          {balanceHistory.map((b, i) => (
            <li class="balance-history__line" key={`type-${i}`}>
              {b.type}
            </li>
          ))}
        </ul>
      </div>
    );

    const amountColumn = (
      <div class="amount-column">
        <div class="column-header">Amount:</div>
        <ul class="balance-history">
          {balanceHistory.map((b, i) => (
            <li class="balance-history__line" key={`amount-${i}`}>
              $ {b.amount}
            </li>
          ))}
        </ul>
      </div>
    );

    return (
      <div class="account-balance">
        {header}
        <div class="balances-container">
          {nameColumn}
          {typeColumn}
          {amountColumn}
        </div>
      </div>
    );
  },
});
</script>

<style lang="scss" scoped>
.account-balance {
  width: 450px;
  height: 200px;
  border: 1px solid white;
  box-sizing: border-box;

  .header {
    width: 100%;
    height: 15%;
    padding-left: 5px;
    padding-right: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid white;
    color: white;

    &__amount {
      color: lightgreen;
    }
  }

  .balances-container {
    width: 100%;
    height: 85%;
    display: flex;
    justify-content: center;
    overflow: hidden;
  }

  .name-column,
  .type-column,
  .amount-column {
    width: 30%;
    height: fit-content;
  }

  .column-header {
    width: 100%;
    height: auto;
    color: white;
  }

  .balance-history {
    list-style-type: none;
    padding: 0;
    width: 100%;
    height: 100%;

    &__line {
      color: white;
    }
  }
}
</style>
