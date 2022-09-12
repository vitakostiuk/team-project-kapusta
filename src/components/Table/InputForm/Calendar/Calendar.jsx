// With highlites dates
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import { useLocation } from 'react-router-dom';
import { subDays } from 'date-fns';
import { getDate } from 'redux/calendar/calendarSlice';
import { useGetTransactionsDatesQuery } from 'redux/report/transactionsApi';
import {
  getTransactionsDaysExpenses,
  getTransactionsDaysIncome,
  getAllTransactionsDays,
} from 'redux/transactions/transactionsDaysSlice';
import { useFetchCurrentUserQuery } from 'redux/authorization/authApi';
import 'react-datepicker/dist/react-datepicker.css';
import style from './Calendar.module.css';
import './Calendar.css';

const Calendar = ({ onChangeDate, startDate }) => {
  const [transactionsExpenses, setTransactionsExpenses] = useState([]);
  const [transactionsIncome, setTransactionsIncome] = useState([]);
  const [allTransactions, setAllTransactions] = useState([]);
  const { data } = useGetTransactionsDatesQuery();

  const dispatch = useDispatch();
  const type = useLocation().pathname;

  // const {
  //   data: { user },
  // } = useFetchCurrentUserQuery();
  // // console.log(user);

  const expensesDates = useSelector(state => state.transactionsDays.expense);
  const incomeDates = useSelector(state => state.transactionsDays.income);
  const allDates = useSelector(state => state.transactionsDays.allTransactions);

  const screenWidth = useSelector(state => state.screenWidth);

  const userRegisterDate = useSelector(state => state.auth.user.createdAt);

  // useEffect(() => {
  //   setCurrentUser(user);
  // }, [user]);

  useEffect(() => {
    const year = String(startDate.getFullYear());
    const month = String(startDate.getMonth() + 1).padStart(2, '0');
    const day = String(startDate.getDate()).padStart(2, '0');

    const date = {
      day,
      month,
      year,
    };
    dispatch(getDate(date));
  }, [dispatch, startDate]);

  useEffect(() => {
    data?.transactions?.forEach(transaction => {
      if (transaction?.income) {
        setTransactionsIncome(transaction?.data);
      }
      if (!transaction?.income) {
        setTransactionsExpenses(transaction?.data);
      }
    });
    setAllTransactions([...transactionsExpenses, ...transactionsIncome]);

    const expensesToDispatch = transactionsExpenses.map(
      ({ day, month, year }) => {
        return `${month}.${day}.${year}`;
      },
    );
    dispatch(getTransactionsDaysExpenses(expensesToDispatch));

    const incomeToDispatch = transactionsIncome.map(({ day, month, year }) => {
      return `${month}.${day}.${year}`;
    });
    dispatch(getTransactionsDaysIncome(incomeToDispatch));

    const allTransactionsToDispatch = allTransactions.map(
      ({ day, month, year }) => {
        return `${month}.${day}.${year}`;
      },
    );
    dispatch(getAllTransactionsDays(allTransactionsToDispatch));
  }, [
    allTransactions,
    data?.transactions,
    dispatch,
    transactionsExpenses,
    transactionsIncome,
  ]);

  return (
    <div>
      {(() => {
        let highlight = [];

        if (type === '/expenses') {
          for (let i = 0; i < expensesDates.length; i++) {
            highlight.push(subDays(new Date(`${expensesDates[i]}`), 0));
          }
        }

        if (type === '/income') {
          for (let i = 0; i < incomeDates.length; i++) {
            highlight.push(subDays(new Date(`${incomeDates[i]}`), 0));
          }
        }

        if (screenWidth < 768) {
          for (let i = 0; i < allDates.length; i++) {
            highlight.push(subDays(new Date(`${allDates[i]}`), 0));
          }
        }

        return (
          <DatePicker
            closeOnScroll={true}
            selected={startDate}
            onChange={startDate => onChangeDate(startDate)}
            className={style.calendar}
            dateFormat="dd.MM.yyyy"
            minDate={new Date(userRegisterDate)}
            maxDate={new Date()}
            highlightDates={highlight}
            disabledKeyboardNavigation
          />
        );
      })()}
    </div>
  );
};

export default Calendar;

// // Without highlites dates
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
//     // console.log(date);
//     dispatch(getDate(date));
//   }, [dispatch, startDate]);

//   return (
//     <DatePicker
//       closeOnScroll={true}
//       selected={startDate}
//       onChange={startDate => onChangeDate(startDate)}
//       className={style.calendar}
//       dateFormat="dd.MM.yyyy"
//       maxDate={new Date()}
//     />
//   );
// };

// export default Calendar;
