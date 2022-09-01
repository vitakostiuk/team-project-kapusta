import { createSlice } from '@reduxjs/toolkit';

const balanceSlice = createSlice({
  name: 'balance',
  initialState: '',
  reducers: {
    setBalance: (_, action) => {
      // console.log('action.payload', action.payload);
      return action.payload;
    },
  },
});

export const { setBalance } = balanceSlice.actions;

export default balanceSlice.reducer;
