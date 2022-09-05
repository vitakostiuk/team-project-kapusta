import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import style from './Calendar.module.css';

const Calendar = ({ onChangeDate, startDate }) => {
  const handleDateSelect = e => {};

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
