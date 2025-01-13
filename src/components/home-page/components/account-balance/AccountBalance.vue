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

    console.log(balanceStore.accountBalance);

    return { currentBalance, balanceHistory };
  },

  render() {
    return (
      <div class="account-balance">
        <div class="header">Account Balance History</div>
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

<style lang="css" scoped>
.account-balance {
  width: 450px;
  height: 200px;
  border: 1px solid white;
  box-sizing: border-box;

  .header {
    width: 100%;
    height: 15%;
    align-content: center;
    color: white;
    border-bottom: 1px solid white;
  }

  .balances-container {
    width: 100%;
    height: 85%;
    padding: 10px 10px;

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
}
</style>
