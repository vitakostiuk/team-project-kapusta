import style from './TableBody.module.css';
import { useState, useEffect } from 'react';
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

const TableBody = ({ dataTable }) => {
  const [expenseArr, setExpenseArr] = useState([]);
  const [incomeArr, setIncomeArr] = useState([]);
  const [isShowModal, setIsShowModal] = useState(false);
  const [isClikBtnDelete, setIsClikBtnDelete] = useState(false);
  const [deleteTransaction] = useDeleteTransactionMutation();
  const type = useLocation().pathname;

  const date = useSelector(state => state.date);
  const expense = useGetTransactionsByExpenseQuery(date);
  console.log('expense', expense);
  const income = useGetTransactionsByIncomeQuery(date);
  //console.log('income', income);

  useEffect(() => {
    if (!expense?.isSuccess && type === '/expenses') {
      setExpenseArr([]);
      return;
    }
    if (!income?.isSuccess && type === '/income') {
      setIncomeArr([]);
      return;
    }

    setExpenseArr(dataTable.filter(({ income }) => income === false));
    setIncomeArr(dataTable.filter(({ income }) => income === true));

    if (expense) {
      expense?.data?.transactions.forEach(
        ({ categories, description, value, date: { day, month, year }, _id }) =>
          setExpenseArr(prevExpenseArr => [
            ...prevExpenseArr,
            {
              date: `${day}.${month}.${year}`,
              description,
              sum: value,
              category: categories,
              income: false,
              id: _id,
            },
          ]),
      );
    }

    if (income) {
      income?.data?.transactions.forEach(
        ({ categories, description, value, date: { day, month, year }, _id }) =>
          setIncomeArr(prevIncomeArr => [
            ...prevIncomeArr,
            {
              date: `${day}.${month}.${year}`,
              description,
              sum: value,
              category: categories,
              income: true,
              id: _id,
            },
          ]),
      );
    }
  }, [dataTable, expense, income, type]);

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
          {expenseArr.length !== 0
            ? type === '/expenses' &&
              expenseArr.map(
                ({ date, description, category, sum, id }, index) => (
                  <tr key={index} className={style.tableRow}>
                    <td className={style.tableCell}>{date}</td>
                    <td className={style.tableCell}>
                      <EllipsisText text={`${description}`} length={'29'} />
                    </td>
                    <td className={style.tableCell}>{category}</td>
                    <td
                      className={style.tableCellSumExpense}
                    >{`-${getNormalizedSum(sum)}`}</td>
                    <td className={style.tableCell}>
                      <button
                        type="button"
                        onClick={() => handleDelete(id)}
                        className={style.deleteBtn}
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
                    </td>
                  </tr>
                ),
              )
            : type === '/expenses' && (
                <tr className={style.text}>
                  <td>There are no transactions yet.</td>
                </tr>
              )}
          {incomeArr.length !== 0
            ? type === '/income' &&
              incomeArr.map(
                ({ date, description, category, sum, id }, index) => (
                  <tr key={index} className={style.tableRow}>
                    <td className={style.tableCell}>{date}</td>
                    <td className={style.tableCell}>
                      <EllipsisText text={`${description}`} length={'29'} />
                    </td>
                    <td className={style.tableCell}>{category}</td>
                    <td className={style.tableCellSumIncome}>
                      {getNormalizedSum(sum)}
                    </td>
                    <td className={style.tableCell}>
                      <button
                        type="button"
                        onClick={() => handleDelete(id)}
                        className={style.deleteBtn}
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
