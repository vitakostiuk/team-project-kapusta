import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import s from './Expenses.module.css';
import Category from '../Category';
// import { pullCategories } from 'helpers/pullCategories';
import { useGetTransactionsByExpenseQuery } from 'redux/report/transactionsApi';
import { setExpenses } from 'redux/report/reportSlice';

const Expenses = () => {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);

  const { data, refetch } = useGetTransactionsByExpenseQuery();

  useEffect(() => {
    const generalSum = data?.transactions.reduce((acc, el) => {
      const { value } = el;
      return (acc += value);
    }, 0);

    dispatch(setExpenses(generalSum));

    const result = data?.transactions.reduce((acc, el) => {
      const { description, value, categories } = el;
      const res = acc;

      if (!res[categories]) res[categories] = {};

      res[categories].sum = res[categories].sum
        ? res[categories].sum + value
        : value;

      if (!res[categories].sub) res[categories].sub = {};

      res[categories].sub[description] = res[categories].sub[description]
        ? res[categories].sub[description] + value
        : value;

      return res;
    }, {});

    setCategories(result);
  }, [data, dispatch]);

  return (
    <>
      {data && (
        <ul className={s.categories}>
          {categories &&
            Object.entries(categories).map((el, idx) => (
              <Category key={idx} details={el[1]} categories={el[0]} />
            ))}
        </ul>
      )}
    </>
  );
};

export default Expenses;
