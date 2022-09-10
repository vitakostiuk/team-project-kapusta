import { createSlice } from '@reduxjs/toolkit';

const transactionsDaysSlice = createSlice({
  name: 'transactionsDays',
  initialState: { expense: [], income: [] },
  reducers: {
    getTransactionsDaysExpenses: (state, { payload }) => {
      const normalizedDates = payload?.filter(
        item => Number.isNaN(item) === false,
      );
      if (normalizedDates) {
        return {
          ...state,
          expense: normalizedDates.map(date => new Date(date)),
        };
      }
    },
    getTransactionsDaysIncome: (state, { payload }) => {
      const normalizedDates = payload?.filter(
        item => Number.isNaN(item) === false,
      );
      if (normalizedDates) {
        return {
          ...state,
          income: normalizedDates.map(date => new Date(date)),
        };
      }
    },
  },
});

export const { getTransactionsDaysExpenses, getTransactionsDaysIncome } =
  transactionsDaysSlice.actions;

export default transactionsDaysSlice.reducer;
