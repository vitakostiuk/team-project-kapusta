import style from './TransactionsListMobile.module.css';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { ReactComponent as DeletePic } from '../../../../images/delete.svg';
import EllipsisText from 'react-ellipsis-text';
import { useDeleteTransactionMutation } from 'redux/report/transactionsApi';
import {
  useGetTransactionsByExpenseQuery,
  useGetTransactionsByIncomeQuery,
} from 'redux/report/transactionsApi';
import { getNormalizedSum } from 'helpers/getNormalizedSum';
import ModalDelete from 'components/common/ModalDelete';

const TransactionsListMobile = ({ dataTable }) => {
  const [expenseArr, setExpenseArr] = useState([]);
  const [incomeArr, setIncomeArr] = useState([]);
  // const [transArr, setTransArr] = useState([]);
  const [isShowModal, setIsShowModal] = useState(false);
  const [isClikBtnDelete, setIsClikBtnDelete] = useState(false);
  const [deleteTransaction] = useDeleteTransactionMutation();
  const type = useLocation().pathname;

  const date = useSelector(state => state.date);
  const expense = useGetTransactionsByExpenseQuery(date);
  // console.log('my expense transactions', expense.data);
  const income = useGetTransactionsByIncomeQuery(date);
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
    setIsShowModal(prevIsShowModal => !prevIsShowModal);
    if (isClikBtnDelete) return;

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

  const handleClick = () => {
    setIsShowModal(prevIsShowModal => !prevIsShowModal);
  };

  const handleClickBtnDelete = () => {
    setIsClikBtnDelete(prevIsClikBtnDelete => !prevIsClikBtnDelete);
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
              <span className={style.sumExpense}>{`-${getNormalizedSum(
                sum,
              )}`}</span>
            </li>
          ))}
        {incomeArr &&
          incomeArr.map(({ sum, id }, index) => (
            <li className={style.itemSum} key={index}>
              <span className={style.sumIncome}>{getNormalizedSum(sum)}</span>
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
              {isShowModal && (
                <ModalDelete
                  onClick={handleClick}
                  text="Are you sure?"
                  isShowModal={setIsShowModal}
                  onClikBtnDelete={handleClickBtnDelete}
                />
              )}
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
              {isShowModal && (
                <ModalDelete
                  onClick={handleClick}
                  text="Are you sure?"
                  isShowModal={setIsShowModal}
                  onClikBtnDelete={handleClickBtnDelete}
                />
              )}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TransactionsListMobile;
