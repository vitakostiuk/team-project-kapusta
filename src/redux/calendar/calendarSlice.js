import { createSlice } from '@reduxjs/toolkit';

const CalendarSlice = createSlice({
  name: 'date',
  initialState: {
    day: String(new Date().getDate()).padStart(2, '0'),
    month: String(new Date().getMonth() + 1).padStart(2, '0'),
    year: String(new Date().getFullYear()),
  },
  reducers: {
    getDate: (_, action) => {
      return action.payload;
    },
  },
});

export const { getDate } = CalendarSlice.actions;

export default CalendarSlice.reducer;
