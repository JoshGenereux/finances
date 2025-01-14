import { defineStore } from "pinia";

interface Transaction {
  name: string;
  timeStamp: string;
  type: string;
  amount: number;
  note?: string;
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
      let balanceAdjustment = amount;

      this.currentTransaction = {
        name,
        timeStamp,
        type,
        amount,
        note,
      };

      this.accountBalance += balanceAdjustment;
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
      };
    },
  },
});
