<script lang="jsx">
import { defineComponent } from "vue";
import SideBar from "../side-bar";

export default defineComponent({
  name: "HomePage",

  components: { SideBar },

  props: {},

  setup() {
    return {};
  },

  render() {
    return (
      <div class="home-page">
        <side-bar />
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
}
</style>
