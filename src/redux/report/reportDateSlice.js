import { createSlice } from '@reduxjs/toolkit';

const reportDateSlice = createSlice({
  name: 'dataSlice',
  initialState: { month: '', year: '' },
  reducers: {
    setData: (_, action) => {
      return action.payload;
    },
  },
});

export const { setData } = reportDateSlice.actions;

export default reportDateSlice.reducer;
