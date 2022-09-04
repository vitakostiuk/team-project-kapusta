import { createSlice } from '@reduxjs/toolkit';

const reportSlice = createSlice({
  name: 'report',
  initialState: {
    category: '',
    expenses: '',
    income: '',
  },
  reducers: {
    setCategories: (_, action) => {
      return action.payload;
    },
    setExpenses: (_, action) => {
      return action.payload;
    },
  },
});

export const { setExpenses, setCategories } = reportSlice.actions;

export default reportSlice.reducer;
