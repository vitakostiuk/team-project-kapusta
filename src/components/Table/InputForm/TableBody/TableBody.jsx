import style from './TableBody.module.css';
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
import { setScreenWidth } from 'redux/screen/screenSlice';
import ModalDelete from 'components/common/ModalDelete';

const TableBody = () => {
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

  const screenWidth = document.documentElement.clientWidth;
  dispatch(setScreenWidth(screenWidth));

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
    <div className={style.tableThamb}>
      <table className={style.table}>
        <thead>
          <tr className={style.tableHeader}>
            <th className={style.tableHeaderCell}>Date</th>
            <th className={style.tableHeaderCell}>Description</th>
            <th className={style.tableHeaderCell}>category</th>
            <th className={style.tableHeaderCell}>Sum</th>
            <th className={style.tableHeaderCell}></th>
          </tr>
        </thead>
        <tbody className={style.tableBody}>
          {transExspenses?.length
            ? type === '/expenses' &&
              !expense.isFetching &&
              transExspenses?.map(
                ({
                  date: { day, month, year },
                  description,
                  categories,
                  value,
                  _id,
                }) => (
                  <tr key={_id} className={style.tableRow}>
                    <td
                      className={style.tableCell}
                    >{`${day}.${month}.${year}`}</td>
                    <td className={style.tableCell}>
                      <EllipsisText
                        text={`${description}`}
                        length={Number(29)}
                      />
                    </td>
                    <td className={style.tableCell}>{categories}</td>
                    <td
                      className={style.tableCellSumExpense}
                    >{`-${getNormalizedSum(value)}`}</td>
                    <td className={style.tableCell}>
                      <button
                        type="button"
                        onClick={handleClick}
                        className={style.deleteBtn}
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
                    </td>
                  </tr>
                ),
              )
            : type === '/expenses' && (
                <tr className={style.text}>
                  <td>There are no transactions yet.</td>
                </tr>
              )}
          {transIncome?.length
            ? type === '/income' &&
              !income.isFetching &&
              transIncome?.map(
                ({
                  date: { day, month, year },
                  description,
                  categories,
                  value,
                  _id,
                }) => (
                  <tr key={_id} className={style.tableRow}>
                    <td
                      className={style.tableCell}
                    >{`${day}.${month}.${year}`}</td>
                    <td className={style.tableCell}>
                      <EllipsisText
                        text={`${description}`}
                        length={Number(29)}
                      />
                    </td>
                    <td className={style.tableCell}>{categories}</td>
                    <td className={style.tableCellSumIncome}>
                      {getNormalizedSum(value)}
                    </td>
                    <td className={style.tableCell}>
                      <button
                        type="button"
                        onClick={handleClick}
                        className={style.deleteBtn}
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
                    </td>
                  </tr>
                ),
              )
            : type === '/income' && (
                <tr className={style.text}>
                  <td>There are no transactions yet.</td>
                </tr>
              )}
        </tbody>
      </table>
    </div>
  );
};

export default TableBody;
