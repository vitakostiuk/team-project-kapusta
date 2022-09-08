import style from './TransactionsListMobile.module.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { ReactComponent as DeletePic } from '../../../../images/delete.svg';
import EllipsisText from 'react-ellipsis-text';
import {
  useGetTransactionsByExpenseQuery,
  useGetTransactionsByIncomeQuery,
} from 'redux/report/transactionsApi';
import {
  getTransExpenses,
  getTransIncome,
} from 'redux/transactions/transactionsSlice';
import { getNormalizedSum } from 'helpers/getNormalizedSum';
import ModalDelete from 'components/common/ModalDelete';

const TransactionsListMobile = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const type = useLocation().pathname;

  const date = useSelector(state => state.date);
  const expense = useGetTransactionsByExpenseQuery(date, {
    refetchOnMountOrArgChange: true,
  });
  const income = useGetTransactionsByIncomeQuery(date, {
    refetchOnMountOrArgChange: true,
  });

  const dispatch = useDispatch();
  const transExspenses = useSelector(state => state.transactions.expense);
  const transIncome = useSelector(state => state.transactions.income);

  useEffect(() => {
    if (!expense?.isSuccess && type === '/expenses') {
      dispatch(getTransExpenses(null));
      return;
    }
    if (!income?.isSuccess && type === '/income') {
      dispatch(getTransIncome(null));
      return;
    }

    if (type === '/expenses') {
      dispatch(getTransExpenses(expense?.data?.transactions));
    }

    if (type === '/income') {
      dispatch(getTransIncome(income?.data?.transactions));
    }
  }, [
    dispatch,
    expense?.data?.transactions,
    expense?.isSuccess,
    income?.data?.transactions,
    income?.isSuccess,
    type,
  ]);

  const handleClick = () => {
    setIsShowModal(prevIsShowModal => !prevIsShowModal);
  };

  return (
    <div className={style.thamb}>
      <ul className={style.expensesIncomeList}>
        {transExspenses &&
          !expense.isFetching &&
          transExspenses?.map(
            ({ date: { day, month, year }, description, categories, _id }) => (
              <li className={style.item} key={_id}>
                <span className={style.itemName}>
                  <EllipsisText text={`${description}`} length={'15'} />
                </span>
                <br />
                <span
                  className={style.itemDate}
                >{`${day}.${month}.${year}`}</span>
                <span className={style.itemCategory}>{categories}</span>
                <hr className={style.line} />
              </li>
            ),
          )}
        {transIncome &&
          !income.isFetching &&
          transIncome?.map(
            ({ date: { day, month, year }, description, categories, _id }) => (
              <li className={style.item} key={_id}>
                <span className={style.itemName}>
                  <EllipsisText text={`${description}`} length={'15'} />
                </span>
                <br />
                <span
                  className={style.itemDate}
                >{`${day}.${month}.${year}`}</span>
                <span className={style.itemCategory}>{categories}</span>
                <hr className={style.line} />
              </li>
            ),
          )}
      </ul>

      <ul className={style.expensesIncomeSum}>
        {transExspenses &&
          !expense.isFetching &&
          transExspenses?.map(({ value, _id }) => (
            <li className={style.itemSum} key={_id}>
              <span className={style.sumExpense}>{`-${getNormalizedSum(
                value,
              )}`}</span>
            </li>
          ))}
        {transIncome &&
          !income.isFetching &&
          transIncome?.map(({ value, _id }) => (
            <li className={style.itemSum} key={_id}>
              <span className={style.sumIncome}>{getNormalizedSum(value)}</span>
            </li>
          ))}
      </ul>
      <ul className={style.expensesIncomeDel}>
        {transExspenses &&
          !expense.isFetching &&
          transExspenses?.map(({ _id }) => (
            <li className={style.itemDel} key={_id}>
              <button
                type="button"
                className={style.deleteBtn}
                onClick={handleClick}
              >
                <DeletePic />
              </button>
              {isShowModal && (
                <ModalDelete
                  onClick={handleClick}
                  text="Are you sure?"
                  id={_id}
                />
              )}
            </li>
          ))}
        {transIncome &&
          !income.isFetching &&
          transIncome?.map(({ _id }) => (
            <li className={style.itemDel} key={_id}>
              <button
                type="button"
                className={style.deleteBtn}
                onClick={handleClick}
              >
                <DeletePic />
              </button>
              {isShowModal && (
                <ModalDelete
                  onClick={handleClick}
                  text="Are you sure?"
                  id={_id}
                />
              )}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TransactionsListMobile;
