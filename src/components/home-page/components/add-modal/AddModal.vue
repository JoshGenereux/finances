<script lang="jsx">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AddModal",

  props: {
    name: {
      type: String,
      default: "",
    },
  },

  setup(props) {
    return {};
  },

  render() {
    return (
      <div class="add-modal">
        <div class="modal-container"></div>
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
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;

  .modal-container {
    width: 50%;
    height: 50%;
    background-color: lightgray;
  }
}
</style>
