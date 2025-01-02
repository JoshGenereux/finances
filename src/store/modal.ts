import { defineStore } from "pinia";

export const useModalStore = defineStore("modal", {
  state: () => ({
    isActive: false,
    name: "",
  }),

  actions: {
    updateActivity() {
      this.isActive = !this.isActive;
    },
    pickType(name: string) {
      this.name = name;
    },
  },
});
