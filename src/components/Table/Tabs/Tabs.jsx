import { NavLink } from 'react-router-dom';
import style from './Tabs.module.css';

const Tabs = () => {
  return (
    <div className={style.tabsBlock}>
      <nav className={style.tabs}>
        <div className={style.tabThamb}>
          <NavLink
            to="/expenses"
            className={({ isActive }) =>
              isActive ? style.tabActive : style.tab
            }
          >
            expenses
          </NavLink>
        </div>
        <div className={style.tabThamb}>
          <NavLink
            to="/income"
            className={({ isActive }) =>
              isActive ? style.tabActive : style.tab
            }
          >
            income
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Tabs;
