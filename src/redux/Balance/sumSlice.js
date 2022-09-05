import { createSlice } from '@reduxjs/toolkit';

const SumSlice = createSlice({
  name: 'sum',
  initialState: '',
  reducers: {
    setSumValue: (_, action) => {
      return action.payload;
    },
  },
});

export const { setSumValue } = SumSlice.actions;

export default SumSlice.reducer;
