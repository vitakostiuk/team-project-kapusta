import style from './TransactionsListMobile.module.css';
import { useState, useEffect } from 'react';
import { Skeleton } from '@mui/material';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import { ReactComponent as DeletePic } from '../../../../images/delete.svg';
import EllipsisText from 'react-ellipsis-text';
import { useGetAllTransactionsOnMobQuery } from 'redux/report/transactionsApi';
import { getNormalizedSum } from 'helpers/getNormalizedSum';
import ModalDelete from 'components/common/ModalDelete';

const TransactionsListMobile = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [idForDelete, setIdForDelete] = useState('');

  const date = useSelector(state => state.date);

  const { data, isError, isSuccess, isFetching, error } =
    useGetAllTransactionsOnMobQuery(date, {
      refetchOnMountOrArgChange: true,
    });

  const handleClick = () => {
    setIsShowModal(prevIsShowModal => !prevIsShowModal);
  };

  return (
    <div className={style.thamb}>
      {isError && <span className={style.text}>{error?.message}</span>}

      {isFetching && (
        <Box sx={{ margin: 0, padding: 0 }}>
          <Skeleton animation="wave" width={280} height={55} />
          <Skeleton animation="wave" width={280} height={55} />
          <Skeleton animation="wave" width={280} height={55} />
        </Box>
      )}

      {isSuccess && (
        <>
          <ul className={style.expensesIncomeList}>
            {data?.transactions?.map(
              ({
                date: { day, month, year },
                description,
                categories,
                _id,
              }) => (
                <li className={style.item} key={_id}>
                  <span className={style.itemName}>
                    <EllipsisText text={`${description}`} length={Number(15)} />
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
            {data?.transactions?.map(({ value, _id, income }) =>
              !income ? (
                <li className={style.itemSum} key={_id}>
                  <span className={style.sumExpense}>{`-${getNormalizedSum(
                    value,
                  )}`}</span>
                </li>
              ) : (
                <li className={style.itemSum} key={_id}>
                  <span className={style.sumIncome}>
                    {getNormalizedSum(value)}
                  </span>
                </li>
              ),
            )}
          </ul>

          <ul className={style.expensesIncomeDel}>
            {data?.transactions?.map(({ _id }) => (
              <li className={style.itemDel} key={_id}>
                <button
                  type="button"
                  className={style.deleteBtn}
                  onClick={() => {
                    handleClick();
                    setIdForDelete(_id);
                  }}
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
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default TransactionsListMobile;

// const TransactionsListMobile = () => {
//   const [isShowModal, setIsShowModal] = useState(false);
//   // const screenWidth = useSelector(state => state.screenWidth);

//   const date = useSelector(state => state.date);
//   const expense = useGetTransactionsByExpenseQuery(date, {
//     refetchOnMountOrArgChange: true,
//   });
//   const income = useGetTransactionsByIncomeQuery(date, {
//     refetchOnMountOrArgChange: true,
//   });
//   // const trans = useGetTransactionsAllQuery(date, {
//   //   refetchOnMountOrArgChange: true,
//   // });

//   const dispatch = useDispatch();
//   const transExspenses = useSelector(state => state.transactions.expense);
//   const transIncome = useSelector(state => state.transactions.income);
//   // const transAll = useSelector(state => state.transactions);
//   // console.log(transAll);

//   useEffect(() => {
//     if (!expense?.isSuccess) {
//       dispatch(getTransExpenses(null));
//       return;
//     }
//     if (!income?.isSuccess) {
//       dispatch(getTransIncome(null));
//       return;
//     }

//     if (expense) {
//       dispatch(getTransExpenses(expense?.data?.transactions));
//     }

//     if (income) {
//       dispatch(getTransIncome(income?.data?.transactions));
//     }
//   }, [dispatch,
//     expense,
//     expense?.data?.transactions,
//     expense?.isSuccess,
//     income,
//     income?.data?.transactions,
//     income?.isSuccess]);

//   const handleClick = () => {
//     setIsShowModal(prevIsShowModal => !prevIsShowModal);
//   };

//   return (
//     <div className={style.thamb}>
//       <ul className={style.expensesIncomeList}>
//         {transExspenses &&
//           !expense.isFetching &&
//           transExspenses?.map(
//             ({ date: { day, month, year }, description, categories, _id }) => (
//               <li className={style.item} key={_id}>
//                 <span className={style.itemName}>
//                   <EllipsisText text={`${description}`} length={Number(15)} />
//                 </span>
//                 <br />
//                 <span
//                   className={style.itemDate}
//                 >{`${day}.${month}.${year}`}</span>
//                 <span className={style.itemCategory}>{categories}</span>
//                 <hr className={style.line} />
//               </li>
//             ),
//           )}
//         {transIncome &&
//           !income.isFetching &&
//           transIncome?.map(
//             ({ date: { day, month, year }, description, categories, _id }) => (
//               <li className={style.item} key={_id}>
//                 <span className={style.itemName}>
//                   <EllipsisText text={`${description}`} length={Number(15)} />
//                 </span>
//                 <br />
//                 <span
//                   className={style.itemDate}
//                 >{`${day}.${month}.${year}`}</span>
//                 <span className={style.itemCategory}>{categories}</span>
//                 <hr className={style.line} />
//               </li>
//             ),
//           )}
//       </ul>

//       <ul className={style.expensesIncomeSum}>
//         {transExspenses &&
//           !expense.isFetching &&
//           transExspenses?.map(({ value, _id }) => (
//             <li className={style.itemSum} key={_id}>
//               <span className={style.sumExpense}>{`-${getNormalizedSum(
//                 value,
//               )}`}</span>
//             </li>
//           ))}
//         {transIncome &&
//           !income.isFetching &&
//           transIncome?.map(({ value, _id }) => (
//             <li className={style.itemSum} key={_id}>
//               <span className={style.sumIncome}>{getNormalizedSum(value)}</span>
//             </li>
//           ))}
//       </ul>
//       <ul className={style.expensesIncomeDel}>
//         {transExspenses &&
//           !expense.isFetching &&
//           transExspenses?.map(({ _id }) => (
//             <li className={style.itemDel} key={_id}>
//               <button
//                 type="button"
//                 className={style.deleteBtn}
//                 onClick={handleClick}
//               >
//                 <DeletePic />
//               </button>
//               {isShowModal && (
//                 <ModalDelete
//                   onClick={handleClick}
//                   text="Are you sure?"
//                   id={_id}
//                 />
//               )}
//             </li>
//           ))}
//         {transIncome &&
//           !income.isFetching &&
//           transIncome?.map(({ _id }) => (
//             <li className={style.itemDel} key={_id}>
//               <button
//                 type="button"
//                 className={style.deleteBtn}
//                 onClick={handleClick}
//               >
//                 <DeletePic />
//               </button>
//               {isShowModal && (
//                 <ModalDelete
//                   onClick={handleClick}
//                   text="Are you sure?"
//                   id={_id}
//                 />
//               )}
//             </li>
//           ))}
//       </ul>
//     </div>
//   );
// };

// export default TransactionsListMobile;
