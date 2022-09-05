import { createSlice } from '@reduxjs/toolkit';

const CalendarSlice = createSlice({
  name: 'date',
  initialState: { day: '', month: '', year: '' },
  reducers: {
    getDate: (_, action) => {
      return action.payload;
    },
  },
});

export const { getDate } = CalendarSlice.actions;

export default CalendarSlice.reducer;
