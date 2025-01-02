<script lang="jsx">
import { defineComponent } from "vue";
import SideBar from "../side-bar";
import { Access, AccountBalance, RecentExpenses } from "./components";

export default defineComponent({
  name: "HomePage",

  components: { SideBar, RecentExpenses, AccountBalance, Access },

  props: {},

  setup() {
    return {};
  },

  render() {
    return (
      <div class="home-page">
        <side-bar />
        <account-balance />
        <recent-expenses />
        <Access />
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

  .account-balance {
    position: absolute;
    left: 325px;
    top: 100px;
  }

  .access {
    position: absolute;
    top: 400px;
    left: 325px;
  }
}
</style>
