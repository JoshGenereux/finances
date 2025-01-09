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
    updateBalance(
      amount: number,
      note: string = "",
      type: string,
      timeStamp: string,
      name: string
    ) {
      this.accountBalance += amount;
      this.balanceHistory.push({
        name,
        timeStamp,
        type,
        amount,
        note,
        balanceAfter: this.accountBalance,
      });
    },
  },
});
