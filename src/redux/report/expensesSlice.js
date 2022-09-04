import { createSlice } from '@reduxjs/toolkit';

const expensesSlice = createSlice({
  name: 'moneyMove',
  initialState: { income: 0, expenses: 0 },
  reducers: {
    setExpenses: (state, action) => {
      return { ...state, expenses: action.payload };
    },
    setIncome: (state, action) => {
      return { ...state, income: action.payload };
    },
  },
});

export const { setExpenses, setIncome } = expensesSlice.actions;

export default expensesSlice.reducer;
