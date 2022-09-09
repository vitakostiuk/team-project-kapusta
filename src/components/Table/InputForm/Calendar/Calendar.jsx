import { useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';
import { getDate } from 'redux/calendar/calendarSlice';
import { useEffect } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import style from './Calendar.module.css';

const Calendar = ({ onChangeDate, startDate }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const year = String(startDate.getFullYear());
    const month = String(startDate.getMonth() + 1).padStart(2, '0');
    const day = String(startDate.getDate()).padStart(2, '0');

    const date = {
      day,
      month,
      year,
    };
    // console.log(date);
    dispatch(getDate(date));
  }, [dispatch, startDate]);

  return (
    <DatePicker
      closeOnScroll={true}
      selected={startDate}
      onChange={startDate => onChangeDate(startDate)}
      className={style.calendar}
      dateFormat="dd.MM.yyyy"
      maxDate={new Date()}
    />
  );
};

export default Calendar;

// // With highlites dates
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import DatePicker from 'react-datepicker';
// import { subDays, addDays } from 'date-fns';
// import { getDate } from 'redux/calendar/calendarSlice';
// import 'react-datepicker/dist/react-datepicker.css';
// import style from './Calendar.module.css';
// import './Calendar.css';

// const Calendar = ({ onChangeDate, startDate }) => {
//   const dispatch = useDispatch();

//   const dates = [
//     {
//       date: '09.01.2022',
//     },
//     {
//       date: '09.03.2022',
//     },
//     {
//       date: '08.31.2022',
//     },
//     {
//       date: '08.28.2022',
//     },
//     {
//       date: '07.10.2022',
//     },
//     {
//       date: '06.12.2022',
//     },
//   ];

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
//     <div>
//       {(() => {
//         let highlight = [];

//         for (let i = 0; i < dates.length; i++) {
//           highlight.push(subDays(new Date(`${dates[i].date}`), 0));
//         }
//         return (
//           <DatePicker
//             closeOnScroll={true}
//             selected={startDate}
//             onChange={startDate => onChangeDate(startDate)}
//             className={style.calendar}
//             dateFormat="dd.MM.yyyy"
//             maxDate={new Date()}
//             highlightDates={highlight}
//             disabledKeyboardNavigation
//           />
//         );
//       })()}
//     </div>
//   );
// };

// export default Calendar;
