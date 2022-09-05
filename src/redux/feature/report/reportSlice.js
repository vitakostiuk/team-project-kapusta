import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  summaryExp: null,
  summaryInc: null,
};

const reportSlice = createSlice({
  name: 'reportSlice',
  initialState,
  reducers: {
    summaryTransExp: (state, action) => {
      state.summaryExp = action.payload?.transactions;
    },
    summaryTransInc: (state, action) => {
      state.summaryInc = action.payload?.transactions;
    },
  },
});

export const { summaryTransExp, summaryTransInc } = reportSlice.actions;
export default reportSlice.reducer;
