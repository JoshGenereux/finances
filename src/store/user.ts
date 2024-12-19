import { defineStore } from "pinia";

export interface UserState {
  profilePic: string;
  userName: string;
}

export const useUserStore = defineStore("user", {
  state: () => ({
    profilePic: require("@/assets/profile-pic/profile.png"),
    userName: "User Name",
  }),

  actions: {
    updateProfilePic(newPic: string) {
      this.profilePic = newPic;
    },
    updateUserName(newName: string) {
      this.userName = newName;
    },
  },
});
