import { createSlice } from '@reduxjs/toolkit';

const transactionsDaysSlice = createSlice({
  name: 'transactionsDays',
  initialState: { expense: [], income: [] },
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
  },
});

export const { getTransactionsDaysExpenses, getTransactionsDaysIncome } =
  transactionsDaysSlice.actions;

export default transactionsDaysSlice.reducer;
