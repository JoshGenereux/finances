<script lang="jsx">
import { useBalanceStore } from "@/store/balance";
import { useModalStore } from "@/store/modal";
import { computed, defineComponent, reactive, ref } from "vue";
import { validate } from "./validation";

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
    const isIncome = computed(() =>
      modalName.value === "Income" ? "Income" : "Expense"
    );

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

    let errors = ref({});

    function handleSubmit(e) {
      e.preventDefault();

      const validData = validate(formData);
      const isValid = validData.isValid;

      if (isValid) {
        balanceStore.setCurrentTransaction(
          formData.name,
          formData.amount,
          formData.type,
          formData.note,
          formData.date
        );
        balanceStore.addToHistory();
        balanceStore.resetTransaction();
        modalStore.updateActivity();
        errors.value = {};
        console.log(balanceStore.balanceHistory);
      } else {
        errors.value = { ...validData.errors };
      }
    }

    const hasErrors = computed(() => {
      return Object.values(errors.value).some((error) => error.length > 0);
    });

    return {
      modalName,
      handleExit,
      handleSubmit,
      formData,
      isIncome,
      errors,
      hasErrors,
    };
  },

  render() {
    const {
      modalName,
      handleExit,
      handleSubmit,
      formData,
      isIncome,
      errors,
      hasErrors,
    } = this;

    console.log(hasErrors);

    return (
      <div class="add-modal">
        <div class="modal-background" onClick={handleExit}></div>
        <div class="modal-container">
          <div class="name">New {modalName}</div>

          <form class="modal-form" onSubmit={handleSubmit}>
            <div class="form-section">
              <div class="form-input">
                <div class="input-name">Name:</div>
                <input
                  class="input"
                  type="text"
                  placeHolder="Enter Name"
                  v-model={formData.name}
                ></input>
              </div>
              {hasErrors && (
                <div class="errors">
                  {errors?.nameErrors?.map((error) => (
                    <div class="error">{error}</div>
                  ))}
                </div>
              )}
            </div>

            <div class="form-section">
              <div class="form-input">
                <div class="input-name">Amount:</div>
                <input
                  class="input"
                  type="number"
                  placeHolder="0"
                  v-model={formData.amount}
                ></input>
              </div>
              {hasErrors && (
                <div class="errors">
                  {errors?.amountErrors?.map((error) => (
                    <div class="error">{error}</div>
                  ))}
                </div>
              )}
            </div>

            <div class="form-section">
              <div class="form-input">
                <div class="input-name">Type</div>
                {isIncome ? (
                  <select v-model={formData.type}>
                    <option value="" disabled>
                      Select Type
                    </option>
                    <option value="salary">Salary</option>
                    <option value="freelance">Freelance</option>
                    <option value="investment">Investment</option>
                    <option value="other">Other</option>
                  </select>
                ) : (
                  <select v-model={formData.type}>
                    <option value="" disabled>
                      Select Type
                    </option>
                    <option value="credit">Credit</option>
                    <option value="debit">Debit</option>
                    <option value="withdrawl">Withdrawl</option>
                    <option value="other">Other</option>
                  </select>
                )}
              </div>
              {hasErrors && (
                <div class="errors">
                  {errors?.typeErrors?.map((error) => (
                    <div class="error">{error}</div>
                  ))}
                </div>
              )}
            </div>

            <div class="form-section">
              <div class="form-input">
                <div class="input-name">Note</div>
                <textarea
                  class="input"
                  placeholder="Enter Note"
                  v-model={this.formData.note}
                  rows="2"
                  cols="60"
                ></textarea>
              </div>
            </div>

            <div class="submit-box">
              <div class="input-date">{formData.date}</div>
              <button class="submit">Add {modalName}</button>
            </div>
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
    height: 95%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    position: relative;
    padding: 10px 10px;

    .submit-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 20%;

      .submit {
        width: 20%;
        height: 30%;
      }

      .input-date {
        color: white;
        text-align: center;
        width: 160px;
      }
    }
  }

  .form-section {
    width: 100%;
    height: 15%;

    .form-input {
      display: flex;

      .input-name {
        color: white;
        width: 100px;
      }
    }

    .errors {
      .error {
        color: red;
      }
    }
  }
}
</style>
