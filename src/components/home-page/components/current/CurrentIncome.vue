<script lang="jsx">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CurrentIncome",

  components: {},

  props: {},

  setup() {
    return {};
  },

  render() {
    return (
      <div class="current-income">
        <div>current income</div>
      </div>
    );
  },
});
</script>

<style lang="css" scoped>
.current-income {
  width: 450px;
  height: 200px;
  border: 1px solid white;
  color: white;
}
</style>
