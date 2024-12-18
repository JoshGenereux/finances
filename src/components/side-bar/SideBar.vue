<script lang="jsx">
import { defineComponent } from "vue";
import { NavButton } from "./components";

export default defineComponent({
  name: "side-bar",

  components: { NavButton },

  props: {},

  setup(props) {
    const appName = "Financer";

    const buttonNames = ["home", "expenses", "money", "trips", "settings"];

    return { appName, buttonNames };
  },

  render() {
    return (
      <div class="side-bar">
        {this.buttonNames.map((button) => (
          <nav-button title={button} />
        ))}
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
  background-color: #2c2b2b;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  align-items: center;

  .app-name {
    width: auto;
    height: auto;
    color: white;
    position: absolute;
    bottom: 35px;
    font-size: 35px;
  }
}
</style>
