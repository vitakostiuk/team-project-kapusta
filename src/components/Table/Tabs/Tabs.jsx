import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { ReactComponent as CalendarPic } from '../../../images/calendar.svg';
import Calendar from '../InputForm/Calendar/Calendar';
import TransactionsListMobile from '../InputForm/TransactionsListMobile/TransactionsListMobile';
import style from './Tabs.module.css';

const Tabs = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [dataTable, setDataTable] = useState([]);

  const onFillTable = tableValues => {
    setDataTable(prevDataTable => [tableValues, ...prevDataTable]);
  };

  console.log(dataTable);

  const onChangeDate = date => {
    setStartDate(date);
  };
  return (
    <>
      <div className={style.calendarBox}>
        <div className={style.calendarPic}>
          <CalendarPic />
        </div>
        <Calendar onChangeDate={onChangeDate} startDate={startDate} />
      </div>

      <div className={style.list}>
        <TransactionsListMobile dataTable={dataTable} />
      </div>

      <div className={style.tabsBlock}>
        <nav className={style.tabs}>
          <NavLink
            to="/expenses"
            className={({ isActive }) =>
              isActive ? style.tabActive : style.tab
            }
          >
            <div className={style.tabThamb}>expenses</div>
          </NavLink>
          <NavLink
            replace
            to="/income"
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
