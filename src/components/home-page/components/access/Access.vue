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
  border: 2px solid #434343;
  border-radius: 15px;
  background-color: #2b2b2b;

  .header {
    height: 20%;
    width: 100%;
    border-bottom: 2px solid #434343;
    color: white;
    align-content: center;
    padding-left: 5px;
  }

  .buttons-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 80%;
    width: 100%;

    .button {
      font-size: 25px;
      color: white;
      background-color: transparent;
      cursor: pointer;
      transition: all 0.3s ease;
      border-radius: 10px;
      border: 2px solid #434343;
      height: 40%;
      width: 20%;

      &:hover {
        background-color: #434343;
        border: 2px solid #434343;
      }
    }
  }
}
</style>
