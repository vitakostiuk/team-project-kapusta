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
// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import DatePicker from 'react-datepicker';
// import { useLocation } from 'react-router-dom';
// import { subDays } from 'date-fns';
// import { getDate } from 'redux/calendar/calendarSlice';
// import { useGetTransactionsDatesQuery } from 'redux/report/transactionsApi';
// import {
//   getTransactionsDaysExpenses,
//   getTransactionsDaysIncome,
// } from 'redux/transactions/transactionsDaysSlice';
// import 'react-datepicker/dist/react-datepicker.css';
// import style from './Calendar.module.css';
// import './Calendar.css';

// const Calendar = ({ onChangeDate, startDate }) => {
//   const [transactionsExpenses, setTransactionsExpenses] = useState([]);
//   const [transactionsIncome, setTransactionsIncome] = useState([]);
//   const { data } = useGetTransactionsDatesQuery();
//   console.log(data);

//   const dispatch = useDispatch();
//   const type = useLocation().pathname;

//   const expensesDates = useSelector(state => state.transactionsDays.expense);
//   console.log('expensesDates', expensesDates);
//   const incomeDates = useSelector(state => state.transactionsDays.income);
//   console.log('incomeDates', incomeDates);

//   useEffect(() => {
//     const year = String(startDate.getFullYear());
//     const month = String(startDate.getMonth() + 1).padStart(2, '0');
//     const day = String(startDate.getDate()).padStart(2, '0');

//     const date = {
//       day,
//       month,
//       year,
//     };
//     dispatch(getDate(date));
//   }, [dispatch, startDate]);

//   useEffect(() => {
//     data?.transactions?.forEach(transaction => {
//       if (transaction?.income) {
//         setTransactionsIncome(transaction?.data);
//       }
//       if (!transaction?.income) {
//         setTransactionsExpenses(transaction?.data);
//       }
//     });

//     const expensesToDispatch = transactionsExpenses.map(
//       ({ day, month, year }) => {
//         return Date.parse(`${day}.${month}.${year}`);
//       },
//     );
//     dispatch(getTransactionsDaysExpenses(expensesToDispatch));

//     const incomeToDispatch = transactionsIncome.map(({ day, month, year }) => {
//       return Date.parse(`${day}.${month}.${year}`);
//     });
//     dispatch(getTransactionsDaysIncome(incomeToDispatch));
//   }, [data?.transactions, dispatch, transactionsExpenses, transactionsIncome]);

//   const expenseNormalizedDate = expensesDates.map(item => {
//     console.log(item.getFullYear());
//     console.log(item.getMonth());
//     console.log(item.getDay());
//   });
//   console.log(expenseNormalizedDate);

//   return (
//     <div>
//       {(() => {
//         let highlight = [];

//         for (let i = 0; i < expenseNormalizedDate.length; i++) {
//           highlight.push(subDays(new Date(`${expenseNormalizedDate[i]}`), 0));
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
