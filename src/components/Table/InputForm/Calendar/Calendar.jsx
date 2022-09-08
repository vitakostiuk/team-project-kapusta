import { useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';
import { getDate } from 'redux/calendar/calendarSlice';

import 'react-datepicker/dist/react-datepicker.css';
import style from './Calendar.module.css';

const Calendar = ({ onChangeDate, startDate }) => {
  const dispatch = useDispatch();

  const handleDateSelect = e => {
    const year = String(startDate.getFullYear());
    const month = String(startDate.getMonth() + 1).padStart(2, '0');
    const day = String(startDate.getDate()).padStart(2, '0');

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
      onSelect={handleDateSelect()}
      onChange={date => onChangeDate(date)}
      className={style.calendar}
      dateFormat="dd.MM.yyyy"
    />
  );
};

export default Calendar;
