import { createSlice } from '@reduxjs/toolkit';

const screenSlice = createSlice({
  name: 'screenWidth',
  initialState: null,
  reducers: {
    setScreenWidth: (_, action) => {
      return action.payload;
    },
  },
});

export const { setScreenWidth } = screenSlice.actions;

export default screenSlice.reducer;
