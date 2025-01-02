<script lang="jsx">
import { useBalanceStore } from "@/store/balance";
import { defineComponent } from "vue";

export default defineComponent({
  name: "AccountBalance",

  components: {},

  props: {},

  setup() {
    const incomeStore = useBalanceStore();

    return { incomeStore };
  },

  render() {
    return (
      <div class="account-balance">
        <div class="header">Account Balance</div>
        <div class="balance"></div>
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

  .header {
    width: 100%;
    height: 15%;
    align-content: center;
    color: white;
    border-bottom: 1px solid white;
  }

  .balance {
    color: white;
  }
}
</style>
