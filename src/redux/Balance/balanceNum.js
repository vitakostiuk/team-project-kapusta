import { createSlice } from '@reduxjs/toolkit';

const balanceNumSlice = createSlice({
  name: 'balanceNum',
  initialState: null,
  reducers: {
    setbalanceNum: (_, action) => {
      return action.payload;
    },
  },
});

export const { setbalanceNum } = balanceNumSlice.actions;

export default balanceNumSlice.reducer;
