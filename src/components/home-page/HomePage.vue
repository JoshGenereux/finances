<script lang="jsx">
import { defineComponent } from "vue";
import SideBar from "../side-bar";
import { CurrentIncome, RecentExpenses } from "./components";

export default defineComponent({
  name: "HomePage",

  components: { SideBar, RecentExpenses, CurrentIncome },

  props: {},

  setup() {
    return {};
  },

  render() {
    return (
      <div class="home-page">
        <side-bar />
        <current-income />
        <recent-expenses />
      </div>
    );
  },
});
</script>

<style lang="css" scoped>
.home-page {
  width: 100%;
  height: 100%;
  background-color: #1a1f16;
  position: relative;

  .recent-expenses {
    position: absolute;
    left: 850px;
    top: 100px;
  }

  .current-income {
    position: absolute;
    left: 325px;
    top: 100px;
  }
}
</style>
