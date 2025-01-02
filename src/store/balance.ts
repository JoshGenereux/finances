import { defineStore } from "pinia";

interface Transaction {
  id: string;
  timeStamp: string;
  type: "add" | "sub";
  amount: number;
  description?: string;
  balanceAfter: number;
}

export const useBalanceStore = defineStore("balance", {
  state: () => ({
    accountBalance: 0,
    balanceHistory: [] as Transaction[],
  }),
  actions: {
    updateBalance(amount: number, description: string = "", type: string) {
      this.accountBalance += amount;
      this.balanceHistory.push({
        id: "test",
        timeStamp: "today",
        type: "add",
        amount,
        description,
        balanceAfter: this.accountBalance,
      });
    },
  },
});
