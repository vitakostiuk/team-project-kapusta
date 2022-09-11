import React, { useState, useEffect } from 'react';
import s from './ExpIncContainer.module.css';
import IncomeExpensesChange from './IncomeExpensesChange';
import Expenses from './Expenses';
import Statistic from '../Statistic';
import { useFullTransactionsQuery } from 'redux/report/transactionsApi';
import { setExpenses, setIncome } from 'redux/report/expensesSlice';
import { useDispatch, useSelector } from 'react-redux';

const ExpIncContainer = () => {
  const [incExp, setIncExp] = useState('');
  const [data, setData] = useState([]);
  const [subs, setSubs] = useState([]);
  const dispatch = useDispatch();
  const period = useSelector(state => state.dateReport);
  const { data: expensesByData } = useFullTransactionsQuery(period, {
    refetchOnMountOrArgChange: true,
  });

  const income = useSelector(state => state.expenses.income);
  const expenses = useSelector(state => state.expenses.expenses);

  useEffect(() => {
    const incExpChange = () => {
      if (expenses) {
        return setIncExp('EXPENSES');
      } else if (income) {
        return setIncExp('INCOME');
      } else {
        return setIncExp('');
      }
    };

    incExpChange(expenses, income);
  }, [expenses, income]);

  const onClickChange = () => {
    switch (incExp) {
      case 'EXPENSES':
        setIncExp('INCOME');
        break;
      case 'INCOME':
        setIncExp('EXPENSES');
        break;

      default:
        return;
    }
  };

  useEffect(() => {
    if (!expensesByData) return;
    const incomeIdx = expensesByData?.transactions?.findIndex(el => el.income);
    const expensesIdx = expensesByData?.transactions?.findIndex(
      el => !el.income,
    );

    dispatch(setIncome(expensesByData.transactions[incomeIdx]?.total || 0));
    dispatch(setExpenses(expensesByData.transactions[expensesIdx]?.total || 0));

    incExp === 'INCOME'
      ? setData(expensesByData.transactions[incomeIdx]?.reports)
      : setData(expensesByData.transactions[expensesIdx]?.reports);
  }, [expensesByData, dispatch, incExp]);

  const handleChange = subs => {
    setSubs(subs);
  };

  return (
    <>
      {data && (
        <div className={s.container}>
          {incExp && (
            <IncomeExpensesChange
              incExp={incExp}
              onChange={onClickChange}
              income={income}
              expenses={expenses}
            />
          )}
          {expensesByData && <Expenses data={data} onChange={handleChange} />}
        </div>
      )}

      {subs.length > 0 && <Statistic list={subs} />}
    </>
  );
};

export default ExpIncContainer;
