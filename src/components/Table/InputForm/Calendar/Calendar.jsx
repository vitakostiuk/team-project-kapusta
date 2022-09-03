import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import style from './Calendar.module.css';

const Calendar = ({ onChangeDate, startDate }) => {
  return (
    <DatePicker
      selected={startDate}
      onChange={date => onChangeDate(date)}
      dateFormat="dd.MM.yyyy"
      className={style.calendar}
    />
  );
};

export default Calendar;
