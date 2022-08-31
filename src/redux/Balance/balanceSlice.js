import { createSlice } from '@reduxjs/toolkit';

const balanceSlice = createSlice({
  name: 'balance',
  initialState: '00.00 UAH',
  reducers: {
    setBalance: (_, action) => action.payload,
  },
});

export const { setBalance, refreshUser } = balanceSlice.actions;
export default balanceSlice.reducer;
