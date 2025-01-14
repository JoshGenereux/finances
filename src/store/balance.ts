import { defineStore } from "pinia";

interface Transaction {
  name: string;
  timeStamp: string;
  type: string;
  amount: number;
  note?: string;
  balanceAfter: number;
}

export const useBalanceStore = defineStore("balance", {
  state: () => ({
    accountBalance: 0,
    balanceHistory: [] as Transaction[],
    currentTransaction: {
      name: "",
      timeStamp: "",
      type: "",
      amount: 0,
      note: "",
      balanceAfter: 0,
    } as Transaction,
  }),

  actions: {
    setCurrentTransaction(
      name: string,
      amount: number,
      type: string,
      note: string,
      timeStamp: string
    ) {
      const balanceAfter = this.accountBalance + amount;

      this.currentTransaction = {
        name,
        timeStamp,
        type,
        amount,
        note,
        balanceAfter,
      };

      this.accountBalance += amount;
    },

    addToHistory() {
      this.balanceHistory.unshift(this.currentTransaction);
    },

    resetTransaction() {
      this.currentTransaction = {
        name: "",
        timeStamp: "",
        type: "",
        amount: 0,
        note: "",
        balanceAfter: 0,
      };
    },
  },
});
