<script lang="jsx">
import { useModalStore } from "@/store/modal";
import { defineComponent } from "vue";

export default defineComponent({
  name: "access",

  props: {},

  setup() {
    const modalStore = useModalStore();

    function handleIncome() {
      modalStore.pickType("Income");
      modalStore.updateActivity();
    }

    function handleExpense() {
      modalStore.pickType("Expense");
      modalStore.updateActivity();
    }
    return { handleIncome, handleExpense };
  },

  render() {
    return (
      <div class="access">
        <div class="header">Quick Access</div>
        <div class="buttons-container">
          <button class="button" onClick={this.handleIncome}>
            Add Income
          </button>
          <button class="button" onClick={this.handleExpense}>
            Add Expense
          </button>
        </div>
      </div>
    );
  },
});
</script>

<style lang="scss" scoped>
.access {
  width: 1075px;
  height: 150px;
  border: solid white 1px;

  .header {
    height: 20%;
    width: 100%;
    border-bottom: 1px white solid;
    color: white;
    align-content: center;
    padding-left: 5px;
  }

  .buttons-container {
    display: flex;
    height: 80%;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .button {
      font-size: 25px;
      color: white;
      background-color: transparent;
    }
  }
}
</style>
