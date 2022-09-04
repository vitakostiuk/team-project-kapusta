import React, { useState, useEffect } from 'react';
import s from './Income.module.css';
import Category from '../Category';
// import { pullCategories } from 'helpers/pullCategories';
import { useGetTransactionsByIncomeQuery } from 'redux/report/transactionsApi';

const Income = () => {
  const [categories, setCategories] = useState([]);

  const { data, refetch } = useGetTransactionsByIncomeQuery();

  useEffect(() => {
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
  }, [data]);

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

export default Income;
