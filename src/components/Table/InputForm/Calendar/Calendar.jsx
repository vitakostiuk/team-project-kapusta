import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import style from './Calendar.module.css';

const Calendar = ({ onChangeDate, startDate }) => {
  return (
    <DatePicker
      closeOnScroll={true}
      selected={startDate}
      onChange={date => onChangeDate(date)}
      className={style.calendar}
      dateFormat="dd.MM.yyyy"
    />
  );
};

export default Calendar;
