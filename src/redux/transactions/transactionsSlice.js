import { createSlice } from '@reduxjs/toolkit';

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: { expense: null, income: null },
  reducers: {
    getTransExpenses: (state, action) => {
      return { ...state, expense: action.payload };
    },
    getTransIncome: (state, action) => {
      return { ...state, income: action.payload };
    },
    deleteTransExpenses: (state, action) => {
      return state.expense.filter(
        transaction => transaction.id !== action.payload,
      );
    },
    deleteTransIncome: (state, action) => {
      return state.income.filter(
        transaction => transaction.id !== action.payload,
      );
    },
  },
});

export const {
  getTransExpenses,
  getTransIncome,
  deleteTransExpenses,
  deleteTransIncome,
} = transactionsSlice.actions;

export default transactionsSlice.reducer;
