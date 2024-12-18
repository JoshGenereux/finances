<script lang="jsx">
import { defineComponent } from "vue";
import { HomeHeader } from "./components";

export default defineComponent({
  name: "HomePage",

  components: { HomeHeader },

  props: {},

  setup() {
    return {};
  },

  render() {
    return (
      <div class="home-page">
        <HomeHeader />
        <div>Inside Home Page</div>
      </div>
    );
  },
});
</script>

<style lang="css" scoped>
.home-page {
  width: 100%;
  height: 100%;
}
</style>
