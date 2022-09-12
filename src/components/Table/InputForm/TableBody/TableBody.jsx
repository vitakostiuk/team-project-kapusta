import style from './TableBody.module.css';
import { Skeleton } from '@mui/material';
import Box from '@mui/material/Box';
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
  const [idForDelete, setIdForDelete] = useState('');
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
    <>
      {expense.isLoading && (
        <div className={style.tableThamb}>
          <table className={style.tableSceleton}>
            <thead>
              <tr className={style.tableHeader}>
                <th className={style.tableHeaderCell}>Date</th>
                <th className={style.tableHeaderCell}>Description</th>
                <th className={style.tableHeaderCell}>category</th>
                <th className={style.tableHeaderCell}>Sum</th>
                <th className={style.tableHeaderCell}></th>
              </tr>
            </thead>
          </table>
          <Box>
            <Skeleton animation="wave" width="100%" height={55} />
            <Skeleton animation="wave" width="100%" height={55} />
            <Skeleton animation="wave" width="100%" height={55} />
            <Skeleton animation="wave" width="100%" height={55} />
            <Skeleton animation="wave" width="100%" height={55} />
            <Skeleton animation="wave" width="100%" height={55} />
          </Box>
        </div>
      )}

      {transExspenses?.length && type === '/expenses' && expense.isSuccess && (
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
              {transExspenses?.map(
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
                        onClick={() => {
                          handleClick();
                          setIdForDelete(_id);
                          console.log('id in button', _id);
                        }}
                        className={style.deleteBtn}
                      >
                        <DeletePic />
                      </button>
                      {isShowModal && (
                        <ModalDelete
                          onClick={handleClick}
                          text="Are you sure?"
                          id={idForDelete}
                        />
                      )}
                    </td>
                  </tr>
                ),
              )}
            </tbody>
          </table>
        </div>
      )}

      {type === '/expenses' && expense.isError && (
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
              <tr className={style.text}>
                <td>{expense?.error?.message}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {transIncome?.length && type === '/income' && income.isSuccess && (
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
              {transIncome?.map(
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
                        onClick={() => {
                          handleClick();
                          setIdForDelete(_id);
                          console.log('id in button', _id);
                        }}
                        className={style.deleteBtn}
                      >
                        <DeletePic />
                      </button>
                      {isShowModal && (
                        <ModalDelete
                          onClick={handleClick}
                          text="Are you sure?"
                          id={idForDelete}
                        />
                      )}
                    </td>
                  </tr>
                ),
              )}
            </tbody>
          </table>
        </div>
      )}

      {type === '/income' && income.isError && (
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
              <tr className={style.text}>
                <td>{income?.error?.message}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};
export default TableBody;
