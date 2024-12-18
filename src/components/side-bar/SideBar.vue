<script lang="jsx">
import { defineComponent } from "vue";

export default defineComponent({
  name: "side-bar",

  components: {},

  props: {},

  setup(props) {
    const appName = "App Name";

    return { appName };
  },

  render() {
    return (
      <div class="side-bar">
        <div class="app-name">{this.appName}</div>
      </div>
    );
  },
});
</script>

<style lang="css" scoped>
.side-bar {
  width: 20%;
  height: 100%;
  background-color: #3d3d3d;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  padding-left: 25px;

  .app-name {
    width: auto;
    height: auto;
    color: white;
    position: absolute;
    bottom: 20px;
    left: 20px;
  }
}
</style>
