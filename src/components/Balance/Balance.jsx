import Icons from '../../images/report/sprite-icons.svg';
import { Link } from 'react-router-dom';
import BalanceComp from 'components/common/BalanceComp';
import s from './Balance.module.css';

const Balance = () => {
  return (
    <>
      <div className={s.formContainer}>
        <div className={s.reportContainer}>
          <Link to="report" className={s.link}>
            <p className={s.text}>Reports</p>

            <button className={s.btn}>
              <svg className={s.picture}>
                <use xlinkHref={`${Icons}#icon-diagram`} />
              </svg>
            </button>
          </Link>
        </div>
        <BalanceComp />
      </div>
    </>
  );
};

export default Balance;
