import { useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';
import { getDate } from 'redux/calendar/calendarSlice';
import { useEffect } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import style from './Calendar.module.css';

const Calendar = ({ onChangeDate, startDate }) => {
  const dispatch = useDispatch();

  const handleDateSelect = e => {
    console.log(e);
    const year = String(e.getFullYear());
    const month = String(e.getMonth() + 1).padStart(2, '0');
    const day = String(e.getDate()).padStart(2, '0');

    const date = {
      day,
      month,
      year,
    };
    console.log(date);
    dispatch(getDate(date));
  };

  return (
    <DatePicker
      closeOnScroll={true}
      selected={startDate}
      onSelect={handleDateSelect}
      onChange={startDate => onChangeDate(startDate)}
      className={style.calendar}
      dateFormat="dd.MM.yyyy"
    />
  );
};

export default Calendar;

// import { useDispatch } from 'react-redux';
// import DatePicker from 'react-datepicker';
// import { getDate } from 'redux/calendar/calendarSlice';
// import { useEffect } from 'react';
// import 'react-datepicker/dist/react-datepicker.css';
// import style from './Calendar.module.css';

// const Calendar = ({ onChangeDate, startDate }) => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const year = String(startDate.getFullYear());
//     const month = String(startDate.getMonth() + 1).padStart(2, '0');
//     const day = String(startDate.getDate()).padStart(2, '0');

//     const date = {
//       day,
//       month,
//       year,
//     };
//     console.log(date);
//     dispatch(getDate(date));
//   }, [dispatch, startDate]);

//   return (
//     <DatePicker
//       closeOnScroll={true}
//       selected={startDate}
//       // onSelect={handleDateSelect}
//       onChange={startDate => onChangeDate(startDate)}
//       className={style.calendar}
//       dateFormat="dd.MM.yyyy"
//     />
//   );
// };

// export default Calendar;
