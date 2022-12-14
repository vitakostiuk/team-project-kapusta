import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Skeleton } from '@mui/material';
import Box from '@mui/material/Box';
import { useGetSummaryTransactionsQuery } from 'redux/report/transactionsApi';
import {
  summaryTransExp,
  summaryTransInc,
} from 'redux/feature/report/reportSlice';
import s from './Summary.module.css';

const Summary = () => {
  const dispatch = useDispatch();
  const currentLocation = useLocation();
  const type = currentLocation?.pathname.slice(1);
  const { data, isSuccess, isLoading, isError, error } =
    useGetSummaryTransactionsQuery(type, {
      refetchOnMountOrArgChange: true,
    });

  const summarySelectorExp = useSelector(state => state.summary?.summaryExp);
  const summarySelectorInc = useSelector(state => state.summary?.summaryInc);

  useEffect(() => {
    if (type === 'expenses') {
      dispatch(summaryTransExp(data));
    } else {
      dispatch(summaryTransInc(data));
    }
  }, [data, dispatch, type]);

  return (
    <div className={s.container}>
      <p className={s.title}>Summary</p>

      {isLoading && (
        <Box sx={{ margin: 0, padding: 0 }}>
          <Skeleton animation="wave" width={230} height={38} />
          <Skeleton animation="wave" width={230} height={38} />
          <Skeleton animation="wave" width={230} height={38} />
          <Skeleton animation="wave" width={230} height={38} />
          <Skeleton animation="wave" width={230} height={38} />
          <Skeleton animation="wave" width={230} height={38} />
        </Box>
      )}

      {isError && <span className={s.text}>{error?.message}</span>}

      {isSuccess && (
        <ul className={s.list}>
          {type === 'expenses'
            ? summarySelectorExp &&
              summarySelectorExp.map(({ monthName, month, total }, index) => (
                <li key={index} className={s.item}>
                  <p className={s.month}>{monthName}</p>
                  <p className={s.sum}>{total}</p>
                </li>
              ))
            : summarySelectorInc &&
              summarySelectorInc.map(({ monthName, month, total }, index) => (
                <li key={index} className={s.item}>
                  <p className={s.month}>{monthName}</p>
                  <p className={s.sum}>{total}</p>
                </li>
              ))}
        </ul>
      )}
    </div>
  );
};

export default Summary;
