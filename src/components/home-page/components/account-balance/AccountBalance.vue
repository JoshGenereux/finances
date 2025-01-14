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
        <div></div>
      </div>
    );

    const typeColumn = (
      <div class="type-column">
        <div></div>
      </div>
    );

    const amountColumn = (
      <div class="amount-column">
        <div></div>
      </div>
    );

    return (
      <div class="account-balance">
        {header}
        <div class="balances-container">
          <ul class="balance-history">
            {this.balanceHistory.map((entry, index) => (
              <li key="index" class="balance-line">
                <div class="name">{entry.name}</div>
                <div class="type">{entry.type}</div>
                <div class="amount">{entry.amount}</div>
              </li>
            ))}
          </ul>
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
    padding: 5% 5%;

    .balance-history {
      list-style-type: none;
      padding: 0;

      .balance-line {
        display: flex;
        justify-content: space-around;
        color: white;
      }
    }
  }

  .name-column {
    width: 30%;
    height: 100%;
  }

  .type-column {
    width: 30%;
    height: 100%;
  }

  .amount-column {
    width: 30%;
    height: 100%;
  }
}
</style>
