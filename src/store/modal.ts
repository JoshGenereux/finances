import { defineStore } from "pinia";

export const useModalStore = defineStore("modal", {
  state: () => ({
    isActive: false,
  }),

  actions: {
    updateActivity() {
      this.isActive = !this.isActive;
    },
  },
});
