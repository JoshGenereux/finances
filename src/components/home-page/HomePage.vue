<script lang="jsx">
import { defineComponent } from "vue";
import SideBar from "../side-bar";
import { RecentExpenses } from "./components";

export default defineComponent({
  name: "HomePage",

  components: { SideBar, RecentExpenses },

  props: {},

  setup() {
    return {};
  },

  render() {
    return (
      <div class="home-page">
        <side-bar />
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
    left: 200px;
    top: 100px;
  }
}
</style>
