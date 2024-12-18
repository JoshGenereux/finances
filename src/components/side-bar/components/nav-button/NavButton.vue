<script lang="jsx">
import { defineComponent } from "vue";

export default defineComponent({
  name: "nav-button",

  components: {},

  props: {
    title: {
      type: String,
      required: true,
      defualt: "",
    },

    sendTo: {},
  },

  setup(props) {
    console.log(props.title);
    return {};
  },

  render() {
    return <button class="nav-button">{this.title}</button>;
  },
});
</script>

<style lang="css" scoped>
.nav-button {
  width: 80%;
  height: 5%;
  background-color: transparent;
  color: white;
  font-size: 25px;
}
</style>
