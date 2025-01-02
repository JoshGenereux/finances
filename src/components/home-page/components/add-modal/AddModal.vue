<script lang="jsx">
import { useModalStore } from "@/store/modal";
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "AddModal",

  props: {},

  setup(props) {
    const modalName = computed(() => {
      return useModalStore().name;
    });

    function handleExit() {
      return useModalStore().updateActivity();
    }

    return { modalName, handleExit };
  },

  render() {
    return (
      <div class="add-modal">
        <div class="modal-background" onClick={this.handleExit}></div>
        <div class="modal-container">
          <div class="name">Add {this.modalName}</div>
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
  }

  .name {
    width: 100%;
    height: 5%;
    border-bottom: 1px solid white;
    color: white;
    padding-left: 5px;
    align-content: center;
  }
}
</style>
