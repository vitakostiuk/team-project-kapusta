import style from './TransactionsListMobile.module.css';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { ReactComponent as DeletePic } from '../../../../images/delete.svg';
import EllipsisText from 'react-ellipsis-text';
import { useDeleteTransactionMutation } from 'redux/report/transactionsApi';
import {
  useGetTransactionsByExpenseQuery,
  useGetTransactionsByIncomeQuery,
} from 'redux/report/transactionsApi';
import { getNormalizedSum } from 'helpers/getNormalizedSum';

const TransactionsListMobile = ({ dataTable }) => {
  const [expenseArr, setExpenseArr] = useState([]);
  const [incomeArr, setIncomeArr] = useState([]);
  // const [transArr, setTransArr] = useState([]);
  const [deleteTransaction] = useDeleteTransactionMutation();
  const type = useLocation().pathname;
  const expense = useGetTransactionsByExpenseQuery();
  // console.log('my expense transactions', expense.data);
  const income = useGetTransactionsByIncomeQuery();
  // console.log('my income transactions', income.data);

  useEffect(() => {
    if (dataTable) {
      setExpenseArr(dataTable.filter(({ income }) => income === false));
      setIncomeArr(dataTable.filter(({ income }) => income === true));
    }

    if (expense) {
      expense?.data?.transactions.forEach(
        ({ categories, description, value, date: { day, month, year }, _id }) =>
          setExpenseArr(prevDataTable => [
            {
              date: `${day}.${month}.${year}`,
              description,
              sum: value,
              category: categories,
              income: false,
              id: _id,
            },
            ...prevDataTable,
          ]),
      );
    }

    if (income) {
      income?.data?.transactions.forEach(
        ({ categories, description, value, date: { day, month, year }, _id }) =>
          setIncomeArr(prevDataTable => [
            {
              date: `${day}.${month}.${year}`,
              description,
              sum: value,
              category: categories,
              income: true,
              id: _id,
            },
            ...prevDataTable,
          ]),
      );
    }
  }, [dataTable, expense, income]);

  const handleDelete = id => {
    if (type === '/expenses') {
      setExpenseArr(prevExpenseArr =>
        prevExpenseArr.filter(expense => expense.id !== id),
      );
      deleteTransaction(id);
    }
    if (type === '/income') {
      setIncomeArr(prevIncomeArr =>
        prevIncomeArr.filter(income => income.id !== id),
      );
      deleteTransaction(id);
    }
  };

  return (
    <div className={style.thamb}>
      <ul className={style.expensesIncomeList}>
        {expenseArr &&
          expenseArr.map(({ date, description, category, sum, id }, index) => (
            <li className={style.item} key={index}>
              <span className={style.itemName}>
                <EllipsisText text={`${description}`} length={'15'} />
              </span>
              <br />
              <span className={style.itemDate}>{date}</span>
              <span className={style.itemCategory}>{category}</span>
              <hr className={style.line} />
            </li>
          ))}
        {incomeArr &&
          incomeArr.map(({ date, description, category, sum, id }, index) => (
            <li className={style.item} key={index}>
              <span className={style.itemName}>
                <EllipsisText text={`${description}`} length={'15'} />
              </span>
              <br />
              <span className={style.itemDate}>{date}</span>
              <span className={style.itemCategory}>{category}</span>
              <hr className={style.line} />
            </li>
          ))}
      </ul>

      <ul className={style.expensesIncomeSum}>
        {expenseArr &&
          expenseArr.map(({ sum, id }, index) => (
            <li className={style.itemSum} key={index}>
              <span className={style.sum}>{`-${getNormalizedSum(sum)}`}</span>
            </li>
          ))}
        {incomeArr &&
          incomeArr.map(({ sum, id }, index) => (
            <li className={style.itemSum} key={index}>
              <span className={style.sum}>{getNormalizedSum(sum)}</span>
            </li>
          ))}
      </ul>
      <ul className={style.expensesIncomeDel}>
        {expenseArr &&
          expenseArr.map(({ id }, index) => (
            <li className={style.itemDel} key={index}>
              <button
                type="button"
                className={style.deleteBtn}
                onClick={() => handleDelete(id)}
              >
                <DeletePic />
              </button>
            </li>
          ))}
        {incomeArr &&
          incomeArr.map(({ id }, index) => (
            <li className={style.itemDel} key={index}>
              <button
                type="button"
                className={style.deleteBtn}
                onClick={() => handleDelete(id)}
              >
                <DeletePic />
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TransactionsListMobile;

// const ExpensesIncomeList = () => {
//   return (
//     <div className={style.thamb}>
//       <ul className={style.expensesIncomeList}>
//         <li className={style.item}>
//           <span className={style.itemName}>
//             <EllipsisText
//               text={'Metro (Lorem ipsum dolor dolor dolor dolorsit)'}
//               length={'15'}
//             />
//           </span>
//           <br />
//           <span className={style.itemDate}>05.09.2019</span>
//           <span className={style.itemCategory}>Transport</span>
//           <hr className={style.line} />
//         </li>
//         <li className={style.item}>
//           <span className={style.itemName}>
//             <EllipsisText text={'Bananas'} length={'15'} />
//           </span>
//           <br />
//           <span className={style.itemDate}>05.09.2019</span>
//           <span className={style.itemCategory}>Products</span>
//           <hr className={style.line} />
//         </li>
//         <li className={style.item}>
//           <span className={style.itemName}>
//             <EllipsisText text={'My salary'} length={'15'} />
//           </span>
//           <br />
//           <span className={style.itemDate}>05.09.2019</span>
//           <span className={style.itemCategory}>Salary</span>
//           <hr className={style.line} />
//         </li>
//       </ul>
//       <ul className={style.expensesIncomeSum}>
//         <li className={style.itemSum}>
//           <span className={style.sum}>- 30.00 UAH</span>
//         </li>
//         <li className={style.itemSum}>
//           <span className={style.sum}>- 50.00 UAH</span>
//         </li>
//         <li className={style.itemSum}>
//           <span className={style.sum}>20 000.00 UAH</span>
//         </li>
//       </ul>
//       <ul className={style.expensesIncomeDel}>
//         <li className={style.itemDel}>
//           <button type="button" className={style.deleteBtn}>
//             <DeletePic />
//           </button>
//         </li>
//         <li className={style.itemDel}>
//           <button type="button" className={style.deleteBtn}>
//             <DeletePic />
//           </button>
//         </li>
//         <li className={style.itemDel}>
//           <button type="button" className={style.deleteBtn}>
//             <DeletePic />
//           </button>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default ExpensesIncomeList;
