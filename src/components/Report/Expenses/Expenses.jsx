import React, { useState, useEffect } from 'react';
import s from './Expenses.module.css';
import IncomeExpensesChange from './IncomeExpensesChange';
import Category from './Category';
import Statistic from '../Statistic';
import { useGetTransactionsByExpenseQuery } from 'redux/report/transactionsApi';

const Expenses = () => {
  const [incExp, setIncExp] = useState('EXPENSES');
  const [categories, setCategories] = useState([]);
  const [statsCategory, setStatsCategory] = useState([]);

  const { data, refetch } = useGetTransactionsByExpenseQuery();

  const incExpChange = () => {
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

  const handleSubmit = category => {
    setStatsCategory(category);
  };

  return (
    <>
      <div className={s.container}>
        <IncomeExpensesChange onChange={incExpChange} incExp={incExp} />

        {data && (
          <ul className={s.categories}>
            {categories &&
              Object.entries(categories).map((el, idx) => (
                <Category
                  key={idx}
                  details={el[1]}
                  categories={el[0]}
                  onSubmit={handleSubmit}
                />
              ))}
          </ul>
        )}
      </div>

      <Statistic category={statsCategory} />
    </>
  );
};

export default Expenses;
