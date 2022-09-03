import { ReactComponent as Diagram } from '../../images/diagram.svg';
import { Link } from 'react-router-dom';
import BalanceComp from 'components/common/BalanceComp';
import s from './Balance.module.css';

const Balance = () => {
  return (
    <>
      <div className={s.formContainer}>
        <div className={s.reportContainer}>
          <Link to="report" className={s.reportLink} type="button">
            Reports
          </Link>
          <Diagram />
        </div>
        <BalanceComp />
      </div>
    </>
  );
};

export default Balance;
