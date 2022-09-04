import { createSlice } from '@reduxjs/toolkit';

const expensesSlice = createSlice({
  name: 'expenses',
  initialState: 0,
  reducers: {
    setExpenses: (_, action) => {
      return action.payload;
    },
  },
});

export const { setExpenses } = expensesSlice.actions;

export default expensesSlice.reducer;
