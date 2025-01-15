import { defineStore } from "pinia";

interface Transaction {
  name: string;
  timeStamp: string;
  type: string;
  amount: number;
  note?: string;
  transactionType: string;
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
      timeStamp: string,
      transactionType: "income" | "expense"
    ) {
      const adjustedAmount = transactionType === "expense" ? -amount : amount;

      this.currentTransaction = {
        name,
        timeStamp,
        type,
        amount: adjustedAmount,
        note,
        transactionType,
      };

      this.accountBalance += adjustedAmount;
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
        transactionType: "",
      };
    },
  },
});
