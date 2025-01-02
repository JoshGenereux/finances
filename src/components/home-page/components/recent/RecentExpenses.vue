<script lang="jsx">
import { defineComponent } from "vue";

export default defineComponent({
  name: "RecentExpenses",

  components: {},

  props: {},

  setup() {
    return {};
  },

  render() {
    return (
      <div class="recent-expenses">
        <div class="header">Recent Expenses</div>
      </div>
    );
  },
});
</script>

<style lang="css" scoped>
.recent-expenses {
  width: 550px;
  height: 200px;
  border: 1px solid white;

  .header {
    height: 15%;
    border-bottom: white 1px solid;
    align-content: center;
    color: white;
  }
}
</style>
