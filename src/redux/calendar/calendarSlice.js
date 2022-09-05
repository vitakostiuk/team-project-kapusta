import { createSlice } from '@reduxjs/toolkit';

const CalendarSlice = createSlice({
  name: 'date',
  initialState: {
    day: new Date().getDate(),
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
  },
  reducers: {
    getDate: (_, action) => {
      return action.payload;
    },
  },
});

export const { getDate } = CalendarSlice.actions;

export default CalendarSlice.reducer;
