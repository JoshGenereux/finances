<script lang="jsx">
import { computed, defineComponent } from "vue";
import SideBar from "../side-bar";
import { Access, AccountBalance, RecentExpenses, AddModal } from "./components";
import { useModalStore } from "@/store/modal";

export default defineComponent({
  name: "HomePage",

  components: { SideBar, RecentExpenses, AccountBalance, Access, AddModal },

  props: {},

  setup() {
    const modalStore = useModalStore();
    const openModal = computed(() => modalStore.isActive);

    return { openModal };
  },

  render() {
    const { openModal } = this;
    return (
      <div class="home-page">
        <side-bar />
        <account-balance />
        <recent-expenses />
        <Access />
        {openModal && <add-modal />}
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
