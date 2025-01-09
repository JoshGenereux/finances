<script lang="jsx">
import { useBalanceStore } from "@/store/balance";
import { useModalStore } from "@/store/modal";
import { computed, defineComponent, reactive, ref } from "vue";

export default defineComponent({
  name: "AddModal",

  props: {
    name: {
      type: String,
      default: "",
    },
  },

  setup(props) {
    const modalStore = useModalStore();
    const balanceStore = useBalanceStore();

    const currentDate = ref(new Date());
    const modalName = computed(() => props.name || modalStore.name);

    const formData = reactive({
      name: "",
      amount: 0,
      note: "",
      date: currentDate.value.toString(),
      type: "",
    });

    function handleExit() {
      return modalStore.updateActivity();
    }

    function handleSubmit(e) {
      e.preventDefault();
      console.log(formData);
      balanceStore.setCurrentTransaction(
        formData.name,
        formData.amount,
        formData.type,
        formData.note,
        formData.date
      );
      balanceStore.pushToHistory();
      balanceStore.resetTransaction();
      console.log(balanceStore.balanceHistory);
      console.log(balanceStore.$state.accountBalance);
    }

    return { modalName, handleExit, handleSubmit, formData };
  },

  render() {
    return (
      <div class="add-modal">
        <div class="modal-background" onClick={this.handleExit}></div>
        <div class="modal-container">
          <div class="name">New {this.modalName}</div>

          <form class="modal-form" onSubmit={this.handleSubmit}>
            <div class="form-input">
              <div class="input-name">name</div>
              <input
                class="input"
                type="text"
                placeHolder="Enter Name"
                v-model={this.formData.name}
              ></input>
            </div>
            <div class="form-input">
              <div class="input-name">amount</div>
              <input
                class="input"
                type="number"
                placeHolder="$0"
                v-model={this.formData.amount}
              ></input>
            </div>
            <div class="form-input">
              <div class="input-name">Note</div>
              <input
                class="input"
                type="text"
                placeHolder="Enter Note"
                v-model={this.formData.note}
              ></input>
            </div>
            <div class="form-input">
              <div class="input-name">Date: </div>
              <div class="input-name">{this.formData.date}</div>
            </div>
            <div class="form-input">
              <div class="input-name">Type</div>
              <select>
                <option value="" disabled>
                  Select Type
                </option>
                <option value="salary">Salary</option>
                <option value="Freelance">Freelance</option>
                <option value="Investment">Investment</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <button>Submit</button>
          </form>
        </div>
      </div>
    );
  },
});
</script>

<style lang="scss" scoped>
.add-modal {
  width: 100%;
  height: 100%;
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .modal-background {
    background-color: rgba(0, 0, 0, 0.8);
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  .modal-container {
    width: 50%;
    height: 50%;
    border: white 2px solid;
    z-index: 150;
    display: flex;
    flex-direction: column;
  }

  .name {
    width: 100%;
    height: 5%;
    border-bottom: 1px solid white;
    color: white;
    padding-left: 5px;
    align-content: center;
  }

  .modal-form {
    width: 100%;
    height: 90%;
    display: flex;
    flex-direction: column;

    .form-input {
      display: flex;

      .input-name {
        color: white;
      }
    }
  }
}
</style>
