import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';
import { getDate } from 'redux/calendar/calendarSlice';

import 'react-datepicker/dist/react-datepicker.css';
import style from './Calendar.module.css';

const Calendar = ({ onChangeDate, startDate }) => {
  const dispatch = useDispatch();

  const handleDateSelect = e => {
    const year = String(e.getFullYear());
    const month = String(e.getMonth() + 1);
    const day = String(e.getDate());

    const date = {
      day,
      month,
      year,
    };
    dispatch(getDate(date));
  };

  return (
    <DatePicker
      closeOnScroll={true}
      selected={startDate}
      onSelect={handleDateSelect}
      onChange={date => onChangeDate(date)}
      className={style.calendar}
      dateFormat="dd.MM.yyyy"
    />
  );
};

export default Calendar;
