import { createSlice } from '@reduxjs/toolkit';

const balanceNumSlice = createSlice({
  name: 'balanceNum',
  initialState: null,
  reducers: {
    setNumBalance: (_, action) => {
      return action.payload;
    },
  },
});

export const { setNumBalance } = balanceNumSlice.actions;

export default balanceNumSlice.reducer;
