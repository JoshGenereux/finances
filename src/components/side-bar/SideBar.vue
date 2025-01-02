<script lang="jsx">
import { computed, defineComponent } from "vue";
import { NavButton } from "./components";
import { useUserStore } from "@/store/user";

export default defineComponent({
  name: "side-bar",

  components: { NavButton },

  props: {},

  setup(props) {
    const appName = "Financer";
    const userStore = useUserStore();
    const userName = userStore?.userName;
    const userProfilePic = userStore?.profilePic;

    const buttonNames = ["home", "Income", "Recent", "upcoming", "settings"];

    return { appName, buttonNames, userName, userProfilePic };
  },

  render() {
    return (
      <div class="side-bar">
        <div class="profile-pic-container">
          <img
            class="profile-pic"
            src={this.userProfilePic}
            alt="profile pic"
          />
          <div class="user-name">{this.userName}</div>
        </div>
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
  width: 285px;
  height: 100%;
  background-color: #2c2b2b;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  align-items: center;
  gap: 20px;

  .app-name {
    width: auto;
    height: auto;
    color: white;
    position: absolute;
    bottom: 35px;
    font-size: 35px;
  }

  .profile-pic-container {
    width: 200px;
    height: 175px;
    position: absolute;
    top: 20px;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .profile-pic {
      width: 150px;
      height: 150px;
    }

    .user-name {
      text-align: center;
      color: white;
    }
  }
}
</style>
