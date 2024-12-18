<script lang="jsx">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeHeader",

  props: {},

  setup() {
    return {};
  },

  render() {
    return (
      <div class="home-header">
        <h1>Home Header</h1>
      </div>
    );
  },
});
</script>

<style lang="css" scoped>
.home-header {
  width: 100%;
  height: 100px;
  background-color: green;
}
</style>
