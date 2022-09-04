import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'category',
  initialState: null,
  reducers: {
    setCategories: (_, action) => {
      return action.payload;
    },
  },
});

export const { setCategories } = categorySlice.actions;

export default categorySlice.reducer;
