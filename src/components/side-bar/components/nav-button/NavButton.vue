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
    return {};
  },

  render() {
    return <button class="nav-button">{this.title}</button>;
  },
});
</script>

<style lang="scss" scoped>
.nav-button {
  width: 90%;
  height: 60px;
  background-color: transparent;
  color: rgb(255, 231, 231);
  font-size: 25px;
  font-weight: bold;
  border: 2px solid transparent;
  transition: all 0.3s ease;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #434343;
    border: 2px solid #434343;
    color: white;
  }
}
</style>
