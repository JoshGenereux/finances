<script lang="jsx">
import { defineComponent } from "vue";
import HomePage from "../home-page";

export default defineComponent({
  name: "AppMain",

  components: { HomePage },

  props: {},

  setup() {
    return {};
  },

  render() {
    return (
      <div className="app-main">
        <home-page />
      </div>
    );
  },
});
</script>

<style lang="css" scoped>
.app-main {
  width: 100%;
  height: 100%;
}
</style>
