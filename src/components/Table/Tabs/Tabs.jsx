import { NavLink } from 'react-router-dom';
import { ReactComponent as CalendarPic } from '../../../images/calendar.svg';
import Calendar from '../InputForm/Calendar/Calendar';
import ExpensesIncomeList from '../InputForm/ExpensesIncomeList/ExpensesIncomeList';
import style from './Tabs.module.css';

const Tabs = () => {
  return (
    <>
      <div className={style.calendarBox}>
        <div className={style.calendarPic}>
          <CalendarPic />
        </div>
        <Calendar />
      </div>

      <div className={style.list}>
        <ExpensesIncomeList />
      </div>

      <div className={style.tabsBlock}>
        <nav className={style.tabs}>
          <NavLink
            to="expenses"
            className={({ isActive }) =>
              isActive ? style.tabActive : style.tab
            }
          >
            <div className={style.tabThamb}>expenses</div>
          </NavLink>
          <NavLink
            replace
            to="income"
            className={({ isActive }) =>
              isActive ? style.tabActive : style.tab
            }
          >
            <div className={style.tabThamb}>income</div>
          </NavLink>
        </nav>
      </div>
    </>
  );
};

export default Tabs;
