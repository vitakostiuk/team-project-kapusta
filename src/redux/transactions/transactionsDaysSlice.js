import { createSlice } from '@reduxjs/toolkit';

const transactionsDaysSlice = createSlice({
  name: 'transactionsDays',
  initialState: { expense: [], income: [], allTransactions: [] },
  reducers: {
    getTransactionsDaysExpenses: (state, { payload }) => {
      const normalizedDates = payload?.filter(item => item !== null);
      if (normalizedDates) {
        return {
          ...state,
          expense: normalizedDates,
        };
      }
    },
    getTransactionsDaysIncome: (state, { payload }) => {
      const normalizedDates = payload?.filter(item => item !== null);
      if (normalizedDates) {
        return {
          ...state,
          income: normalizedDates,
        };
      }
    },
    getAllTransactionsDays: (state, { payload }) => {
      const normalizedDates = payload?.filter(item => item !== null);
      if (normalizedDates) {
        return {
          ...state,
          allTransactions: normalizedDates,
        };
      }
    },
  },
});

export const {
  getTransactionsDaysExpenses,
  getTransactionsDaysIncome,
  getAllTransactionsDays,
} = transactionsDaysSlice.actions;

export default transactionsDaysSlice.reducer;
